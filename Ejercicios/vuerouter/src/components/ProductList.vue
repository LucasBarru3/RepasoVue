<script setup>
import { ref } from 'vue'
const products = ref([
    { id: 1, name: 'Producto 1' },
    { id: 2, name: 'Producto 2' },
    { id: 3, name: 'Producto 3' },
  ]);

</script>

<template>
<ul>
    <li v-for="product in products">
        <router-link :to="'/ProductDetail/' + product.id">{{ product.name }}</router-link>
    </li>
</ul>
</template>

<style scoped>

</style>
