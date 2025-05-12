import { defineStore } from 'pinia';
import Empleados from '../assets/Empleados.json'
export const useEmployeeStore = defineStore('useEmployeeStore', {
    state: () => ({
        empleados: Empleados
    }),
    getters:{
        salarioPromedio : (state) => {
            const salariosTotales = state.empleados.reduce((salarioTotal, empleado)=> salarioTotal+empleado.salary,0 )
            return salariosTotales / state.empleados.length;
        },
        empleadosDepartamento: (state) => {
            const departamentos = {};
            state.empleados.forEach(empleado => {
              if (departamentos[empleado.department]) {
                departamentos[empleado.department]++;
              } else {
                departamentos[empleado.department] = 1;
              }
            });
            return departamentos;
        },

        empleadosTotales: (state) => {
            return state.empleados.length
        }
    },
    actions:{
        addEmpleado(empleado){
            this.empleados.push(empleado)
            console.log(this.empleados)
        },
        borrarEmpleado(Id){
            this.empleados = this.empleados.filter((empleado) => empleado.id != Id) 
        }
    }
})