<script setup lang="ts"></script>

<template>
  <div class="animate-pulse lg:grid lg:grid-cols-4 lg:gap-x-2 lg:space-y-0">
    <div v-for="index in 8" :key="index">
      <div
        class="main__shadow sm:aspect-h-1 relative mt-2 h-96 w-full overflow-hidden rounded border-inherit bg-gray-300 group-hover:opacity-75"
      />
      <h3 class="mb-2 mt-1 text-sm text-gray-200">● ● ● ● ● ● ●</h3>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
