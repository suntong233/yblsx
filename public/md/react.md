# React

## 引入 & hello
```html
    <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
    <!-- <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script> -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
    <div id="root"></div>
```
```js
    // 注意type="text/babel"
    ReactDOM.render(
        <h1>Hello, world!</h1>,
        document.getElementById('root')
      );
```

## jsx插值 函数也行

```js
    const msg = "helloworld";
        const element = (<div>
            { msg } 
            { foo() }
        </div>);
    function foo(){
        // 在标签中可以直接用{} 插入js表达式
        return <h3 title={msg}>foo</h3>
    }
    ReactDOM.render(
        element,
        document.getElementById('root')
    );
```

## class组件

```js
    class App extends React.Component{
        render(){
            return (
                <div>
                    hello world
                </div>
            )
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
```

## state

```js
    constructor(props) {
            super(props);
            this.state = {
                date: new Date()
            }
        }

    // 改变使用setState
    tick(){
            this.setState({
                date: new Date()
            })
        }
```

## 事件event
* 注意点 bind(this)  或者箭头函数
```js
    handleClick = (e) =>{
            console.log(e)
            console.log(e.target)
            this.setState({
                count: ++this.state.count
            })
        }

    render(){
        return (
            <div>
                <button onClick={ this.handleChlick }>click</button>
            </div>
        )
    }
```

## 条件渲染 列表渲染

```js
    showItem(){
        if(this.state.flag){
            return <h2>这是一个真值</h2>
        }
    }
    { ts.flag? 1 : 2 }
    { this.showItem() }
```

```js
    {
        this.state.list.map(item=>{
            ...
        })
    }
```