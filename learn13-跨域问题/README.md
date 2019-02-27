### 接口跨域问题
- **http-proxy**
- 配置
```
devServer: {
  proxy: {
    '/api': {
      target: 'http://localhosth:4000',
      pathRewrite: {
        '/api': ''
      }
    }
  }
}
```

### 模拟数据
```
devServer: {
  before(app){ //自带方法,app是启动的服务实例

  }
}
```

### 有服务端的情况下webpack-dev-middleware
```
let middware = require('webpack-dev-middleware')
let config = require('webpack.config.js')
let compiler = webpack(config)
app.use(middware(config))
```
