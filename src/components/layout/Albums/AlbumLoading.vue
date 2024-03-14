<script setup lang="ts"></script>

<template>
  <div class="animate-pulse lg:grid lg:grid-cols-4 lg:gap-x-2 lg:space-y-0">
    <div v-for="index in 8" :key="index">
      <div
        class="relative mt-4 h-96 w-full overflow-hidden rounded border-inherit bg-gray-300 group-hover:opacity-75 dark:bg-neutral-800"
      />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
