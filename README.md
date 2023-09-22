### install
Using npm:
```
npm install aic-tailwind-scss sass sass-loader --s-d
```
or using yarn:

```
yarn add aic-tailwind-scss sass sass-loader -d
```
### config
`main.js：`
```
import Vue from 'vue'
import App from './App.vue'

import 'aic-tailwind-scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
```
`vue.config.js：`
```
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  ...,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
            @import "aic-tailwind-scss/variables"; // 导入默认变量文件
          `,
        // additionalData: `
        //     @import "~@/variables.scss"; // 导入自定义变量文件
        //   `,
      },
    }
  },
  ...
}

```
### variables
`src/variables.scss：`
```
$num: 0; //循环计数器
$sum: 10; //循环次数，用于控制生成class的数量
$step: 2; //步长
$pixis: "rpx"; //单位
//颜色数组，可拓展，下方2个数组长度必须一致
$color_name_list: "blue", "green", "yellow", "red", "gray";
$color_list: #007aff, #4cd964, #f0ad4e, #dd524d, #636e72;
```
### usage
```
<div class="w-full mt-20 mb-40 text-lg">
  hello aic!
</div>
```
