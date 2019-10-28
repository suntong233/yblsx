<template>
  <div class="vueeasy-container">
    <el-tabs v-model="activeName">
      <el-tab-pane label="Vue大纲" name="first">
        <div v-if="showmdbox" class="loadingmdBox">
          <img
            src="http://hbimg.b0.upaiyun.com/611bb3198c03cfefea188d170f33f27f1611c8e8a3ea-o8nm2q_fw658"
          />
        </div>
        <div v-else class="mdBox" v-html="mdHtml"></div>
      </el-tab-pane>
      <el-tab-pane label="Vue安装" name="second">
        <div v-if="showmdbox2" class="loadingmdBox">
          <img
            src="http://hbimg.b0.upaiyun.com/611bb3198c03cfefea188d170f33f27f1611c8e8a3ea-o8nm2q_fw658"
          />
        </div>
        <div v-else class="mdBox" v-html="mdHtml2"></div>
      </el-tab-pane>
       <el-tab-pane label="快速上手" name="three">
        <div v-if="showmdbox3" class="loadingmdBox">
          <img
            src="http://hbimg.b0.upaiyun.com/611bb3198c03cfefea188d170f33f27f1611c8e8a3ea-o8nm2q_fw658"
          />
        </div>
        <div v-else class="mdBox" v-html="mdHtml3"></div>
      </el-tab-pane>
      <el-tab-pane label="实例化与生命周期" name="four">
        <div v-if="showmdbox4" class="loadingmdBox">
          <img
            src="http://hbimg.b0.upaiyun.com/611bb3198c03cfefea188d170f33f27f1611c8e8a3ea-o8nm2q_fw658"
          />
        </div>
        <div v-else class="mdBox" v-html="mdHtml4"></div>
      </el-tab-pane>
      <el-tab-pane label="模板语法" name="five">
        <div v-if="showmdbox5" class="loadingmdBox">
          <img
            src="http://hbimg.b0.upaiyun.com/611bb3198c03cfefea188d170f33f27f1611c8e8a3ea-o8nm2q_fw658"
          />
        </div>
        <div v-else class="mdBox" v-html="mdHtml5"></div>
      </el-tab-pane>
      <el-tab-pane label="计算属性与侦听器" name="six">
        <div v-if="showmdbox6" class="loadingmdBox">
          <img
            src="http://hbimg.b0.upaiyun.com/611bb3198c03cfefea188d170f33f27f1611c8e8a3ea-o8nm2q_fw658"
          />
        </div>
        <div v-else class="mdBox" v-html="mdHtml6"></div>
      </el-tab-pane>
      <el-tab-pane label="绑定样式" name="seven">
        <div v-if="showmdbox7" class="loadingmdBox">
          <img
            src="http://hbimg.b0.upaiyun.com/611bb3198c03cfefea188d170f33f27f1611c8e8a3ea-o8nm2q_fw658"
          />
        </div>
        <div v-else class="mdBox" v-html="mdHtml7"></div>
      </el-tab-pane>
      <el-tab-pane label="条件与列表渲染" name="eight">
        <div v-if="showmdbox8" class="loadingmdBox">
          <img
            src="http://hbimg.b0.upaiyun.com/611bb3198c03cfefea188d170f33f27f1611c8e8a3ea-o8nm2q_fw658"
          />
        </div>
        <div v-else class="mdBox" v-html="mdHtml8"></div>
      </el-tab-pane>
      <el-tab-pane label="事件" name="nine">
        <div v-if="showmdbox9" class="loadingmdBox">
          <img
            src="http://hbimg.b0.upaiyun.com/611bb3198c03cfefea188d170f33f27f1611c8e8a3ea-o8nm2q_fw658"
          />
        </div>
        <div v-else class="mdBox" v-html="mdHtml9"></div>
      </el-tab-pane>
      <el-tab-pane label="表单输入绑定" name="ten">
        <div v-if="showmdbox10" class="loadingmdBox">
          <img
            src="http://hbimg.b0.upaiyun.com/611bb3198c03cfefea188d170f33f27f1611c8e8a3ea-o8nm2q_fw658"
          />
        </div>
        <div v-else class="mdBox" v-html="mdHtml10"></div>
      </el-tab-pane>
      <el-tab-pane label="组件" name="eleven">
        <div v-if="showmdbox11" class="loadingmdBox">
          <img
            src="http://hbimg.b0.upaiyun.com/611bb3198c03cfefea188d170f33f27f1611c8e8a3ea-o8nm2q_fw658"
          />
        </div>
        <div v-else class="mdBox" v-html="mdHtml11"></div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "VueEasy",
  data() {
    return {
      mdHtml: "",
      showmdbox: true,
      activeName: "first",
      mdHtml2: "",
      showmdbox2: true,
      mdHtml3: "",
      showmdbox3: true,
      mdHtml4: "",
      showmdbox4: true,
       mdHtml5: "",
      showmdbox5: true,
       mdHtml6: "",
      showmdbox6: true,
      mdHtml7: "",
      showmdbox7: true,
      mdHtml8: "",
      showmdbox8: true,
       mdHtml9: "",
      showmdbox9: true,
       mdHtml10: "",
      showmdbox10: true,
      mdHtml11: "",
      showmdbox11: true
    };
  },
  created() {
    this.axios.get("/md/Vue快速入门/Vue大纲.md").then(res => {
      this.mdHtml = this.converter.makeHtml(res.data);
      this.showmdbox = false;
    });
    this.axios.get("/md/Vue快速入门/安装Vue/Vue安装.md").then(res => {
      this.mdHtml2 = this.converter.makeHtml(res.data);
      this.showmdbox2 = false;
    });
    this.axios.get("/md/Vue快速入门/快速上手/快速上手.md").then(res => {
      this.mdHtml3 = this.converter.makeHtml(res.data);
      this.showmdbox3 = false;
    });
     this.axios.get("/md/Vue快速入门/Vue实例化与生命周期/Vue实例.md").then(res => {
      this.mdHtml4 = this.converter.makeHtml(res.data);
      this.showmdbox4 = false;
    });
     this.axios.get("/md/Vue快速入门/Vue实例化与生命周期/生命周期.md").then(res => {
      this.mdHtml4 += this.converter.makeHtml(res.data);
    });
    this.axios.get("/md/Vue快速入门/模板语法/插值.md").then(res => {
      this.mdHtml5 = this.converter.makeHtml(res.data);
      this.showmdbox5 = false;
    });
     this.axios.get("/md/Vue快速入门/模板语法/指令与缩写.md").then(res => {
      this.mdHtml5 += this.converter.makeHtml(res.data);
    });
    this.axios.get("/md/Vue快速入门/计算属性与侦听器/计算属性与侦听器.md").then(res => {
      this.mdHtml6 = this.converter.makeHtml(res.data);
      this.showmdbox6 = false;
    });
    this.axios.get("/md/Vue快速入门/绑定class与style/绑定样式.md").then(res => {
      this.mdHtml7 = this.converter.makeHtml(res.data);
      this.showmdbox7 = false;
    });
    this.axios.get("/md/Vue快速入门/条件渲染/v-if&v-show.md").then(res => {
      this.mdHtml8 = this.converter.makeHtml(res.data);
      this.showmdbox8 = false;
    });
    this.axios.get("/md/Vue快速入门/列表渲染/列表渲染.md").then(res => {
      this.mdHtml8 += this.converter.makeHtml(res.data);
    });
    this.axios.get("/md/Vue快速入门/事件/事件.md").then(res => {
      this.mdHtml9 = this.converter.makeHtml(res.data);
      this.showmdbox9 = false;
    });
    this.axios.get("/md/Vue快速入门/表单输入绑定/表单输入绑定.md").then(res => {
      this.mdHtml10 = this.converter.makeHtml(res.data);
      this.showmdbox10 = false;
    });
    this.axios.get("/md/Vue快速入门/组件基础/快速实例.md").then(res => {
      this.mdHtml11 = this.converter.makeHtml(res.data);
      this.showmdbox11 = false;
    });
     this.axios.get("/md/Vue快速入门/组件基础/数据传递.md").then(res => {
      this.mdHtml11 += this.converter.makeHtml(res.data);
    });
     this.axios.get("/md/Vue快速入门/组件基础/事件传递与v-model.md").then(res => {
      this.mdHtml11 += this.converter.makeHtml(res.data);
    });
     this.axios.get("/md/Vue快速入门/组件基础/插槽-动态组件-解析Dom.md").then(res => {
      this.mdHtml11 += this.converter.makeHtml(res.data);
    });
  }
};
</script>

<style>
.loadingmdBox {
  width: 100%;
}
.loadingmdBox > img {
  width: 100%;
}
</style>