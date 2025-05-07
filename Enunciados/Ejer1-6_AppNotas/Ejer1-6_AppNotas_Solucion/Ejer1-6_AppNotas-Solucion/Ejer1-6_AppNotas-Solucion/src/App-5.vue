<template>
      <h1>Gestor de Notas</h1>
  
      <!-- Campo para agregar nuevas notas -->
      <form @submit.prevent="addNote">
        <input type="text" v-model="newNote" @keyup.enter="addNote" placeholder="Escribe una nueva nota" />
        <button type="submit">Agregar Nota</button>
      </form>
      
      <!-- Lista de notas -->
      <ul id="milista">
        <!--Añadimos el elemento data-index, para despues localizar ese li mas facilmente-->
        <li  v-for="(note, index) in notes" :key="note.id" >
          <input 
            type="text" 
            v-model="note.texto" 
            disabled
            placeholder="Notas"
          /> 
          <small>{{note.editando}}</small>
          <button @click="editNote(index)">editar</button> <!-- Cambiamos el texto del botón dependiendo del estado de la nota -->
          <button @click="deleteNote(index)">Eliminar</button>
        </li>
      </ul>
  </template>
  
  <script setup>
  import { ref, nextTick } from 'vue';
  
  
      // Estado para las tareas y la nueva tarea
      const notes = ref([]);
      const newNote = ref('');
  
      // Función para agregar una nueva tarea
      const addNote = () => {
        if (newNote.value.trim() !== '') {
          notes.value.push({
            id: Date.now(), // Usamos un ID único para cada tarea
            texto: newNote.value,
            editando: false // El campo está deshabilitado inicialmente
          });
          newNote.value = ''; // Limpiamos el campo de entrada después de agregar la tarea
        }
      };
  
      // Función para eliminar una tarea
      const deleteNote = (index) => {
        notes.value.splice(index, 1); // Elimina la tarea en el índice especificado
      };
  
      // Función para editar una tarea (habilitar el campo de texto)
      const editNote = (index) => {
          // Seleccionamos todos los <li> dentro del contenedor #milista
          const liElements = document.querySelectorAll("#milista li");

          // Asegúrate de que el índice sea válido
          if (liElements.length > 0 && liElements[index]) {
            const inputField = liElements[index].querySelector('input[type="text"]');
            // Alternamos la propiedad 'disabled' del campo de texto
            inputField.disabled = !inputField.disabled;

            // Si habilitamos el campo, le damos foco
            if (!inputField.disabled) {
              inputField.focus();
            }
          }
      };
  
      // Retornamos las propiedades y métodos para usarlos en el template
      
  </script>
  
  <style>
  /* Estilos básicos */
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 20px;
  }
  
  input {
    padding: 8px;
    margin: 5px;
  }
  
  button {
    padding: 8px 16px;
    margin: 5px;
    cursor: pointer;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  </style>
  