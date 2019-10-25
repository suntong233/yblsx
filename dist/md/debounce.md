# 函数防抖

* 防抖指的是当连续触发一个事件时，暂时取消触发，每次触发都有一个延迟，如果延迟内不再触发事件，则事件被允许执行
```js
    // 防抖逻辑
    // 1.用一个定时器限制方法
    setTimeout(()=>{
        fn()
    }, 1000)
    // |
    // v
    // 假设连续触发它 则需要在它之前消除定时器 所以要给定时器赋给一个变量 而要在之前判断变量是否是定时器 是就clear
    let timer  // 刚开始是undefined
    clearTimeout(timer)  // 当它为定时器时消除它
    timer = setTimeout(()=>{
        fn()
    }, 1000)
```

## 闭包封装
```js
    // 需要保存this 和 参数arguments
    function debounce (fn, wait) {
        let timer
        return function(){
            let that = this
            let arg = arguments
            setTimeout(()=>{
                fn.apply(that, args)
            },wait)
        }
    }

    // 使用它
    function fn(){
        ...
    }
    dom.addEventListener("scroll", debounce(fn, 200))
```
* 立即执行版本
```js
    function debounce (fn, wait) {
        let timer 
        return function () {
            let that = this
            let arg = arguments
            // 刚开始timer是undefined时立刻触发 然后再定时器成功消除后再把timer设为timer
            if(timer){
                clearTimeout(timer)
            } else {
                fn.apply(that, arg)
            }
            timer = setTimeout(()=>{
                timer = null
            }, wait)
        }
    }
```

* 最终封装
```js
    // 可以通过第三个参数type(布尔类型) 来选择是立刻执行还是延迟执行
    function debounce (fn, wait , type) {
        let timer 
        return function () {
            let that = this
            let arg = arguments
            if(timer){
                clearTimeout(timer)
            }
            if(!type){
                timer = setTimeout(()=>{
                    fn.apply(that, arg)
                }, wait)
            }else {
                if(!timer){
                    fn.apply(that, arg)
                }
                timer = setTimeout(()=>{
                    timer = null
                }, wait)
            }
            
        }
    }
```

## 在vue中使用防抖
* 导出方法
```js
    const _debounce = function(fn, wait , type) {
        // ...
    }
    export { _debounce }
    // 使用到的地方导入
    import { _dobounce } from "@/utils/public"

    methods: {
        fun:  _dobounce(function(){
            
        },200,true)
    }
```