import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import showdown from 'showdown'  // 显示md文档
import { Button,
  TabPane,
  Tabs,
  Table,
  TableColumn,
  Select,
  Input,
  Option,
  Dialog,
  DatePicker
} from "element-ui"
    
Vue.use(Button); 
Vue.use(TabPane); 
Vue.use(Tabs); 
Vue.use(Table); 
Vue.use(TableColumn); 
Vue.use(Select); 
Vue.use(Input); 
Vue.use(Option); 
Vue.use(Dialog); 
Vue.use(DatePicker); 
const converter = new showdown.Converter();
const echarts = require('echarts');
window.echarts = echarts
Vue.prototype.axios = axios
Vue.prototype.converter = converter

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
