<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router';
const products = ref([
    { id: 1, name: 'Producto 1' },
    { id: 2, name: 'Producto 2' },
    { id: 3, name: 'Producto 3' },
  ]);

</script>

<template>
<ul>
    <li v-for="product in products">
        <RouterLink :to="'/ProductDetail/' + product.id">{{ product.name }}</RouterLink>
    </li>
    <RouterLink to="/AddProduct">Añadir Producto</RouterLink>
</ul>
</template>

<style scoped>

</style>
