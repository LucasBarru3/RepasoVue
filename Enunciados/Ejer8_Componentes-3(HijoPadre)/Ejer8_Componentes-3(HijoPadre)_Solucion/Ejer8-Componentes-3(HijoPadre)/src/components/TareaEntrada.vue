<template>
    <div class="task-input">
      <input
        type="text"
        v-model="tarea"
        placeholder="Escribe una nueva tarea"
      />
      <button @click="nuevaTarea">Añadir</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  // Definimos una referencia reactiva para almacenar el valor del input
  const tarea = ref("");
  
  // Emitir evento hacia el componente padre
  const emit = defineEmits(["add-task"]);
  
  const nuevaTarea = () => {
    if (tarea.value.trim()) {
      emit("add-task", tarea.value); // Emitimos el evento con el valor de la tarea
      tarea.value = ""; // Limpiar el input después de enviar la tarea
    }
  };
  </script>
  
  <style scoped>
  .task-input {
    margin-bottom: 1rem;
  }
  </style>
  