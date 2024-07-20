import {createMemoryHistory, createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

export const ROUTES = {
    HOME: '/',
    ABOUT: '/about',
    BRANDS: '/brands',
    SHOP: '/shop',
    STORES: '/stores',
    CAREERS: '/careers',
}

const isServer = typeof window === 'undefined';
const history = isServer
    ? createMemoryHistory(import.meta.env.BASE_URL)
    : createWebHistory(import.meta.env.BASE_URL);

const routerOptions = {
    history: history,
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
            path: ROUTES.BRANDS,
            name: 'brands',
            component: () => import('../views/BrandsView.vue')
        },
        {
            path: ROUTES.SHOP,
            name: 'shop',
            component: () => import('../views/ShopView.vue')
        },
        {
            path: ROUTES.STORES,
            name: 'stores',
            component: () => import('../views/StoresView.vue')
        },
        {
            path: ROUTES.CAREERS,
            name: 'careers',
            component: () => import('../views/CareersView.vue')
        },
    ],
    scrollBehavior() {
        // always scroll to top
        return {top: 0}
    },
}

const router = createRouter(routerOptions);

export default router
