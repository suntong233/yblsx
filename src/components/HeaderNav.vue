<template>
<div style="height:42px;">
  <div :class="{HeaderNavcontainerflow0: type === 0,HeaderNavcontainerflow1: type === 1}" class="HeaderNav-container">
      <div class="HeaderNav-container-box">
            <router-link :class="{actived:$route.path == '/'}" class="HeaderNav-routerlink" to="/">Home</router-link>
            <router-link :class="{actived:$route.path == '/Js'}" class="HeaderNav-routerlink" to="/Js">Js</router-link>
            <router-link :class="{actived:$route.path == '/Css'}" class="HeaderNav-routerlink" to="/Css">Css</router-link>
            <router-link :class="{actived:$route.path == '/Vue'}" class="HeaderNav-routerlink" to="/Vue">Vue</router-link>
            <router-link :class="{actived:$route.path == '/React'}" class="HeaderNav-routerlink" to="/React">React</router-link>
            <router-link :class="{actived:$route.path == '/Others'}" class="HeaderNav-routerlink" to="/Others">Others</router-link>
      </div>
  </div>
</div>
</template>

<script>
export default {
    name: "HeaderNav",
    data () {
        return {
            type: "",
            differ: -10
        }
    },
    methods: {
        handleChangeType(){
            if(this.differ !== -10){
                if(this.differ > document.documentElement.scrollTop){
                    this.type = 0
                }else{
                    this.type = 1
                }
            }
            if(document.documentElement.scrollTop == 0){
                this.type = ""
            }
            this.differ = document.documentElement.scrollTop
        }
    },
    created () {
        window.scrollTo(0, 0);
        window.addEventListener("scroll", this.handleChangeType, false);
    },
    destroyed () {
        window.removeEventListener("scroll", this.handleChangeType, false);
    }
}
</script>

<style scoped>
    .HeaderNav-container{
        position: fixed;
        background-color: #fff;
        height: 42px;
        width: 100%;
        display: flex;
        align-items: center;
        overflow: hidden;
        transition: 500ms linear;
        overflow: auto;
    }
    .HeaderNav-container::-webkit-scrollbar{
        display: none;
    }
    .HeaderNav-container-box{
        width: auto;
        padding: 0 10px;
        margin: 0 auto;
    }
    @media only screen and (max-width: 380px) {
        .HeaderNav-routerlink {
            margin: 0 2px;
            background: rgb(101, 111, 252);
            padding: 3px 12px;
            color: azure;
            border-radius: 4px; 
        }
    }
    @media only screen and (min-width: 380px) {
        .HeaderNav-routerlink {
            margin: 0 5px;
            background: rgb(101, 111, 252);
            color: azure;
            padding: 5px 20px;
            border-radius: 4px; 
        }
    }
    .HeaderNavcontainerflow0{
        height: 42;
        animation: showBox 500ms ease;
    }
    .HeaderNavcontainerflow1{
        height: 0;
        animation: hiednBox 500ms ease;
    }
    @keyframes hiednBox{
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    @keyframes hiednBox{
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
    .actived{
        background: rgb(185, 168, 111);
    }
</style>