<script setup lang="ts">
import { Tag as TagQuery } from '@/hooks/types'

export type Props = {
  tag: TagQuery
  currentTag: any
  navigateWithTag: (tagId: number) => void
}
const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
  <div>
    <span
      @click="props.navigateWithTag(props.tag.id)"
      :class="[
        'tag-size inline-flex items-center cursor-pointer rounded-md px-4 py-3 text-xs font-medium ring-1 ring-inset ring-yellow-600/20 shadow-xl shadow-yellow-600/35',
        props.tag.id == props.currentTag
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

      {{ props.tag.name }}
    </span>
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
