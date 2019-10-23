import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import showdown from 'showdown';  // 显示md文档

const converter = new showdown.Converter();

Vue.prototype.axios = axios
Vue.prototype.converter = converter

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
