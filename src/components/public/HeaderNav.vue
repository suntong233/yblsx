<template>
  <div style="height:42px;">
    <div
      :class="{HeaderNavcontainerflow0: type === 0,HeaderNavcontainerflow1: type === 1}"
      class="HeaderNav-container"
    >
      <div class="HeaderNav-container-box">
        <router-link
          v-for="item in navlist"
          :key="item.title"
          :class="{actived:$route.path == item.path}"
          class="HeaderNav-routerlink"
          :to="item.path"
        >{{item.title}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderNav",
  data() {
    return {
      type: "",
      differ: -10,
      navlist: [
        {
          title: "Home",
          path: "/"
        },
        {
          title: "Js",
          path: "/Js"
        },
        {
          title: "Css",
          path: "/Css"
        },
        {
          title: "Vue",
          path: "/Vue"
        },
        {
          title: "React",
          path: "/React"
        },
        {
          title: "Others",
          path: "/Others"
        },
        {
          title: "Nodejs",
          path: "/Nodejs"
        },
        {
          title: "技术拾遗",
          path: "/TechnologyReview"
        }
      ]
    };
  },
  methods: {
    handleChangeType() {
      if (this.differ !== -10) {
        if (this.differ > document.documentElement.scrollTop) {
          this.type = 0;
        } else {
          this.type = 1;
        }
      }
      if (document.documentElement.scrollTop == 0) {
        this.type = "";
      }
      this.differ = document.documentElement.scrollTop;
    }
  },
  created() {
    window.scrollTo(0, 0);
    window.addEventListener("scroll", this.handleChangeType, false);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleChangeType, false);
  }
};
</script>

<style scoped>
.HeaderNav-container {
  position: fixed;
  background-color: rgb(255, 255, 255);
  height: 42px;
  width: 100%;
  flex-wrap: nowrap;
  align-items: center;
  transition: 500ms linear;
  overflow: auto;
  display: flex;
  align-items: center;
  z-index: 100;
}
.HeaderNav-container::-webkit-scrollbar {
  display: none;
}
.HeaderNav-container-box {
  display: flex;
  align-items: center;
  width: auto;
  margin: 0 auto;
  padding: 0 10px;
}
@media only screen and (max-width: 380px) {
  .HeaderNav-routerlink {
    margin: 0 2px;
    background: rgb(101, 111, 252);
    padding: 3px 12px;
    color: azure;
    white-space: nowrap;
    border-radius: 4px;
  }
}
@media only screen and (min-width: 380px) {
  .HeaderNav-routerlink {
    margin: 0 5px;
    background: rgb(101, 111, 252);
    color: azure;
    padding: 5px 20px;
    white-space: nowrap;
    border-radius: 4px;
  }
}
.HeaderNavcontainerflow0 {
  height: 42;
  animation: showBox 500ms ease;
}
.HeaderNavcontainerflow1 {
  height: 0;
  animation: hiednBox 500ms ease;
}
@keyframes hiednBox {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes hiednBox {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.actived {
  background: rgb(185, 168, 111);
}
</style>