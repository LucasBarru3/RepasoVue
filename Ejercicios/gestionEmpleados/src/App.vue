<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <RouterLink to="/">Home</RouterLink>
  <RouterLink to="/empleados">Lista Empleados</RouterLink>
  <RouterLink to="/estadisticas">Estadisticas</RouterLink>
  <RouterLink to="/addEmpleado">Nuevo Empleado</RouterLink>
<RouterView></RouterView>
</template>

<style scoped>

</style>
