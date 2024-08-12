<script setup>
import { ref, reactive } from 'vue'

const count = ref(0)
const state = reactive({
  count: 0
})
</script>

<template>
  <button @click="count++">ref {{ count }}</button>
  <button @click="state.count++">reactive {{ state.count }}</button>
</template>

<style>
button {
  display: block;
  margin-bottom: 5px;
}
</style>
