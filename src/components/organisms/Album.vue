<script setup lang="ts">
import { albumQuery } from "@/mock/albumsQuery";

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
      class="mt-2 bg-white sm:aspect-h-1 relative h-96 w-full overflow-hidden group-hover:opacity-75"
    >
      <img
        :src="album.image"
        alt="画像"
        class="h-full w-full object-cover object-center cursor-pointer"
      />
      <div
        v-if="props.showClipboardMap[album.id]"
        class="absolute inset-0 flex items-center justify-center bg-slate-900 bg-opacity-75 text-white border-2 border-yellow-300"
      >
        リンクをコピーしました
      </div>
    </div>
    <h3 class="mt-1 mb-2 text-sm text-gray-500">
      <span class="absolute inset-0"></span>
      {{ album.title }}
    </h3>
  </div>
</template>

<style scoped lang="scss">
.image-filter {
  filter: blur(3px);
}
</style>
