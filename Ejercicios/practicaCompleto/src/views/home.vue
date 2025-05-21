<template>
    <h1>HOME</h1>
    <h3>En esta pagina se cargaran los libros y se dara la opcion de añadir, eliminar, editar y cambiar de estado</h3>

    <select name="" id="" v-model="pinia.filtroSelect">
        <option value="">-- Selecciona un autor --</option>
        <option :value="autor" v-for="autor in pinia.autores">{{ autor }}</option>
    </select>

    <!-- TABLA CON FILTRO SELECT -->

    <table>

        <tr>
            <th>Titulo</th>
            <th>Autor</th>
            <th>Fecha publicacion</th>
            <th>Leido</th>

        </tr>

        <tr v-for="(libro, index) in pinia.librosFiltrados" :key="libro.id">

            <td>
                <input v-if="indexEditar === index" v-model="libro.titulo" type="text" />
                <span v-else><RouterLink :to="'/detalleLibro/' + libro.id">{{ libro.titulo }}</RouterLink></span>
            </td>

            <td>
                <input v-if="indexEditar === index" v-model="libro.autor" type="text" />
                <span v-else>{{ libro.autor }}</span>
            </td>

            <td>
                <input v-if="indexEditar === index" v-model="libro.publicacion" type="text" />
                <span v-else>{{ libro.publicacion }}</span>
            </td>

            <td><input type="checkbox" name="" id="" :checked="libro.leido" @change="pinia.cambiarEstado(libro.id)"></td>

            <td><button @click="pinia.eliminar(libro.id)">Eliminar</button></td>
            <td><button @click="editable(index)">Editar</button></td>


        </tr>

    </table>
    <!-- TABLA CON FILTRO SELECT -->
    <br>
    <br>
    <br>

    <!-- TABLA CON FILTRO INPUT -->
        
        <input type="text" name="" id="" v-model="pinia.filtroInput" placeholder="Autor">

        <table>

            <tr>
                <th>Titulo</th>
                <th>Autor</th>
                <th>Fecha publicacion</th>
                <th>Leido</th>
            </tr>

             <tr v-for="(libro, index) in pinia.librosFiltradosInput" :key="libro.id">

            <td>
                <input v-if="indexEditar === index" v-model="libro.titulo" type="text" />
                <span v-else><RouterLink :to="'/detalleLibro/' + libro.id">{{ libro.titulo }}</RouterLink></span>
            </td>

            <td>
                <input v-if="indexEditar === index" v-model="libro.autor" type="text" />
                <span v-else>{{ libro.autor }}</span>
            </td>

            <td>
                <input v-if="indexEditar === index" v-model="libro.publicacion" type="text" />
                <span v-else>{{ libro.publicacion }}</span>
            </td>

            <td><input type="checkbox" name="" id="" :checked="libro.leido" @change="pinia.cambiarEstado(libro.id)"></td>

            <td><button @click="pinia.eliminar(libro.id)">Eliminar</button></td>
            <td><button @click="editable(index)">Editar</button></td>


        </tr>

        </table>

    <!-- TABLA CON FILTRO INPUT -->


</template>

<script setup>

import { ref, onMounted } from 'vue';

import { useLibrosStore } from '@/stores/pinia';

import { RouterLink } from 'vue-router';

const pinia = useLibrosStore();

const filtroSelect = ref('')

const indexEditar = ref(false)

const titulo = ref('')
const autor = ref('')
const publicacion = ref('')
const leido = ref(false)

function agregar(){
    const nuevoLibro = {
        id: Date.now(),
        titulo: titulo.value,
        autor: autor.value,
        publicacion: publicacion.value,
        leido: leido.value,

    }

    pinia.agregarLibro(nuevoLibro);
}



onMounted(() => {
    pinia.cargarLibros()

    console.log()
})

function editable(index) {

    indexEditar.value = index

}


</script>

<style scoped>
table {
    border: 1px solid black;
    border-collapse: collapse;
}

tr,
td,
th {
    border: 1px solid black;
    text-align: center;
    padding: 5px;

}
form{
    display: flex; 
    flex-direction: column; 
    width: 20%;
}

input {
    padding: 5px;
}
</style>