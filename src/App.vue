<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header class="navbar bg-neutral text-neutral-content">
    <div class="flex-1">
      <RouterLink to="/" class="text-xl btn btn-ghost">daisyUI</RouterLink>
    </div>
    <nav class="flex-none">
      <ul class="px-1 menu menu-horizontal">
        <li>
          <RouterLink to="/posts/create">Create Post</RouterLink>
        </li>
        <li>
          <RouterLink to="/posts/edit">Edit Post</RouterLink>
        </li>
        <li>
          <details>
            <summary>Parent</summary>
            <ul class="p-2 rounded-t-none bg-base-100">
              <li><a>Link 1</a></li>
              <li><a>Link 2</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </nav>
  </header>

  <RouterView />
</template>
