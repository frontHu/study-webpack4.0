import $ from 'jquery'
// console.log('webpack基础配置')
require('./index.css')
// import './index.less'
// let str = require('./a')
// console.log('我本来就是index')
// console.log(str)
console.log(window.jquery, '$$$jquery')
console.log(goodJQ, 'goodJQ')
let fn = () => {
  alert('es6')
}
fn()

class A {
  constructor() {
    
  }
  good() {
    
  }
} 