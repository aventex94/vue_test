import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import './assets/scss/app.scss'


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
