<script setup lang="ts">
import { reactive } from "vue";
import TheTemplate from "@/components/templates/albums/index.vue";
import { albumQuery } from "@/mock/albumsQuery";
import { useAlbums } from "@/hooks/useAlbums";

type State = {
  albums: albumQuery[];
  albumLoading: boolean;
  showClipboardMap: Record<string, boolean>;
};

const initialState = (): State => ({
  albums: [],
  albumLoading: false,
  showClipboardMap: {},
});
const state = reactive<State>(initialState());

const { albums, albumLoading, fetchAlbums } = useAlbums();
fetchAlbums();

const onCopyImageUrl = (album: albumQuery) => {
  const url = `![LGTM](${album.image})`;
  window.navigator.clipboard.writeText(url).then(() => {
    state.showClipboardMap[album.id] = true;
  });
  setTimeout(() => {
    state.showClipboardMap[album.id] = false;
  }, 2000);
};
</script>

<template>
  <div>
    <TheTemplate
      :albums="albums"
      :albumLoading="albumLoading"
      :onCopyImageUrl="onCopyImageUrl"
      :showClipboardMap="state.showClipboardMap"
    />
  </div>
</template>

<style scoped lang="scss"></style>
