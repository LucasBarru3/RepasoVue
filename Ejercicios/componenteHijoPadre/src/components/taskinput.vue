<script setup>
import { ref } from 'vue'
const titulo = ref('')
const emit = defineEmits(["emit-add"])
function enviarDatos(){
  emit("emit-add",titulo.value)
  titulo.value=""
}
</script>

<template>
<input type="text" v-model="titulo">
<button @click="enviarDatos">Enviar</button>
</template>

<style scoped>

</style>
