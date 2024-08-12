<script setup>
import { ref, reactive } from 'vue'

const count = ref(0)
const state = reactive({
  count: 0
})
const myClass = 'mb-5 block text-green'
</script>

<template>
  <button @click="count++" :class="myClass">ref {{ count }}</button>
  <button @click="state.count++" :class="true && myClass">reactive {{ state.count }}</button>
</template>

<style>
.block {
  display: block;
}

.mb-5 {
  margin-bottom: 5px;
}

.text-green {
  color: green;
}
</style>
