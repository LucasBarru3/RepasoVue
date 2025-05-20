<script setup>
import {ref, onMounted, computed } from 'vue'
import {usefestividadStore} from '@/stores/festividadStore.js'
const pinia = usefestividadStore()
onMounted(() => {
  pinia.cargarFestividades()
})
const filtro = ref('')
const nombre = ref('')
const municipio = ref('')
const fecha = ref('')
const asistido = ref(false)
const filtrado = computed(() =>
  pinia.festividades          // array filtrado del getter
    .filter(f => {
      const nombre = f.nombre.toString().toLowerCase() || ''
      return nombre.includes(filtro.value.toLowerCase())
    })
)

function añadirServicio() {
  if (nombre.value && municipio.value && fecha.value) {
    pinia.anadirFestividad({
      id: pinia.festividades.length + 1,
      nombre: nombre.value,
      municipio: municipio.value,
      fecha: fecha.value,
      asistido: asistido.value
    })
    nombre.value = ''
    municipio.value = ''
    fecha.value = ''
    asistido.value = false
  }
}
</script>

<template>
  <input type="text" v-model="filtro" placeholder="Buscar servicio…" />
<ul>
  <li v-for="festividad in filtrado" :key="festividad.id">
    <span>ID: {{ festividad.id }} </span>
    <span> Nombre: {{festividad.nombre}} </span>
    <span> Municipio: {{festividad.municipio}} </span>
    <span> Fecha: {{festividad.fecha}} </span>
    Asistido: <input type="checkbox" :checked="festividad.asistido" @change="pinia.cambiarAsistido(festividad.id)"/>
    <button @click="pinia.borrarFestividad(festividad.id)">Borrar</button>
  </li>
</ul>
<form @submit.prevent="añadirServicio()">
  <input type="text" v-model="nombre" placeholder="Nombre" />
  <input type="text" v-model="municipio" placeholder="Municipio" />
  <input type="date" v-model="fecha" placeholder="Fecha" />
  <input type="checkbox" v-model="asistido" />
  <button type="submit">Añadir</button>
</form>
</template>
