import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import custom from '@/components/customization'
import products from '@/components/product'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/customization',
      name: 'customization',
      component: custom
    },
    {
      path: '/product',
      name: 'product',
      component: products
    }
  ]
})
