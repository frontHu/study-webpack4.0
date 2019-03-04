#! /usr/bin/env node

//第一步：找到当前执行命令的路径，拿到webpack.config.js
let path = require("path")
let config = require(path.resolve('webpack.config.js'))
console.log(path.resolve(),'resolve--------------->')
let Compiler = require('../lib/Compiler')
let compiler = new Compiler(config)

//标识运行编译
compiler.run()