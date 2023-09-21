## Plugin setup
```
npm install aic-tailwind-scss sass sass-loader --s-d
```
## Plugin import
main.js
```
import Vue from 'vue'
import App from './App.vue'

import 'aic-tailwind-scss'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
```
## Plugin usage
```
<div class="w-full mt-20 mb-40 text-lg">
  hello aic!
</div>
```
