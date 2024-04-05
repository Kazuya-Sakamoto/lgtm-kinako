<script setup lang="ts">
import { Album as AlbumQuery } from '@/hooks/types'
import AlbumLoading from './AlbumLoading.vue'
import Album from './Album.vue'

export type Props = {
  albums: AlbumQuery[]
  showClipboardMap: Record<string, boolean>
  onCopyImage: (album: AlbumQuery) => void
  albumLoading: boolean
  loadingCount: number
}
const props = defineProps<Props>()
</script>

<template>
  <div>
    <div v-show="props.albumLoading" class="mt-3">
      <AlbumLoading :loading-count="loadingCount" />
    </div>
    <div
      v-show="!props.albumLoading"
      class="lg:grid lg:grid-cols-5 lg:gap-x-2 lg:space-y-0 mt-3"
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
