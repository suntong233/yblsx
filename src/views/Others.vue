<template>
  <div class="Others-container">
      <HeaderNav></HeaderNav>
      <Catalog :showitem="showComponent" @handleChange="handleChange" :cataloglist="componentsData"></Catalog>
      <div class="main-container">
          <component :is="showComponent"></component>
      </div>
  </div>
</template>

<script>
import HeaderNav from "../components/public/HeaderNav"; // 引入顶部组件
import Catalog from "../components/public/Catalog"; // 引入目录组件
import Debounce from "../components/others/debounce"; // 引入防抖组件
import Throttle from "../components/others/throttle"; // 引入节流组件
import Echarts from "../components/others/echarts"; // 引入echarts组件
import { _saveLocal } from "../utils/public.js"; // 引入本地存储工具
const components = {
    HeaderNav,
    Catalog,
    Debounce,
    Throttle,
    Echarts
}
export default {
    name: "Others",
    data () {
        return {
            showComponent: "Debounce",
            componentsData: [
                {
                    name: "Debounce"
                },
                {
                    name: "Throttle"
                },
                {
                    name: "Echarts"
                }
            ]
        }
    },
    created () {
        if(localStorage['othersshowComponent']){
            this.showComponent = JSON.parse(localStorage['othersshowComponent'])
        }
    },
    methods: {
        handleChange(e){
            this.showComponent = e
            _saveLocal('othersshowComponent',this.showComponent)
        }
    },
    components
}
</script>

<style scoped>
    .Others-container{
        width: 100%;
    }
    .main-container{
        margin: 10px 0 0 300px;
    }
    @media only screen and (min-width: 960px) {
        .main-container{
            width: 960px;
        }
    }
    @media only screen and (max-width: 960px) {
        .main-container{
            width: 100%;
            margin: 26px 0;
        }
    }
</style>