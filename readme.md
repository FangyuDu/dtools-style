# DTOOLS-STYLE

by @FangyuDu

集成常用的样式初始化、通用样式以及一些预编译方法。

## 模块
- `normalize` 样式初始化
- `common` 通用样式
- `scss/mixin` scss 常用的方法

## 使用
安装
```
npm install dtools-style --save
```
`normalize`、`common` 引入
```js
// css 样式充值
import 'dtools-style/css/normalize.css';
// 常用样式
import 'dtools-style/css/common.css';
```

`scss/mixin` 引入
```scss
// scss 文件中引入
@import 'dtools/scss/_mixin';

// 示例
.app-header {
  @include height-s(50px);
}
```

## 其他工具
- `dtools-regexp` 常用的正则验证
- `dtools-js` 常用的JS方法库