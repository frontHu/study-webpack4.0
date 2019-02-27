const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }]
      },
      // {
      //   test: /\.css$/,
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     'css-loader'
      //   ]
      // }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html'
    }),
    // new miniCssExtractPlugin({
    //   filename: 'main.css'
    // }),
    new webpack.DefinePlugin({
      DEV: JSON.stringify('production')
    })
  ],
  resolve: { //解析第三方包的规则
    // modules: [path.resolve('node_modules')], //配置如何查找第三方包
    alias: {
      'bootstrap': 'bootstarp/dist/css/bootstrap.css'
    },
    // mainFileds: ['style', 'main'],
    extensions: ['.js', '.css', '.json']
  }
}