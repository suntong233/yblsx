# Vue实例化

* 每个 Vue 应用都是通过用 Vue 函数创建一个新的 Vue 实例开始的

```js
    let app = new Vue({
        // 选项
    })
```

## 数据与方法

* 当一个 Vue 实例被创建时，它将 data 对象中的所有的属性加入到 Vue 的响应式系统中。当这些属性的值发生改变时，视图将会产生“响应”，即匹配更新为新的值

```js
    const data = { name: 'jack' }
    let app = new Vue({
        el: '#app',
        // 将data添加到实例的data当中
        data: data
    })
    // 现在可以直接通过app访问 数据
    app.name // jack
    // 主义不是app.data.name 因为vue做了一种封装  可以直接拿data里面的值
    app.name = 'lucy'
    // 可以直接修改name 然后页面上如果渲染了name 将会自动更新
    // 注意只有一开始就存在于data内的数据是响应式的
    app.age = 13
    // 这里在后期添加的age不是响应式

    // 所以要在data里提前定义一些默认值
    data: {
        newTodoText: '',
        visitCount: 0,
        hideCompletedTodos: false,
        todos: [],
        error: null
    }
```

* 使用Object.freeze()可以冻结数据 让它不再是响应式
```html
    <div id="app">{{ list.name }}</div>
```
```js
    const obj = { name: 'ttt' }
    Object.freeze(obj)
    let app = new Vue({
        el: '#app',
        data: {
            list: obj
        }
    })
    app.list.name = 'ddd' // 这时候修改数据是不会在页面更新的
    // 但是可以给list指定新的地址
    app.list = { name: 'ddd' }
    // 这时内存地址改变了 页面会渲染
```

* 直接查看data 使用前缀$ 以便用户定义的属性区分开来

```js
    let app = new Vue({
        el: '#app',
        data: {

        }
    })
    app.$el  // <div id="app"></div>
    app.$data   // {}
```

