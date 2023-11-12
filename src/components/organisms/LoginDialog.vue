<script setup lang="ts">
import TButton from "@/components/atoms/TButton.vue";
import BaseButtonLoading from "@/components/molecules/BaseButtonLoading.vue";

export type Input = {
  email: string;
  password: string;
};

type Props = {
  showLoginDialog: boolean;
  closeLoginDialog: () => void;
  onInput: (item: { name: keyof Input; value: string }) => void;
  onLogin: () => void;
  buttonLoading: boolean;
  loginValidation: () => boolean;
};
const props = withDefaults(defineProps<Props>(), {
  showLoginDialog: false,
  closeLoginDialog: () => {},
  onInput: () => {},
  onLogin: () => {},
  buttonLoading: false,
  loginValidation: () => false,
});
</script>

<template>
  <div>
    <div
      v-if="props.showLoginDialog"
      tabindex="-1"
      class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 fixed flex justify-center items-center top-0 left-0 right-0 z-50 w-full p-4 o verflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full bg-gray-800 bg-opacity-70"
    >
      <div class="relative w-full max-w-md max-h-full">
        <div class="theme__dark relative rounded-lg shadow bg-white">
          <button
            @click="props.closeLoginDialog"
            type="button"
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-800 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
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
            <h3 class="mb-4 text-xl font-medium text-gray-800 dark:text-white">
              ログイン
            </h3>
            <div class="space-y-6">
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >メールアドレス</label
                >
                <input
                  @input="
                    (e) => 
                      props.onInput({ name: 'email', value: (e.target as HTMLInputElement)?.value || '' })"
                  type="email"
                  name="email"
                  class="bg-gray-50 dark:bg-gray-600 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="lgtm.kinako@gmail.com"
                  required
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >パスワード</label
                >
                <input
                  @input="
                    (e) => 
                      props.onInput({ name: 'password', value: (e.target as HTMLInputElement)?.value || '' })"
                  type="password"
                  name="password"
                  class="bg-gray-50 dark:bg-gray-600 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="••••••••"
                  required
                />
              </div>
              <TButton
                v-if="!props.buttonLoading"
                @click="props.onLogin()"
                class="font-bold focus:ring-4 focus:outline-none"
                color="primary"
                text="ログインする"
                size="full"
                textColor="white"
                :disabled="!props.loginValidation()"
              />
              <BaseButtonLoading v-else />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
