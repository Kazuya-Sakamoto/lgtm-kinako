<script setup lang="ts">
import { ref } from 'vue'
type Props = {
  show: boolean
  closeDialog: () => void
}
const props = withDefaults(defineProps<Props>(), {})

const videoLoaded = ref(false)
const onVideoLoaded = () => {
  videoLoaded.value = true
}
</script>

<template>
  <div>
    <div
      v-if="props.show"
      tabindex="-1"
      class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 fixed inset-x-0 top-0 z-50 flex h-[calc(100%)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-gray-800 bg-opacity-70 p-4 md:inset-0"
      @click="props.closeDialog()"
    >
      <div class="relative max-h-full w-full max-w-md" @click.stop>
        <div class="theme__dark relative rounded-lg bg-white shadow">
          <button
            type="button"
            class="absolute right-2.5 top-3 ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
            data-modal-hide="authentication-modal"
            @click="props.closeDialog()"
          >
            <svg
              class="h-3 w-3"
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
          <div class="px-4 py-5">
            <h2
              class="mb-3 text-center text-xl font-medium text-gray-800 dark:text-white"
            >
              LGTM-kinakoへようこそ🎉
            </h2>
            <div class="relative text-center">
              <div v-show="!videoLoaded" class="w-auto animate-pulse">
                <div>
                  <div
                    class="main__shadow sm:aspect-h-1 relative mt-2 h-96 w-full overflow-hidden rounded border-inherit bg-gray-200 group-hover:opacity-75"
                  />
                </div>
              </div>
              <video
                v-show="videoLoaded"
                autoplay
                muted
                loop
                width="100%"
                class="rounded-lg"
                playsinline
                style="pointer-events: none"
                @loadeddata="onVideoLoaded"
              >
                <source src="@/assets/movie/welcome.mp4" type="video/mp4" />
              </video>
              <h3
                class="text-md absolute bottom-5 my-2 px-3 font-bold leading-8 text-white"
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
