<template>
    <div class="throttle-container">
        <div class="mdBox" v-html="mdHtml"></div>
        <h4 style="margin-top:15px;color: #555;">以下示例使用了鼠标移动事件mousemove，让里面数字++</h4>
        <div @mousemove="foo(count)" class="shili">
            {{ count }}
        </div>
    </div>
</template>

<script>
import showdown from 'showdown';
import { _throttle } from '../utils/public.js';
export default {
    name: "throttle",
    data () {
        return {
            mdHtml: "",
            count: 0,
            type: true
        }
    },
    methods: {
        foo: _throttle(function (n) {
            n++
            this.count = n
            console.log(n)
        }, 1000)
    },
    created () {
        let converter = new showdown.Converter();
        this.axios.get('/md/throttle.md').then(res=>{
            this.mdHtml = converter.makeHtml(res.data)
        })
    }
}
</script>

<style scoped>
    .shili{
        width: 100%;
        height: 200px;
        background-color: rgb(90, 100, 231);
        color: aliceblue;
        margin: 20px 0;
        border-radius: 8px;
        text-align: center;
        line-height: 200px;
        font-size: 24px;
    }
</style>