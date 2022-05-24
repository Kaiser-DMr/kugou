import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 引入配置路由的文件
import routes from './routes'

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
