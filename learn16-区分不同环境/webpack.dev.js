const { smart } = require('webpack-merge')
const baseConf = require('./webpack.base.js')

module.exports = smart(baseConf, {
  mode: 'devlopment'
})