import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import AddCategory from '../views/Category/AddCategory.vue'
import Category from '../views/Category/Category.vue'

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
    },
    {
        path: "/category/list",
        name: "Category",
        component: Category
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;