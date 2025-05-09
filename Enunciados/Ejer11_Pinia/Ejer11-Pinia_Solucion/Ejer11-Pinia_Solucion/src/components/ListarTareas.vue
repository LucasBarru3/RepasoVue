<template>
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        <li v-for="task in tasks" :key="task.id">
          <span :class="{ completed: task.completed }">{{ task.text }}</span>
          <button @click="toggleTask(task.id)">✔</button>
          <button @click="deleteTask(task.id)">🗑</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { useTaskStore } from '../stores/taskStore';
  
  const taskStore = useTaskStore();
  const { tasks, toggleTask, deleteTask } = taskStore;
  </script>
  
  <style>
  .completed {
    text-decoration: line-through;
    color: gray;
  }
  </style>
  