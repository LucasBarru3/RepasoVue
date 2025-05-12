import { defineStore } from 'pinia'

export const useTrivialStore = defineStore('useTrivialStore', {
  state: () => ({
    juego: {}, // datos recibidos de la API
    currentQuestionIndex: 0,
    score: 0,
  }),
  getters: {
    preguntas: (state) => {
      return (state.juego.results || []).map(q => ({
        question: atob(q.question),
        correct_answer: atob(q.correct_answer),
        incorrect_answers: q.incorrect_answers.map(ans => atob(ans))
      }));
    },
    totalQuestions: (state) => {
      return state.preguntas.length;
    }
  },
  actions: {
    setJuego(data) {
      this.juego = data;
      this.currentQuestionIndex = 0;
      this.score = 0;
    },
    submitAnswer(correct) {
      if (correct) {
        this.score++;
      }
      this.currentQuestionIndex++;
    },
    reset() {
      this.juego = {};
      this.currentQuestionIndex = 0;
      this.score = 0;
    }
  }
})