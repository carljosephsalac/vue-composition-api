<script setup>
import { reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import MyWrapper from '@/components/MyWrapper.vue'
import { usePostsStore } from '@/stores/posts'

const post = reactive({
  title: '',
  body: ''
})

const router = useRouter()

const isFormInvalid = computed(() => {
  return post.title === '' || post.body === ''
})

const postStore = usePostsStore()

const submit = () => {
  // usePostsStore().addPosts(post)
  postStore.addPosts(post)
  router.push({ name: 'home' })
}
</script>

<template>
  <MyWrapper>
    <div class="flex flex-col shadow-xl sm:w-[600px] w-full rounded-xl bg-base-300 mt-10">
      <div class="flex items-center px-5 py-3 bg-zinc-950 rounded-t-xl">
        <p>Create New Post</p>
      </div>
      <form @submit.prevent="submit">
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
              class="w-full input input-bordered input-sm sm:input-md"
            />
          </label>
          <label class="form-control">
            <div class="label">
              <span class="label-text">Post Body</span>
              <span class="label-text-alt">{{ post.body }}</span>
            </div>
            <textarea
              v-model="post.body"
              class="h-24 textarea textarea-bordered textarea-sm sm:textarea-md"
              placeholder="Type here"
            ></textarea>
          </label>
          <button :disabled="isFormInvalid" class="mt-1 btn btn-neutral btn-sm sm:btn-md">
            Add
          </button>
        </div>
      </form>
    </div>
  </MyWrapper>
</template>
