<script setup>
defineProps({
  post: {
    type: Object,
    required: true
  }
})
/* Emit */
// const emit = defineEmits(['get-id'])
// const getId = (id) => {
//   emit('get-id', id)
// }
</script>

<template>
  <div class="flex flex-col shadow-xl w-[600px] rounded-xl bg-base-300 my-3">
    <div class="flex items-center justify-between px-5 py-3 bg-zinc-950 rounded-t-xl">
      <p>Written by {{ post.author }} on {{ post.created_at }}</p>
      <div>
        <!-- <button @click="getId(post.id)" class="btn btn-sm me-3">Get ID</button> // Emit -->
        <button class="btn btn-circle btn-outline btn-error me-3 btn-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-5"
          >
            <path
              fill-rule="evenodd"
              d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <button class="btn btn-circle btn-outline btn-success btn-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="size-5"
          >
            <path
              fill-rule="evenodd"
              d="M6.32 2.577a49.255 49.255 0 0 1 11.36 0c1.497.174 2.57 1.46 2.57 2.93V21a.75.75 0 0 1-1.085.67L12 18.089l-7.165 3.583A.75.75 0 0 1 3.75 21V5.507c0-1.47 1.073-2.756 2.57-2.93Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="p-5 space-y-5">
      <h1 class="text-3xl font-bold">{{ post.title }}</h1>
      <p>{{ post.body }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
