<script setup lang="ts"></script>

<template>
  <!-- <div class="flex justify-center min-h-screen mt-48">
    <div class="animate-bounce h-12 w-12 bg-yellow-400 rounded-full" />
  </div> -->
  <div class="animate-pulse lg:grid lg:grid-cols-4 lg:gap-x-2 lg:space-y-0">
    <div v-for="index in 8" :key="index">
      <div
        class="bg-gray-200 border-inherit border drop-shadow-xl mt-2 sm:aspect-h-1 relative h-96 w-full overflow-hidden group-hover:opacity-75"
      />
      <h3 class="mt-1 mb-2 text-sm text-gray-200">● ● ● ● ● ● ●</h3>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
