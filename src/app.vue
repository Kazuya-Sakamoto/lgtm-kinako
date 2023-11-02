<script setup lang="ts">
import { useRuntimeConfig } from "@/.nuxt/imports";
import LoginDialog from "@/components/organisms/LoginDialog.vue";
import NewAlbumDialog from "@/components/organisms/NewAlbumDialog.vue";
import HeaderMenu from "@/components/organisms/HeaderMenu.vue";
import { reactive } from "vue";
import { useLoginStore } from "@/store/login";
import { storeToRefs } from "pinia";
import Alert from "@/components/molecules/Alert.vue";
import { checkEmailVal, isPasswordLengthValid } from "@/lib/validation";
import { h } from "@/lib/headers";
import ChangeMode from "@/components/organisms/ChangeMode.vue";

const loginStore = useLoginStore();
const { onLoginStore, isLogin } = loginStore;
const { csrfToken } = storeToRefs(loginStore);

const config = useRuntimeConfig();

export type Input = {
  email: string;
  password: string;
  imageUrl: string;
  title: string;
};

type State = {
  showLoginDialog: boolean;
  buttonLoading: boolean;
  input: {
    email: string;
    password: string;
    imageUrl: string;
    title: string;
  };
  showNewDialog: boolean;
  showHeaderMenu: boolean;
};
const initialState = (): State => ({
  showLoginDialog: false,
  buttonLoading: false,
  input: {
    email: "",
    password: "",
    imageUrl: "",
    title: "",
  },
  showNewDialog: false,
  showHeaderMenu: false,
});
const state = reactive<State>(initialState());

const onLogin = async () => {
  state.buttonLoading = true;
  try {
    await onLoginStore(state.input.email, state.input.password);
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
    state.input.email.trim() !== "" &&
    checkEmailVal(state.input.email) &&
    state.input.password.trim() !== "" &&
    isPasswordLengthValid(state.input.password)
  );
};

const onInput = (item: { name: keyof Input; value: string }) => {
  state.input = {
    ...state.input,
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
      onInput({ name: "imageUrl", value: imageUrl });
    };
    reader.readAsDataURL(file);
  }
};
const onCreateNewAlbum = async () => {
  state.buttonLoading = true;
  const params = {
    image: state.input.imageUrl,
    title: state.input.title,
  };

  try {
    const response = await fetch(`${config.public.API_URL}/album`, {
      method: "POST",
      headers: h(csrfToken.value),
      body: JSON.stringify(params),
      credentials: "include",
    });
    if (!response.ok) return;

    const data = await response.json();
    console.log(data, "res");
    state.showNewDialog = false;
  } catch (error) {
    console.error(error);
    alert(`エラーが発生しました。${error}`);
  } finally {
    state.buttonLoading = false;
  }
};
const onCloseshowNewDialog = () => {
  state.showNewDialog = false;
  onInput({ name: "imageUrl", value: "" });
};
</script>

<template>
  <div class="font-sans">
    <template v-if="isLogin()">
      <Alert
        title="ログイン中"
        description="ログイン中なので作業に気をつけてください"
      />
    </template>
    <LoginDialog
      :showLoginDialog="state.showLoginDialog"
      :closeLoginDialog="() => (state.showLoginDialog = false)"
      :onInput="onInput"
      :onLogin="onLogin"
      :buttonLoading="state.buttonLoading"
      :loginValidation="loginValidation"
    />
    <NewAlbumDialog
      :showNewDialog="state.showNewDialog"
      :onCloseshowNewDialog="onCloseshowNewDialog"
      :onCreateNewAlbum="onCreateNewAlbum"
      :onInput="onInput"
      :imageUrl="state.input.imageUrl"
      :onFileChange="onFileChange"
      :buttonLoading="state.buttonLoading"
    />
    <header class="bg-white dark:bg-gray-900 dark:text-white">
      <nav
        class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <ChangeMode />
        </div>
        <div class="hidden lg:flex lg:gap-x-4"></div>
        <div class="lg:flex lg:flex-1 lg:justify-end">
          <HeaderMenu
            :showHeaderMenu="state.showHeaderMenu"
            :onOpenshowHeaderMenu="() => (state.showHeaderMenu = true)"
            :onCloseshowHeaderMenu="() => (state.showHeaderMenu = false)"
            :onShowNewDialog="() => (state.showNewDialog = true)"
            :onShowLoginDialog="() => (state.showLoginDialog = true)"
            :isLogin="isLogin"
          />
        </div>
      </nav>
    </header>
    <div class="dark:bg-gray-900 dark:text-white">
      <NuxtPage />
    </div>
    <footer class="bg-yellow-100 dark:bg-gray-900 dark:text-white shadow">
      <img
        class="wcb-chan"
        loading="lazy"
        decoding="async"
        src="https://d18g0hf2wnz3gs.cloudfront.net/favicon.jpg"
        alt="LGTM-kinako きなこ、わんこ、わんちゃん 犬のLGTM画像。"
        width="100"
        height="100"
      />
      <div class="bg-lime-300 dark:bg-lime-800 font-bold w-full mx-auto p-3">
        <span class="text-white block text-sm sm:text-center"
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
