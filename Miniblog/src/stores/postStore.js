import {defineStore} from 'pinia'
import {ref} from 'vue'

export const usePostStore = defineStore('post', () => 
{
  const posts = ref([
    {
      id: 1,
      title: 'Welcome Post',
      content: 'This is the first post in the blog!',
      likes: 2
    }


  ])

const addPost = (newPost) => {
  posts.value.push(newPost)
}
const likePost = (id) => {
  const post = posts.value.find(p => p.id === id)
  if (post) post.likes++
}
return { posts, addPost, likePost }
})