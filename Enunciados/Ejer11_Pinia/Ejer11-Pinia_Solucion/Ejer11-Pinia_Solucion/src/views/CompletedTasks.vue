<template>
    <div>
      <h2>Tareas Completadas</h2>
      <ul>
        <li v-for="task in completedTasks" :key="task.id">
          <span>{{ task.text }}</span>
          <button @click="toggleTask(task.id)">Marcar como pendiente</button>
        </li>
      </ul>
      <router-link to="/">Volver al inicio</router-link>
    </div>
  </template>
  
  <script setup>
  import { useTaskStore } from '../store/taskStore';
  
  const taskStore = useTaskStore();
  const { completedTasks, toggleTask } = taskStore;
  </script>
  