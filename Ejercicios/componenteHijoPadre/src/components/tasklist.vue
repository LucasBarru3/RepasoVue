<script setup>
import { ref } from 'vue'
import taskinput from './taskinput.vue'
const lista = ref([])
function anadirALista(titulo){
  lista.value.push(titulo)
}
function eliminarTarea(index){
  lista.value.splice(index,1)
}
</script>

<template>
<div>
  <h1>TaskList</h1>
  <ul>
    <li v-for="(tarea, index) in lista" :key="index">
      {{ tarea }}
      <button @click="eliminarTarea(index)">Eliminar</button>
    </li>
  </ul>
</div>
<taskinput @emit-add="anadirALista"></taskinput>
</template>

<style scoped>

</style>
