import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue';
import ProductList from '../components/ProductList.vue';
import ProductDetails from '../components/ProductDetails.vue';
import AddProduct from '../components/AddProduct.vue';

//Podemos crear las rutas de dosmaneras diferentes
//1. Crear un array de objetos con las rutas
const routes = [
  {path: '/', component: Home},
  { path: '/ProductList', component: ProductList },
  { path: '/product/:id', component: ProductDetails, props: true },
  { path: '/add', component: AddProduct },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});


//2. Crear el objeto de rutas directamente en el createRouter
  /* const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
  }) */

export default router
