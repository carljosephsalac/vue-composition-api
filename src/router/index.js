import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PostCreate from '@/views/PostCreate.vue'
import PostEdit from '@/views/PostEdit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/posts/create',
      name: 'posts.create',
      component: PostCreate
    },
    {
      path: '/posts/edit',
      name: 'posts.edit',
      component: PostEdit
    }
  ]
})

export default router
