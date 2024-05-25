<script setup lang="ts">
import { ref } from 'vue'
type Props = {
  show: boolean
}
const props = withDefaults(defineProps<Props>(), {
  show: false,
})

const videoLoaded = ref(false)
const onVideoLoaded = () => {
  videoLoaded.value = true
}
</script>

<template>
  <div>
    <div
      v-if="props.show"
      class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 fixed inset-x-0 top-0 z-50 flex h-[calc(100%)] max-h-full w-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black/70 p-4 md:inset-0"
    >
      <div class="relative max-h-full w-full max-w-md" @click.stop>
        <div class="dark:theme__dark relative rounded-lg bg-white shadow">
          <div class="px-4 py-5">
            <h2
              class="mb-3 text-center text-xl font-medium text-gray-800 dark:text-white"
            >
              ただいまメンテナンス中です
            </h2>
            <div class="relative text-center">
              <div v-show="!videoLoaded" class="w-auto animate-pulse">
                <div>
                  <div
                    class="main__shadow relative mt-2 h-96 w-full overflow-hidden rounded border-inherit bg-gray-200 group-hover:opacity-75"
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
                <source
                  src="https://d18g0hf2wnz3gs.cloudfront.net/maintenance.mp4"
                  type="video/mp4"
                />
              </video>
              <h3
                class="absolute bottom-5 my-2 px-3 font-bold leading-8 text-white"
              >
                当サイトにアクセスいただきありがとうございます🐶<br />
                ただいまメンテナンスを行なっております。<br />
                ご迷惑おかけしますが、<br />
                再開までしばらくお待ちください。
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
