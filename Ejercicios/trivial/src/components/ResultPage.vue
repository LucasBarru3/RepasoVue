<template>
<div>
    <p>¡Fin del cuestionario!</p>
    <p>Puntuación: {{ pinia.score }} de {{ pinia.preguntas.length }}</p>
  </div>
</template>

<style scoped>

</style>

<script setup>
import { useTrivialStore } from '@/stores/counter';
const pinia = useTrivialStore()

</script>