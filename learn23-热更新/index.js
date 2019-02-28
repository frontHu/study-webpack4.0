import str from './src/a'
console.log(str)

if(module.hot) {
  module.hot.accept('./src/a', function() {
    console.log('文件更新了')
  })
}