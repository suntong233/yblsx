# create react app

## 快速上手

```
    npm i -g create-react-app

    create-react-app react-demo1

    npm start
```

* 为了加速 npm 的安装速度，我们用淘宝提供的源，这个问题在其它包管理软件也会遇到

```
    npm config set registry https://registry.npm.taobao.org

    npm config get registry
```

* 安装 cnpm

```
    npm install -g cnpm --registry=https://registry.npm.taobao.org
```

* vscode插件

```
    代码格式化
    prettier - Code formatter
    react 代码片段
    reactjs code snippets
    Auto Close Tag
    Auto Rename Tag
    Debugger for Chrome
```

## 创建项目

```
    create-react-app react-demo2
```

## 打包项目

```
    set PUBLIC_URL=./ && npm run build
```

## 修改app.js

```js
    import React from 'react';
    import './App.css';

    function App() {
        return (
            <div className="App">
            hello
            </div>
        );
    }
    export default App;
```

## 各种组件写法

```js
    import React,{Component} from 'react';
    import './App.css';

    // 常量组件
    const Element1 = () => <h2>组件1 - 常量</h2>
    // 变量组件
    let Element2 = () => <h2>组件2 - 变量</h2>
    // es5函数组件
    function Element3 () {
        return (
            <h2>组件3 - es5函数组件</h2>
        )
    }
    // es6箭头函数组件
    let Element4 = () => {
        return <h2>组件4 - es6箭头函数组件</h2>
    }
    // React.Component类组件 
    class App extends Component {
        render(){
            return (
                <div className="App">
                    <h2>App React.Component类组件</h2>
                    <Element1 />
                    <Element2 />
                    <Element3 />
                    <Element4 />
                </div>
            )
        }
    }
    export default App;
```

## JSX语法

```js
    // 用()包起来 这样不容易出错
    const Element1 = () => (
        <h2>组件1 - 常量</h2>
    )
```
* 必须有个顶级标签
```js
    const Element1 = () => (
        <div>
            <h2>组件1 - 常量</h2>
            <h2>组件1 - 常量</h2>
            <h2>组件1 - 常量</h2>
        </div>
    )
```
* {}里面写js表达式

```js
    <div>
        {
            list.map(item=><h2 key={item.name}>{item.name}</h2>)
        }
    </div>
    // 关于key值
    // react利用key来识别组件，它是一种身份标识标识
    // 同层的唯一就行，不用全局唯一
    // 避免使用数组的index作为 key 值
```
* 对于没有子元素的标签来说，请关闭标签

```js
    <input />
```

## 属性props

* props是只读的 不要直接更改
* 小驼峰写法
```js
    <input userName={...} />
```
* 如果属性值为true 可以省略
```js
    <input disabled={true} />
    <input disabled />
```

## childen 表示子节点对象

```js
    class Element5 extends Component {
        render(){
            return (
            <div>
                <div>{this.props.children}</div>
            </div>
            )
        }
    }

    <Element5>
        <h2>children</h2>  
    </Element5>
```

## 常用生命周期

```js
    componentDidMount  // 在第一次渲染后调用，只在客户端。
    shouldComponentUpdate // 返回一个布尔值。在组件接收到新的props或者state时被调用。
    componentDidUpdate	// 在组件完成更新后立即调用。在初始化时不会被调用。
    componentWillUnmoun // 在组件从 DOM 中移除的时候立刻被调用。
```

## 事件

```js
    handleClick (n) {
        console.log(n)
    }

    <button onClick={this.handleClick.bind(this,1)}>click</button>
```

## 条件

```js
    <div>
        {props.isLogin && <UserView />}
        {!props.isLogin && <GuestView/>}
    </div>
```
## 三目

```js
    <div>{props.isLogin ? <UserView /> : <GuestView/>}</div>
```

## ref引用

```js
    class RefYin extends Component{
    constructor(props) {
        super(props);
        this.refInput = React.createRef()
    }
    componentDidMount() {
        console.dir(this.refInput)    
        console.log(this.refs.asd)
    }
    render(){
        return (
        <div>
            <input ref={this.refInput} />
            <div ref="asd"></div>
        </div>
        )
    }
    }
```

## 路由 react-router

```
    npm add react-router-dom
```

```js
    // 引入路由
    import {HashRouter as Router, Route, Link, Switch} from 'react-router-dom'
    // use
    
    class RouteView extends Component{
        render(){
            return (
                <Router>
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/App">App</Link>
                    </div>
                    <Switch>
                        <Route exact {...HomeRoute} />
                        <Route path="/App" component={App} />
                    </Switch>
                </Router>
            )
        }
    }
```


## fetch请求

```js
    fetch(
    'http://rap2api.taobao.org/app/mock/234773/example/1572063372601'
  )
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.setState({users: data})
    })
    .catch(e => console.log('错误:', e))
```

## 使用antd

```
    // 添加antd
    npm add antd
```
* 按需引入

```js
    1. 安装 react-app-rewired  customize-cra

    npm add react-app-rewired customize-cra

    2. 修改package.json

        "scripts": {
    -   "start": "react-scripts start",
    +   "start": "react-app-rewired start",
    -   "build": "react-scripts build",
    +   "build": "react-app-rewired build",
    -   "test": "react-scripts test",
    +   "test": "react-app-rewired test",
    }

    3. 然后在项目根目录创建一个 config-overrides.js 用于修改默认配置。

    module.exports = function override(config, env) {
        // do stuff with the webpack config...
        return config;
    };

    4. 使用 babel-plugin-import

    npm add babel-plugin-import

    5. 修改config-overrides.js

    const { override, fixBabelImports } = require('customize-cra');

    module.exports = override(
        fixBabelImports('import', {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: 'css',
        })
    )
```