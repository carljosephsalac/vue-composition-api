<script setup>
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
  <div v-for="post in posts" :key="post.id" class="flex justify-center w-full">
    <div class="flex flex-col shadow-xl w-[600px] rounded-xl bg-base-300 my-3">
      <div class="flex justify-between p-5 bg-zinc-950 rounded-t-xl">
        <p>Written by {{ post.author }} on {{ post.created_at }}</p>
        <div>
          <button class="btn btn-error btn-sm me-2">Delete</button>
          <button class="btn btn-success btn-sm">Save</button>
        </div>
      </div>
      <div class="p-5 space-y-5">
        <h1 class="text-3xl font-bold">{{ post.title }}</h1>
        <p>{{ post.body }}</p>
      </div>
    </div>
  </div>
</template>
