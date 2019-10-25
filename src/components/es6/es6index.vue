<template>
  <div class="esSix-container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="Es6简介" name="first">
        <EsSixFirst />
      </el-tab-pane>
      <el-tab-pane label="let和const" name="two">
        <EsSixTwo />
      </el-tab-pane>
      <el-tab-pane label="解构赋值" name="three">
         <EsSixThree />
      </el-tab-pane>
      <el-tab-pane label="数值拓展" name="four">
         <EsSixFour />
      </el-tab-pane>
      <el-tab-pane label="数组拓展" name="five">
         <EsSixFive />
      </el-tab-pane>
      <el-tab-pane label="字符串拓展" name="six">
         <EsSixSix />
      </el-tab-pane>
      <el-tab-pane label="函数拓展" name="seven">
         <EsSixSeven />
      </el-tab-pane>
      <el-tab-pane label="Proxy" name="eight">
         <EsSixEight />
      </el-tab-pane>
      <el-tab-pane label="Symbol" name="nine">
         <EsSixNine />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import EsSixFirst from "./es6First";
import EsSixTwo from "./es6Two";
import EsSixThree from "./es6Three";
import EsSixFour from "./es6Four";
import EsSixFive from "./es6Five";
import EsSixSix from "./es6Six";
import EsSixSeven from "./es6Seven";
import EsSixEight from "./es6Eight";
import EsSixNine from "./es6Nine";


const components = {
  EsSixFirst,
  EsSixTwo,
  EsSixThree,
  EsSixFour,
  EsSixFive,
  EsSixSix,
  EsSixSeven,
  EsSixEight,
  EsSixNine
}
export default {
  name: "es6",
  data () {
      return {
          activeName: "first"
      }
  },
  components
};
</script>

<style scoped>
.esSix-container {
  width: 100%;
}
</style>