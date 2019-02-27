### library
- library表示的是webpack打包后的自执行函数返回的值的变量；
- libraryTarget指的是webpack打包好的模块是以模块管理方式进行导出；
```
module.exports = {
  mode: 'development',
  entry: {
    test: './test.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'ab', //
    libraryTarget: 'commonjs'
  }
}
```