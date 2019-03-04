const fs = require('fs')
const path = require('path')
const babylon = require('babylon')
const travere = require('@babel/traverse').default
const t = require('@babel/types')
const generator = require('@babel/generator').default
const ejs = require('ejs')
const {SyncHook} = require('tapable')
//babylon把源码转为AST
//@babel/traverse
//@babel/generator
//@babel/types

class Compiler {
  constructor(config) {
    this.config = config //保存入口文件路径
    this.entryID = '' //主模块入口路径
    this.modules = {} //存放模块依赖关系
    this.entry = config.entry //入口路径
    this.root = process.cwd() //当前工作目录
    this.hooks = {
      entryOption: new SyncHook(),
      compile: new SyncHook(),
      afterCompile: new SyncHook(),
      afterPlugins: new SyncHook(),
      run: new SyncHook(),
      emit: new SyncHook(),
      done: new SyncHook(),
    }
    //如果传递了plugins参数
    let plugins = this.config.plugins
    if(Array.isArray(plugins)) {
      plugins.forEach(plugin => {
        plugin.apply(this)
      })
    }
  }
  
  run() {
    //执行,并创建模块的依赖关系
    this.buildModule(path.resolve(this.root, this.entry), true)
    //发射一个文件，就是打包后的文件
    this.emitFile()
  }

  //构建模块
  buildModule(modulePath, isEntry) {
    //首先读取入口文件
    let source = this.getSource(modulePath)
    //模块的ID = this.root - modulePath
    let moduleName = './' + path.relative(this.root, modulePath)
    if(isEntry) {
      this.entryID = moduleName //保存入口名字
    }
    //解析，需要把source源码进行改造，返回一个依赖列表
    let {sourceCde, dependencies } = this.parse(source, path.dirname(moduleName))
    this.modules[moduleName] = sourceCde

    dependencies.forEach(dep => { //附模块的递归加载
      this.buildModule(path.join(this.root, dep), false)
    })
  }

  //解析源码, AST解析语法树
  parse(source, parentPath) {
    // console.log(source, parentPath)
    let ast = babylon(source)
    let dependencies = [] //依赖数组
    travere(ast, {
      CallExpression() {
        let node = p.node
        if(node.callee.name === 'require') {
          node.callee.name = '_webpack_require_'
          let moduleName = node.arguments[0].value //这里就是引用模块的名字
          moduleName = moduleName + (path.extname(moduleName) ? '' : '.js')
          moduleName = './' + path.join(parentPath, moduleName) //'src/a.js'
          dependencies.push(moduleName)
          node.arguments = [t.stringLiteral(moduleName)]
        }
      }
    })
    let sourceCode = generator(ast).code
    return {sourceCode, dependencies}
  }

  //公用读文件的方法
  getSource(modulePath) {
    let content = fs.readFileSync(modulePath, 'utf8')
    let rules = this.config.module.rules //拿到规则
    //拿到每个规则来处理
    for(let i=0; i<rules.length; i++) {
      let rule = rules[i]
      let { test, use } = rule
      let len = use.length - 1
      if(test.test(modulePath)) { //这个模块需要通过loader转换
        function normalLoader() {
          let loader = require(use[len]) //获取对应loader函数
          content = loader(content)
          //递归调用loader
          if(len >= 0) {
            normalLoader()
          }
        }
        normalLoader()
      }
    }
    
    return content
  }

  //发射文件
  emitFile() {
    //用数据 渲染我们的
    //拿到输出到哪个目录下
    let main = path.join(this.config.output.path, this.config.output.filename)
    //模板路径
    let templateStr = this.getSource(path.join(__dirname, 'main.ejs'))
    let code = ejs.render(templateStr, {entryId: this.entryID, modules: this.modules})
    this.assets = {
      //资源中路径对应的代码
     }
    this.assets[main] = code
    fs.writeFileSync(main, this.assets[main])
  }
}

module.exports = Compiler