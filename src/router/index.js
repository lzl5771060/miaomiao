import { createRouter, createWebHistory } from 'vue-router'
import movieRouter from "./movie"
import cinimaRouter from "./cinima"
import mineRouter from "./mine"
const routes = [

    {
        path: "/movie",
        redirect: "/movie/nowplaying"
    },
    {
        path: "/cinima",
        redirect: "/cinima/allcity"
    },
    {
        path: "/mine",
        redirect: "/mine/login"
    },
    movieRouter,
    cinimaRouter,
    mineRouter,
    {
        path: "/:pathMatch(.*)",
        redirect: "/movie/nowplaying"
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router