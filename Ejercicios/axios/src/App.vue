<template>
<h1>Albums</h1>
<div>
  <ul>
    <li v-for="album in albums" :key="album.id" @click="cargarAlbumbyId(album.id)">
      {{ album.title }}
    </li>
  </ul>
  <ul>
    <li v-for="(foto, index) in fotos" :key="foto.id">
      <img :src="foto.thumbnailUrl" :alt="foto.id">
    </li>
  </ul>
  <form @submit.prevent="añadirImagen()">
    <label for="">Titulo: </label>
    <input type="text" v-model="title"/>
    <label for="">URL: </label>
    <input type="text" v-model="url"/>
    <label for="">Miniatura: </label>
    <input type="text" v-model="thumbnailUrl"/>
    <input type="submit">
  </form>
</div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
const albums = ref([])
const fotos = ref([])
const title = ref('')
const url = ref('')
const thumbnailUrl = ref('')
const albumSeleceted = ref(null)
onMounted(() => {
  cargarAlbums();
});
async function cargarAlbums(){
  try{
    const response = await axios.get("https://jsonplaceholder.typicode.com/albums?_limit=10")
    albums.value = response.data
    console.log(albums.value)
  }catch(error){
    console.log('errror')
  }
}

async function cargarAlbumbyId(albumId){
  albumSeleceted.value = albumId
  try{
    const response = await axios.get(`https://jsonplaceholder.typicode.com/albums/${albumId}/photos?_limit=10`)
    fotos.value = response.data
    console.log(fotos.value)
  }catch(error){
    console.log(error)
  }
}

async function añadirImagen(){
  try{
    const response = await axios.post(`https://jsonplaceholder.typicode.com/photos`,{
      albumId : albumSeleceted.value,
      url: url.value,
      thumbnailUrl: thumbnailUrl.value,
      title: title.value
    })
    fotos.value.push(response.data)
    console.log(fotos.value)
  }catch(error){
    console.log(error)
  }
}
</script>

<style scoped>

</style>
