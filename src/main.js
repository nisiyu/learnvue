// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app', // 指定绑定的selector
  router,
  template: '<App/>', // 指定主组件
  components: { App }
})
