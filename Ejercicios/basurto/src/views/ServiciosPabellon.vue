<script setup>
import { onMounted, ref, computed } from 'vue'
import { serviciosStore } from '@/stores/serviciosStore.js'

const pinia = serviciosStore()

onMounted(() => {
  pinia.cargarServicios?.()
})

// Estado local del filtro
const pabellonSeleccionado = ref('')

// Computar lista única de municipios
const pabellonDisponibles = computed(() => {
  const todos = pinia.servicios.map(s => s.ENTRADA)
  return [...new Set(todos)].sort()
})

// Computar festividades filtradas por municipio
const servicioFiltradas = computed(() => {
  if (!pabellonSeleccionado.value) return pinia.servicios
  return pinia.servicios.filter(s => s.ENTRADA === pabellonSeleccionado.value)
})
</script>

<template>
  <h1>Hospital Basurto</h1>
    <div>
    <label for="pabellon">Filtrar por Pabellon:</label>
    <select id="pabellon" v-model="pabellonSeleccionado">
      <option value="">Todos</option>
      <option v-for="pabellon in pabellonDisponibles" :key="pabellon" :value="pabellon">
        {{ pabellon }}
      </option>
    </select>

    <ul>
      <li v-for="(servicio,index) in servicioFiltradas" :key="index">
        {{ servicio.SERVICIO }} - {{ servicio.ENTRADA }} - {{ servicio.ICONO }}
      </li>
    </ul>
  </div>
</template>
