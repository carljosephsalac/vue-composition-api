<script setup>
defineProps({
  post: {
    type: Object,
    required: true
  }
})
</script>

<template>
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
</template>

<style lang="scss" scoped></style>
