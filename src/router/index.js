import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../components/Layout.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Movies from '../views/Movies.vue'
import Tvseries from '../views/Tvseries.vue'
import Bookmarked from '../views/Bookmarked.vue'


const routes =[
    {path: '/', component: Layout , 
    meta: {
        hideNavbar: true,
    }},
    {path: '/signup', component: Signup, meta: {
        hideNavbar: true,
    }},
    {path: '/login', component: Login,  meta: {
        hideNavbar: true,
    }},
    {path: '/home', component: Home, meta: {
        hideNavbar: false,
    } },
    {path: '/movies', component: Movies, meta: {
        hideNavbar: false,
    } },
    {path: '/tvseries', component: Tvseries, meta: {
        hideNavbar: false,
    } },
    {path: '/bookmarked', component: Bookmarked, meta: {
        hideNavbar: false,
    } },
   

]


const router = createRouter({
    history: createWebHistory(),
    base: process.env.BASE_URL,
    routes,
})
export default router