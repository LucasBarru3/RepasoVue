<script setup>
import {ref} from 'vue'
import { useEmployeeStore } from '../store/pinia';
const pinia = useEmployeeStore()

</script>

<template>
<h2>Salario Promedio: {{ pinia.salarioPromedio }}</h2>
<h3>Empleados por Departamento: </h3>
<ul>
    <li v-for="(count, departamento) in pinia.empleadosDepartamento" >
        <span>Departamento: {{departamento}} : {{ count }}</span>
    </li>
</ul>
<p>Empleados Totales: {{ pinia.empleadosTotales }}</p>
</template>

<style scoped>

</style>
