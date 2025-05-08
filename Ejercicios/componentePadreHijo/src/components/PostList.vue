<template>
<PostDetail v-for="post in posts" :key="post.title" :title="post.title" :content="post.contenido"></PostDetail>
</template>

<script setup>
import { ref } from 'vue'
import PostDetail from './PostDetail.vue'
const posts = ref([{
  title: 'titulo1',
  contenido: 'content1'
},
{
  title: 'titulo2',
  contenido: 'content2'
},
{
  title: 'titulo3',
  contenido: 'content3'
},
{
  title: 'titulo4',
  contenido: 'content4'
},{
  title: 'titulo5',
  contenido: 'content5'
}
])

</script>

<style scoped>

</style>
