import { ref } from "vue";
import { defineStore } from "pinia";

export const useLoginStore = defineStore(
  "login",
  () => {
    const config = useRuntimeConfig();
    const csrfToken = ref<string>("");
    const token = ref<string>("");

    const fetchCsrfToken = async () => {
      try {
        const response = await fetch(`${config.public.apiUrl}/csrf`, {
          method: "GET",
          credentials: "include",
        });
        if (!response.ok) return;

        const data = await response.json();
        csrfToken.value = data.csrf_token;
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
        const response = await fetch(`${config.public.apiUrl}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-CSRF-Token": csrfToken.value,
          },
          body: JSON.stringify(params),
          credentials: "include",
        });
        if (!response.ok) return;

        const data = await response.json();
        token.value = data;
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
