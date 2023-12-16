<script setup lang="ts">
import { useHead } from '@/.nuxt/imports'
import { reactive } from 'vue'
import TheTemplate from '@/components/templates/albums/index.vue'
import { useFetchAlbums } from '@/hooks/useFetchAlbums'
import { setSeo } from '@/lib/seo'
import { useWelcomeDialogStore } from '@/store/welcomeDialog'
import { sendGtagEvent } from '@/lib/gtagEvent'
import { Album as AlbumQuery } from '@/hooks/types'

const welcomeDialogStore = useWelcomeDialogStore()

const pageSeo = setSeo('きなこ（犬）のLGTM画像')
useHead(pageSeo)

type State = {
  showClipboardMap: Record<string, boolean>
}
const initialState = (): State => ({
  showClipboardMap: {},
})
const state = reactive<State>(initialState())

const { albums, albumLoading, fetchAlbums, refetch } = useFetchAlbums()

;(async () => {
  welcomeDialogStore.openDialog()
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
</script>

<template>
  <div>
    <TheTemplate
      :albums="albums"
      :album-loading="albumLoading"
      :on-copy-image-url="onCopyImageUrl"
      :show-clipboard-map="state.showClipboardMap"
      :refetch="refetch"
      :show="welcomeDialogStore.show"
      :close-dialog="welcomeDialogStore.closeDialog"
    />
  </div>
</template>

<style scoped lang="scss"></style>
