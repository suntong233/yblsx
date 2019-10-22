import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'home',
    component: () => import("@/views/Home.vue")
  },
  {
    path: '/js',
    name: 'Js',
    component: () => import("@/views/Js.vue")
  },
  {
    path: '/Css',
    name: 'Css',
    component: () => import("@/views/Css.vue")
  },
  {
    path: '/Vue',
    name: 'Vue',
    component: () => import("@/views/Vue.vue")
  },
  {
    path: '/React',
    name: 'React',
    component: () => import("@/views/React.vue")
  },
  {
    path: '/Others',
    name: 'Others',
    component: () => import("@/views/Others.vue")
  }
]

const router = new VueRouter({
  routes
})

export default router
