import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from './components/Home.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: 'home',
            path: '/',
            component: HomePage
        }
    ]
})


export default router