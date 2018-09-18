// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import axios from "axios"
import vueResource from 'vue-resource';

Vue.config.productionTip = false
Vue.prototype.$http = axios; // 通过原型链的方式可以在任何组件下调用axios
Vue.use(vueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
