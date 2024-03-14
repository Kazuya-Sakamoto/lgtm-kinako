<script setup lang="ts">
import { reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLoginStore } from '@/store/login'
import { useLocaleStore } from '@/store/localeStore'
import { useLogin } from '@/hooks/useLogin'
import LoginDialog from '@/components/layout/Dialogs/LoginDialog.vue'
import { HeaderMenu, HeaderChangeMode } from '@/components/layout/Headers'
import { TAlert } from '@/components/parts'
import Footer from '@/components/layout/Footers/Footer.vue'

const loginStore = useLoginStore()
const { isLogin } = loginStore
const { locale } = useI18n()
const localeStore = useLocaleStore()
const { setLocale, locale: localeStoreValue } = localeStore

;(() => {
  // ストレージに保存されているlocaleを取得し、設定する
  locale.value = localeStoreValue
})()

type State = {
  showHeaderMenu: boolean
}
const initialState = (): State => ({
  showHeaderMenu: false,
})
const state = reactive<State>(initialState())

const changeLocale = async (e: string) => {
  locale.value = e
  await setLocale(locale.value)
}

const {
  state: loginState,
  onInput: onInputForLogin,
  onLogin,
  valid: loginValidation,
  onOpenDialog: onOpenDialogForLogin,
  onCloseDialog: onCloseDialogForLogin,
} = useLogin()
</script>

<template>
  <div class="font-sans">
    <LoginDialog
      :show-login-dialog="loginState.showDialog"
      :on-close-login-dialog="() => onCloseDialogForLogin()"
      :on-login="onLogin"
      :on-input="onInputForLogin"
      :loading="loginState.loading"
      :login-validation="loginValidation"
    />
    <header class="transition duration-300 ease-in-out dark:theme__dark">
      <div>
        <TAlert
          v-if="isLogin()"
          color="green"
          description="ログインに成功しました"
        />
      </div>
      <nav
        class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <HeaderChangeMode />
        </div>
        <div class="hidden lg:flex lg:gap-x-4" />
        <div class="lg:flex lg:flex-1 lg:justify-end">
          <HeaderMenu
            :show-header-menu="state.showHeaderMenu"
            :on-openshow-header-menu="() => (state.showHeaderMenu = true)"
            :on-closeshow-header-menu="() => (state.showHeaderMenu = false)"
            :on-show-login-dialog="() => onOpenDialogForLogin()"
            :is-login="isLogin"
            :locale="locale"
            :change-locale="changeLocale"
          />
        </div>
      </nav>
    </header>
    <div class="transition duration-300 ease-in-out theme__dark">
      <NuxtPage />
    </div>
    <Footer />
  </div>
</template>

<style lang="scss">
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease-in-out;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
.page-enter-to {
  opacity: 1;
}
</style>
