<template>
    <div>
      <TareasEntrada @add-task="nuevaTarea" />
      <ul>
        <li v-for="(tarea, index) in tareas" :key="index" class="task-item">
          {{ tarea }}
          <button @click="borrarTarea(index)">Eliminar</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  import TareasEntrada from "./TareaEntrada.vue";
  
      const tareas = ref([]);
  
      const nuevaTarea = (tarea) => {
        tareas.value.push(tarea);
      };
  
      const borrarTarea = (index) => {
        tareas.value.splice(index, 1);
      };
  
      
  </script>
  
  <style scoped>
  /* .task-item {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
  } */
  </style>
  