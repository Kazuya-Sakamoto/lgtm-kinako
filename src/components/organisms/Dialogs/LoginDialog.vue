<script setup lang="ts">
import TButton from '@/components/atoms/TButton.vue'
import { LoginParams } from '@/hooks/types'
import { computed, ComputedRef } from 'vue'

type Props = {
  showLoginDialog: boolean
  closeLoginDialog: () => void
  onInput: (item: { name: keyof LoginParams; value: string }) => void
  onLogin: () => void
  buttonLoading: boolean
  loginValidation: () => ComputedRef<boolean>
}
const props = withDefaults(defineProps<Props>(), {
  showLoginDialog: false,
  closeLoginDialog: () => {},
  onInput: () => {},
  onLogin: () => {},
  buttonLoading: false,
  loginValidation: () => computed(() => false),
})
</script>

<template>
  <transition name="fade">
    <div
      v-if="props.showLoginDialog"
      tabindex="-1"
      class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 o verflow-x-hidden fixed inset-x-0 top-0 z-50 flex h-[calc(100%)] max-h-full w-full items-center justify-center overflow-y-auto bg-gray-800 bg-opacity-70 p-4 md:inset-0"
    >
      <div class="relative max-h-full w-full max-w-md">
        <div class="dark:theme__dark relative rounded-lg bg-white shadow">
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
              Login
            </h3>
            <div class="space-y-6">
              <div>
                <label
                  for="email"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >Email</label
                >
                <input
                  type="email"
                  name="email"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-800 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
                  placeholder="lgtm.kinako@gmail.com"
                  required
                  @input="
                    (e: InputEvent) =>
                      props.onInput({
                        name: 'email',
                        value: (e.target as HTMLInputElement)?.value || '',
                      })
                  "
                />
              </div>
              <div>
                <label
                  for="password"
                  class="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >Password</label
                >
                <input
                  type="password"
                  name="password"
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-800 focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-600 dark:text-white"
                  placeholder="••••••••"
                  required
                  @input="
                    (e: InputEvent) =>
                      props.onInput({
                        name: 'password',
                        value: (e.target as HTMLInputElement)?.value || '',
                      })
                  "
                />
              </div>
              <TButton
                class="font-bold"
                color="yellow"
                size="full"
                text-color="white"
                :disabled="!props.loginValidation"
                :loading="props.buttonLoading"
                @click="props.onLogin()"
                >ログインする</TButton
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
