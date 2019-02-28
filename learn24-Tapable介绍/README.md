### Tapable
- webapck本质上是一种事件流机制，它的工作流程就是将各个插件串联起。
- 而实现这一切的核心就是**Tapable**。
- **Tapable**有点类似于nodejs的events库，核心原理也是依赖于**发布订阅模式**。
```
Tapable {
  //同步的
  Sync*: [
    'SyncHook', 
    'SyncBailHook', 
    'SyncWaterfallHook', '
    'SyncLoopHook'
  ],
  //异步的
  Async*: {
    AsyncParallel*: [
      'AsyncParallelHook', 
      'AsyncParallelBailHook'
    ],
    AsyncSeries*: [
      'AsyncSeriesHook', 
      'AsyncSeriesBailHook', 
      'AsyncSeriesWaterfallHook'
    ]
  }
}
```