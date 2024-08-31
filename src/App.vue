<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { usePostsStore } from './stores/posts'

const postStore = usePostsStore()
postStore.getPost()
</script>

<template>
  <header class="navbar bg-neutral text-neutral-content">
    <div class="flex-1">
      <RouterLink to="/" class="text-xl btn btn-ghost">Home</RouterLink>
    </div>
    <nav class="flex-none">
      <ul class="px-1 menu menu-horizontal">
        <li>
          <RouterLink to="/posts/create">Create Post</RouterLink>
        </li>
      </ul>
    </nav>
  </header>

  <RouterView />
</template>
