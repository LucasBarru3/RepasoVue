<template>
    <div>
      <h1>Lista de Productos</h1>
      <ul>
        <li v-for="product in products" :key="product.id">
          <router-link :to="'/product/' + product.id">{{ product.name }}</router-link>
        </li>
      </ul>
      <router-link to="/add">Agregar Producto</router-link>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const products = ref([
    { id: 1, name: 'Producto 1' },
    { id: 2, name: 'Producto 2' },
    { id: 3, name: 'Producto 3' },
  ]);
  </script>
  