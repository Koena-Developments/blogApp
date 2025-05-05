<template>
  <div>
    <h1>Blog Posts</h1>
    <PostCard
      v-for="post in store.posts"
      :key="post.id"
      :post="post"
      @like="handleLike"
    />
  </div>
</template>

<script setup>
import { usePostStore } from '@/stores/postStore'
import PostCard from '@/components/PostCard.vue'

const store = usePostStore()

const handleLike = (id) => {
  store.likePost(id)
}


</script>
