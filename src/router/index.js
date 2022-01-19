import Vue from 'vue'
import VueRouter from 'vue-router'
import CatList from "@/components/CatList";
import CatHeader from "@/components/CatHeader";
import DownLoad from "@/components/DownLoad";

Vue.use(VueRouter)

const routes = [
    {
        path: '/download',
        name: 'DownLoad',
        component: DownLoad
    },
    {
        path: '/',
        name: 'catHeader',
        component: CatHeader
    },
    {
        path: '/cat-list',
        name: 'CatList',
        component: CatList
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
