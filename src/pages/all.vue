<script setup lang="ts">
import { useHead } from "@/.nuxt/imports";
import { reactive } from "vue";
import TheTemplate from "@/components/templates/albums/index.vue";
import { useAlbums, Album as AlbumQuery } from "@/hooks/useAlbums";
import { useLoginStore } from "@/store/login";
import { storeToRefs } from "pinia";

const loginStore = useLoginStore();
const { isLogin } = loginStore;
const { csrfToken } = storeToRefs(loginStore);

useHead({
  meta: [
    {
      name: "robots",
      content: "noindex",
    },
  ],
});

type State = {
  id: number;
};
const initialState = (): State => ({
  id: 0,
});
const state = reactive<State>(initialState());

const { albums, albumLoading, fetchAllAlbums } = useAlbums();

(async () => {
  if (!isLogin()) return alert("ログインが必要です");
  await fetchAllAlbums(csrfToken.value);
})();

const fetchData = async () => {
  await fetchAllAlbums(csrfToken.value);
};

const onCopyAlbumID = (album: AlbumQuery) => {
  state.id = album.id;
  console.log(`album.id: ${state.id}`);
};
</script>

<template>
  <div>
    <TheTemplate
      :albums="albums"
      :albumLoading="albumLoading"
      :onCopyImageUrl="onCopyAlbumID"
      :showClipboardMap="{}"
      :refetch="fetchData"
      :isAll="true"
    />
  </div>
</template>
