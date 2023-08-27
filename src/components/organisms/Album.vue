<script setup lang="ts">
import { defineProps } from "#app";
import { albumQuery } from "../../mock/albumsQuery";

type Props = {
  album: albumQuery;
  showClipboardMap: Record<string, boolean>;
  onCopyImageUrl: (album: albumQuery) => void;
};
const props = defineProps<Props>();
</script>

<template>
  <div
    @click="() => props.onCopyImageUrl(props.album)"
    class="group relative"
    style="cursor: pointer"
  >
    <div
      class="rounded-lg bg-white sm:aspect-h-1 relative h-80 w-full overflow-hidden sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64"
    >
      <img
        :src="album.imageUrl"
        alt="画像"
        class="h-full w-full object-cover object-center cursor-pointer"
      />
      <div
        v-if="props.showClipboardMap[album.id]"
        class="absolute inset-0 flex items-center justify-center bg-slate-900 bg-opacity-75 text-white border-2 border-yellow-300 rounded"
      >
        コピーしました。
      </div>
    </div>
    <h3 class="mt-2 mb-4 text-sm text-gray-500">
      <a href="#">
        <span class="absolute inset-0"></span>
        {{ album.title }}
      </a>
    </h3>
  </div>
</template>

<style scoped lang="scss">
.image-filter {
  filter: blur(3px);
}
</style>
