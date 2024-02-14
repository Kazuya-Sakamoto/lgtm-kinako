<script setup lang="ts">
import { Tag as TagQuery } from '@/hooks/types'

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
        <span
          @click="navigateWithTag(tag.id)"
          :class="[
            'tag-size inline-flex items-center cursor-pointer rounded-md px-4 py-3 text-xs font-medium ring-1 ring-inset ring-yellow-600/20 shadow-xl shadow-yellow-600/35',
            tag.id == props.currentTag
              ? 'bg-yellow-400 text-white'
              : 'bg-yellow-50 text-yellow-800',
          ]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 pr-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>

          {{ tag.name }}
        </span>
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
