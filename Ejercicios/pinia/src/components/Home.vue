<script setup>
  import { useTaskStore } from '../store/taskStore.js';

  
  
const taskStore = useTaskStore();
const { tasks, totalTasks}  = taskStore;
</script>

<template>
  <p>{{ totalTasks }}</p>
  <ul>
    <li v-for="task in tasks" :key="task.id">
      {{ task.text }}
    </li>
  </ul>
</template>

<style scoped>

</style>
