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
import JsBase from "../components/js/jsBase"; // 引入变量和类型
import JsSundry from "../components/js/JsSundry"; // 引入js杂项
import EsSix from "../components/es6/es6index"; // 引入es6
import EsAsync from "../components/es6/es6Async"; // 引入es6
import ArrayActions from "../components/js/ArrayActions"; // 引入es6
import FacetoO from "../components/js/FaceToO"; // 引入面向对象
import SleepTimes from "../components/js/sleep"; // 引入修眠
import BOM from "../components/js/Bom";  // 引入BOM
import { _saveLocal } from "../utils/public.js"; // 引入本地存储工具
const components = {
    HeaderNav,
    Catalog,
    JsBase,
    JsSundry,
    EsSix,
    FacetoO,
    EsAsync,
    SleepTimes,
    ArrayActions,
    BOM
}
export default {
    name: "Js",
    data () {
        return {
            showComponent: 'JsBase',
            componentsData: [
                {   // 变量和类型
                    name: "JsBase"
                },
                {   // 杂项
                    name: "JsSundry"
                },
                {   // es6
                    name: "EsSix"
                },
                {   // 面向对象
                    name: "FacetoO"
                },
                {   // async
                    name: "EsAsync"
                },
                 {   // ArrayActions
                    name: "ArrayActions"
                },
                {   // 休眠
                    name: "SleepTimes"
                },
                {   // BOM
                    name: "BOM"
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