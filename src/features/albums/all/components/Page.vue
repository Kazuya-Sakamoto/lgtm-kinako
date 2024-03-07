<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from '@/.nuxt/imports'
import { Album as AlbumQuery } from '@/hooks/types'
import { useLoginStore } from '@/store/login'
import Layout from '../../components/Layout.vue'
import { useFetchAllAlbums } from '../hooks/useFetchAllAlbums'

const loginStore = useLoginStore()
const { isLogin } = loginStore
const { csrfToken } = storeToRefs(loginStore)

const router = useRouter()

type State = {
  id: number
}
const initialState = (): State => ({
  id: 0,
})
const state = reactive<State>(initialState())

const { albums, albumLoading, fetchAllAlbums } = useFetchAllAlbums()

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
    <Layout
      :albums="albums"
      :album-loading="albumLoading"
      :on-copy-image="onCopyAlbumID"
      :show-clipboard-map="{}"
      :refetch="fetchData"
      :is-all="true"
      :close-dialog="() => {}"
    />
  </div>
</template>
