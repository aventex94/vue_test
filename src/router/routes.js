import Home from '../views/Home'
import Login from '../views/Login'
import Profile from '../views/Profile'
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
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        meta: { requiresAuth: true },
    },
    { path: '*', redirect: { name: 'Home' } },
]

export { routes }
