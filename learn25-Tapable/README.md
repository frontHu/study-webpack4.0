- **SyncHook：同步执行钩子函数。**
- **SyncBailHook：同步保险钩子，具有熔断性，保证是否向下执行。判断条件是否是返回一个undefined值。**
- **SyncWaterfallHook：将上一个执行的结果返回给下一个执行的钩子**
- **SyncLoopHook：循环执行多少次某个钩子函数**

### SyncHook
- 同步钩子函数, args对应的是tap注册的函数和call的形参。
```
const instace = new SyncHook([...args])
```
- tap注册。
```
instance.tap('event', function(...args){}) //event是事件名，fn对应是执行函数。
```
- call调用
```
instance.call(...args) //args对应的也是钩子实例的形参
```

### SyncBailHook
- 注册的钩子中如果有返回非**undefined**的值，则中断执行后面注册的钩子函数。

### SyncWaterfallHook
- 将上一个注册的钩子函数返回的结果传递给下一个钩子函数

### SyncLoopHook
- 遇到某个钩子的时候可以同步执行