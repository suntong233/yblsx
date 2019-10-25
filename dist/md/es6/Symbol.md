## Symbol

```js
    let s1 = Symbol('foo');
```
* Symbol 不能与其他类型的值进行运算
```js
    let sym = Symbol('My symbol')
    sym + ""    //typeError
```
* 可以显式转化为字符串
```js
    let sym = Symbol()
    String(sym)    // 'Symbol()'
    sym.toString()    //'Symbol()'
```
* 可以转化为布尔值  不能转化为数字
```js
    let sym = Symbol()
    Boolean(sym)   //true
```
* description  直接返回描述
```js
    const sym = Symbol('foo')
    sym.description  //  'foo'
```
```js
    let sym = Symbol('foo')    
    const obj = {
        [sym] : 'hahaha'
    }
    console.log(obj[sym])
```
* Symbol 作为对象的属性名不能被正常返回 需要使用方法
```js
    Object.getOwnPropertySymbols(obj)   //[Symbol(...)]
    Reflect.ownKeys(obj)  
```
* Symbol.for()   会被登记在全局环境中供搜索
```js
    //如果有symbol值 就返回 没有就创建
    let s1 = Symbol.for('foo')   //创建了一个
    let s2 = Symbol.for('foo')    //返回了之前的Symbol
    s1 === s2  //true
```
* Symbol.keyFor()   返回一个已经登记的
