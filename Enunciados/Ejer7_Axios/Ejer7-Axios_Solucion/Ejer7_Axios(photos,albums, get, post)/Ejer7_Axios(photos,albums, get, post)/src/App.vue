<template>
  <div>
    <h1>Explorador de Fotos</h1>

    <!-- Listado de álbumes -->
    <h2>Álbumes</h2>
    <ul>
      <li v-for="album in albums" :key="album.id" @click="fetchPhotos(album.id)" class="album-item">
        {{ album.title }}
      </li>
    </ul>

    <!-- Mostrar fotos del álbum seleccionado -->
    <div v-if="selectedAlbumId">
      <h3>Fotos del Álbum {{ selectedAlbumId }}</h3>
      <ul class="photo-list">
        <li v-for="photo in photos" :key="photo.id">
          <img :src="photo.thumbnailUrl" :alt="photo.title" />
          <p>{{ photo.title }}</p>
          <button @click="deletePhoto(photo.id)">Eliminar</button>
        </li>
      </ul>

      <!-- Formulario para añadir una foto -->
      <form @submit.prevent="addPhoto">
        <h4>Añadir Foto</h4>
        <input v-model="newPhoto.title" placeholder="Título de la foto" required />
        <input v-model="newPhoto.url" placeholder="URL de la foto" required />
        <input v-model="newPhoto.thumbnailUrl" placeholder="URL miniatura" required />
        <button type="submit">Añadir Foto</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";


 
    // Estado reactivo
    const albums = ref([]);
    const photos = ref([]);
    const selectedAlbumId = ref(null);
    const newPhoto = ref({
      title: "",
      url: "",
      thumbnailUrl: "",
    });

    // Cargar álbumes al montar el componente
    onMounted(() => {
      fetchAlbums();
    });

    // Función para obtener la lista de álbumes
    const fetchAlbums = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/albums?_limit=10");
        albums.value = response.data;
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };

    // Función para obtener las fotos de un álbum
    const fetchPhotos = async (albumId) => {
      try {
        selectedAlbumId.value = albumId;
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/albums/${albumId}/photos?_limit=10`
        );
        photos.value = response.data;
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    // Función para añadir una nueva foto ficticia
    const addPhoto = async () => {
      try {
        const response = await axios.post("https://jsonplaceholder.typicode.com/photos", {
          ...newPhoto.value,
          albumId: selectedAlbumId.value,
        });
        photos.value.push(response.data);
        newPhoto.value = { title: "", url: "", thumbnailUrl: "" };
      } catch (error) {
        console.error("Error adding photo:", error);
      }
    };

    // Función para eliminar una foto
    const deletePhoto = async (photoId) => {
      try {
        await axios.delete(`https://jsonplaceholder.typicode.com/photos/${photoId}`);
        photos.value = photos.value.filter((photo) => photo.id !== photoId);
      } catch (error) {
        console.error("Error deleting photo:", error);
      }
    };

 


</script>

<style>
.album-item {
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 8px;
}
.album-item:hover {
  text-decoration: underline;
  color: blue;
}

.photo-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style-type: none;
  padding: 0;
}

.photo-list img {
  max-width: 100px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>