<template>
  <div>
    <h2>函数柯里化</h2>
    <h4>在数学和计算机科学中，柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。</h4>
    <h4>用闭包把参数保存起来，当参数足够执行函数时执行</h4>
    <h4>考虑以代码</h4>
    <div style="padding-left:20px">
      function (a,b,c,d){
      <br />console.log(a,b,c,d)
      <br />}
      <br />foo(1,2) -> 1,2,undefined,undefined
      <br />
      <p>现在将它柯里化</p>let foo2 = currying(foo) <br>
       foo2(1)(2)(3)(4)  -> 1,2,3,4
    </div>
    <div>以上是我们想要实现的结果</div>
    <div>现在就来尝试一步步实现它</div>
    <div class="mdBox">
        <pre>
        function foo (a,b,c,d){
            console.log(a,b,c,d)
        } // 现在有这样的函数

        // 定义一个柯里化函数 它应该接收一个回调 和参数
        function currying(fn, ...args){
            // 当输入参数长度大于等于fn的参数长度时 fn.length
            if(args.length >= fn.length){
                return fn(...args)
            }else{
                // 否则递归返回一个新柯里函数
                return (args) => currying(fn, ...args, ...args2)
            }
        }
        const foo2 = currying(foo)
        // 现在使用它试试

         foo2(1)(2)(3)(4)  -> 1,2,3,4

         // 这样柯里化就完成啦
        </pre>
    </div>
  </div>
</template>

<script>
export default {
  name: "FunCurrying",
  data() {
    return {};
  },
  methods: {
    foo(a, b, c, d) {
      console.log(a, b, c, d);
    },

    currying(fn,...args) {
        if (args.length >= fn.length) {
          return fn(...args);
        } else {
          return (...args2) => this.currying(fn, ...args, ...args2);
        }
    }
  },
  mounted() {
      const foo2 = this.currying(this.foo)
      foo2(1)(2)(3)(4)
  }
};
</script>

<style scoped>
</style>