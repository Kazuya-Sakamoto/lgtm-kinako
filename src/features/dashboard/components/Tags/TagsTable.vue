<script setup lang="ts">
import { Tag, TagWithAlbumCount } from '@/hooks/types'

export type Props = {
  tagsWithAlbumCounts: TagWithAlbumCount[]
  loading: boolean
  openDeleteDialog: (tag: Tag) => void
}
const props = withDefaults(defineProps<Props>(), {
  loading: false,
})
</script>

<template>
  <div
    class="text-surface shadow-secondary-1 dark:bg-surface-dark block rounded-lg border-2 border-gray-300 bg-white shadow-xl dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300"
  >
    <div class="border-b-2 border-neutral-100 px-6 py-3 dark:border-gray-600">
      タグ一覧
    </div>
    <div class="relative shadow-md sm:rounded-lg">
      <table class="w-full text-left text-sm text-gray-500 rtl:text-right">
        <thead
          class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
          style="position: sticky; top: 0; z-index: 1"
        >
          <tr>
            <th scope="col" class="px-6 py-3">ID</th>
            <th scope="col" class="px-6 py-3">タグ名</th>
            <th scope="col" class="px-6 py-3">総数</th>
            <th scope="col" class="px-6 py-3">削除</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="props.loading">
            <tr>
              <td
                colspan="5"
                class="px-6 py-4 text-center text-gray-500 dark:text-gray-300"
              >
                ローディング中...
              </td>
            </tr>
          </template>
          <template v-else>
            <tr
              v-for="(tagWithAlbumCount, index) in props.tagsWithAlbumCounts"
              :key="index"
              class="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <td
                scope="row"
                class="whitespace-nowrap px-6 py-4 text-gray-900 dark:text-white"
              >
                {{ tagWithAlbumCount.id }}
              </td>
              <td
                class="whitespace-nowrap px-6 py-4 text-gray-900 dark:text-white"
              >
                {{ tagWithAlbumCount.name }}
              </td>
              <td
                class="whitespace-nowrap px-6 py-4 text-gray-900 dark:text-white"
              >
                {{ tagWithAlbumCount.count }}
              </td>
              <td class="px-6 py-4">
                <span
                  class="cursor-pointer font-medium text-rose-500 hover:underline"
                  @click="props.openDeleteDialog(tagWithAlbumCount)"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                    />
                  </svg>
                </span>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>
