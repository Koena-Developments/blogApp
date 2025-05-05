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
    },

    {
      id:2,
      title: "we just need to update this to Nuxt.js then we are good to go",
      content: "i build this using vue3.js and just to cement the concepts and then we are then moving it to Nuxt",
      likes: 0
    },

    {
      id:3,
      title: "implement the backend using ASP.NET",
      content: "I want to firstly design the database, and then also learn authentication and then further cement EF also dataAnotation ",
      likes: 245
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