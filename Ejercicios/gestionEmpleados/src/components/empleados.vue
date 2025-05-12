<script setup>
import {ref, computed} from 'vue'
import { useEmployeeStore } from '../store/pinia';
const pinia = useEmployeeStore()
const filtro = ref('')
const filtrado = computed(() => {
    return pinia.empleados.filter(empleado => empleado.department.toLowerCase().includes(filtro.value.toLowerCase()))
})
const borrarEmpleado= (Id)=>{
    pinia.borrarEmpleado(Id)
}
</script>

<template>
<input type="text" v-model="filtro">
<ul>
    <li v-for="empleado in filtrado" :key="empleado.id">
        <span>{{ empleado.name }}</span> <span>{{empleado.department}}</span><span>{{ empleado.salary }}</span>
        <button @click="borrarEmpleado(empleado.id)">Borrar Empleado</button>
    </li>
</ul>
</template>

<style scoped>

</style>
