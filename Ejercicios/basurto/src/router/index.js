import { createRouter, createWebHistory } from 'vue-router'
import AppVue from '../App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('../components/todosServicios.vue'),
    },
    {
      path: '/favoritos',
      component: () => import('../components/favoritos.vue'),
    },
    {
      path: '/serviciosVisibles',
      component: () => import('../views/ServiciosPublicos.vue'),
    },
    {
      path: '/serviciosFavs',
      component: () => import('../views/CuadroFavoritos.vue'),
    },
    {
      path: '/serviciosPabellon',
      component: () => import('../views/serviciosPabellon.vue'),
    }
  ],
})

export default router
