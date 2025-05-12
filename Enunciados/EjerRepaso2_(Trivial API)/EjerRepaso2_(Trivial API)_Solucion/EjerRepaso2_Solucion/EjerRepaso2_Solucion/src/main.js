import './assets/styles.css'; // Importa los estilos globales

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';

const app = createApp(App);

// Usamos Pinia para el manejo del estado global
const pinia = createPinia();
app.use(pinia);

// Configuramos Vue Router
app.use(router);

app.mount('#app');