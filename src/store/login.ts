import { ref } from "vue";
import { defineStore } from "pinia";
import { $fetch } from "ofetch";

export const useLoginStore = defineStore(
  "login",
  () => {
    const csrfToken = ref("");
    const token = ref("");
    const fetchCsrfToken = async () => {
      try {
        const response = await $fetch("http://localhost:8080/csrf", {
          method: "GET",
          credentials: "include",
        });

        if (response.ok) {
          const data = await response.json();
          csrfToken.value = data.csrf_token;
        } else {
          console.error("Failed to fetch CSRF token");
        }
      } catch (error) {
        console.error(error);
      }
    };

    const onLoginStore = async (email, password) => {
      await fetchCsrfToken();
      const params = {
        email,
        password,
      };

      const res = await $fetch("http://localhost:8080/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-CSRF-Token": csrfToken.value,
        },
        body: JSON.stringify(params),
        credentials: "include",
      });
      console.log(res, "res");
      token.value = res;
    };

    return { csrfToken, token, onLoginStore };
  },
  {
    persist: true,
  }
);
