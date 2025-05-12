import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../components/HomePage.vue'
import QuestionPage from '@/components/QuestionPage.vue'
import ResultPage from '../components/ResultPage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/questions',
      name: 'Questions',
      component: QuestionPage
    },
    {
      path: '/results',
      component: ResultPage
    }
  ],
})

export default router
