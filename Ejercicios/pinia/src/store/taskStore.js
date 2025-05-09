import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [],
  }),
  getters: {
    totalTasks: (state) => state.tasks.length,
  },
  actions: {
    addTask(taskText) {
      this.tasks.push({ id: Date.now(), text: taskText, completed: false });
    },
    }
})