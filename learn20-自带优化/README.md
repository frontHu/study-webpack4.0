### tree-shaking 自带优化功能
- 在开发环境下如果引用某个模块中的某个功能，引用该文件会将全部功能引入。
- 在生产环境下如果引用某个模块中的某个功能，只会引用该模块，去除无用代码。
- 仅支持import语法。如果通过require,需要使用default.
```
require('模块').deafult
```

### scope hosting 作用域提升
- webpack自动省略一些可以简化的代码。