<template>
    <h1>Aqui montamos el examen</h1>
    <form @submit.prevent="addExam()">
      <input type="text" placeholder="nombre" v-model="name" />
      <input 
        type="text" 
        placeholder="email" 
        v-model="email" 
        @blur="validateEmail" 
      />
      <input type="password" placeholder="password" v-model="password" />
      <input type="submit" />
      <span>{{ messageError }}</span>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const name = ref('');
  const email = ref('');
  const password = ref('');
  const messageError = ref('');
  
  const validateEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    if (!emailRegex.test(email.value)) {
      document.querySelector('input[type="text"][placeholder="email"]').focus();
      return false; // Si el email no es válido, retorna false
    } else {
      messageError.value = ''; // Si es válido, borra el mensaje de error
      return true; // Retorna true si el email es válido
    }
  };
  
  const addExam = () => {
    if (!name.value) {
      messageError.value = 'El nombre es obligatorio';
      return;
    }
  
    // Validar el email antes de proceder
    if (!validateEmail()) {
      messageError.value = 'Por favor, ingresa un correo electrónico válido';
      return;
    }
  
    messageError.value = 'Enviado';
  };
  </script>
  