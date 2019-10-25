## Proxy  代理器
 
    Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”，即对编程语言进行编程。

```js
    let proxy = new Proxy(target, handler);
    例子:
    //将Proxy作为对象的方法
    const obj = {
        proxy : new Proxy(target, handler)
    }
```

### get()

```js
    const person = {name:'张三'}
    var proxy = new Proxy(person.{
        get : function(target, property){
            if(property in tatget){
                return target[property]
            } else {
                throw new ReferenceErrpr...
            }
        }
    })
```

### 实现属性的链式操作