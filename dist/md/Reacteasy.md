# ReactEasy

## cnd链接
```html
    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
```

## 使用React

* 准备一个div作为根元素
```html
    <div id="root"></div>
```

* script标签 注意 type="text/babel" ReactDOM的渲染方法
```js
    ReactDOM.render(
        <div>hello</div>,
        document.getElementById('root')
    )
```

## JSX语法

```js
    // 返回一个变量
    const a = "asjdk"
    // 返回一个函数
    function foo () {
        return (<div>函数返回的</div>)
    }
    const el = (<div>
        <h2>hello</h2>
        <div>{ a }</div>
        { foo() }
    </div>);

    ReactDOM.render(
        el,
        document.getElementById('root')
    )
```

## 组件化和props

* 函数组件与 class 组件
```js
    function ChildApp(props) {
        return <div>{props.name}</div>
    }

    class App extends React.Component{
        constructor(props) {
            super(props);
        }
        render(){
            return(
                <div>
                    app  
                    <ChildApp name="ChildApp" />  
                </div>
            )
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('root')
    )
```

## 生命周期 挂载和销毁 以及state

```js
    constructor(props) {
            super(props);
            this.state = {
                date: new Date()
            }
        }
    // 在之后调用的时候用this.state.
```
```js
    // 在生命周期里添加定时器
    componentDidMount() {
            this.timerId = setInterval(() => {
                this.setState({
                    date: new Date()
                })
            }, 1000);
        }
        componentWillUnmount() {
            clearInterval(this.timerId)
        }
```
* 异步的state更新
```js
    this.setState((state, props) => ({
        counter: state.counter + props.increment
    }));
```

## 事件处理

```js
    class App extends React.Component{
        constructor(props) {
            super(props);
            this.state = {
                isOpen: true
            }
        }
        handleOpen(){
            this.setState(state=>({
                isOpen: !state.isOpen
            }))
        }
        render () {
            return (
                <div>
                     { this.state.isOpen? "关闭的" : "打开的" }
                     <div><button onClick={ this.handleOpen.bind(this) }>开关</button></div>
                </div>
            )
        }
    }
```

## 条件渲染 列表渲染

```js
    
```

