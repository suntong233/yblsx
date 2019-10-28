<template>
    <div>
        <HeaderNav />
        node
    </div>
</template>

<script>
import HeaderNav from "../components/public/HeaderNav"; // 引入顶部组件
import Catalog from "../components/public/Catalog"; // 引入目录组件

const components = {
    HeaderNav,
    Catalog
}
export default {
    name: 'node',
    data () {
        return {
            
        }
    },
    created () {
        
    },
    methods: {
        
    },
    components
}
</script>

<style scoped>

</style>