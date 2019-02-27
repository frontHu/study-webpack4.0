### 定义环境变量插件 DefinePlugin
- webpack自带**DefinePlugin**
```
plugins: [
  new webpack.DefinePlugin({
    'DEV': "'dev'" //这里需要使用双引号包住
  })
]
```
- 不推荐使用"'dev'"这种写法
- 可以使用**JSON.stringify('production')**