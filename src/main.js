import Vue from 'vue'
import App from './App.vue'
// import less from "less"
import element from "element-ui";
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false

Vue.use(element)

import myAxios from './utils/myAxios'
import store from './store/index'
import router from './routers/index'

Vue.config.productionTip = false

// 将二次封装的发送请求的函数添加到vue原型上
Vue.prototype.$myAxios = myAxios

new Vue({
  render: h => h(App),
  // 在Vue原型上添加$bus 用于实现全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  store,
  router
}).$mount('#app')
