<template>
    <div>
      <h1>Gestión de Tareas</h1>
      <p>Total de tareas: {{ totalTasks }}</p>
      <p>Tareas completadas: {{ completedTasks.length }}</p>
      <p>Tareas pendientes: {{ pendingTasks.length }}</p>
      <!-- <router-link to="/tasks">Ver todas las tareas</router-link> |
      <router-link to="/add-task">Agregar tarea</router-link> |
      <router-link to="/completed">Tareas completadas</router-link> -->
    </div>
  </template>
  
  <script setup>
  import { useTaskStore } from '../store/taskStore.js';

  
  
  const taskStore = useTaskStore();
  const { totalTasks, completedTasks, pendingTasks } = taskStore;
  </script>
  