import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue';
import TaskList from '../views/TaskList.vue';
import AddTask from '../views/AddTask.vue';
import CompletedTasks from '../views/CompletedTasks.vue';

const routes =[
  { path: '/', name: 'Home', component: Home },
  { path: '/tasks', name: 'TaskList', component: TaskList },
  { path: '/add-task', name: 'AddTask', component: AddTask },
  { path: '/completed', name: 'CompletedTasks', component: CompletedTasks },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

export default router
