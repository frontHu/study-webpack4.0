//同步保险钩子，熔断性，前面加一个保险，保证是否向下执行
//前一个返回一个非undefined的结果就向下执行
class SyncBailHook {
  constructor() {
    this.tasks = []
  }

  tap(name, task) {
    this.tasks.push(task)
  }

  call(...args) {
    // this.tasks.forEach((task) => task(...args))
    let ret; //当前的返回值
    let index = 0; //当前要执行第一个
    do{
      ret = this.tasks[index](...args)
      index++
    }while(ret === undefined && index < this.tasks.length )
  }
}