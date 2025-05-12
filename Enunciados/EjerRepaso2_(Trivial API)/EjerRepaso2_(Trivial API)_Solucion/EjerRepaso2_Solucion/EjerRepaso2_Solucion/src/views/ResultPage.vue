<script setup>
import { useTriviaStore } from '@/store/triviaStore';
import { useRouter } from 'vue-router';

const store = useTriviaStore();
const router = useRouter();

const restartGame = () => {
  store.resetGame();
  router.push('/');
};
</script>

<template>
  <div>
    <h1>Tu puntuación: {{ store.score }} / {{ store.numQuestions }}</h1>
    <button @click="restartGame">Volver a Jugar</button>
  </div>
</template>


<style scoped>
.result-page {
  text-align: center;
  padding: 20px;
}

button {
  margin-top: 20px;
}
</style>
