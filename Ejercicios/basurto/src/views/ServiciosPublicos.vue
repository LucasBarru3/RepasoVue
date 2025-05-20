<script setup>
import { onMounted, ref, computed } from 'vue'
import { serviciosStore } from '@/stores/serviciosStore.js'

const pinia = serviciosStore()

onMounted(() => {
 pinia.cargarServicios()
})

const filtro = ref('')

const filtrado = computed(() =>
  pinia.getServiciosVisibles          // array filtrado del getter
    .filter(s => {
      // `s.SERVICIO` podría ser undefined hasta que llegue la respuesta
      const nombre = s.SERVICIO.toString().toLowerCase() || ''
      return nombre.includes(filtro.value.toLowerCase())
    })
)
</script>

<template>
  <h1>Hospital Basurto</h1>
  Total de servicios: {{ pinia.getServiciosVisibles.length }}
  <input type="text" v-model="filtro" placeholder="Buscar servicio…" />
 
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
      <tr v-for="(servicio,index) in filtrado" :key="index">
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
