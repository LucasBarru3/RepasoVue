import { createRouter, createWebHistory } from 'vue-router'
import HomeComponent from '../components/HomeComponent.vue'
import ProductList from '../components/ProductList.vue'
import ProductDetail from '../components/ProductDetail.vue'
import AddProduct from '../components/AddProduct.vue'

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
    path: '/ProductDetail/:id',
    component: ProductDetail,
    props: true
  },
  {
    path: '/AddProduct',
    component: AddProduct,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router