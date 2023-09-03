<script setup lang="ts">
import LoginDialog from "@/components/organisms/LoginDialog.vue";
import NewAlbumDialog from "@/components/organisms/NewAlbumDialog.vue";
import HeaderMenu from "@/components/organisms/HeaderMenu.vue";
import { reactive } from "vue";
import { useLoginStore } from "./store/login";
import { storeToRefs } from "pinia";
import IsLogin from "@/components/molecules/IsLogin.vue";
import { $fetch } from "ofetch";

const loginStore = useLoginStore();
const { onLoginStore, isLogin } = loginStore;
const { token, csrfToken } = storeToRefs(loginStore);
console.log(token.value, "token.value");

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
  await onLoginStore(state.input.email, state.input.password);
  state.showLoginDialog = false;
  state.buttonLoading = false;
};

const onInput = (item: { name: keyof Input; value: string }) => {
  state.input = {
    ...state.input,
    [item.name]: item.value,
  };
};
const loginValidation = () => {
  return state.input.email.trim() !== "" && state.input.password.trim() !== "";
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
  const params = {
    image: state.input.imageUrl,
    title: state.input.title,
  };

  console.log("onCreateNewAlbum");
  try {
    const res = await $fetch("http://localhost:8080/album", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-Token": csrfToken.value,
      },
      body: JSON.stringify(params),
      credentials: "include",
    });
    console.log(res, "res");
    state.showNewDialog = false;
  } catch (error) {
    console.error(error);
    alert(`エラーが発生しました。${error}`);
  }
};
const onCloseshowNewDialog = () => {
  state.showNewDialog = false;
  onInput({ name: "imageUrl", value: "" });
};
</script>

<template>
  <div>
    <template v-if="isLogin()">
      <IsLogin />
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
    <header class="bg-white">
      <nav
        class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div class="flex lg:flex-1">
          <!-- <a href="/" class="-m-1.5 p-1.5">
            <img
              class="h-16 w-auto"
              src="@/assets/img/kinako-top-icon.png"
              alt=""
            />
          </a> -->
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
    <div>
      <NuxtPage />
    </div>
    <footer class="bg-yellow-100 rounded-lg shadow m-4">
      <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <span class="block text-sm text-gray-500 sm:text-center"
          >© kinako-LGTM</span
        >
      </div>
    </footer>
  </div>
</template>
