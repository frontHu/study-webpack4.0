### webpack安装
- 安装本地webpack
- webpack webpack-cli(webpack4需要安装)

### webpack0配置
- webpack是一个打包工具 ----> 输出后的结果是一个js模块

- 执行npx webpack
> npx是什么?这里简单说下，npx是npm5.2.0自带的。使用它可以避免全局安装webpack然后使用webpack命令。它的执行会首先在node_modules包中查找执行文件，如果找不到则会从npm上下载，执行完后再删除。这样避免长期本地使用版本过老。

- 执行后发现有一串黄色的警告，提示内容是设置执行环境(mode),如果不设置默认为**production**.

### webpack手动配置
- 默认配置文件名：webpack.config.js
- 执行webpack的时候会默认调用webpack-cli, webpack-cli中会默认调用webpack.config.js || webpackfile.js
```
defaultDescription: "webpack.config.js or webpackfile.js",
```
