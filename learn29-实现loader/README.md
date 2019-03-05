### 如何找到对应loader
- 通过loader的绝对路径
```
{
  test: /\.js$/,
  use: path.resolve(__dirname, 'loader', loader1.js'')
}
```
- resolveLoader
```
resolveLoader: {
  //别名配置
  alias: {
    loader1: path.resolve(__dirname, 'loader', loader1.js'')
  },
  //获取按顺序到这些目录查找
  modules: ['node_module', path.resolve(__dirname, 'loader')]
}
```

### 多个loader可以通过数组引入

### loader从右往左，从下至上

### loader的分类pre在前面的 post在后 normal正常
```
enforce: pre
```

### loader默认有两部分组成 pitch && loader
~··