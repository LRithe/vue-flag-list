import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import VueFlagList from '@/components/Vue-Flag-List.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/flag',
      name: 'flag',
      component: VueFlagList
    }
  ]
})
