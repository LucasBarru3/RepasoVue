<script setup>
import { onMounted, ref, computed } from 'vue'
import { serviciosStore } from '@/stores/serviciosStore.js'

const pinia = serviciosStore()

onMounted(() => {
 pinia.cargarServicios()
})
</script>
<template>
    Total de servicios: {{ pinia.servicios.length }}
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
      <tr v-for="(servicio,index) in pinia.servicios" :key="index">
        <td><img :src="servicio.ICONO" :alt="servicio.SERVICIO" width="32" /></td>
        <td>{{ servicio.SERVICIO }}</td>
        <td>{{ servicio.ENTRADA }}</td>
        <td>
          <button @click="pinia.toggleFavorito(index, servicio)">
            {{ pinia.esFav(index) ? '❤️' : '♡' }}
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>