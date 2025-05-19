<script setup>
import { onMounted, ref, computed } from 'vue'
import { serviciosStore } from '@/stores/serviciosStore.js'

const pinia = serviciosStore()

onMounted(() => {
  pinia.cargarServicios?.()
})
</script>

<template>
  <h1>Hospital Basurto</h1>
  <h4>Total de favoritos {{ pinia.getTotalFavs }}</h4>
  <table>
    <thead>
      <tr>
        <th>Icono</th>
        <th>Servicio</th>
        <th>Pabellón</th>
        <th>Visible</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(servicio,index) in pinia.getServiciosFavs" :key="index">
        <td><img :src="servicio.ICONO" :alt="servicio.SERVICIO" width="32" /></td>
        <td>{{ servicio.SERVICIO }}</td>
        <td>{{ servicio.ENTRADA }}</td>
      </tr>
    </tbody>
  </table>
</template>
