<template>
  <div>
    <el-tabs v-model="activeName">
      <el-tab-pane label="Js大纲" name="first">
        <div v-if="showmdbox" class="loadingmdBox">
          <img
            src="http://hbimg.b0.upaiyun.com/611bb3198c03cfefea188d170f33f27f1611c8e8a3ea-o8nm2q_fw658"
          />
        </div>
        <div v-else class="mdBox" v-html="mdHtml"></div>
      </el-tab-pane>
      <el-tab-pane label="类型值和变量" name="two">
        <div v-if="showmdbox2" class="loadingmdBox">
          <img
            src="http://hbimg.b0.upaiyun.com/611bb3198c03cfefea188d170f33f27f1611c8e8a3ea-o8nm2q_fw658"
          />
        </div>
        <div v-else class="mdBox" v-html="mdHtml2"></div>
      </el-tab-pane>
      <el-tab-pane label="表达式和运算符" name="three">
        <div v-if="showmdbox3" class="loadingmdBox">
          <img
            src="http://hbimg.b0.upaiyun.com/611bb3198c03cfefea188d170f33f27f1611c8e8a3ea-o8nm2q_fw658"
          />
        </div>
        <div v-else class="mdBox" v-html="mdHtml3"></div>
      </el-tab-pane>
       <el-tab-pane label="语句" name="four">
        <div v-if="showmdbox4" class="loadingmdBox">
          <img
            src="http://hbimg.b0.upaiyun.com/611bb3198c03cfefea188d170f33f27f1611c8e8a3ea-o8nm2q_fw658"
          />
        </div>
        <div v-else class="mdBox" v-html="mdHtml4"></div>
      </el-tab-pane>
      <el-tab-pane label="函数" name="five">
        <div v-if="showmdbox5" class="loadingmdBox">
          <img
            src="http://hbimg.b0.upaiyun.com/611bb3198c03cfefea188d170f33f27f1611c8e8a3ea-o8nm2q_fw658"
          />
        </div>
        <div v-else class="mdBox" v-html="mdHtml5"></div>
      </el-tab-pane>
      <el-tab-pane label="对象" name="six">
        <div v-if="showmdbox6" class="loadingmdBox">
          <img
            src="http://hbimg.b0.upaiyun.com/611bb3198c03cfefea188d170f33f27f1611c8e8a3ea-o8nm2q_fw658"
          />
        </div>
        <div v-else class="mdBox" v-html="mdHtml6"></div>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "jsbase",
  data() {
    return {
      activeName: "first",
      mdHtml: "",
      showmdbox: true,
       mdHtml2: "",
      showmdbox2: true,
       mdHtml3: "",
      showmdbox3: true,
        mdHtml4: "",
      showmdbox4: true,
      mdHtml5: "",
      showmdbox5: true,
        mdHtml6: "",
      showmdbox6: true
    };
  },
  created() {
    this.axios.get("https://suntong233.github.io/yblsx/dist/md/js基础/js大纲.md").then(res => {
      this.mdHtml = this.converter.makeHtml(res.data);
      this.showmdbox = false;
    });
    this.axios.get("https://suntong233.github.io/yblsx/dist/md/js基础/类型值和变量/数据类型.md").then(res => {
      this.mdHtml2 = this.converter.makeHtml(res.data);
      this.showmdbox2 = false;
    });
    this.axios.get("https://suntong233.github.io/yblsx/dist/md/js基础/类型值和变量/变量.md").then(res => {
      this.mdHtml2 += this.converter.makeHtml(res.data);
    });
    this.axios.get("https://suntong233.github.io/yblsx/dist/md/js基础/类型值和变量/各种值.md").then(res => {
      this.mdHtml2 += this.converter.makeHtml(res.data);
    });
     this.axios.get("https://suntong233.github.io/yblsx/dist/md/js基础/表达式和运算符/表达式.md").then(res => {
      this.mdHtml3 = this.converter.makeHtml(res.data);
      this.showmdbox3 = false;
    });
     this.axios.get("https://suntong233.github.io/yblsx/dist/md/js基础/表达式和运算符/运算符.md").then(res => {
      this.mdHtml3 += this.converter.makeHtml(res.data);
    });
     this.axios.get("https://suntong233.github.io/yblsx/dist/md/js基础/语句/条件语句.md").then(res => {
      this.mdHtml4 = this.converter.makeHtml(res.data);
      this.showmdbox4 = false;
    });
      this.axios.get("https://suntong233.github.io/yblsx/dist/md/js基础/语句/跳转.md").then(res => {
      this.mdHtml4 += this.converter.makeHtml(res.data);
    });
      this.axios.get("https://suntong233.github.io/yblsx/dist/md/js基础/语句/循环语句.md").then(res => {
      this.mdHtml4 += this.converter.makeHtml(res.data);
    });
      this.axios.get("https://suntong233.github.io/yblsx/dist/md/js基础/语句/其它语句.md").then(res => {
      this.mdHtml4 += this.converter.makeHtml(res.data);
    });
     this.axios.get("https://suntong233.github.io/yblsx/dist/md/js基础/函数/定义函数.md").then(res => {
      this.mdHtml5 = this.converter.makeHtml(res.data);
      this.showmdbox5 = false;
    });
     this.axios.get("https://suntong233.github.io/yblsx/dist/md/js基础/函数/调用函数.md").then(res => {
      this.mdHtml5 += this.converter.makeHtml(res.data);
    });
     this.axios.get("https://suntong233.github.io/yblsx/dist/md/js基础/函数/参数.md").then(res => {
      this.mdHtml5 += this.converter.makeHtml(res.data);
    });
    this.axios.get("https://suntong233.github.io/yblsx/dist/md/js基础/函数/函数作用域.md").then(res => {
      this.mdHtml5 += this.converter.makeHtml(res.data);
    });
    this.axios.get("https://suntong233.github.io/yblsx/dist/md/js基础/函数/递归.md").then(res => {
      this.mdHtml5 += this.converter.makeHtml(res.data);
    });
    this.axios.get("https://suntong233.github.io/yblsx/dist/md/js基础/函数/闭包.md").then(res => {
      this.mdHtml5 += this.converter.makeHtml(res.data);
    });
    this.axios.get("https://suntong233.github.io/yblsx/dist/md/js基础/函数/作为参数的函数.md").then(res => {
      this.mdHtml5 += this.converter.makeHtml(res.data);
    });
    this.axios.get("https://suntong233.github.io/yblsx/dist/md/js基础/函数/属性方法和构造函数.md").then(res => {
      this.mdHtml5 += this.converter.makeHtml(res.data);
    });
     this.axios.get("https://suntong233.github.io/yblsx/dist/md/js基础/函数/函数式编程.md").then(res => {
      this.mdHtml5 += this.converter.makeHtml(res.data);
    });
    this.axios.get("https://suntong233.github.io/yblsx/dist/md/js基础/对象/创建对象.md").then(res => {
      this.mdHtml6 = this.converter.makeHtml(res.data);
      this.showmdbox6 = false;
    });
  },
  methods: {}
};
</script>

<style scoped>
.loadingmdBox {
  width: 100%;
}
.loadingmdBox > img {
  width: 100%;
}
</style>