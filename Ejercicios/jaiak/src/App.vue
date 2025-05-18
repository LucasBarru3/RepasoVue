<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './views/Navbar.vue';
import { ref } from 'vue'
const test = ref('')
function testFunction() {
  console.log('test')
}
</script>

<template>
  <Navbar />
<RouterView />
<input type="text" @change="testFunction()" v-on:change="" v-model="test" />
<span>{{ test }}</span>
</template>

<style scoped>
</style>
