<template>
  <div class="Js-container">
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
import VarandType from "../components/js/Variablesandtypes"; // 引入变量和类型
import JsSundry from "../components/js/JsSundry"; // 引入js杂项
import { _saveLocal } from "../utils/public.js"; // 引入本地存储工具
const components = {
    HeaderNav,
    Catalog,
    VarandType,
    JsSundry
}
export default {
    name: "Js",
    data () {
        return {
            showComponent: 'VarandType',
            componentsData: [
                {   // 变量和类型
                    name: "VarandType"
                },
                {   // 杂项
                    name: "JsSundry"
                }
            ],
        }
    },
    methods: {
        handleChange(e){
            this.showComponent = e
            _saveLocal('jsshowComponent',this.showComponent)
        }
    },
    created () {
        if(localStorage['jsshowComponent']){
            this.showComponent = JSON.parse(localStorage['jsshowComponent'])
        }
    },
    components
}
</script>

<style scoped>
    .Js-container{
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