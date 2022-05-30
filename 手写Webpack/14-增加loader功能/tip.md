## 1.如何给我们实现的webpack增加Loader功能
- 如果读取到的是 `JS` 文件, 直接交给打包方法打包即可
- 如果读取到的不是 `JS` 文件, 那么就需要先交给对应的 `Loader` 处理之后,才能交给打包方法打包<br>
所以我们需要在读取文件的方法中判断, 当前读取到的内容是否是需要交给 `Loader`

```js
getSource(modulePath) {
  let content = fs.readFileSync(modulePath, 'utf8')
  const rules = this.config.module.rules
  rules.forEach(({ test, use }) => {
    if (test.test(modulePath)) {
      for (let i = use.length - 1; i >= 0; i--) {
        let loader = require(use[i].loader)
        content = loader(content)
      }
    }
  })
  return content
}
```