// const { AsyncSeriesWaterfallHook } = require('tapable')

// const instance = new AsyncSeriesWaterfallHook(['name'])

// instance.tapAsync('node', function(name, cb) {
//   setTimeout(function() {
//     console.log('node', name)
//     cb(null, 'good body')
//   }, 2000)
// })

// instance.tapAsync('react', function(name, cb) {
//   setTimeout(function() {
//     console.log('react', name)
//     cb('good helatrh')
//   },1000)
// })

// instance.callAsync('huzhiwei', function() {
//   console.log('complete')
// })

//源码实现调用

class AsyncSeriesWaterfallHook {
  constructor() {
    this.tasks = []
  }
  tapAsync(name, task) {
    this.tasks.push(task)
  }
  callAsync(...args) {
    let index = 0
    let finalCb = args.pop()
    let next = (err, data) => {
      console.log(err, data, 'goo')
      let task = this.tasks[index]
      if(!task) {
        return finalCb()
      }
      if(index == 0) {
        task(...args, next)
      }else {
        task(data, next)
      }
      index++
    }
    next()
  }
}

const instance = new AsyncSeriesWaterfallHook(['name'])

instance.tapAsync('node', function(name, cb) {
  setTimeout(function() {
    console.log('node', name)
    cb(null, 'good body')
  }, 2000)
})

instance.tapAsync('react', function(name, cb) {
  setTimeout(function() {
    console.log('react', name)
    cb('good helatrh')
  },1000)
})

instance.callAsync('huzhiwei', function() {
  console.log('complete')
})