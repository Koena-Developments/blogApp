import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreatePost from '../views/CreatePost.vue'
import PostDetails from '../views/PostDetails.vue'

const routes = [
  {path: '/', name:"Home", component: HomeView},
  {path: '/create', name:"CreatePost", component: CreatePost},
  {path: '/posts/:id', name:"PostDetails", component: PostDetails, props:true},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
