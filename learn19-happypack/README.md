### happypack
- 使用多线程打包
```
plugins: [
  modules: {
    rules: [
      {
        test: /\.js$/,
        use: 'Happypack/loader?id=js',
      }
    ]
  },
  new Happypack({
    id: 'js',
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react'
          ]
        }
      }
    ],
  })
]
```