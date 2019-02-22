### 开发服务webpack-dev-server
- 在配置中增加devServer选项。
```
devServer: {
  port: 3000,
  progress: true,
  contentBase: './build',
  compress: true //gizp压缩
}
```
### html模板html-weback-plugin
