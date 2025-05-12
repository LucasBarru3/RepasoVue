<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useTrivialStore } from '../stores/counter.js'

const router = useRouter()
const store = useTrivialStore()

// Asumiendo que quieres mostrar la pregunta actual
const currentQuestion = computed(() => {
  return store.preguntas[store.currentQuestionIndex]
})

// Respuestas mezcladas
const respuestas = computed(() => {
  if (!currentQuestion.value) return []
  return [currentQuestion.value.correct_answer, ...currentQuestion.value.incorrect_answers].sort(() => Math.random() - 0.5)
})

// Función para responder
const answerQuestion = (selectedAnswer) => {
  const isCorrect = selectedAnswer === currentQuestion.value.correct_answer
  store.submitAnswer(isCorrect)
  // Ver si terminó el cuestionario
  if (store.currentQuestionIndex >= store.preguntas.length) {
    // Puedes redirigir a resultados, o mostrar un mensaje
    router.push('/results') // o lo que prefieras
  }
}
</script>

<template>
  <div v-if="store.currentQuestionIndex < store.preguntas.length">
    <h2>{{ currentQuestion.question }}</h2>
    <div>
      <button v-for="answer in respuestas" :key="answer" @click="answerQuestion(answer)">
        {{ answer }}
      </button>
    </div>
  </div>
  <div v-else>
    <p>¡Fin del cuestionario!</p>
    <p>Puntuación: {{ store.score }} de {{ store.preguntas.length }}</p>
  </div>
</template>