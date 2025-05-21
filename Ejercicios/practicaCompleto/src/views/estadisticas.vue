<template>

<h1>LIBROS: </h1>
<h2>Libros totales: {{ pinia.librosTotales }}</h2>
<h2>Libros leidos: {{ pinia.librosLeidos }}</h2>

<h2>Libros Posteriores de los 2000s:</h2>
<ul>
    <li v-for="libro in pinia.librosPosteriores">
        {{ libro.titulo }}
    </li>
</ul>
<h2>Promedio antiguedad: {{ pinia.promedioAntiguedad }} años</h2>


<h1>AUTORES: </h1>
<h2>Autores totales: {{ pinia.autoresTotales }}</h2>
<h2>Autores con libros multiples:</h2>
<ul>
    <li v-for="autor in pinia.autoresMultiples">
        {{ autor }}
    </li>
</ul>
</template>

<script setup>

import { useLibrosStore } from '@/stores/pinia';
import { onMounted } from 'vue';

const pinia = useLibrosStore();

onMounted(() => {

    pinia.cargarLibros();

})

</script>