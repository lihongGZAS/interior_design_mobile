import Vue from 'vue'
import Router from 'vue-router'
import headerDiv from '@/components/header'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'headerDiv',
      // component: headerDiv
    },
  ]
})
