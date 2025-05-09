import { createRouter, createWebHistory} from 'vue-router'
import Home from '../components/Home.vue'
import AdminTareas from '../components/AdminTareas.vue'
import AddTarea from '../components/AddTarea.vue'
import TareasCompletadas from '../components/TareasCompletadas.vue'
const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/adminTareas',
        component: AdminTareas
    },
    {
        path: '/addTarea',
        component: AddTarea
    },
    {
        path: '/tareasCompletadas',
        component: TareasCompletadas
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router