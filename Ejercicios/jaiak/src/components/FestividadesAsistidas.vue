<script setup>
import {ref, onMounted, computed } from 'vue'
import {usefestividadStore} from '@/stores/festividadStore.js'
const pinia = usefestividadStore()
onMounted(() => {
  pinia.cargarFestividades()
})

</script>

<template>
<ul>
  <li v-for="festividad in pinia.getFestividadesAsistidas" :key="festividad.id">
    <span>ID: {{ festividad.id }} </span>
    <span> Nombre: {{festividad.nombre}} </span>
    <span> Municipio: {{festividad.municipio}} </span>
    <span> Fecha: {{festividad.fecha}} </span>
    Asistido: <input type="checkbox" :checked="festividad.asistido" @change="pinia.cambiarAsistido(festividad.id)"/>
    <button @click="pinia.borrarFestividad(festividad.id)">Borrar</button>
  </li>
</ul>
</template>
