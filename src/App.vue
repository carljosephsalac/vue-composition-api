<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/" class="link link-info">Home</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>
