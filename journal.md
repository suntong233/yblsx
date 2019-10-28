# ybl_sx

## begin
* vue create ybl_sx
* vue-router && vuex
* dont use history mode

* $进入以什么为开头的文件nnn* 以nnn开头的

## 项目启动自动打开浏览器
```json
    "serve": "vue-cli-service serve --open"
```

## 本地创建完后在github上创建ybl_sx

* 复制github上项目的ssh密钥 然后使用git remote add origin ...
```
    git remote add origin git@github.com:suntong233/ybl_sx.git
    这样本地项目就与github仓库关联起来了
    git add . 
    git commit -m ""
    git push origin master
```
## css上的一些默认配置
```css
    *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
  ul {
      list-style: none;
  }
  html,body{
    margin: 0 auto;
    width: 100%;
    position: relative;
  }
  #app{
    position: relative;
    width: 100%;
  }
```
## 顶部导航组件HeaderNav

```js
    // 获取滚动条的高度
    console.log(document.documentElement.scrollTop)
```
* 响应式css
```css
    @media only screen and (max-width: 380px) {
        ...
    }
```
* 路由自动滚动到顶部
```js
    window.scrollTo(0, 0)
```

## 安装showdown 用于在页面显示markdown文档

```
  npm i showdown
```
```js
  // 使用
  import showdown from 'showdown'
  // 初始化
  let converter = new showdown.Converter();
  // 将语法转化成html
  let html = converter.makeHtml(text)
  // 展示
  dom.innerHTML = html
  // 用ajax的get方法获取md
```

## 使用axios
```
  npm install axios -D
```
```js
  import axios from "axios";

  Vue.prototype.axios = axios;

  // 调用 this.axios
```

## 引入element-ui

```
  npm i element-ui -D
  
  设置 按需引入
  npm install babel-plugin-component -D
  npm install --save-dev @babel/preset-env
  module.exports = {
      presets: ["@vue/app", ["@babel/preset-env", { modules: false }]],
      plugins: [
        [
          "component",
          {
              libraryName: "element-ui",
              styleLibraryName: "theme-chalk"
          }
        ]
      ]
  }
```
* 使用它
```js
    import { Button } from "element-ui"
    Vue.use(Button); 
```

## Echarts

```
  npm install echarts -D
```
* 通过 npm 上安装的 ECharts 和 zrender 会放在node_modules目录下。可以直接在项目代码中 require('echarts') 得到 ECharts。

```js
  const echarts = require('echarts');
  window.echarts = echarts
  // 需要一个dom元素
  var myChart = window.echarts.init(dom元素);

  // 例：
  const myChart = window.echarts.init(this.$refs.ecahrtbox1);
      myChart.setOption({
          title: {
              text: 'ECharts 入门示例'
          },
          tooltip: {},
          xAxis: {
              data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [{
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
          }]
      });
```

## ssh
[链接](https://www.cnblogs.com/chuyanfenfei/p/8035067.html)
1. 创建一个ssh key
```
    ssh-keygen -t rsa -C "your_email@example.com"
    -t 指定密钥类型，默认是 rsa ，可以省略。
    -C 设置注释文字，比如邮箱。
    -f 指定密钥文件存储文件名。
    以上代码省略了 -f 参数，因此，运行上面那条命令后会让你输入一个文件名，用于保存刚才生成的 SSH key 代码
    当然，你也可以不输入文件名，使用默认文件名（推荐），那么就会生成 id_rsa 和 id_rsa.pub 两个秘钥文件。
```
2. 复制内容
```
    clip < ~/.ssh/id_rsa.pub
```

## 分支合并

```js
  // 进入分支
  git checkout gh-pages
  // 合并
  git merge master
  git merge gh-pages
```