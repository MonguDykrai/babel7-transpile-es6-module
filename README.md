# babel7-transpile-es6-module

不用转译开发依赖

vue-clamp 只有一个非开发依赖，因此 vue.config.js 中只需要写

```js
module.exports = {
  transpileDependencies: ['vue-clamp', 'resize-detector'] // 不用转译开发依赖
}
```