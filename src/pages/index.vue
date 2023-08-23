<script setup lang="ts">
import { reactive, computed } from 'vue'

type State = {
  text: string
}

const initialState = (): State => ({
  text: "kinako",
})
const state = reactive<State>(initialState())


</script>

<template>
  <div>
    {{ state.text }}
  </div>
</template>



<style>

</style>