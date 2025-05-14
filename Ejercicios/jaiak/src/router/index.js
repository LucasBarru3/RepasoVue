import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import ProximasPage from '../components/ProximasPage.vue'
import EstadisticasPage from '../components/EstadisticasPage.vue'
import FiltradoFestividades from '@/components/FiltradoFestividades.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/proximas',
      name: 'proximas',
      component: ProximasPage,
    },
    {
      path: '/estadisticas',
      name: 'estadisticas',
      component: EstadisticasPage,
    },
    {
      path: '/filtrado',
      component: FiltradoFestividades,
    }
  ],
})

export default router
