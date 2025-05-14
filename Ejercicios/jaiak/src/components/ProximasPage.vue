<script setup>
import {ref, onMounted } from 'vue'
import {usefestividadStore} from '@/stores/festividadStore.js'
const pinia = usefestividadStore()
onMounted(() => {
  pinia.cargarFestividades()
})
</script>
<template>
<div>
  <h2>Próximas Festividades</h2>
  <ul>
    <li v-for="festividad in pinia.getProximasFestividades" :key="festividad.fecha">
      {{ festividad.nombre }} - {{ festividad.fecha }}
    </li>
  </ul>
</div>
</template>
