import { defineStore } from 'pinia';
import axios from 'axios';

export const useTriviaStore = defineStore('trivia', {
  state: () => ({
    category: null,
    difficulty: null,
    numQuestions: 10,
    questions: [],
    currentQuestionIndex: 0,
    score: 0,
  }),
  actions: {
    async fetchQuestions() {
      try{
        //const url = `https://opentdb.com/api.php?amount=${this.numQuestions}&category=${this.category}&difficulty=${this.difficulty}&type=multiple`;
      
      //Si queremos usar codificacion en base64
      const url = `https://opentdb.com/api.php?amount=${this.numQuestions}&category=${this.category}&difficulty=${this.difficulty}&type=multiple&encode=base64&language=es`;

      const response = await axios.get(url);
      //Si no usamos encode=base64
      // this.questions = response.data.results;

      // Si usamos encode bas64, Decodificamos las preguntas y respuestas de base64 a texto
      this.questions = response.data.results.map(q => ({
        question: atob(q.question),
        correct_answer: atob(q.correct_answer),
        incorrect_answers: q.incorrect_answers.map(ans => atob(ans))
      }));

      

      } catch (error) {
        console.error('Error fetching or translating questions:', error);
        alert('Hubo un problema al cargar las preguntas. Por favor, intenta nuevamente.');
      }


    },
    submitAnswer(isCorrect) {
      if (isCorrect) this.score++;
      this.currentQuestionIndex++;
    },
    resetGame() {
      this.currentQuestionIndex = 0;
      this.score = 0;
      this.questions = [];
    },
  },
});
