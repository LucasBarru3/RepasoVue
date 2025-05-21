<template>
<ul>
    <li><RouterLink :to="'/'">Home</RouterLink></li>
    <li><RouterLink :to="'/estadisticas'">Estadisticas</RouterLink></li>

</ul>
</template>

<script setup>

import { RouterLink } from 'vue-router';
</script>