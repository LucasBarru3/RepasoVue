<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
<header style="display: flex; gap: 1rem; padding: 1rem; background-color: #f5f5f5;">
<RouterLink to="/"> Tareas</RouterLink>
<RouterLink to="/adminTareas">Administrar Tareas</RouterLink>
<RouterLink to="/addTarea">Añadir Tarea</RouterLink>
<RouterLink to="/tareasCompletadas">Tareas Completadas</RouterLink>
</header>
<RouterView />
</template>

<style scoped>
</style>
