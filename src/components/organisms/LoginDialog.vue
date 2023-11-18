<script setup lang="ts">
import TButton from "@/components/atoms/TButton.vue";
import BaseButtonLoading from "@/components/molecules/BaseButtonLoading.vue";
import { LoginInput } from "@/app.vue";

type Props = {
  showLoginDialog: boolean;
  closeLoginDialog: () => void;
  onInput: (item: { name: keyof LoginInput; value: string }) => void;
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
      class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 o verflow-x-hidden fixed inset-x-0 top-0 z-50 flex h-[calc(100%)] max-h-full w-full items-center justify-center overflow-y-auto bg-gray-800 bg-opacity-70 p-4 md:inset-0"
    >
      <div class="relative max-h-full w-full max-w-md">
        <div class="theme__dark relative rounded-lg bg-white shadow">
          <button
            type="button"
            class="absolute right-2.5 top-3 ml-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-800"
            data-modal-hide="authentication-modal"
            @click="props.closeLoginDialog"
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
            <h3 class="mb-4 text-xl font-medium text-gray-800 dark:text-white">
              ログイン
            </h3>
            <div class="space-y-6">
              <div>
                <label
                  for="email"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >メールアドレス</label
                >
                <input
                  type="email"
                  name="email"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-800 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-600"
                  placeholder="lgtm.kinako@gmail.com"
                  required
                  @input="
                    (e) => 
                      props.onInput({ name: 'email', value: (e.target as HTMLInputElement)?.value || '' })"
                />
              </div>
              <div>
                <label
                  for="password"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >パスワード</label
                >
                <input
                  type="password"
                  name="password"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-800 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-600"
                  placeholder="••••••••"
                  required
                  @input="
                    (e) => 
                      props.onInput({ name: 'password', value: (e.target as HTMLInputElement)?.value || '' })"
                />
              </div>
              <TButton
                v-if="!props.buttonLoading"
                class="font-bold focus:outline-none focus:ring-4"
                color="primary"
                text="ログインする"
                size="full"
                text-color="white"
                :disabled="!props.loginValidation()"
                @click="props.onLogin()"
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
