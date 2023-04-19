import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import AddCategory from '../views/Category/AddCategory.vue'

const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/category/add",
        name: "AddCategory",
        component: AddCategory
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;