<template>
    <h2>Estoy en Post List Component</h2>
    <h3>Aquí importo Post detail Component</h3>
    <div class="container">
        <!-- <PostDetailComponent/>
        <PostDetailComponent/>
        <PostDetailComponent/>
        <PostDetailComponent/>
        <PostDetailComponent/> -->
        <!-- En vez de escribir explicitamente todos los componentes podemos hacer un v-for -->
        <!-- vue
        /**
        * Componente de lista de publicaciones
        * 
        * Este componente muestra una lista de publicaciones utilizando el componente PostdetailComponent.
        * Recibe una matriz de objetos 'info' que contiene títulos y contenido de las publicaciones.
        * Para cada elemento en la matriz 'info', se renderiza un componente PostdetailComponent.
        * 
        */ -->

        <PostDetailComponent v-for="element in info" key="element.title" :title="element.title" :content="element.content"/>
    </div>
    
</template>

<script setup>
    import PostDetailComponent from './PostDetailComponent.vue';
    let info = [{
        title :"Post 1",
        content : "Texto de ejemplo 1"
    },{
        title :"Post 2",
        content : "Texto de ejemplo 2"
    },{
        title :"Post 3",
        content : "Texto de ejemplo 3"
    },{
        title :"Post 4",
        content : "Texto de ejemplo 4"
    },{
        title :"Post 5",
        content : "Texto de ejemplo 5"
    }]
</script>

<style scoped>
    .container{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-around; 
    }
</style>