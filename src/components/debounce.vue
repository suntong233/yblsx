<template>
    <div>
        <div v-html="mdHtml"></div>
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
        this.axios.get('/journal.md').then(res=>{
            this.mdHtml = converter.makeHtml(res.data)
        })
    }
}
</script>

<style scoped>

</style>