<script setup lang="ts">
import { useHead } from '@/.nuxt/imports'
import { reactive } from 'vue'
import TheTemplate from '@/components/templates/albums/index.vue'
import { useFetchAlbums } from '@/hooks/useFetchAlbums'
import { setSeo } from '@/lib/seo'
import { useMaintenanceStore } from '@/store/maintenance'
import { sendGtagEvent } from '@/lib/gtagEvent'
import { Album as AlbumQuery } from '@/hooks/types'

const maintenanceStore = useMaintenanceStore()

type State = {
  showClipboardMap: Record<string, boolean>
}
const initialState = (): State => ({
  showClipboardMap: {},
})
const state = reactive<State>(initialState())

const { albums, albumLoading, fetchAlbums, refetch } = useFetchAlbums()

;(async () => {
  maintenanceStore.openDialog()
  await fetchAlbums()
})()

const onCopyImageUrl = (album: AlbumQuery) => {
  sendGtagEvent('copy_image_url', {
    event_category: 'actions',
    event_label: `Album ID: ${album.id}`,
    value: album.id,
  })
  const url = `![LGTM](${album.image})`
  window.navigator.clipboard.writeText(url).then(() => {
    state.showClipboardMap[album.id] = true
  })
  setTimeout(() => {
    state.showClipboardMap[album.id] = false
  }, 2000)
}

const json = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'きなこ（犬）のLGTM画像ギャラリー',
  description:
    'LGTM-kinakoは、きなこ、犬、わんこ、わんちゃんのLGTM画像を集めたギャラリーです。',
  image: albums.value.map((album) => ({
    '@type': 'ImageObject',
    url: album.image,
    caption: album.title,
  })),
}
const pageSeo = setSeo('きなこ（犬）のLGTM画像')
useHead({
  ...pageSeo,
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(json),
    },
  ],
})
</script>

<template>
  <div>
    <TheTemplate
      :albums="albums"
      :album-loading="albumLoading"
      :on-copy-image-url="onCopyImageUrl"
      :show-clipboard-map="state.showClipboardMap"
      :refetch="refetch"
      :show="maintenanceStore.show"
      :close-dialog="maintenanceStore.closeDialog"
    />
  </div>
</template>

<style scoped lang="scss"></style>
