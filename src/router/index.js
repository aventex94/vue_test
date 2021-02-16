import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Error from '../components/modules/Error'
Vue.use(VueRouter)

const routes = [
  
  { path: '/', name: 'Home', component: Home },
  { path: '/*', name:'Error', component: Error },
  

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})


export default router