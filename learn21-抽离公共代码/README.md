### 抽离公共代码
- 顾名思义抽离公共代码应该是多页面的
```
optimization: {
  splitChunks: { //分割代码块
    cacheGroups: { //缓存组
      common: { //公共模块
        chunks: 'initail', //从哪开始找，initial代码从入口开始
        minSize: 0, //模块大于0就抽离
        minChunks: 2, //模块引用2次就抽离
      },
      vendor: { //抽离第三方模块
        priority: 1, //本来是顺序执行，先执行common然后执行vendor,现在设置权重就先执行vendor
        test: /node_modules/, //匹配规则node_modules下的包
        minSize: 0, //模块大于0就抽离
        minChunks: 2, //模块引用2次就抽离
      }
    }
  }
}
```
- 之前webpack使用的是**commonChunkPlugin**
