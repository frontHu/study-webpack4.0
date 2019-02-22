const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

//webpack是基于node，写法也基于node的模块化规则
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), //路径必须是一个绝对路径
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
      minify: {
        removeAttributeQuotes: true, //删除属性双引号
        collapseWhitespace: true, //折叠空行
        hash: true, //打包后文件加个hash戳
      }
    })
  ],
  devServer: {
    port: 3000,
    progress: true,
    contentBase: './dist',
    compress: true
  }
}