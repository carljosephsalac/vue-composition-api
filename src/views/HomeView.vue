<script setup>
import MyWrapper from '@/components/MyWrapper.vue'
import PostItem from '@/components/PostItem.vue'

const posts = [
  {
    id: 1,
    title: 'Introduction to JavaScript',
    body: 'JavaScript is a versatile programming language used in web development.',
    author: 'John Doe',
    created_at: 'August 13, 2024',
    is_saved: true
  },
  {
    id: 2,
    title: 'Understanding CSS Grid',
    body: 'CSS Grid is a powerful layout system in CSS.',
    author: 'Jane Smith',
    created_at: 'August 12, 2024',
    is_saved: false
  },
  {
    id: 3,
    title: 'Getting Started with Laravel',
    body: 'Laravel is a PHP framework that makes web development easier.',
    author: 'Chris Johnson',
    created_at: 'August 11, 2024',
    is_saved: true
  },
  {
    id: 4,
    title: 'A Guide to REST APIs',
    body: 'REST APIs allow communication between client and server over HTTP.',
    author: 'Emily Davis',
    created_at: 'August 10, 2024',
    is_saved: false
  },
  {
    id: 5,
    title: 'Exploring Vue.js',
    body: 'Vue.js is a progressive JavaScript framework for building user interfaces.',
    author: 'Michael Brown',
    created_at: 'August 9, 2024',
    is_saved: true
  }
]
</script>

<template>
  <div v-for="post in posts" :key="post.id">
    <MyWrapper>
      <template #badge>
        <!-- named slot -->
        <div class="mt-3 badge badge-outline">{{ post.id }}</div>
      </template>
      <PostItem :post="post" />
    </MyWrapper>
  </div>
</template>
