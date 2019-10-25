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