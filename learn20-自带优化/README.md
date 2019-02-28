### tree-shaking 自带优化功能
- 在**开发环境**下如果引用某个模块中的某个功能，引用该文件会将全部功能引入。
- 在**生产环境**下如果引用某个模块中的某个功能，只会引用该模块，去除无用代码。
- 仅支持import语法。如果通过require,返回的将是挂载到**default**下，需要使用**xxx.default**.
```
require('模块').deafult
```

### scope hosting 作用域提升
- webpack自动省略一些可以简化的代码。
```
let a = 1;
let b = 2;
let c = 3;
let d = a + b + c;
//会省略let a, b, c的操作
```