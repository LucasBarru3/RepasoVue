import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import Homeview from '@/views/Homeview.vue'
import AboutView from '@/views/AboutView.vue'
import ExamenView from '@/views/ExamenView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/SegundaParte',
      component: Homeview
    },
    {
      path :'/About',
      component: AboutView
    },
    {
      path: '/Examen',
      component: ExamenView
    }
  ],
})

export default router
