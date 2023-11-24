<script setup lang="ts">
import { useHead, useRouter } from '@/.nuxt/imports'
import { reactive, onMounted } from 'vue'
import TheTemplate from '@/components/templates/albums/index.vue'
import { useAlbums, Album as AlbumQuery } from '@/hooks/useAlbums'
import { useLoginStore } from '@/store/login'
import { storeToRefs } from 'pinia'

const loginStore = useLoginStore()
const { isLogin } = loginStore
const { csrfToken } = storeToRefs(loginStore)

const router = useRouter()

useHead({
  meta: [
    {
      name: 'robots',
      content: 'noindex',
    },
  ],
})

type State = {
  id: number
}
const initialState = (): State => ({
  id: 0,
})
const state = reactive<State>(initialState())

const { albums, albumLoading, fetchAllAlbums } = useAlbums()

onMounted(async () => {
  if (!isLogin()) {
    alert('ログインが必要です')
    return router.push('/')
  }
  await fetchAllAlbums(csrfToken.value)
})

const fetchData = async () => {
  await fetchAllAlbums(csrfToken.value)
}

const onCopyAlbumID = (album: AlbumQuery) => {
  state.id = album.id
  console.log(`album.id: ${state.id}`)
}
</script>

<template>
  <div>
    <TheTemplate
      :albums="albums"
      :album-loading="albumLoading"
      :on-copy-image-url="onCopyAlbumID"
      :show-clipboard-map="{}"
      :refetch="fetchData"
      :is-all="true"
      :show="false"
      :close-dialog="() => {}"
    />
  </div>
</template>
