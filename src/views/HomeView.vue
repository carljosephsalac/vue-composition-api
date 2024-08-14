<script setup>
import MyWrapper from '@/components/MyWrapper.vue'
import PostItem from '@/components/PostItem.vue'
import { usePostsStore } from '@/stores/posts'

const postStore = usePostsStore()
</script>

<template>
  <div v-for="post in postStore.posts" :key="post.id">
    <MyWrapper>
      <template #badge>
        <!-- named slot -->
        <div class="mt-3 badge badge-outline">{{ post.id }}</div>
      </template>
      <!-- <PostItem :post="post" @get-id="(id) => { console.log(id) }" /> //EMIT -->
      <PostItem :post="post" />
    </MyWrapper>
  </div>
</template>
