<template>
  <h1>Notas</h1>
  <form @submit.prevent="addNote">
    <label for="nombre">Nombre: </label>
    <input style="margin-right: 20px;" v-model="nombre" @keyup.enter="addnote">
    <input type="submit" value="Enviar">
  </form>
  <div>
  <ul>
    <li v-for="(nota,index) in notas" :key="nota.id">
      <input type="text" v-model="nota.name" disabled></input>
      <button @click="editNote(index)">Editar</button>
      <button @click="deleteNote(index)">Eliminar</button>
    </li>
  </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const nombre = ref('')
const notas = ref([])

function addNote() {
  notas.value.push(
  {
    id: Date.now(),
    name: nombre.value,
  }
  )
  nombre.value = ""
}

function deleteNote(index){
  notas.value.splice(index,1)
}

function editNote(index){
  const liElements = document.querySelectorAll('ul li')
  if (liElements.length > 0 && liElements[index]){
    const inputNombre = liElements[index].querySelector('input[type="text"]')
    inputNombre.disabled = !inputNombre.disabled
    if(!inputNombre.disabled){
      inputNombre.focus();
    }
  }
}

</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
