<script setup lang="ts">
import { Album as AlbumQuery } from '@/hooks/types'
import AlbumLoading from './AlbumLoading.vue'
import Album from './Album.vue'

export type Props = {
  albums: AlbumQuery[]
  showClipboardMap: Record<string, boolean>
  onCopyImage: (album: AlbumQuery) => void
  albumLoading: boolean
  isAll: boolean
}
const props = defineProps<Props>()
</script>

<template>
  <div>
    <div v-show="props.albumLoading" class="mt-3">
      <AlbumLoading />
    </div>
    <div
      v-show="!props.albumLoading"
      class="mt-3"
      :class="{
        'lg:grid lg:grid-cols-5 lg:gap-x-2 lg:space-y-0': !props.isAll,
        'lg:grid lg:grid-cols-6 ': props.isAll,
      }"
    >
      <div v-for="(album, i) in props.albums" :key="i">
        <Album
          :album="album"
          :show-clipboard-map="props.showClipboardMap"
          :on-copy-image="props.onCopyImage"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.image-filter {
  filter: blur(3px);
}
.gradient-filter {
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.7), transparent);
}
</style>
