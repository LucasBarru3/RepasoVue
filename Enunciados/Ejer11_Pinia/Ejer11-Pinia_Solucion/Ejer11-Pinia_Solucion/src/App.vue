<template>
  <div id="app">
    <header>
      <h1>Gestor de Tareas</h1>
      <nav>
        <router-link to="/">Inicio</router-link> |
        <router-link to="/tasks">Tareas</router-link> |
        <router-link to="/add-task">Agregar Tarea</router-link> |
        <router-link to="/completed">Completadas</router-link>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
// No es necesario incluir lógica adicional aquí, ya que el contenido se gestiona en las vistas.
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin: 20px;
}

header {
  margin-bottom: 20px;
}

nav {
  margin-bottom: 20px;
}

nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #42b983;
}

nav a.router-link-active {
  font-weight: bold;
  color: #35495e;
}
</style>

