import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

axios.defaults.baseURL = process.env.VUE_APP_API_URL
axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers['Authorization'] = `Bearer ${store.getters.token}`;

new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
