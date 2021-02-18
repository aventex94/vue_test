import Home from '../views/Home'
import Login from '../views/Login'
import Profile from '../views/Profile'
import Users from '../views/Users'
import Roles from '../views/Roles'
import Actions from '../views/Actions'
const routes = [
    {
        path: '/home',
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
    {
        path: '/users',
        name: 'Users',
        component: Users,
        meta: { requiresAuth: true },
    },
    {
        path: '/roles',
        name: 'Roles',
        component: Roles,
        meta: { requiresAuth: true },
    },
    {
        path: '/actions',
        name: 'Actions',
        component: Actions,
        meta: { requiresAuth: true },
    },
    { path: '*', redirect: { name: 'Home' } },
]

export { routes }
