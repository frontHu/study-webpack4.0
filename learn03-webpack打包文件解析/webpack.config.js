const path = require('path')

//webpack是基于node，写法也基于node的模块化规则
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), //路径必须是一个绝对路径
  },
  
}