### 一、noParse
- 由于某些包或者插件不需要依赖其他模块，所以可以配置noParse选项不进行解析，减少耗时。
```
module: {
  noParse: /jquery/
}
```

### exclude配置项
- 在查找模块的时候通过添加exclude排除哪些目录不需要查找
```
module: {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/ //排除node_modules下文件
      use: [
        {
          loader: 'babel-loader',
        }
      ]
    }
  ]
}
```

### webpack内置插件，IgnorePlugin
- 防止在 import 或 require 调用时，生成以下正则表达式匹配的模块.
```
plugins: [
  new webpack.IgnorePlugin(/\.\locale/, /moment/)
]
```

