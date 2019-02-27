### clean-webpack-plugin
```
plugins: [
  new CleanWebpackPlugin('./dist)
]
```
### copy-webpack-plugin
- 将一些文件也放到打包目录下
```
plugins: [
  new CopyWebpackPlugin([
    {from: './doc', to: './dist'}// 从from拷贝到to
  ])
]
```
### banner-plugins
- 版权声明插件
```
plugins: [
  webpack.BannerPlugins('made 2019 by zwhu2')
]
```