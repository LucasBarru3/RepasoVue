<template>
    <nav class="navbar">
        <RouterLink to="/" class="nav-link">Home</RouterLink>
        <RouterLink to="/proximas" class="nav-link">Proximas</RouterLink>
        <RouterLink to="/estadisticas" class="nav-link">Estadisticas</RouterLink>
        <RouterLink to="/filtrado" class="nav-link">Filtrado</RouterLink>
        <RouterLink to="/festividadesAsistidas" class="nav-link">Festividades Asistidas</RouterLink>
        <RouterLink to="/festividadesExtra" class="nav-link">Festividades Extras</RouterLink>
    </nav>
</template>

<style scoped>
.navbar {
    display: flex;
    gap: 1.5rem;
    background: #2c3e50;
    padding: 1rem 2rem;
    align-items: center;
}

.nav-link {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.2s;
}

.nav-link:hover {
    color: #42b983;
}
</style>
<script setup>
import { RouterLink } from 'vue-router'
</script>