const { AsyncSeriesHook } = require('tapable')

const instance = new AsyncSeriesHook(['name'])

instance.tapAsync('node', function(name, cb) {
  setTimeout((function() {
    console.log('node')
    cb()
  }), 2000)
})

instance.tapAsync('react', function(name, cb) {
  setTimeout((function() {
    console.log('react')
    cb()
  }), 1000)
})

instance.callAsync('huzhiwe', function() {
  console.log('complete')
})

//源码实现

class AsyncSeriesHook{
  constructor() {
    this.tasks = []
  }

  tapAsync(name, task) {
    this.tasks.push(task)
  }

  tapPromise(name, task) {
    this.tasks.push(task)
  }

  callAsync(...args) {
    let index = 0
    let finalCallback = args.pop()
    let next = () => {
      if(index === this.tasks.length) {
        return finalCallback()
      }
      let task = this.tasks[index++]
      task(...args)
    }
    next()
  }

  promise(...args) {
    let [first, ...others] = this.tasks
    return others.reduce((p, n) => {
      return p.then(() => n(...args))
    }, first(...args))
  }
}