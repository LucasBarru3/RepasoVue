<script setup>
import { RouterLink } from 'vue-router'
</script>

<!-- components/AppHeader.vue -->
<template>
  <header class="app-header">
    <nav class="nav-bar">
      <RouterLink to="/"               class="nav-link">Todos los Servicios</RouterLink>
      <RouterLink to="/serviciosPabellon" class="nav-link">Servicios Pabellón</RouterLink>
      <RouterLink to="/favoritos"         class="nav-link">Favoritos</RouterLink>
      <RouterLink to="/serviciosVisibles" class="nav-link">Servicios Visibles</RouterLink>
      <RouterLink to="/serviciosFavs"     class="nav-link">Servicios Favoritos</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
/* ----- contenedor principal ----- */
.app-header {
  background: #1565c0;      /* azul */
  color: #fff;
  box-shadow: 0 2px 6px rgba(0,0,0,.15);
}

/* ----- barra de navegación ----- */
.nav-bar {
  max-width: 960px;         /* ancho máximo */
  margin: 0 auto;           /* centrar */
  padding: 12px 16px;       /* espacio interior */
  display: flex;
  gap: 20px;                /* separación entre enlaces */
  align-items: center;
  flex-wrap: wrap;          /* salta de línea en pantallas pequeñas */
}

/* ----- enlaces ----- */
.nav-link {
  text-decoration: none;
  color: inherit;           /* mismo color que el header */
  font-weight: 600;
  position: relative;
  transition: opacity .2s;
}

.nav-link:hover {
  opacity: .8;
}

/* subrayado sutil al pasar el ratón */
.nav-link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -3px;
  width: 100%;
  height: 2px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform .25s;
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  transform: scaleX(1);
}
</style>
