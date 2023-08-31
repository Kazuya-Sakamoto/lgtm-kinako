<script setup lang="ts">
import LoginDialog from "@/components/organisms/LoginDialog.vue";
import NewAlbumDialog from "@/components/organisms/NewAlbumDialog.vue";
import HeaderMenu from "@/components/organisms/HeaderMenu.vue";
import { reactive } from "vue";
import { $fetch } from "ofetch";

export type Input = {
  email: string;
  password: string;
  imageUrl: string;
  title: string;
};

type State = {
  showLoginDialog: boolean;
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

// TODO: この辺はhooksに移植する
const onLogin = async () => {
  console.log("onLogin");
  const res = $fetch("http://localhost:8080/login", {
    method: "POST",
    body: { email: state.input.email, password: state.input.password },
  });
  console.log(res, "res");
  // console.log("ログイン完了");
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

const onCloseshowNewDialog = () => {
  state.showNewDialog = false;
  onInput({ name: "imageUrl", value: "" });
};
</script>

<template>
  <div>
    <LoginDialog
      :showLoginDialog="state.showLoginDialog"
      :closeLoginDialog="() => (state.showLoginDialog = false)"
      :onInput="onInput"
      :onLogin="onLogin"
    />
    <NewAlbumDialog
      :showNewDialog="state.showNewDialog"
      :closeNewDialog="onCloseshowNewDialog"
      :onInput="onInput"
      :imageUrl="state.input.imageUrl"
      :onFileChange="onFileChange"
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
