<template>
    <div>
      <h1>Detalles del Producto</h1>
      <p>ID: {{ id }}</p>
      <p>Nombre: {{ product?.name || 'Producto no encontrado' }}</p>
      <router-link to="/ProductList">Volver a la lista</router-link>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const id = route.params.id;
  
  const products = [
    { id: '1', name: 'Producto 1' },
    { id: '2', name: 'Producto 2' },
    { id: '3', name: 'Producto 3' },
  ];
  
  const product = ref(null);
  
  onMounted(() => {
    product.value = products.find((p) => p.id === id);
  });
  </script>
  