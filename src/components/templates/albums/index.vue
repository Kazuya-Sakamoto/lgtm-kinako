<script setup lang="ts">
import Album from "@/components/organisms/Album.vue";
import { albumQuery } from "@/mock/albumsQuery";
import Loading from "@/components/organisms/Loading.vue";

type Props = {
  albums: albumQuery[];
  albumLoading: boolean;
  onCopyImageUrl: (album: albumQuery) => void;
  showClipboardMap: Record<string, boolean>;
  refetch: () => Promise<void>;
};
const props = withDefaults(defineProps<Props>(), {});
</script>

<template>
  <div class="bg-white">
    <div class="bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col items-center">
          <div class="text-xl">きなこのLGTM画像を共有出来るサービスです</div>
          <div class="mt-2 lg:mt-6 sm:mt-4 flex flex-col items-center">
            <div>画像をクリックするとMarkdownがコピーされます。</div>
            <button
              @click="props.refetch()"
              class="mt-5 relative z-30 inline-flex items-center justify-center w-auto px-8 py-3 overflow-hidden font-bold text-gray-500 transition-all duration-500 border border-gray-200 rounded-md cursor-pointer group ease bg-gradient-to-b from-white to-gray-50 hover:from-gray-50 hover:to-white active:to-white"
            >
              <span
                class="w-full h-0.5 absolute bottom-0 group-active:bg-transparent left-0 bg-gray-100"
              ></span>
              <span
                class="h-full w-0.5 absolute bottom-0 group-active:bg-transparent right-0 bg-gray-100"
              ></span>
              画像を更新する
            </button>
          </div>
        </div>
        <!-- <div
          class="bg-yellow-100 border-t border-b border-yellow-500 text-yellow-700 px-4 py-3"
          role="alert"
        >
          <p class="font-bold">きなこのLGTM画像を共有出来るサービスです。</p>
          <p class="text-sm">
            画像をクリックするとGitHub Markdownがコピーされます。
          </p>
        </div> -->
        <div class="mx-auto max-w-2xl sm:pb-20 sm:py-5 custom-py lg:max-w-none">
          <!-- <h2 class="text-2xl font-bold text-gray-800">Collections</h2> -->
          <template v-if="props.albumLoading">
            <Loading />
          </template>
          <div
            v-else
            class="mt-6 space-y-4 lg:grid lg:grid-cols-4 lg:gap-x-2 lg:space-y-0"
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
