<template>
    <div class="reacteasy-container">
        <a href="./html/todoList.html">一个简单的react的 TodoList</a>
        <div v-if="showmdbox" class="loadingmdBox">
            <img src="http://hbimg.b0.upaiyun.com/611bb3198c03cfefea188d170f33f27f1611c8e8a3ea-o8nm2q_fw658">
        </div>
        <div v-else class="mdBox" v-html="mdHtml"></div>
    </div>
</template>

<script>
export default {
    name: "reacteasy",
    data () {
        return {
            mdHtml: '',
              showmdbox: true    
        }
    },
    created () {
        this.axios.get('/md/Reacteasy.md').then(res=>{
            this.mdHtml = this.converter.makeHtml(res.data)
            this.showmdbox = false
        })
    }
}
</script>

<style scoped>
    .loadingmdBox{
        width:100%;
    }
    .loadingmdBox>img{
        width: 100%;
    }
</style>