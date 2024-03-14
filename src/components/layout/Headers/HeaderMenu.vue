<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useRoute } from 'nuxt/app'
import HeaderCheck from './HeaderCheck.vue'
const { t } = useI18n()
const route = useRoute()

type Props = {
  showHeaderMenu: boolean
  onOpenshowHeaderMenu: () => void
  onCloseshowHeaderMenu: () => void
  onShowLoginDialog: () => void
  isLogin: () => boolean
  locale: string
  changeLocale: (locale: string) => void
}
const props = withDefaults(defineProps<Props>(), {
  showHeaderMenu: false,
  onOpenshowHeaderMenu: () => {},
  onCloseshowHeaderMenu: () => {},
  onShowLoginDialog: () => {},
  isLogin: () => false,
  changeLocale: () => {},
})

const toggleHeaderMenu = () => {
  props.showHeaderMenu
    ? props.onCloseshowHeaderMenu()
    : props.onOpenshowHeaderMenu()
}

const changeLocale = () => {
  props.locale === 'ja' ? props.changeLocale('en') : props.changeLocale('ja')
}
const isCurrentRoute = (path: string) => route.path === path
</script>

<template>
  <div class="relative inline-block text-left">
    <div>
      <button
        type="button"
        class="dark:theme__dark main__shadow inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300"
        aria-expanded="true"
        aria-haspopup="true"
        @click="toggleHeaderMenu()"
      >
        <svg
          class="h-6 w-6 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
    <transition name="menu-fade">
      <div
        v-show="props.showHeaderMenu"
        class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-neutral-900 dark:text-white"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabindex="-1"
      >
        <div class="py-1" role="none" @click="toggleHeaderMenu()">
          <nuxt-link to="/" class="flex w-full items-center">
            <button
              class="flex w-full items-center px-4 py-2 text-left text-sm text-gray-700 hover:bg-yellow-100 dark:text-white dark:hover:bg-neutral-800"
              role="menuitem"
              tabindex="-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>

              <span class="ml-2">{{ t('$headers.top') }}</span>
              <HeaderCheck v-if="isCurrentRoute('/')" class="ml-2" />
            </button>
          </nuxt-link>
          <nuxt-link to="/terms" class="flex w-full items-center">
            <button
              class="flex w-full items-center px-4 py-2 text-left text-sm text-gray-700 hover:bg-yellow-100 dark:text-white dark:hover:bg-neutral-800"
              role="menuitem"
              tabindex="-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
              <span class="ml-2">{{ t('$headers.terms') }}</span>
              <HeaderCheck v-if="isCurrentRoute('/terms')" class="ml-2" />
            </button>
          </nuxt-link>
          <nuxt-link to="/privacy" class="flex w-full items-center">
            <button
              class="flex w-full items-center px-4 py-2 text-left text-sm text-gray-700 hover:bg-yellow-100 dark:text-white dark:hover:bg-neutral-800"
              role="menuitem"
              tabindex="-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>

              <span class="ml-2">{{ t('$headers.policy') }}</span>
              <HeaderCheck v-if="isCurrentRoute('/privacy')" class="ml-2" />
            </button>
          </nuxt-link>
          <nuxt-link to="/dashboard" class="flex w-full items-center">
            <button
              v-if="props.isLogin()"
              class="flex w-full items-center px-4 py-2 text-left text-sm text-gray-700 hover:bg-yellow-100 dark:text-white dark:hover:bg-neutral-800"
              role="menuitem"
              tabindex="-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-5 w-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                />
              </svg>

              <span class="ml-2">{{ t('$headers.dashboard') }}</span>
              <HeaderCheck v-if="isCurrentRoute('/dashboard')" class="ml-2" />
            </button>
          </nuxt-link>
          <button
            v-if="!props.isLogin()"
            type="button"
            class="flex w-full items-center px-4 py-2 text-left text-sm text-gray-700 hover:bg-yellow-100 dark:text-white dark:hover:bg-neutral-800"
            role="menuitem"
            tabindex="-1"
            @click="props.onShowLoginDialog()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
              />
            </svg>
            <span class="ml-2">
              {{ t('$headers.login') }}
            </span>
          </button>
          <button
            type="button"
            class="flex w-full items-center px-4 py-2 text-left text-sm text-gray-700 hover:bg-yellow-100 dark:text-white dark:hover:bg-neutral-800"
            role="menuitem"
            tabindex="-1"
            @click="changeLocale()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-5 w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
              />
            </svg>
            <span class="ml-2">
              {{ t('$headers.language') }}
            </span>
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped lang="scss">
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.3s ease;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
}

.menu-fade-enter-to {
  opacity: 1;
}
</style>
