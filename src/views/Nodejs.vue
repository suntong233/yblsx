<template>
  <div class="node-container">
    <HeaderNav />
    <Catalog :showitem="showComponent" @handleChange="handleChange" :cataloglist="componentsData"></Catalog>
    <div class="main-container">
      <component :is="showComponent"></component>
    </div>
  </div>
</template>

<script>
import HeaderNav from "../components/public/HeaderNav"; // 引入顶部组件
import Catalog from "../components/public/Catalog"; // 引入目录组件
import Crud from "../components/node/crud"; // crud
import { _saveLocal } from "../utils/public.js"; // 引入本地存储工具

const components = {
  HeaderNav,
  Catalog,
  Crud
};
export default {
  name: "node",
  data() {
    return {
      showComponent: "Crud",
      componentsData: [
        {
          // Less
          name: "Crud"
        }
      ]
    };
  },
  methods: {
    handleChange(e) {
      this.showComponent = e;
      _saveLocal("NodeshowComponent", this.showComponent);
    }
  },
  created() {
    if (localStorage["NodeshowComponent"]) {
      this.showComponent = JSON.parse(localStorage["NodeshowComponent"]);
    }
  },
  components
};
</script>

<style scoped>
    .node-container{
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