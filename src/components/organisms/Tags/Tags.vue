<script setup lang="ts">
import { Tag as TagQuery } from '@/hooks/types'
import Tag from './Tag.vue'

type Props = {
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
      <div v-for="(tag, i) in props.tags" :key="i" class="mr-2 mb-2">
        <Tag
          :tag="tag"
          :currentTag="props.currentTag"
          :navigateWithTag="props.navigateWithTag"
        />
      </div>
    </div>
    <div v-show="props.tagLoading">
      <div class="animate-pulse flex w-full">
        <div v-for="index in 4" :key="index" class="w-32">
          <div
            class="aspect-h-1 relative mt-6 h-12 overflow-hidden rounded border-inherit bg-gray-300 dark:bg-neutral-800 group-hover:opacity-75 mx-1"
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
