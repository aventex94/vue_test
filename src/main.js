import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import vuetify from './plugins/vuetify.js'

Vue.config.productionTip = false

axios.defaults.baseURL = process.env.VUE_APP_API_URL
axios.defaults.headers['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers['Authorization'] = `Bearer ${store.getters.token}`;
axios.defaults.headers['Content-Type'] = "application/json";

new Vue({
  render: h => h(App),
  vuetify,
  router,
  store
}).$mount('#app')
