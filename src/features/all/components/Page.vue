<script setup lang="ts">
import { reactive, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useRouter } from '@/.nuxt/imports'
import { Album as AlbumQuery } from '@/hooks/types'
import { useLoginStore } from '@/store/login'
import { useFetchAllAlbums } from '../hooks/useFetchAllAlbums'
import Albums from '@/components/layout/Albums/index.vue'

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
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div>
        <TAlert description="管理用で全てのきなこを表示しています" />
        <p class="mt-2 lg:text-xl">合計数: {{ albums.length }}枚</p>
      </div>
      <div class="custom-py mx-auto max-w-2xl sm:py-5 sm:pb-20 lg:max-w-none">
        <Albums
          :albums="albums"
          :album-loading="albumLoading"
          :is-all="true"
          :refetch="fetchData"
          :show-clipboard-map="{}"
          :on-copy-image="onCopyAlbumID"
        />
      </div>
    </div>
  </div>
</template>
