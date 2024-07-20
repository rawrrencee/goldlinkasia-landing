import './assets/main.css'

import App from './App.vue'
import {ViteSSG} from "vite-ssg";
import router from "@/router/index.js";
// import {createApp} from "vue";

export const createApp = ViteSSG(
    // the root component
    App,
    // vue-router options
    { routes: router.getRoutes() },
)

// const app = createApp(App)
// app.use(router)
// app.mount('#app')