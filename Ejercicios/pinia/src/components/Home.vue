<script setup>
  import { useTaskStore } from '../store/taskStore.js';

  
  
const taskStore = useTaskStore();
const { tasks, totalTasks, completedTasks, pendingTasks}  = taskStore;
</script>

<template>
  <p>Tareas Totales: {{ totalTasks }}</p>
  <p>Tareas Completadas {{ completedTasks.length }}</p>
  <p>Tareas Pendientes {{ pendingTasks.length }}</p>
  <ul>
  </ul>
</template>

<style scoped>

</style>
