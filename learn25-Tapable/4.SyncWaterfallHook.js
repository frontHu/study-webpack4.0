//上一个执行的结果会返回给下一个
class SyncWaterfallHook { 
  constrcutor() {
    this.tasks = []
  }

  tap(name, task) {
    this.tasks.push(task)
  }

  call(...args) {
    let [first, ...others] = this.task
    let ret = first(...args)
    others.reduce((a, b) => {
      return b(a)
    }, ret)
  }
}