<template>
    <div>
      <h1>Agregar Producto</h1>
      <form @submit.prevent="addProduct">
        <label for="name">Nombre del Producto:</label>
        <input type="text" v-model="name" id="name" />
        <button type="submit">Agregar</button>
      </form>
      <router-link to="/ProductList">Volver a la lista</router-link>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const name = ref('');
  
  const addProduct = () => {
    console.log(`Producto agregado: ${name.value}`);
    name.value = '';
  };
  </script>
  