<template>
  <div class="Css-container">
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
import LessEasy from "../components/css/LessEasy";  // 引入lesseasy
import { _saveLocal } from "../utils/public.js"; // 引入本地存储工具
const components = {
    HeaderNav,
    LessEasy,
    Catalog
}
export default {
    name: "Css",
    data () {
        return {
             showComponent: 'LessEasy',
            componentsData: [
                {   // Less
                    name: "LessEasy"
                }
            ],      
        }
    },
     methods: {
        handleChange(e){
            this.showComponent = e
            _saveLocal('CssshowComponent',this.showComponent)
        }
    },
    created () {
        if(localStorage['CssshowComponent']){
            this.showComponent = JSON.parse(localStorage['CssshowComponent'])
        }
    },
    components
}
</script>

<style scoped>
.Css-container{
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