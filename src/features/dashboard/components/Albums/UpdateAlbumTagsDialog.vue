<script setup lang="ts">
import { Tag } from '@/hooks/types'

type Props = {
  showUpdateAlbumTagsDialog: boolean
  closeDialog: () => void
  updateAlbumTagsLoading: boolean
  tags: Tag[]
  selectedTagIds: number[]
  addSelectedTagIds: (tagId: number) => void
  deleteSelectedTagIds: (tagId: number) => void
  updateAlbumTags: () => void
}
const props = withDefaults(defineProps<Props>(), {
  showUpdateAlbumTagsDialog: false,
  updateAlbumTagsLoading: false,
})

const handleTagClick = (tagId: number) => {
  if (!props.selectedTagIds.includes(tagId)) {
    props.addSelectedTagIds(tagId)
  } else {
    props.deleteSelectedTagIds(tagId)
  }
}
</script>

<template>
  <div>
    <div
      v-if="props.showUpdateAlbumTagsDialog"
      tabindex="-1"
      class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 fixed inset-x-0 top-0 z-50 flex h-[calc(100%)] max-h-full w-full items-center justify-center overflow-y-auto bg-black/70 p-4 md:inset-0"
    >
      <div class="relative max-h-full w-full max-w-md p-4">
        <div class="relative rounded-lg bg-white shadow dark:bg-gray-700">
          <button
            type="button"
            class="absolute end-2.5 top-3 ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="popup-modal"
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
          <div class="p-4 text-center md:p-5">
            <svg
              class="mx-auto mb-4 h-12 w-12 text-gray-400 dark:text-gray-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3
              class="text-md mb-5 font-normal text-gray-500 dark:text-gray-400"
            >
              タグを選択してください
            </h3>
            <div class="mb-8 flex flex-wrap justify-center">
              <div v-for="(tag, i) in props.tags" :key="i" class="mb-2 mr-2">
                <span
                  :class="[
                    'inline-flex cursor-pointer items-center rounded-md px-4 py-3 text-xs font-medium shadow-xl ring-1 ring-inset ',
                    props.selectedTagIds.includes(tag.id)
                      ? 'bg-yellow-50 font-bold text-yellow-800 shadow-yellow-600/35 ring-yellow-600/20'
                      : 'bg-gray-100  text-gray-600 ring-gray-600/20 hover:border-gray-300 hover:bg-gray-200',
                  ]"
                  @click="handleTagClick(tag.id)"
                >
                  {{ tag.name }}
                </span>
              </div>
            </div>
            <button
              :loading="props.updateAlbumTagsLoading"
              data-modal-hide="popup-modal"
              type="button"
              class="inline-flex items-center rounded-lg bg-rose-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-rose-500 focus:outline-none focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800"
              @click="props.updateAlbumTags()"
            >
              更新する
            </button>
            <button
              data-modal-hide="popup-modal"
              type="button"
              class="ms-3 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
              @click="props.closeDialog()"
            >
              閉じる
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
