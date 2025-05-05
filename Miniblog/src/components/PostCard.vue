<template>
    <div class="post-card">
        <h2> {{ post.title }}</h2>
        <p>{{ post.content }}</p>
        <p v-if="post.likes > 0">❤️ {{ post.likes }} likes</p>
        <button @click="emit('like', post.id)"> Like</button>
    </div>
</template>


<script setup>
    const props = defineProps({
  post: {  
    type: Object,
    required: true,
    default: () => ({ 
      title: '',
      content: '',
      likes: 0,
      id: null
    })
  }
})
const emit = defineEmits(['like']) 
</script>

<style scoped>
.post-card {
  border: 1px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
}
</style>