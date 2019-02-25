const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebapckPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJS = require('uglifyjs-webpack-plugin')

//webpack是基于node，写法也基于node的模块化规则
module.exports = {
  mode: 'development',
  optimization: { //优化项
    minimizer: [
      // new OptimizeCssAssetsWebapckPlugin({}),
      // new UglifyJS({
      //   cache: true,
      //   parallel: true,
      //   sourceMap: true
      // })
    ]
  },
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), //路径必须是一个绝对路径
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // {
          //   loader: 'style-loader',
          //   options: {
          //     insertAt: 'top', //style标签插入到其他style的顶部
          //   }
          // },
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require("autoprefixer")
              ]
            }
          },
        ]
      }, //css-loader 
      {
        test: /\.less$/,
        use: [
          // {
          //   loader: 'style-loader',
          //   options: {
          //     insertAt: 'top', //style标签插入到其他style的顶部
          //   }
          // },
          MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                require("autoprefixer")()
              ]
            }
          },
        ]
      }
    ]
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
    }),
    new MiniCssExtractPlugin({
      filename: 'main.css'
    }),
    new OptimizeCssAssetsWebapckPlugin({}),
    new UglifyJS({})
  ]
}