<script setup lang="ts">
import { TButton } from '@/components/parts'
import { CreateAlbumParams } from '@/hooks/types'

type Props = {
  showDialog: boolean
  onCloseDialog: () => void
  onCreateAlbum: () => void
  onInput: (item: { name: keyof CreateAlbumParams; value: string }) => void
  image: string
  onFileChange: (e: Event) => void
  loading: boolean
}
const props = withDefaults(defineProps<Props>(), {
  showDialog: false,
  onCloseDialog: () => {},
  onCreateAlbum: () => {},
  onInput: () => {},
  image: '',
  onFileChange: () => {},
  loading: false,
})
</script>

<template>
  <transition name="fade">
    <div
      v-if="props.showDialog"
      tabindex="-1"
      class="fixed inset-x-0 top-0 z-50 flex h-[calc(100%)] max-h-full w-full items-center justify-center overflow-y-auto bg-black/70 p-4 md:inset-0"
    >
      <div class="relative max-h-full w-full max-w-md">
        <div class="dark:theme__dark relative rounded-lg bg-white shadow">
          <button
            type="button"
            class="absolute right-2.5 top-3 ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
            data-modal-hide="authentication-modal"
            @click="props.onCloseDialog"
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
          <div class="p-6 lg:px-8">
            <h4 class="mb-4 text-xl font-medium text-gray-800 dark:text-white">
              アップロード
            </h4>
            <div class="space-y-6">
              <div>
                <div
                  class="file_upload relative rounded-lg border-4 border-dotted border-gray-300 p-5"
                  style="width: 100%"
                >
                  <template v-if="!props.image">
                    <div
                      class="sm:aspect-h-1 h-26 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 relative w-full overflow-hidden rounded-lg bg-white group-hover:opacity-75"
                    >
                      <label>
                        <input
                          class="hidden w-36 cursor-pointer text-sm"
                          type="file"
                          multiple
                          @change="onFileChange"
                        />
                        <div
                          class="cursor-pointer rounded border border-gray-300 bg-gray-100 px-4 py-2 text-gray-800"
                        >
                          ファイルを選択
                        </div>
                      </label>
                    </div>
                  </template>
                  <img
                    v-else
                    loading="eager"
                    :src="props.image"
                    alt="アップロードされた きなこ、わんこ、わんちゃん 犬のLGTM画像。"
                  />
                </div>
              </div>
              <div>
                <label
                  for="title"
                  class="mb-2 block text-sm font-medium text-gray-800"
                  >タイトル</label
                >
                <input
                  type="text"
                  name="title"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-800 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="可愛すぎでした"
                  required
                  @input="
                    (e: Event) =>
                      onInput({
                        name: 'title',
                        value: (e.target as HTMLInputElement)?.value || '',
                      })
                  "
                />
              </div>
              <TButton
                class="font-bold"
                :disabled="!props.image"
                color="yellow"
                size="full"
                text-color="white"
                :loading="props.loading"
                @click="props.onCreateAlbum()"
                >アップロードする</TButton
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped></style>
