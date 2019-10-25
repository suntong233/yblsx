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
* 与运算符&&
```js
    {
        flag && <div>...</div>
    }
```

* 三元
```js
    {
        flag? 
        <div>1</div> : <div>2</div>
    }
```

* 较复杂的用函数

```js
    function foo(){
        if(flag){
            return ...
        }else {
            return ...
        }
    }
```

* 列表渲染用map

```js
    {
        list.map(item=>{
            return (<div>...{item..}</div>)
        })
    }
```

## 表单绑定

```js
    state = {
        value: ''
    }

    handleChange(e){
        this.setState({
            value: e.target.value
        })
    }

    <input value={ value } onChange={ handleChange } />
```

## 状态提升

```js
    class Father extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                value: ''
            }
        }
        handleChange=(val)=>{
            this.setState({
                value: val
            })
        }

        render(){
            return (
                <div>
                    <Children value={this.state.value} onHandleChange={this.handleChange}/>>
                </div>
            )
        }
    }

    class Children extends React.Component{
        handleChange=(e)=>{
            this.props.onHandleChange(e.target.value)
        }
        render(){
            return <input value={this.props.value} onChange={this.handleChange} />
        }
    }
```
