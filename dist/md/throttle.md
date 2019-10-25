# 函数节流

* 节流是指每隔一段时间只让事件执行一次
```js
    // 节流逻辑
    let timer
    // 刚开始进入判断 timer是undefined
    if(!itmer){
        // 立刻给timer赋值 之后的事件都不触发
        timer = setTimeOut(()=>{
            fn()
            timer = null // 1000后timer又改为null 能够继续触发
        },1000)
    }
```

## 封装
```js
    function throttle(fn, wait){
        let timer2 = null
        return function(){
            let that = this
            let arg = arguments
            if(!timer2){
                timer2 = setTimeout(()=>{
                    fn.apply(that, arg)
                    timer2 = null
                }, wait)
            }
        }
    }
```