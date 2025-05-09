import { defineStore } from 'pinia';

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [],
  }),
  getters: {
    totalTasks: (state) => state.tasks.length,
    completedTasks: (state) =>state.tasks.filter((task)=>task.completed),
    pendingTasks: (state) =>state.tasks.filter((task)=>!task.completed),
  },
  actions: {
    addTask(taskText) {
      this.tasks.push({ id: Date.now(), text: taskText, completed: false });
    },
    changeState(id){
      const task = this.tasks.find((task) => task.id === id);
      if (task) task.completed = !task.completed;
    }
    }
})