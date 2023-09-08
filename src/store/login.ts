import { ref } from "vue";
import { defineStore } from "pinia";
import { $fetch } from "ofetch";

export const useLoginStore = defineStore(
  "login",
  () => {
    const config = useRuntimeConfig();
    const csrfToken = ref("");
    const token = ref("");
    const fetchCsrfToken = async () => {
      try {
        const res = await $fetch(`${config.public.apiUrl}/csrf`, {
          method: "GET",
          credentials: "include",
        });
        console.log(res.csrf_token, "csrf_token");
        csrfToken.value = res.csrf_token;
      } catch (error) {
        console.error(error);
        alert(`エラーが発生しました。${error}`);
      }
    };

    const onLoginStore = async (email: string, password: string) => {
      await fetchCsrfToken();
      const params = {
        email,
        password,
      };
      try {
        const res = await $fetch(`${config.public.apiUrl}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": csrfToken.value,
          },
          body: JSON.stringify(params),
          credentials: "include",
        });
        console.log(res, "token");
        token.value = res;
      } catch (error) {
        console.log(error);
        alert(`エラーが発生しました。${error}`);
      }
    };

    const isLogin = () => {
      return !!token.value;
    };

    return { csrfToken, token, onLoginStore, isLogin };
  },
  {
    persist: true,
  }
);
