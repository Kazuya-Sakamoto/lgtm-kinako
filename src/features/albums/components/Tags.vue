<script setup lang="ts">
import { Tag as TagQuery } from '@/hooks/types'
import Tag from './Tag.vue'

export type Props = {
  tags: TagQuery[]
  navigateWithTag: (tagId: number) => void
  currentTag: any
  tagLoading: boolean
}
const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
  <div>
    <div v-show="!props.tagLoading" class="mt-6 flex flex-wrap">
      <div v-for="(tag, i) in props.tags" :key="i" class="mb-2 mr-2">
        <Tag
          :tag="tag"
          :current-tag="props.currentTag"
          :navigate-with-tag="props.navigateWithTag"
        />
      </div>
    </div>
    <div v-show="props.tagLoading">
      <div class="flex w-full animate-pulse">
        <div v-for="index in 4" :key="index" class="w-32">
          <div
            class="relative mx-1 mt-6 h-12 overflow-hidden rounded border-inherit bg-gray-300 group-hover:opacity-75 dark:bg-neutral-800"
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
