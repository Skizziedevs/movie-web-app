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
        hideNavbar: false,
    }},
    {path: '/signup', component: Signup, meta: {
        hideNavbar: false,
    }},
    {path: '/login', component: Login,  meta: {
        hideNavbar: true,
    }},
    {path: '/home', component: Home, meta: {
        hideNavbar: true,
    } },
    {path: '/movies', component: Movies },
    {path: '/tvseries', component: Tvseries },
    {path: '/bookmarked', component: Bookmarked },
   

]


const router = createRouter({
    history: createWebHistory(),
    routes,
})
export default router