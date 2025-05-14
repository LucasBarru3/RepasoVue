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
    <h2>Estadísticas</h2>
    <p>Total de festividades: {{ pinia.getTotalFestividades }}</p>
    <span>Festividades Asistidas: {{ pinia.getFestividadesAsistidas }}</span>
    <p>Municipios que tienen más de una festividad: </p>
    <ul>
      <li v-for="municipio in pinia.getMunicipiosmasFestividades" :key="municipio">
        {{ municipio }}
      </li>
    </ul>
  </div>
</template>
