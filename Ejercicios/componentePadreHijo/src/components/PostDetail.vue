<template>
  <div>
    <h1>{{ props.title }}</h1>
    <h3>{{ props.content }}</h3>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { defineProps } from 'vue';
const props = defineProps(['title','content'])
</script>

<style scoped>

</style>
