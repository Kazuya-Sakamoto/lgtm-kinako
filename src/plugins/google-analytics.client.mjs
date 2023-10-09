import VueGtag from "vue-gtag";

// Nuxtプラグインの登録
export default defineNuxtPlugin((nuxtApp) => {
  // ルーター取得
  const router = useRouter();

  // Vue登録
  nuxtApp.vueApp.use(
    VueGtag,
    {
      appName: "lgtm-kinako",
      pageTrackerScreenviewEnabled: true,
      config: { id: `G-TJ0G7F77QG` },
    },
    router
  );
});
