### 方式一：暴露全局的loader
- **expose-loader**, 它是一个内联的loader。
```
//语法1：
import $ from 'expose-loader?$!jquery'//这样暴露一个全局的window.$
//语法2：
module: {
  rules: [
    {
      test: require.reslove('jquery'),
      loader: 'expose-loader?$!jquery'
    }
  ]
}
```

### 方拾二：在每个模块中注入$
- 通过webpack的插件**ProvidePlugin**
```
plugins: [
  new webpack.ProvidePlugin({
    jquery: '$'
  })
]
```

### 方式三：通过script引入，然后通过externals配置不打包
```
externals: {
  'jquery': 'jQuery'
}
```