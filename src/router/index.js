import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import store from '../store'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

let isAuthenticated = store.getters.isAuth;

router.beforeEach((to, from, next) => {
  if (to.name == 'Login' && isAuthenticated) {
    next(from)
  }
  else if (to.matched.some((record) => record.meta.requiresAuth) && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
})

export default router