### webpack打包我们的图片
- js中创建图片引入 new Img();
- 在css引入background;
- html中img标签引入;

### file-loader
- 默认会在内部生成一张图片到build目录下
- 会把生成的图片名字返回过来

### html-withimg-loader
- 使用这个loader可以直接在html通过相对路径引入图片，不必使用require

### url-loader
- 可以通过这个loader作为一个限制图片大小是使用它base64还是什么
```
module: {
  rules: [
    {
      test: '/\.(png|jpg)/',
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 200*1024,
            outputPath: 'img/' //可以设置图片输出的文件路径，可以和其他文件分开
            
          }
        }
      ]
    }
  ]
}
```