const { AsyncParallelHook } = require('tapable')

const instance = new AsyncParallelHook(['name'])

instance.tapAsync('react', (name, cb) => {
  setTimeout(() => {
    console.log('react', name)
    cb()
  }, 1000)
})

instance.tapAsync('vue', (name, cb) => {
  setTimeout(() => {
    console.log('vue', name)
    cb()
  }, 2000)
})

instance.callAsync('huzhiwei', function() {
  console.log('complete')
})

源码实现
class AsyncParallelHook {
  constructor(args) { // args ===> ['name', 'age']
    this.tasks = []
  }

  //注册事件
  tapAsync(name, task) {
    this.tasks.push(task)
  }

  //注册事件Promise
  tapPromise(name, task) {
    this.tasks.push(task)
  }

  //执行事件
  callAsync(...args) {
    let finalCallback = args.pop()
    let index = 0
    const done = () => {
      index++
      if(index === this.tasks.length) {
        finalCallback()
      }
    }
    this.tasks.forEach(task => {
      task(...args, done)
    })
  }

  //执行事件Promise
  promise(...args) {
    let tasks = this.tasks.map(task => task(...args))
    return Promise.all(tasks)
  }
}