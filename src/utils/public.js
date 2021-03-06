const _debounce = function(fn, wait , type) {
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

const _throttle = function(fn, wait){
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

const _saveLocal = function(name, data){
    if(localStorage[name]){
        localStorage[name] = JSON.stringify(data)
    }else{
        localStorage.setItem(name, JSON.stringify(data))
    }
}
export {_debounce, _throttle, _saveLocal}