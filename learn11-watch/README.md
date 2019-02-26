# 监控
- watch: 是否开启
- watchOptions: {}
```
watchOptions: {
  poll: 1000, //每一秒问我1000次
  aggreateTimeout: 500//防抖，500毫秒后再执行
  ignored: /node_modules/, //忽略监控文件目录
}
````