<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router';
const nombre = ref('')
function addProduct(){
    console.log(nombre.value)
    nombre.value = ""
}
</script>

<template>
<form @submit.prevent="addProduct()">
    <input type="text" v-model="nombre">
    <input type="submit">
</form>
</template>

<style scoped>

</style>
