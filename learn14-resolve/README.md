### resolve配置
- 解析第三方包规则
```
resolve: {
  modules: [path.resolve('node_modules'), path.resolve('dist')] //指定模块的查找路径
  alias: {  //配置别名
    'bootstrap': 'bootstarp/dist/css/bootstrap.css'
  },
  mainFileds: ['style', 'main'], //设置查找入口文件子段，首先找style，然后是main，默认是index
  extensions: ['.js', '.css', '.json'], //配置免后缀
}
```