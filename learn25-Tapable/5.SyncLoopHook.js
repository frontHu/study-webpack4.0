//循环执行钩子,

class SyncLoopHook {
  constructor() {
    this.tasks = []
  }

  tap(name, task) {
    this.tasks.push(task)
  }

  call(...args) {
    this.tasks.forEach((task) => {
      let ret;
      do{
        ret = task(...args)
      }while(ret !== undefined)
    })
  }
}

let p = new SyncLoopHook()
let index = 0
p.tap('tap1', function (...args) {
  return (function fn(...args) {
    ++index
    console.log('tap1', ...args)
    return index === 3 ? undefined : 'good'
  })(...args)
 
})
p.call('huzhiwei')