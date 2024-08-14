<script setup>
import { ref } from 'vue'
import MyWrapper from '@/components/MyWrapper.vue'
import PostItem from '@/components/PostItem.vue'
import { usePostsStore } from '@/stores/posts'

const postStore = usePostsStore()

const postFilter = ref('all') // 'all' is the initial value

const setPostFilter = () => {
  postFilter.value = postFilter.value === 'all' ? 'saved' : 'all'
}
</script>

<template>
  <header class="navbar bg-neutral">
    <div class="flex-1">
      <a class="text-xl btn btn-ghost">
        {{ postFilter === 'all' ? 'All posts' : 'Saved posts' }}
      </a>
    </div>
    <div class="flex-none">
      <button @click="setPostFilter" class="btn">
        {{ postFilter === 'all' ? 'Show saved posts' : 'Show all posts' }}
      </button>
    </div>
  </header>

  <div v-if="postFilter === 'all'">
    <div v-for="post in postStore.sorted" :key="post.id">
      <MyWrapper>
        <template #badge>
          <!-- named slot -->
          <div class="mt-3 badge badge-outline">{{ post.id }}</div>
        </template>
        <!-- <PostItem :post="post" @get-id="(id) => { console.log(id) }" /> //EMIT -->
        <PostItem :post="post" />
      </MyWrapper>
    </div>
  </div>

  <div v-else>
    <div v-for="post in postStore.saved" :key="post.id">
      <MyWrapper>
        <template #badge>
          <!-- named slot -->
          <div class="mt-3 badge badge-outline">{{ post.id }}</div>
        </template>
        <!-- <PostItem :post="post" @get-id="(id) => { console.log(id) }" /> //EMIT -->
        <PostItem :post="post" />
      </MyWrapper>
    </div>
  </div>
</template>
