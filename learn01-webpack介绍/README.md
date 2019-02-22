### 一、webpack介绍
webpack可以看做是一个模块打包机，它做的事情是，分析你的项目结构，找到JavaScript模块和其他的一些浏览器不能直接运行的拓展语言（SCSS, TS）,并将其打包为合适的格式以供浏览器使用。

>官宣：本质上，webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。

### 二、可以做哪些事情
代码转换、文件优化、代码分割、模块合并、自动刷新、代码校验、自动发布等。

### 三、提前内容
掌握JavaScript，了解node。

### 四、核心概念
**Entry：**webpack执行构建第一步从entry开始。
**Module：**在webpack中一切为模块，一个模块对应一个文件，webpack会从配置的entry递归找到每个模块。
**Chunk：**代码块，一个代码块由多个模块构成，用于代码合并和分割。
**Loader：**模块转换器，用于把模块原内容按照需求转换成新内容。
**Plugin：**拓展插件。在webpack构建过程中，在特殊时刻注入拓展逻辑来改变结果，做你想要做的事情。弥补Loader。
**Output：**输出，在webpack经过一系列处理后得到想要的代码结果。

webpack启动后会从**Entry**里配置的**Module**开始递归解析**Entry**依赖的所有**Module**。每找到一个**Module**，就会根据配置的**Loader**找出对应的转换规则，对**Module**进行转换后，再解析出当前**Module**依赖的**Module**。这些模块会以**Entry**为单位进行分组，一个**Entry**和其所依赖的**Module**就形成一个**Chunk**。最后webpack会把**Chunk**转换成文件输出。
