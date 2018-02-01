// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// 完整引入
import ElementUI from 'element-ui'
import Vuex from 'vuex'
// import store from './store'
// 按需引入ElementUI组件
// import { Button, Select} from 'element-ui'

import 'element-ui/lib/theme-chalk/index.css'
import './assets/style/base.css'

import router from './router'
import App from './App'

import api from './api'

// 全局使用
Vue.use(ElementUI)
Vue.use(Vuex)

// 按需调用
// Vue.component(Button.name, Button)
// Vue.component(Select.name, Select)
// 或者写为
// Vue.use(Button)
// Vue.use(Select)

// 定义全局变量
Vue.prototype.$api = api
Vue.config.productionTip = false

const store = new Vuex.Store({
  // 全局用到的数据
  state: {
    userInfo: null,
    cartCount: 0
  },
  // 改变状态
  // action异步操作功能
  mutations: {
    updateUserInfo (state, userInfo) {
      state.userInfo = userInfo
    },
    updateCartCount (state, cartCount) {
      state.cartCount = cartCount
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
