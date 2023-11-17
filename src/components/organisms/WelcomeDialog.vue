<script setup lang="ts">
type Props = {
  show: boolean;
  closeDialog: () => void;
};
const props = withDefaults(defineProps<Props>(), {});
</script>

<template>
  <div>
    <div
      v-if="props.show"
      tabindex="-1"
      class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 fixed flex justify-center items-center top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%)] max-h-full bg-gray-800 bg-opacity-70"
      @click="props.closeDialog()"
    >
      <div class="relative w-full max-w-md max-h-full" @click.stop>
        <div class="theme__dark relative rounded-lg shadow bg-white">
          <button
            @click="props.closeDialog()"
            type="button"
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
            data-modal-hide="authentication-modal"
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <div class="py-5 px-4">
            <h2
              class="text-center mb-3 text-xl font-medium text-gray-800 dark:text-white"
            >
              LGTM-kinakoへようこそ🎉
            </h2>
            <div class="relative text-center">
              <video autoplay muted loop width="100%" class="rounded-lg">
                <source src="@/assets/movie/wel.MP4" type="video/mp4" />
              </video>
              <h3
                class="font-bold px-3 absolute bottom-5 leading-8 my-2 text-md text-white"
              >
                画像をクリックするとMarkdownがコピーされ、LGTMを送るのに使用できます。
                <br />
                ぜひお気軽に使ってください🐶
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
