<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import { useRouter, useRoute } from '@/.nuxt/imports'
import { Album as AlbumQuery } from '@/hooks/types'
import { sendGtagEvent } from '@/lib/gtagEvent'
import { useFetchAlbums } from '../hooks/useFetchAlbums'
import { useFetchTags } from '../hooks/useFetchTags'
import Layout from './Layout.vue'

const route = useRoute()
const router = useRouter()

const currentTag = ref(route.query.tag)
watch(
  () => route.query.tag,
  (newTag) => {
    currentTag.value = newTag
  }
)
const navigateWithTag = (tagId: number) => {
  if (currentTag.value === tagId.toString()) {
    router.push({ path: '/' })
  } else {
    router.push({ path: '/', query: { tag: tagId.toString() } })
  }
}

type State = {
  showClipboardMap: Record<string, boolean>
}
const initialState = (): State => ({
  showClipboardMap: {},
})
const state = reactive<State>(initialState())

const { albums, albumLoading, fetchAlbums, refetch } = useFetchAlbums()
const { tags, loading: tagLoading, fetchTags } = useFetchTags()

;(async () => {
  await Promise.all([fetchAlbums(route.query.tag), fetchTags()])
})()

const onCopyImage = (album: AlbumQuery) => {
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
    <Layout
      :albums="albums"
      :album-loading="albumLoading"
      :on-copy-image="onCopyImage"
      :show-clipboard-map="state.showClipboardMap"
      :refetch="refetch"
      :tags="tags"
      :navigateWithTag="navigateWithTag"
      :current-tag="currentTag"
      :tag-loading="tagLoading"
    />
  </div>
</template>

<style scoped lang="scss"></style>
