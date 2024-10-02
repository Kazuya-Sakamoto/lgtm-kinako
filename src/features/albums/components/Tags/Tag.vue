<script setup lang="ts">
import { TagWithAlbumCount } from '@/hooks/types'

export type Props = {
  tagWithAlbumCount: TagWithAlbumCount
  currentTag: any
  navigateWithTag: (tagId: number) => void
}
const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
  <div>
    <span
      :class="[
        'tag-size inline-flex cursor-pointer items-center rounded-md p-3 text-xs font-medium shadow-md shadow-yellow-600/35 ring-1 ring-inset ring-yellow-600/20',
        props.tagWithAlbumCount.id == props.currentTag
          ? 'bg-yellow-400 text-white'
          : 'bg-yellow-50 text-yellow-800',
      ]"
      @click="props.navigateWithTag(props.tagWithAlbumCount.id)"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-4 pr-1"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>

      {{ props.tagWithAlbumCount.name }} ({{ props.tagWithAlbumCount.count }})
    </span>
  </div>
</template>

<style scoped lang="scss"></style>
