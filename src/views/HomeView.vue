<script setup>
import { ref, reactive } from 'vue'

const count = ref(0)
const state = reactive({
  count: 0
})
const myClass = 'btn btn-sm btn-success text-white block mb-3'
</script>

<template>
  <button @click="count++" :class="myClass">ref {{ count }}</button>
  <button @click="state.count++" :class="true && myClass">reactive {{ state.count }}</button>
</template>
