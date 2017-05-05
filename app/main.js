import Vue from 'vue'
import App from './App'
import router from './routers'
import store from './vuex'
/* eslint-disable no-new */
const app = new Vue({
  router,
  store
}).$mount('#app')
