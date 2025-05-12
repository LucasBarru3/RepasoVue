import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import QuestionPage from '@/views/QuestionPage.vue';
import ResultPage from '@/views/ResultPage.vue';

const routes = [
  { path: '/', component: HomePage },
  { path: '/questions', component: QuestionPage },
  { path: '/results', component: ResultPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
