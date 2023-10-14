<script setup lang="ts">
import TButton from "@/components/atoms/TButton.vue";
import ButtonLoading from "@/components/molecules/ButtonLoading.vue";

export type Input = {
  email: string;
  password: string;
  imageUrl: string;
  title: string;
};

type Props = {
  showNewDialog: boolean;
  onCloseshowNewDialog: () => void;
  onCreateNewAlbum: () => void;
  onInput: (item: { name: keyof Input; value: string }) => void;
  imageUrl: string;
  onFileChange: (e: Event) => void;
  buttonLoading: boolean;
};
const props = withDefaults(defineProps<Props>(), {
  showNewDialog: false,
  onCloseshowNewDialog: () => {},
  onCreateNewAlbum: () => {},
  onInput: () => {},
  imageUrl: "",
  onFileChange: () => {},
  buttonLoading: false,
});
</script>

<template>
  <div>
    <div
      v-if="props.showNewDialog"
      tabindex="-1"
      class="fixed flex justify-center items-center top-0 left-0 right-0 z-50 w-full p-4 o verflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full bg-gray-800 bg-opacity-70"
    >
      <div class="relative w-full max-w-md max-h-full">
        <div class="relative rounded-lg shadow bg-white dark:bg-white">
          <button
            @click="props.onCloseshowNewDialog"
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
          <div class="px-6 py-6 lg:px-8">
            <h3 class="mb-4 text-xl font-medium text-gray-800">アップロード</h3>
            <div class="space-y-6">
              <div>
                <div
                  class="file_upload p-5 relative border-4 border-dotted border-gray-300 rounded-lg"
                  style="width: 100%"
                >
                  <template v-if="!props.imageUrl">
                    <svg
                      class="text-gray-600 w-24 mx-auto mb-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                      />
                    </svg>
                    <div
                      class="rounded-lg bg-white sm:aspect-h-1 relative h-26 w-full overflow-hidden sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75"
                    >
                      <label>
                        <input
                          @change="onFileChange"
                          class="text-sm cursor-pointer w-36 hidden"
                          type="file"
                          multiple
                        />
                        <div
                          class="bg-gray-100 text-gray-800 border border-gray-300 rounded cursor-pointer py-2 px-4"
                        >
                          選択する
                        </div>
                      </label>
                    </div>
                  </template>
                  <img
                    v-else
                    :src="props.imageUrl"
                    alt="アップロードされた きなこ、わんこ、わんちゃん 犬のLGTM画像。"
                  />
                </div>
              </div>
              <div>
                <label
                  for="title"
                  class="block mb-2 text-sm font-medium text-gray-800"
                  >タイトル</label
                >
                <input
                  @input="
                    (e) =>
                      props.onInput({ name: 'title', value: (e.target as HTMLInputElement)?.value || '' })
                  "
                  type="text"
                  name="title"
                  class="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="kinako@kinako.com"
                  required
                />
              </div>
              <TButton
                v-if="!props.buttonLoading"
                @click="props.onCreateNewAlbum()"
                class="font-bold focus:ring-4 focus:outline-none"
                color="primary"
                text="アップロードする"
                size="full"
                textColor="white"
              />
              <ButtonLoading v-else />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
