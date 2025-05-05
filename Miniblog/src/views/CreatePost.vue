<template>
    <div>
      <h1>Create New Post</h1>
      <form @submit.prevent="submitPost">
        <div>
          <label>Title:</label>
          <input v-model="title" required />
        </div>
  
        <div>
          <label>Content:</label>
          <textarea v-model="content" required></textarea>
        </div>
  
        <button type="submit">Post</button>
      </form>
    </div>
  </template>
  
<script setup>
  import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { usePostStore } from '@/stores/postStore'

const title = ref('')
const content = ref('')
const store = usePostStore()
const router = useRouter()

const submitPost = () => {
  store.addPost({
    id: Date.now(),
    title: title.value,
    content: content.value,
    likes: 0
  })
  router.push('/')
}
  </script>
  
  <style scoped>
  form > div {
    margin-bottom: 1rem;
  }
  </style>
  