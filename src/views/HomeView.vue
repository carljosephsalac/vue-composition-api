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
  <header class="p-4 border-t border-gray-500 navbar bg-neutral">
    <div class="flex-1">
      <a class="text-xl btn btn-ghost">
        {{ postFilter === 'all' ? 'All posts' : 'Saved posts' }}
      </a>
      <span v-show="postStore.loading" class="loading loading-spinner loading-md"></span>
    </div>
    <div class="flex-none">
      <button @click="setPostFilter" class="btn">
        {{ postFilter === 'all' ? 'Show saved posts' : 'Show all posts' }}
      </button>
    </div>
  </header>

  <div v-if="postStore.errMsg">
    <div role="alert" class="mx-auto mt-5 max-w-fit alert alert-error">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-6 h-6 stroke-current shrink-0"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>{{ postStore.errMsg }}</span>
    </div>
  </div>

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

  <div v-if="postFilter === 'saved'">
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
