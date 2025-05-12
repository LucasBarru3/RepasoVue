<script setup>
import {ref} from 'vue'
import {useTrivialStore} from '../stores/counter.js'
import { useRouter } from 'vue-router'
const router = useRouter()
const pinia = useTrivialStore()
import axios from 'axios'
const numero = ref()
const categoria = ref('')
const dificultad = ref('')
async function empezarJuego() {
  try {
    const response = await axios.get(`https://opentdb.com/api.php?amount=${numero.value}&category=${categoria.value}&difficulty=${dificultad.value}&encode=base64`);
    // Guardamos en el store
    pinia.setJuego(response.data);
    router.push({ name: 'Questions' });
  } catch(error) {
    console.log('error', error);
  }
}
</script>

<template>
<h1>Trivial</h1>
<form @submit.prevent="empezarJuego()">
  <input type="number" placeholder="Numero de preguntas" v-model="numero">
  <select name="" v-model="categoria" id="">
    <option value="9">General</option>
    <option value="17">Science</option>
  </select>
  <select name="" v-model="dificultad" id="">
    <option value="easy">Fácil</option>
    <option value="medium">Medio</option>
    <option value="hard">Difícil</option>
  </select>
  <input type="submit">
</form>
</template>

<style scoped>

</style>