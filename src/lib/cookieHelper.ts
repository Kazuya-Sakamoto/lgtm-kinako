import { ref, onMounted } from "vue";
import cookie from "cookie";

export const useCookie = () => {
  const token = ref(null);

  onMounted(() => {
    const cookies = cookie.parse(document.cookie);
    console.log(cookies, "cookies");
    token.value = cookies.token || null;
  });

  const setToken = (value) => {
    token.value = value;
    document.cookie = cookie.serialize("token", value, { path: "/" });
  };

  const removeToken = () => {
    token.value = null;
    document.cookie = cookie.serialize("token", "", {
      path: "/",
      expires: new Date(0),
    });
  };

  return { token, setToken, removeToken };
};
