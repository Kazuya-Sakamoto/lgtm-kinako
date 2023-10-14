<script setup lang="ts">
import { useHead } from "@/.nuxt/imports";
import { reactive } from "vue";
import TheTemplate from "@/components/templates/albums/index.vue";
import { useAlbums, Album as AlbumQuery } from "@/hooks/useAlbums";

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
  await fetchAllAlbums();
})();

const fetchData = async () => {
  await fetchAllAlbums();
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
