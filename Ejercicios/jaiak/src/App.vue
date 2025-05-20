<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './views/Navbar.vue';
import { ref } from 'vue'
</script>

<template>
  <Navbar />
<RouterView />
</template>

<style scoped>
</style>
