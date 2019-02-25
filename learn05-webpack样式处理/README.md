### 使用loader
- 特点：单一
- 语法：
```
module: {
  rules: [
    {test: '', use: ''}
  ]
}
```

### loader特点
- 字符串只用一个loader
- 多个loader使用数组[]
- loader有顺序的，倒叙执行
- loader还可以使用对象书写，不过在有参数的情况下使用较好

### 哪些loader
- css-loader 解析css文件，接受@import这种语法
- style-loader 他是把css插入head标签中
- less-loader 处理less文件
- sass-loader 处理scss文件
= stylus-loader 处理stylus

### 抽离css样式文件 min-css-extract-plugin
- 抽离css文件通过link标签引入
- 在loader中使用
```
module: {
  rules: [
    {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader'
      ] 
    }
  ]
}
```
- 在plugins中使用
```
new MiniCssExtractPlugin({
  filename: 'main.css', //抽离的css的名称
})
```

### 自动添加浏览器前缀autoprefixer postcss-loader
- 使用autoprefixer插件添加前缀和浏览器范围限制等。
- 使用autoprefixer前提是需要使用postcss-loader处理，然后配置option或者postcss.config.js文件。
```
//方式一：
module: {
  rules: [
    {
      test: /.\css$/,
      use: [
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins: [
              require('autoprefixer')
            ]
          }
        }
      ]
    }
  ]
}
方式二：
postcss.config.js
module.export = {
  plugins: [
    require('autoprefixer')
  ]
}
```
- 配置postcss.config文件, 默认loader会调用，文件默认导出一个对象

### 压缩优化css - optimize-css-assets-webpack-plugin
- webpack4.0有**optimization**这一项用来配置优化项。

### 压缩优化js - unglifyjs-webpack-plugin