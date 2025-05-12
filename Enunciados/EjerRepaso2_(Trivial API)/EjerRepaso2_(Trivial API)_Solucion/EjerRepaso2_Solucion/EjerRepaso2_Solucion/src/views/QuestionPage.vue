<script setup>
import { useTriviaStore } from '@/store/triviaStore';
import { useRouter } from 'vue-router';

const store = useTriviaStore();
const router = useRouter();

const answerQuestion = (selectedAnswer) => {
  const correct = selectedAnswer === store.questions[store.currentQuestionIndex].correct_answer;
  store.submitAnswer(correct);
  if (store.currentQuestionIndex >= store.questions.length) {
    router.push('/results');
  }
};
</script>

<template>
  <div v-if="store.currentQuestionIndex < store.questions.length">
    <h2>{{ store.questions[store.currentQuestionIndex].question }}</h2>
    <button v-for="answer in store.questions[store.currentQuestionIndex].incorrect_answers.concat(store.questions[store.currentQuestionIndex].correct_answer)" :key="answer" @click="answerQuestion(answer)">
      {{ answer }}
    </button>
  </div>
</template>


<style scoped>
.question-page {
  text-align: center;
  padding: 20px;
}

.answers-list {
  max-width: 400px;
  margin: 0 auto;
}

.answer-button {
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.answer-button:hover {
  background-color: #3aa876;
}
</style>