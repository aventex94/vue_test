import Home from '../views/Home'
import Login from '../views/Login'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: { requiresAuth: true },
    },

    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    { path: '*', redirect: { name: 'Home' } },
]

export { routes }
