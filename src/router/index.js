import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

export const ROUTES = {
    HOME: '/',
    ABOUT: '/about',
    BRANDS: '/brands',
    CAREERS: '/careers',
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: ROUTES.HOME,
            name: 'home',
            component: HomeView
        },
        {
            path: ROUTES.ABOUT,
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue')
        },
        {
            path: ROUTES.CAREERS,
            name: 'careers',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/CareersView.vue')
        },
    ]
})

export default router
