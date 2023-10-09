<script setup lang="ts">
import { reactive } from "vue";
import TheTemplate from "@/components/templates/albums/index.vue";
import { useAlbums, Album as AlbumQuery } from "@/hooks/useAlbums";
import { setSeo } from "@/lib/seo";

const pageSeo = setSeo("きなこ（犬）のLGTM画像");
useHead(pageSeo);

type State = {
  albums: AlbumQuery[];
  albumLoading: boolean;
  showClipboardMap: Record<string, boolean>;
};

const initialState = (): State => ({
  albums: [],
  albumLoading: false,
  showClipboardMap: {},
});
const state = reactive<State>(initialState());

const { albums, albumLoading, fetchAlbums, refetch } = useAlbums();
fetchAlbums();

const onCopyImageUrl = (album: AlbumQuery) => {
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
      :refetch="refetch"
    />
  </div>
</template>

<style scoped lang="scss"></style>
