import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import ProductList from '../components/ProductList.vue';
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/productList',
        component: ProductList
    }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router