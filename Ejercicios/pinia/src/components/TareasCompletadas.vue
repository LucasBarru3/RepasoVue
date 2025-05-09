<script setup>
import { useTaskStore } from '../store/taskStore';
const taskStore = useTaskStore();
const {completedTasks} = taskStore
</script>

<template>
    <h2>Tareas Completadas</h2>
    <ul>
        <li v-for="task in completedTasks" :key="task.id">
            {{ task.text }}
        </li>
    </ul>
</template>

<style scoped>

</style>
