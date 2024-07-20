import './assets/main.css'

import App from './App.vue'
import {ViteSSG} from "vite-ssg";
import router from "@/router/index.js";

export const createApp = ViteSSG(
    // the root component
    App,
    // vue-router options
    { routes: router.getRoutes() },
)