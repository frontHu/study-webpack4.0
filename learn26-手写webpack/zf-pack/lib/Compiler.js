const fs = require('fs')
const path = require('path')
class Compiler {
  constructor(config) {
    this.config = config //保存入口文件路径
    this.entryID = '' //主模块入口路径
    this.modules = {} //存放模块依赖关系
    this.entry = config.entry //入口路径
    this.root = process.cwd() //当前工作目录
  }
  
  run() {
    //执行,并创建模块的依赖关系
    this.buildModule(path.resolve(this.root, this.entry), true)
    //发射一个文件，就是打包后的文件
    this.emitFile()
  }

  //构建模块
  buildModule(modulePath, isEntry) {
    //首先读取入口模块内容
    let source = this.getSource(modulePath)
    //模块的ID = this.root - modulePath
    let moduleName = './' + path.relative(this.root, modulePath)
    if(isEntry) {
      this.entryID = moduleName //保存入口名字
    }
    //解析，需要把source源码进行改造，返回一个依赖列表
    let {sourceCde, dependencies } = this.parse(source, path.dirname(moduleName))
    this.modules[moduleName] = sourceCde
  }

  //解析源码, AST解析语法树
  parse(source, parentPath) {
    console.log(source, parentPath)
  }

  //公用读文件的方法
  getSource(modulePath) {
    let content = fs.readFileSync(modulePath, 'utf8')
    return content
  }

  emitFile() {

  }
}

module.exports = Compiler