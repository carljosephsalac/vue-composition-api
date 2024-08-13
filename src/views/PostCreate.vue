<script setup>
import MyWrapper from '@/components/MyWrapper.vue'
import { reactive, computed } from 'vue'

const post = reactive({
  title: '',
  body: ''
})
const isFormInvalid = computed(() => {
  return post.title === '' || post.body === ''
})
const logPost = () => {
  console.log(post.title, post.body)
  post.title = ''
  post.body = ''
}
</script>

<template>
  <MyWrapper>
    <div class="flex flex-col shadow-xl w-[600px] rounded-xl bg-base-300 mt-10">
      <div class="flex items-center px-5 py-3 bg-zinc-950 rounded-t-xl">
        <p>Create New Post</p>
      </div>
      <form @submit.prevent="logPost">
        <div class="flex flex-col gap-5 px-10 pt-3 pb-6">
          <label class="w-full form-control">
            <div class="label">
              <span class="label-text">Post Title</span>
              <span class="label-text-alt">{{ post.title }}</span>
            </div>
            <input
              v-model="post.title"
              type="text"
              placeholder="Type here"
              class="w-full input input-bordered"
            />
          </label>
          <label class="form-control">
            <div class="label">
              <span class="label-text">Post Body</span>
              <span class="label-text-alt">{{ post.body }}</span>
            </div>
            <textarea
              v-model="post.body"
              class="h-24 textarea textarea-bordered"
              placeholder="Type here"
            ></textarea>
          </label>
          <button :disabled="isFormInvalid" class="mt-1 btn btn-neutral">Add</button>
        </div>
      </form>
    </div>
  </MyWrapper>
</template>
