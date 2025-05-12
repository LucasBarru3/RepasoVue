<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useTriviaStore } from '@/store/triviaStore';

const store = useTriviaStore();
const router = useRouter();

const category = ref('');
const difficulty = ref('');
const numQuestions = ref(10);

const startGame = async () => {
  store.category = category.value;
  store.difficulty = difficulty.value;
  store.numQuestions = numQuestions.value;
  await store.fetchQuestions();
  router.push('/questions');
};
</script>

<template>
  <div>
    <h1>Configura tu Trivial</h1>
    <select v-model="category">
      <option value="9">General Knowledge</option>
      <option value="17">Science & Nature</option>
    </select>
    
    <select v-model="difficulty">
      <option value="easy">Fácil</option>
      <option value="medium">Medio</option>
      <option value="hard">Difícil</option>
    </select>

    <input type="number" v-model="numQuestions" min="1" max="50" />

    <button @click="startGame">Comenzar</button>
  </div>
</template>


<style scoped>
.home-page {
  text-align: center;
  padding: 20px;
}

.form {
  max-width: 400px;
  margin: 0 auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
}

.input {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>