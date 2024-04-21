<script setup lang="ts">
import { Album as AlbumQuery } from '@/hooks/types'

type Props = {
  album: AlbumQuery
  showClipboardMap: Record<string, boolean>
  onCopyImage: (album: AlbumQuery) => void
}
const props = defineProps<Props>()
</script>

<template>
  <div
    class="group relative"
    style="cursor: pointer"
    @click="() => props.onCopyImage(props.album)"
  >
    <div
      class="main__shadow sm:aspect-h-1 relative mt-4 h-80 w-full overflow-hidden rounded border-none bg-white group-hover:opacity-75"
    >
      <img
        :src="props.album.image"
        loading="lazy"
        decoding="async"
        width="300"
        height="400"
        alt="LGTM-kinako きなこ、わんこ、わんちゃん 犬のLGTM画像。"
        class="h-full w-full cursor-pointer object-cover object-center"
      />
    </div>
    <div
      v-show="props.showClipboardMap[props.album.id]"
      class="absolute inset-0 z-10 flex items-center justify-center rounded border-2 border-yellow-300 bg-black/65 font-bold text-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2.2"
        stroke="currentColor"
        class="h-7 w-7 font-bold text-yellow-400"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      Copied as Markdown
    </div>
    <div class="gradient-filter absolute inset-x-0 bottom-0 h-1/3 rounded" />
    <h3
      class="absolute bottom-0 left-0 mb-2 ml-2 pb-2 text-center text-sm text-white"
    >
      {{ props.album.title }}
    </h3>
    <div class="absolute bottom-0 left-0 mb-8 ml-2 flex flex-wrap">
      <div v-for="(tag, i) in props.album.tags" :key="i" class="mb-2 mr-1">
        <span
          class="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20"
        >
          {{ tag.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.gradient-filter {
  background-image: linear-gradient(to top, rgba(0, 0, 0, 1), transparent);
}
</style>
