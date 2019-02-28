// AsyncParallelHook 钩子：tapAsync/callAsync 的使用
const { AsyncParallelHook } = require("tapable");

class Lesson {
  constructor() {
    this.hook = {
      arc: new AsyncParallelHook(['name'])
    }
    this.hook = new AsyncParallelHook(['name'])
  }

  tap() {
    this.hook.arc.tapAsync('node', function (name, done) {
      setTimeout(() => {
        console.log("NODE", name, new Date());
        done();
      }, 1000);
      
    })
    this.hook.arc.tapAsync('react', function (name, done) {
      setTimeout(() => {
        console.log("REACT", name, new Date());
        done();
      }, 2000);
    })
  }

  start() {
    this.hook.arc.callAsync('huzhiwei', function () {
      console.log('end')
    })
  }
}
let p = new Lesson()
p.start()

// const { AsyncParallelHook } = require("tapable");
// const asyncInstance = new AsyncParallelHook(['name'])
// asyncInstance.tapAsync("react", function(name, done) {
//   setTimeout(() => {
//     console.log("react", name)
//     done()
//   }, 1000)
// })
// asyncInstance.tapAsync("node", function(name, done) {
//   setTimeout(() => {
//     console.log("node", name)
//     done()
//   }, 2000)
// })
// asyncInstance.callAsync('demo', function (params) {
//   console.log('end')
// })