import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/home.vue'
import estadisticas from '@/views/estadisticas.vue'
import detalleLibros from '@/views/detalleLibros.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/estadisticas',
      name: 'estadisticas',
      component: estadisticas,
    },
    {
      path: '/detalleLibro/:id',
      component: detalleLibros,
      props: true // Se pone props porque se pasa el dato del padre al hijo
    }, 
  ],
})

export default router
