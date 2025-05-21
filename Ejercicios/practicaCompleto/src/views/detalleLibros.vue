<template>

<h1>Titulo:{{ libro?.titulo }}</h1>
<h1>Autor: {{ libro?.autor }}</h1>
<h1>Fecha de publicacion: {{ libro?.publicacion }}</h1>

</template>

<script setup>

import { ref, onMounted} from 'vue';
import { useRoute } from 'vue-router';
import {useLibrosStore} from '@/stores/pinia'

const pinia = useLibrosStore();

const route = useRoute();
const id = route.params.id;

const libro = ref({});

onMounted(() => {

    libro.value = pinia.libros.find((libro) => libro.id === Number(id))

    console.log(libro.value)
})


</script>