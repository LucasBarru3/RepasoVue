<script setup>
import { useTaskStore } from '../store/taskStore';
const taskStore = useTaskStore();
const {tasks, changeState} = taskStore
function cambiarEstado(id){
  taskStore.changeState(id);
}
</script>

<template>
  <li v-for="task in tasks" :key="task.id">
    <span>Nombre: {{ task.text }} </span>
    <span> Estado: {{ task.completed }}</span>

    <button @click="cambiarEstado(task.id)">Cambiar estado</button>
  </li>
</template>
<style scoped>

</style>
