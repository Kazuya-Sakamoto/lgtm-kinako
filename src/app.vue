<script setup lang="ts">
import { reactive } from "vue";
import { useLoginStore } from "@/store/login";
import LoginDialog from "@/components/organisms/LoginDialog.vue";
import NewAlbumDialog from "@/components/organisms/NewAlbumDialog.vue";
import HeaderMenu from "@/components/organisms/HeaderMenu.vue";
import HeaderChangeMode from "@/components/organisms/HeaderChangeMode.vue";
import BaseAlert from "@/components/molecules/BaseAlert.vue";
import { checkEmailVal, isPasswordLengthValid } from "@/lib/validation";
import { useNuxtApp } from "@/.nuxt/imports";
import { useCreateAlbum } from "@/hooks/useCreateAlbum";
import { m } from "@/master";
import { useI18n } from "vue-i18n";
import { useLocaleStore } from "@/store/localeStore";

const nuxtApp = useNuxtApp();

const loginStore = useLoginStore();
const { onLoginStore, isLogin } = loginStore;
const { createNewAlbum } = useCreateAlbum();
const { locale } = useI18n();
const localeStore = useLocaleStore();
const { setLocale, locale: localeStoreValue } = localeStore;

(() => {
  // ストレージに保存されているlocaleを取得し、設定する
  locale.value = localeStoreValue;
})();

export type LoginInput = {
  email: string;
  password: string;
};
export type CreateNewAlbumInput = {
  imageUrl: string;
  title: string;
};
const defaultLoginInput = (): LoginInput => ({
  email: "",
  password: "",
});
const defaultCreateNewAlbumInput = (): CreateNewAlbumInput => ({
  imageUrl: "",
  title: "",
});

type State = {
  showLoginDialog: boolean;
  showNewAlbumDialog: boolean;
  showHeaderMenu: boolean;
  buttonLoading: boolean;
  loginInput: LoginInput;
  createNewAlbumInput: CreateNewAlbumInput;
};

const initialState = (): State => ({
  showLoginDialog: false,
  showNewAlbumDialog: false,
  showHeaderMenu: false,
  buttonLoading: false,
  loginInput: defaultLoginInput(),
  createNewAlbumInput: defaultCreateNewAlbumInput(),
});
const state = reactive<State>(initialState());

const onLogin = async () => {
  state.buttonLoading = true;
  try {
    await onLoginStore({
      email: state.loginInput.email,
      password: state.loginInput.password,
    });
    state.showLoginDialog = false;
  } catch (error) {
    console.error(error);
    alert(`エラーが発生しました。${error}`);
  } finally {
    state.buttonLoading = false;
  }
};
const loginValidation = () => {
  return (
    state.loginInput.email.trim() !== "" &&
    checkEmailVal(state.loginInput.email) &&
    state.loginInput.password.trim() !== "" &&
    isPasswordLengthValid(state.loginInput.password)
  );
};

const onLoginInput = (item: { name: keyof LoginInput; value: string }) => {
  state.loginInput = {
    ...state.loginInput,
    [item.name]: item.value,
  };
};
const onCreateNewAlbumInput = (item: {
  name: keyof CreateNewAlbumInput;
  value: string;
}) => {
  state.createNewAlbumInput = {
    ...state.createNewAlbumInput,
    [item.name]: item.value,
  };
};

const onFileChange = (e: Event) => {
  const target = e.target as HTMLInputElement;
  const file = target.files?.[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = (event) => {
      const imageUrl = event.target?.result as string;
      onCreateNewAlbumInput({ name: "imageUrl", value: imageUrl });
    };
    reader.readAsDataURL(file);
  }
};

const onCreateNewAlbum = async () => {
  state.buttonLoading = true;
  try {
    await createNewAlbum({
      title: state.createNewAlbumInput.title,
      imageUrl: state.createNewAlbumInput.imageUrl,
    });
    state.showNewAlbumDialog = false;
  } catch (error) {
    console.error(error);
    alert(`エラーが発生しました。${error}`);
  } finally {
    state.buttonLoading = false;
  }
};
const onCloseNewAlbumDialog = () => {
  state.showNewAlbumDialog = false;
  onCreateNewAlbumInput({ name: "imageUrl", value: "" });
};

const changeLocale = async (e: string) => {
  locale.value = e;
  await setLocale(locale.value);
};
</script>

<template>
  <div class="font-sans">
    <template v-if="isLogin()">
      <BaseAlert
        title="ログイン中"
        description="ログイン中なので作業に気をつけてください"
      />
    </template>
    <LoginDialog
      :show-login-dialog="state.showLoginDialog"
      :close-login-dialog="() => (state.showLoginDialog = false)"
      :on-input="onLoginInput"
      :on-login="onLogin"
      :button-loading="state.buttonLoading"
      :login-validation="loginValidation"
    />
    <NewAlbumDialog
      :show-new-album-dialog="state.showNewAlbumDialog"
      :on-close-new-album-dialog="onCloseNewAlbumDialog"
      :on-create-new-album="onCreateNewAlbum"
      :on-input="onCreateNewAlbumInput"
      :image-url="state.createNewAlbumInput.imageUrl"
      :on-file-change="onFileChange"
      :button-loading="state.buttonLoading"
    />
    <header class="theme__dark bg-white">
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
            :on-show-new-album-dialog="() => (state.showNewAlbumDialog = true)"
            :on-show-login-dialog="() => (state.showLoginDialog = true)"
            :is-login="isLogin"
            :locale="locale"
            :change-locale="changeLocale"
          />
        </div>
      </nav>
    </header>
    <div class="theme__dark">
      <NuxtPage />
    </div>
    <footer class="theme__dark bg-yellow-100 shadow">
      <div class="flex w-11/12 justify-between pr-2">
        <img
          class="wcb-chan"
          loading="lazy"
          decoding="async"
          src="https://d18g0hf2wnz3gs.cloudfront.net/favicon.jpg"
          alt="LGTM-kinako 可愛い動物の画像。かわいい動物の画像。"
          width="100"
          height="100"
        />
        <img
          v-show="nuxtApp.$colorMode.value === m.MODE_LIGHT"
          class="image"
          loading="lazy"
          decoding="async"
          src="@/assets/img/sun.png"
          alt="LGTM-kinako 可愛い動物の画像。かわいい動物の画像。"
          width="50"
          height="50"
        />
        <img
          v-show="nuxtApp.$colorMode.value === m.MODE_DARK"
          class="image"
          loading="lazy"
          decoding="async"
          src="@/assets/img/moon.png"
          alt="LGTM-kinako 可愛い動物の画像。かわいい動物の画像。"
          width="50"
          height="50"
        />
      </div>
      <div class="mx-auto w-full bg-lime-300 p-3 font-bold dark:bg-lime-800">
        <span class="block text-sm text-white sm:text-center"
          >© LGTM-kinako</span
        >
      </div>
    </footer>
  </div>
</template>
<style scoped lang="scss">
.image-filter {
  filter: blur(3px);
}
.image {
  width: 50px;
  height: 50px;
}
.wcb-chan {
  animation: img-move 6s steps(6, start) infinite;
}
.wcb-chan-nostep {
  animation: img-move 6s infinite;
}
@keyframes img-move {
  to {
    transform: translateX(300px);
  }
}
</style>
