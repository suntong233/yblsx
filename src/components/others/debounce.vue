<template>
    <div class="debounce-container">
        <div v-if="showmdbox" class="loadingmdBox">
            <img src="http://hbimg.b0.upaiyun.com/611bb3198c03cfefea188d170f33f27f1611c8e8a3ea-o8nm2q_fw658">
        </div>
        <div v-else class="mdBox" v-html="mdHtml"></div>
        <h4 style="margin-top:15px;color: #555;">以下示例使用了鼠标移动事件mousemove，让里面数字++ ,不用防抖</h4>
        <div @mousemove="foo2()" class="shili">
            {{ count1 }}
        </div>
        <h4 style="margin-top:15px;color: #555;">以下示例使用了鼠标移动事件mousemove，让里面数字++, 用防抖</h4>
        <div @mousemove="foo(count)" class="shili">
            {{ count }}
        </div>
    </div>
</template>

<script>
import { _debounce } from '../../utils/public.js';
export default {
    name: "debounce",
    data () {
        return {
            mdHtml: "",
            count: 0,
            count1: 0,
            type: true,
            showmdbox: true
        }
    },
    methods: {
        foo2(){
            this.count1++
        },
        foo: _debounce(function (n) {
            n++
            this.count = n
        }, 200, true)
    },
    created () {
        this.axios.get('/md/debounce.md').then(res=>{
            this.mdHtml = this.converter.makeHtml(res.data)
            this.showmdbox = false
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
    .loadingmdBox{
        width:100%;
    }
    .loadingmdBox>img{
        width: 100%;
    }
</style>