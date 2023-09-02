<script setup lang="ts">
import Album from "@/components/organisms/Album.vue";
import { albumQuery } from "@/mock/albumsQuery";
import Loading from "@/components/organisms/Loading.vue";

type Props = {
  albums: albumQuery[];
  albumLoading: boolean;
  onCopyImageUrl: (album: albumQuery) => void;
  showClipboardMap: Record<string, boolean>;
};
const props = withDefaults(defineProps<Props>(), {});
</script>

<template>
  <div class="bg-white">
    <div class="bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          class="bg-yellow-100 border-t border-b border-yellow-500 text-yellow-700 px-4 py-3"
          role="alert"
        >
          <p class="font-bold">きなこのLGTM画像を共有出来るサービスです。</p>
          <p class="text-sm">
            画像をクリックするとGitHub Markdownがコピーされます。
          </p>
        </div>
        <div class="mx-auto max-w-2xl sm:py-20 custom-py lg:max-w-none">
          <h2 class="text-2xl font-bold text-gray-800">Collections</h2>
          <template v-if="props.albumLoading">
            <Loading />
          </template>
          <div
            v-else
            class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0"
          >
            <div v-for="(album, i) in props.albums" :key="i">
              <Album
                :album="album"
                :showClipboardMap="showClipboardMap"
                :onCopyImageUrl="onCopyImageUrl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@media (max-width: 640px) {
  .custom-py {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
}
</style>
