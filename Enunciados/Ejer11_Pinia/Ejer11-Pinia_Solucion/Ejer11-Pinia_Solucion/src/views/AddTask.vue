<template>
    <div>
      <h2>Agregar Tarea</h2>
      <input v-model="newTask" @keyup.enter="addNewTask()" placeholder="Escribe una tarea" />
      <button @click="addNewTask()">Añadir</button>
      <router-link to="/">Volver al inicio</router-link>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useTaskStore } from '../store/taskStore.js';
  
  const newTask = ref('');
  const taskStore = useTaskStore();
  
  const addNewTask = () => {
    if (newTask.value.trim()) {
      taskStore.addTask(newTask.value.trim());
      newTask.value = '';
    }
  };
  </script>