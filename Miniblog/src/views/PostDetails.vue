<template>
  <div v-if="post">
    <h1>{{ post.title }}</h1>
    <p>{{ post.content }}</p>
    <p v-if="post.likes > 0">❤️ {{ post.likes }} likes</p>
  </div>
  <div v-else>
    <p>Post not found.</p>
  </div>
</template>
  
  <script setup>
import { useRoute } from 'vue-router'
import { usePostStore } from '../stores/postStore.js'
import { computed } from 'vue'

const route = useRoute()
const store = usePostStore()

const post = computed(() =>
  store.posts.find(p => p.id === Number(route.params.id))
)
</script>
