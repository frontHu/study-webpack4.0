### 代码结构
- 是一个自执行函数，形参是modules。
- 参数是一个对象，对象的key是**引用模块的路径**，value是**一个匿名函数**

### 代码执行
- 函数中定义了一个**__webpack_require__**方法。该方法在最后执行，初始传入webpack的入口模块。
- **__webpack_require__**首先判断该模块是否在缓存中，首次执行肯定不在。
- 然后创建一个新模块然后放入缓存。
```
var module = installedModules[moduleId] = {
  i: moduleId,
  l: false,
  exports: {}
};
```
- 然后执行传入的**modules**中对应的方法。传入当前的模块，和模块的exports还有__webpack_require__。
```
modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
```
- 看下传入自执行函数中每个key对应的value是什么。可以看到里面又执行了**__webpack_require__**，传入的是下一个模块的地址。实现递归的依赖关系。
```
{
  "./src/index.js": (function (module, exports, __webpack_require__) {
    eval("// console.log('webpack基础配置')\r\nlet str = __webpack_require__(/*! ./a */ \"./src/a.js\")\r\n\r\nconsole.log(str)\n\n//# sourceURL=webpack:///./src/index.js?");
  })
 }
```

### 如何运行自定的webpack配置文件
```
webpack --config 自定义配置文件
```