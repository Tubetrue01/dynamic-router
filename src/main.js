import Vue from 'vue'
import App from './App.vue'
import store from './store/store'
import { router } from './routers/router'
import '@/assets/icons/iconfont.css' // 字体图标
import '@/styles/index.scss' // 全局样式
// 引入clipboard.js实现点击按钮复制内容
import VueClipboard from 'vue-clipboard2'
// 引入全局变量或函数（此处将console.log挂载到vue实例，使用时直接this.log）
import global from './utils/global'

import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
// 动态路由
import './utils/permission'
/*
* 阻止vue启动生产消息
* You are running Vue in development mode.Make sure to turn on production mode when deploying for production.
* */
Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueClipboard)
Vue.use(global)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
