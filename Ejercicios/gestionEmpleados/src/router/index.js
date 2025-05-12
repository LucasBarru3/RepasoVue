import { createRouter, createWebHistory} from 'vue-router'
import Home from '../components/home.vue'
import Empleados from '../components/empleados.vue'
import Estadisticas from '../components/estadisticas.vue'
import NuevoEmpleado from '../components/nuevoEmpleado.vue'

const routes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/empleados',
        component: Empleados
    },
    {
        path: '/estadisticas',
        component: Estadisticas
    },
    {
        path: '/addEmpleado',
        component: NuevoEmpleado
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router