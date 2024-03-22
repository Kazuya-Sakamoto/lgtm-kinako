<script setup lang="ts">
import { Album } from '@/hooks/types'

export type Props = {
  albums: Album[]
  albumLoading: boolean
}
const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
  <div
    class="block rounded-lg border-2 border-gray-300 bg-white shadow-xl dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300"
  >
    <div class="border-b-2 border-neutral-100 px-6 py-3 dark:border-gray-600">
      画像一覧
    </div>
    <div class="relative shadow-md sm:rounded-lg">
      <table class="w-full text-left text-sm text-gray-500 rtl:text-right">
        <thead
          class="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400"
          style="position: sticky; top: 0; z-index: 1"
        >
          <tr>
            <th scope="col" class="px-6 py-3">ID</th>
            <th scope="col" class="px-16 py-3">
              <span class="sr-only">Image</span>
            </th>
            <th scope="col" class="px-6 py-3">タイトル</th>
            <th scope="col" class="px-6 py-3">タグ</th>
            <th scope="col" class="px-6 py-3">タグの管理</th>
          </tr>
        </thead>
        <tbody>
          <template v-if="props.albumLoading">
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
              v-for="album in props.albums"
              :key="album.id"
              class="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
            >
              <td
                class="whitespace-nowrap px-6 py-4 text-gray-900 dark:text-white"
              >
                {{ album.id }}
              </td>
              <td>
                <img
                  :src="album.image"
                  class="responsive-w max-h-full w-28 max-w-full"
                  alt="Apple Watch"
                />
              </td>
              <td
                class="whitespace-nowrap px-6 py-4 text-gray-900 dark:text-white"
              >
                {{ album.title }}
              </td>
              <td class="px-6 py-4 text-gray-900 dark:text-white">
                <div v-for="(tag, i) in album.tags" :key="i">
                  <span
                    class="mt-1 inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20"
                  >
                    {{ tag.name }}
                  </span>
                </div>
              </td>
              <td class="px-6 py-4">
                <span
                  class="cursor-pointer font-medium text-yellow-600 hover:underline dark:text-yellow-500"
                >
                  <svg
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
                      d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 6h.008v.008H6V6Z"
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

<style scoped lang="scss">
@media (max-width: 640px) {
  .responsive-w {
    width: 3rem;
  }
}
</style>
