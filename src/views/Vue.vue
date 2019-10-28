<template>
  <div>
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
import { _saveLocal } from "../utils/public.js"; // 引入本地存储工具
import Vueeasy from "../components/Vue/VueEasy";  // 引入vue
import SelfJournal from "../components/Vue/SelfJournal"; // 引入本地日志

const components = {
    HeaderNav,
    Catalog,
    Vueeasy,
    SelfJournal
}
export default {
    name: "Vue",
    data () {
        return {
            showComponent: "",
            componentsData: [
                {
                    name: "Vueeasy"
                },
                {
                    name: "SelfJournal"
                }
            ]    
        }
    },
    created () {
        if(localStorage['VueshowComponent']){
            this.showComponent = JSON.parse(localStorage['VueshowComponent'])
        }
    },
    methods: {
        handleChange(e){
            this.showComponent = e
            _saveLocal('VueshowComponent',this.showComponent)
        }
    },
    components
}
</script>

<style scoped>
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