
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const Happypack = require('happypack')
module.exports = {
  mode: 'production',
  optimization: {
    splitChunks: {
      cacheGroups: {
        // common: {
        //   chunks: 'initial',
        //   minSize: 0,
        //   minChunks: 2
        // },
        vendor: {
          test: /node_modules/,
          priority: 1,
          minSize: 0,
          minChunks: 2
        }
      }
    }
  },
  entry: {
    index: './index.js',
    other: './other.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
    
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html'
    }),
    // new webpack.DllReferencePlugin({
    //   manifest: path.resolve(__dirname, 'dist', 'manifest.json')
    // })
  ],
  module: {
    noParse: /jquery/,
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
              ]
            }
          }
        ],
        exclude: /node_modules/,
      }
    ]
  },
  devServer: {
    port: 3333,
    open: true,
    progress: true,
    contentBase: './dist'
  }
}