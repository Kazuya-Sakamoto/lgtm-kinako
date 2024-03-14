<script setup lang="ts">
import { Album, Tag } from '@/hooks/types'

export type Props = {
  albums: Album[]
  tags: Tag[]
}
const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
  <div class="flex flex-wrap px-2 py-4">
    <div
      class="w-full max-w-xs rounded-lg border-2 border-gray-300 bg-white py-4 shadow-xl dark:border-gray-700 dark:bg-gray-800"
    >
      <div class="flex flex-col items-center py-2 text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-8 w-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>

        <p class="mb-1 text-gray-500 dark:text-gray-400">画像</p>
        <span class="text-xl font-bold text-gray-900 dark:text-white"
          >{{ props.albums.length }}枚</span
        >
      </div>
    </div>
    <div
      class="sm-card ml-2 w-full max-w-xs rounded-lg border-2 border-gray-300 bg-white py-4 shadow-xl dark:border-gray-700 dark:bg-gray-800"
    >
      <div class="flex flex-col items-center py-2 text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-8 w-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 6h.008v.008H6V6Z"
          />
        </svg>

        <p class="mb-1 text-gray-500 dark:text-gray-400">タグ</p>
        <span class="text-xl font-bold text-gray-900 dark:text-white"
          >{{ props.tags.length }}個</span
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@media (max-width: 640px) {
  .sm-card {
    margin-left: 0;
    margin-top: 0.5rem;
  }
}
</style>
