<template>
    <div class="Catalog-container">
        <div  class="Catalog-box">
            <div @click="handleChange(item.name)" class="Catalog-item" :class="{isshowitem: arrowd === 'bottom',showitem: nowItem == item.name}" v-for="item in cataloglist" :key="item.name">{{ item.name }}</div>
            <span @click="showhidenitem" class="hiden-Catalogitem">
                <img v-if="arrowd == 'top'" style="width:20px;" src="/img/箭头向上.png">
                <img v-else style="width:20px;" src="/img/箭头向下.png">
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: "Catalog",
    props: {
        cataloglist:{
            type: Array,
            default(){
                return [1,2,3,4,5]
            }
        }
    },
    data () {
        return {
            arrowd: "top",
            nowItem: this.cataloglist[0].name
        }
    },
    methods: {
        showhidenitem(){
            if(this.arrowd === "top"){
                this.arrowd = "bottom"
            } else {
                this.arrowd = "top"
            }
        },
        handleChange(name){
            this.nowItem = name
            this.$emit("handleChange", name)
        }
    },
    created () {
    }
}
</script>

<style scoped>
    .Catalog-container{
        width: 100%;
    }
    .Catalog-box{
        border: 1px solid rgb(187, 198, 228);
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        background-color: rgb(250,250,250);
        color: #666;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }
    .Catalog-item{
        width: 90%;
        cursor: pointer;
        user-select: none;
        padding: 3px 5px;
        transition: 500ms linear;
        text-align: center;
        border-bottom: 1px solid rgb(154, 167, 206);
    }
    .Catalog-item:nth-last-of-type(1){
        border:none;
    }
    .isshowitem{
        padding: 0;
        height: 0;
        border: none;
        overflow: hidden;
        transition: 500ms linear;
    }
    .showitem{
        color: blueviolet;
    }
    @media only screen and (min-width: 480px) {
        .Catalog-box{
            position: fixed;
            top: 120px;
            left: 120px;
            width: 160px;
            padding: 10px;
        }
    }
    @media only screen and (max-width: 480px) {
        .hiden-Catalogitem{
            text-align: center;
            width: 100%;
        }
       .Catalog-box{
           position: fixed;
           width: 100%;
            top: 42px;
       }
    }
</style>