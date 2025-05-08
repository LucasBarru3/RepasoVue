import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../components/HomeComponent.vue'
import ProductList from '../components/ProductList.vue'
import ProductDetail from '../components/ProductDetail.vue'
// import AddProduct from '../components/AddProduct'

const routes = [
  {
    path: '/',
    component: HomeComponent
  },
  {
    path: '/productList',
    component: ProductList
  },
  {
    path: '/ProductDetail/id',
    component: ProductDetail,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router