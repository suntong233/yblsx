<template>
    <div class="debounce-container">
        <div class="mdBox" v-html="mdHtml"></div>
    </div>
</template>

<script>
import showdown from 'showdown'
export default {
    name: "debounce",
    data () {
        return {
            mdHtml: ""      
        }
    },
    created () {
        let converter = new showdown.Converter();
        this.axios.get('/md/debounce.md').then(res=>{
            this.mdHtml = converter.makeHtml(res.data)
        })
    }
}
</script>

<style scoped>
    
</style>