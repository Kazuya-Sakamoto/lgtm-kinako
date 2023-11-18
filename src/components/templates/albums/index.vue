<script setup lang="ts">
import Album from "@/components/organisms/Album.vue";
import { Album as AlbumQuery } from "@/hooks/useAlbums";
import AlbumLoading from "@/components/organisms/AlbumLoading.vue";
import BaseAlert from "@/components/molecules/BaseAlert.vue";
import WelcomeDialog from "@/components/organisms/WelcomeDialog.vue";

type Props = {
  albums: AlbumQuery[];
  albumLoading: boolean;
  onCopyImageUrl: (album: AlbumQuery) => void;
  showClipboardMap: Record<string, boolean>;
  refetch: () => Promise<void>;
  isAll?: boolean;
  show: boolean;
  closeDialog: () => void;
};
const props = withDefaults(defineProps<Props>(), {
  isAll: false,
});
</script>

<template>
  <div>
    <WelcomeDialog :show="show" :close-dialog="closeDialog" />
    <div class="theme__dark bg-white">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div v-if="!props.isAll" class="flex flex-col items-center">
          <h1 class="lg:text-xl">きなこのLGTM画像を共有出来るサービスです</h1>
          <div
            class="mt-2 flex flex-col items-center text-sm sm:mt-4 lg:mt-6 lg:text-lg"
          >
            <div>画像をクリックするとMarkdownがコピーされます</div>
            <button
              :disabled="props.albumLoading"
              class="font-dm mt-8 inline-flex items-center justify-center rounded-lg bg-yellow-500 px-6 py-3 text-base font-medium text-white shadow-xl shadow-yellow-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
              @click="props.refetch()"
            >
              <div v-if="props.albumLoading">
                <svg
                  aria-hidden="true"
                  role="status"
                  class="mr-1 inline h-8 w-8 animate-spin p-1 text-gray-100"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="#ffffff"
                  /></svg
                >よみこみちゅう...
              </div>
              <div v-else>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="mr-1 inline h-8 w-8 text-gray-100"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                  />
                </svg>
                他のきなこをみる
              </div>
            </button>
          </div>
        </div>
        <div v-else>
          <BaseAlert
            title="管理画面"
            description="管理用で全てのきなこを表示しています"
          />
          <p class="mt-2 lg:text-xl">合計数: {{ props.albums.length }}枚</p>
        </div>
        <div class="custom-py mx-auto max-w-2xl sm:py-5 sm:pb-20 lg:max-w-none">
          <template v-if="props.albumLoading">
            <AlbumLoading />
          </template>
          <div
            v-else
            class="mt-6 space-y-4"
            :class="{
              'lg:grid lg:grid-cols-4 lg:gap-x-2 lg:space-y-0': !props.isAll,
              'lg:grid lg:grid-cols-5 lg:gap-x-1 lg:space-y-0': props.isAll,
            }"
          >
            <div v-for="(album, i) in props.albums" :key="i">
              <Album
                :album="album"
                :show-clipboard-map="showClipboardMap"
                :on-copy-image-url="onCopyImageUrl"
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
