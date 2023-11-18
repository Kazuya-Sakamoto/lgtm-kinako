<script setup lang="ts">
import { Album as AlbumQuery } from "@/hooks/useAlbums";

type Props = {
  album: AlbumQuery;
  showClipboardMap: Record<string, boolean>;
  onCopyImageUrl: (album: AlbumQuery) => void;
};
const props = defineProps<Props>();
</script>

<template>
  <div
    class="group relative"
    style="cursor: pointer"
    @click="() => props.onCopyImageUrl(props.album)"
  >
    <div
      class="main__shadow sm:aspect-h-1 relative mt-2 h-96 w-full overflow-hidden rounded bg-white group-hover:opacity-75"
    >
      <img
        :src="album.image"
        loading="eager"
        decoding="async"
        width="300"
        height="400"
        alt="LGTM-kinako きなこ、わんこ、わんちゃん 犬のLGTM画像。"
        class="h-full w-full cursor-pointer object-cover object-center"
      />
      <div
        v-if="props.showClipboardMap[album.id]"
        class="absolute inset-0 flex items-center justify-center rounded border-2 border-yellow-300 bg-slate-900 bg-opacity-75 font-bold text-white"
      >
        リンクをコピーしました
      </div>
    </div>
    <h3 class="mb-2 mt-1 text-sm text-gray-500 dark:text-white">
      <span class="absolute inset-0" />
      {{ album.title }}
    </h3>
  </div>
</template>

<style scoped lang="scss">
.image-filter {
  filter: blur(3px);
}
</style>
