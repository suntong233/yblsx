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
import ReactEasy from "../components/react/ReactEasy"; // 引入React快速入门
const components = {
    HeaderNav,
    Catalog,
    ReactEasy
}
export default {
    name: "React",
    data () {
        return {
            showComponent: "",
            componentsData: [
                {
                    name: "ReactEasy"
                }
            ]    
        }
    },
    created () {
        if(localStorage['reactshowComponent']){
            this.showComponent = JSON.parse(localStorage['reactshowComponent'])
        }
    },
    methods: {
        handleChange(e){
            this.showComponent = e
            _saveLocal('reactshowComponent',this.showComponent)
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