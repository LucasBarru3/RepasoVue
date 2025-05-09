import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [],
  }),
  getters: {
    completedTasks: (state) => state.tasks.filter((task) => task.completed),
    pendingTasks: (state) => state.tasks.filter((task) => !task.completed),
    totalTasks: (state) => state.tasks.length,
  },
  actions: {
    addTask(taskText) {
      this.tasks.push({ id: Date.now(), text: taskText, completed: false });
    },
    toggleTask(id) {
      const task = this.tasks.find((task) => task.id === id);
      if (task) task.completed = !task.completed;
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
  },
});