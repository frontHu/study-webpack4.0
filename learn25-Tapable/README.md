## 同步钩子
- **SyncHook：同步执行钩子函数。**
- **SyncBailHook：同步保险钩子，具有熔断性，保证是否向下执行。判断条件是否是返回一个undefined值。**
- **SyncWaterfallHook：将上一个执行的结果返回给下一个执行的钩子**
- **SyncLoopHook：循环执行多少次某个钩子函数**

### 1.SyncHook
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

### 2.SyncBailHook
- 注册的钩子中如果有返回非**undefined**的值，则中断执行后面注册的钩子函数。

### 3.SyncWaterfallHook
- 将上一个注册的钩子函数返回的结果传递给下一个钩子函数

### 4.SyncLoopHook
- 遇到某个钩子的时候可以同步执行

## 异步钩子
- **分为串行和并行**
- **AsyncParallelHook：异步并行钩子**
- **AsyncParralleBailHook：带保险的异步并发钩子**
- **AsyncSeriesHook：异步串行钩子**
- **AsyncSeriesWaterfall:异步串行瀑布钩子函数，上一个执行结果返回给下一个**

### 1.AsyncParallelHook
- **tapAsync**：注册事件
- **callAsync**: 执行事件
- **tapPromise**: 该注册事件返回的是一个promise。callAsync变成**promise**
```
instance.promise('name').then() //通过then接收
```

### 2.AsyncSeriesHook
- **tapAsync:**注册事件
- **callAsync:**执行事件
- **tapPromise:**注册事件返回一个promise，调时用**promise**然后用**then**接收。

### 3.AsyncSeriesWaterfall
- 上一个注册钩子通过cb传入参数，传递结果至下一个钩子函数;
- 上一个注册钩子可以传入**error**表示错误，终止执行下面的钩子;
- 如果不传error的话需要传null