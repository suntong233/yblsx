# let 和 const

## let命令

    类似于var，但是声明的变量，只在let命令所在的代码块内有效。

```js
    {
        let a = 1;
        var b = 1;
    }
    console.log(a);   //ReferenceError: a is not defined
    console.log(b);   //1
```
* 不存在变量提升，var会发生变量提升的现象；变量可以在声明之前就使用，值为undefined。而let const不存在变量提升。
* 暂时性死区，块级作用域里的let命令会绑定这个区域，不再受外部的影响。
```js
    var tmp = 123;
    if(true){
        tmp = "abc";   //ReferenceError
        let tmp;
    }
    //如果区块中存在let和const命令，这个区块对这些命令声明的变量，从一开始就形成了封闭作用域。
    //隐蔽死区
    function bar(x=y,y=2){
        return [x,y];
    }
    bar()    //报错
    //x的默认值是y，而y还没有声明，属于死区
```
* 不能重复声明
```js
    function fun(){
        let a = 10;
        let a = 2;  //报错
        var a = 1;  //报错
    }
    function fun2(arg){
        let arg;   //报错
    }
```
## 块级作用域

{}内部称为块级作用域。
```js
{
    {let a = 1}
    console.log(a) //报错
}
//内层作用域可以的行医外层作用域的同名变量。
{
    let a = 1;
    {let a = 2};
}
```
块级作用域使得匿名函数不必要了
```js
    (function(){
        let a = 1;
        console.log(a);
    })()
    {
        let a = 1;
        console.log(a);
    }
```

## const命令

const声明一个只读的常量，一旦声明，常量的值就不能改变。

这意味着，const一旦声明变量，就必须立即初始化，不能以后再赋值。

```js
    const f;   //报错
```

* const保证的并不是变量的值不得改动，而是变量指向的那个内存地址所保存的数据不得改动。对于简单数据类型相当于不能改动。
而对于复合数据类型，对象跟数组，变量指向的内存地址，保存的只是一个指向实际数据的指针。const只能保证这个指针是固定的，之语它指向的数据结构可以是可变的。

```js
    const arr = [];
    arr[0] = 1;
    console.log(arr[i]);    //1
    arr = [];   //将arr指向另一个对象就会报错
```

## es6声明变量的6种方式

    var function let const import class

## 顶层对象的属性

顶层对象即window,如果是node.js 指的是global
```js
window.a = 1;
a //1
a = 2;
window.a //2 
```
但是let const所定义的与顶层不挂钩
```js
    var a = 1;
    window.a //1
    let b = 2;
    window.b  //undefined 
```

## globalThis对象

global是Node里的顶层对象。

通常来说，this会指向顶层对象，但是在Node模块和ES6中，this返回的是当前模块。