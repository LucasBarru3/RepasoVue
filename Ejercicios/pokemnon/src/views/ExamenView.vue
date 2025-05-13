<template>
    <h1>Aqui montamos el examen</h1>
    <form @submit.prevent="addExam()">
      <input type="text" placeholder="nombre" v-model="name" />
      <input 
        type="text" 
        id="email"
        placeholder="email" 
        v-model="email" 
        @blur="validateEmail" 
      />
      <input type="password" id="password" placeholder="password" @keyup="validatePassword" v-model="password" disabled  />
      <input type="submit" id="boton" disabled/>
      <span>{{ messageError }}</span>
    </form>
    <table v-if="alumnos.length">
      <tr v-for="(alumno, index) in alumnos" :key="index">
        <td v-if="alumnoEditando === index">
          <input v-model="alumno.name" />
        </td>
        <td v-else>{{ alumno.name }}</td>

        <td v-if="alumnoEditando === index">
          <input v-model="alumno.email" />
        </td>
        <td v-else>{{ alumno.email }}</td>

        <td v-if="alumnoEditando === index">
          <input v-model="alumno.password" />
        </td>
        <td v-else>{{ alumno.password }}</td>

        <td>
          <button @click="borrarAlumno(index)">Borrar</button>
        </td>

        <td v-if="alumnoEditando === index">
          <button @click="guardarEdicion(index)">Guardar</button>
        </td>
        <td v-else>
          <button @click="activarEdicion(index)">Activar Edición</button>
        </td>
      </tr>
    </table>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const name = ref('');
  const email = ref('');
  const password = ref('');
  const messageError = ref('');
  const alumnos = ref([])
  const alumnoEditando = ref(null); // guarda el índice del alumno que se está editando

function activarEdicion(index) {
  alumnoEditando.value = index;
}

function guardarEdicion(index) {
  alumnoEditando.value = null; // salir del modo edición
}
  function validateEmail (){
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    if (!emailRegex.test(email.value)) {
      messageError.value = 'Por favor, ingresa un correo electrónico válido';
      document.getElementById('email').focus();
      document.getElementById('password').disabled = true
      return false; // Si el email no es válido, retorna false
    } else {
      messageError.value= 'curu'
      document.getElementById('password').disabled = false
      document.getElementById('password').focus()
      return true; // Retorna true si el email es válido
    }
  };
  
  const validatePassword = () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,16}$/;
  
    if (!passwordRegex.test(password.value)) {
      messageError.value='mal'
      document.getElementById('boton').disabled = true
      return false; // Si el email no es válido, retorna false
    } else {
      document.getElementById('boton').disabled = false
      messageError.value= 'La contraseña bien'
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
  
    // Validar el email antes de proceder
    if (!validatePassword()) {
      messageError.value = 'Por favor, ingresa una contraseña válida';
      return;
    }
    const objetoAlumno = {
      name: name.value,
      email: email.value,
      password: password.value
    }
    alumnos.value.push(objetoAlumno)
    console.log(alumnos.value)
  }

  function borrarAlumno(index){
    alumnos.value.splice(index,1)
  }


  </script>
  