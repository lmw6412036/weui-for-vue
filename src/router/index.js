import Vue from 'vue'
import Router from 'vue-router'
import Index from "../pages/index.vue"
import Demo from "../pages/demo.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/demo',
      component: Demo
    }
  ]
})
