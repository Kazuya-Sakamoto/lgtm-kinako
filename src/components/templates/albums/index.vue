<script setup lang="ts">
import Album from "@/components/organisms/Album.vue";
import { Album as AlbumQuery } from "@/hooks/useAlbums";
import Loading from "@/components/organisms/Loading.vue";

type Props = {
  albums: AlbumQuery[];
  albumLoading: boolean;
  onCopyImageUrl: (album: AlbumQuery) => void;
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
          <div class="lg:text-xl">きなこのLGTM画像を共有出来るサービスです</div>
          <div
            class="text-sm lg:text-lg mt-2 lg:mt-6 sm:mt-4 flex flex-col items-center"
          >
            <div>画像をクリックするとMarkdownがコピーされます。</div>
            <button
              class="mt-8 inline-flex items-center justify-center rounded-xl bg-yellow-500 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-yellow-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
              @click="props.refetch()"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-8 w-8 mr-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                />
              </svg>
              他のきなこをみる
            </button>
          </div>
        </div>
        <div class="mx-auto max-w-2xl sm:pb-20 sm:py-5 custom-py lg:max-w-none">
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
