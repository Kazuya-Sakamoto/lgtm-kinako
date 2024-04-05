<script setup lang="ts">
import { AlbumTagCounts } from '@/hooks/types'
import Tag from './Tag.vue'

export type Props = {
  albumTagsCounts: AlbumTagCounts[]
  navigateWithTag: (tagId: number) => void
  currentTag: any
  loading: boolean
}
const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
  <div>
    <div v-show="!props.loading" class="mt-4 flex flex-wrap">
      <div
        v-for="(albumTagCounts, i) in props.albumTagsCounts"
        :key="i"
        class="mb-2 mr-2"
      >
        <Tag
          :album-tag-counts="albumTagCounts"
          :current-tag="props.currentTag"
          :navigate-with-tag="props.navigateWithTag"
        />
      </div>
    </div>
    <div v-show="props.loading">
      <div class="flex w-full animate-pulse">
        <div v-for="index in 4" :key="index" class="w-32">
          <div
            class="relative mx-1 mt-4 h-11 overflow-hidden rounded border-inherit bg-gray-300 group-hover:opacity-75 dark:bg-neutral-800"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@media (max-width: 640px) {
  .tag-size {
    padding: 6px 8px;
    .w-6.h-6 {
      width: 1rem;
      height: 1.5rem;
    }
  }
}
</style>
