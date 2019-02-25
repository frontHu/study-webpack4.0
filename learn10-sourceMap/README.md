### sourceMap
```
devtool: 'source-map'//增加映射文件，会单独生成一个sourcemap文件,可以帮我们调试源码
devtool: 'eval-source-map'//可以显示错误的行和列，但是不会新增映射文件
devtool: 'cheap-module-source-map', //产生后可以保留起来
devtool: 'cheap-module-eval-source-map' //不会生成文件，集成在打包后的文件中，不会产生列
```