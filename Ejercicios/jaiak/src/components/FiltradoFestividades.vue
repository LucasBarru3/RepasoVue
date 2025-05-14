<script setup>
import { ref, computed } from 'vue'
import { usefestividadStore } from '@/stores/festividadStore.js'

const pinia = usefestividadStore()

// Estado local del filtro
const municipioSeleccionado = ref('')

// Computar lista única de municipios
const municipiosDisponibles = computed(() => {
  const todos = pinia.festividades.map(f => f.municipio)
  return [...new Set(todos)].sort()
})

// Computar festividades filtradas por municipio
const festividadesFiltradas = computed(() => {
  if (!municipioSeleccionado.value) return pinia.festividades
  return pinia.festividades.filter(f => f.municipio === municipioSeleccionado.value)
})
</script>

<template>
  <div>
    <label for="municipio">Filtrar por municipio:</label>
    <select id="municipio" v-model="municipioSeleccionado">
      <option value="">Todos</option>
      <option v-for="municipio in municipiosDisponibles" :key="municipio" :value="municipio">
        {{ municipio }}
      </option>
    </select>

    <ul>
      <li v-for="festividad in festividadesFiltradas" :key="festividad.id">
        {{ festividad.nombre }} - {{ festividad.municipio }} - {{ festividad.fecha }}
      </li>
    </ul>
  </div>
</template>
