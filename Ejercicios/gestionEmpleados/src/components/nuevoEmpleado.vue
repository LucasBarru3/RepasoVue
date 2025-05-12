<script setup>
import {ref} from 'vue'
import { useEmployeeStore } from '../store/pinia'
const pinia = useEmployeeStore()
const nombre = ref('')
const departamento = ref('')
const salario = ref('')

function addEmpleado(){
    const empleado = {
        id: Date.now(),
        name: nombre.value,
        department: departamento.value,
        salary: Number(salario.value)
    }
    pinia.addEmpleado(empleado)
}
</script>

<template>
<h1>Nuevo Empleado</h1>
<form @submit.prevent="addEmpleado()">
    <input type="text" v-model="nombre" placeholder="Nombre">
    <input type="" v-model="departamento" placeholder="Dept">
    <input type="text" v-model="salario" placeholder="Sal">
    <input type="submit">
</form>
</template>

<style scoped>

</style>
