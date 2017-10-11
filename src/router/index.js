import Vue from 'vue'
import Router from 'vue-router'
import VueFlagList from '@/components/Vue-Flag-List.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'flag',
      component: VueFlagList
    }
  ]
})
