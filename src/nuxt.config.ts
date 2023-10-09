// import * as path from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "LGTM-kinako きなこ（犬）のLGTM画像",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
  },
  plugins: ["~/plugins/google-analytics.client.mjs"],
  typescript: {
    shim: false,
    strict: true,
    typeCheck: false,
  },
  alias: {
    // "@src": path.resolve(__dirname, "../src"),
  },
  modules: ["@pinia/nuxt", "@pinia-plugin-persistedstate/nuxt"],
  components: [
    {
      path: "@/components",
      pathPrefix: false,
    },
  ],
  css: ["~/assets/css/main.css"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/_variables.scss";',
        },
      },
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    apiKey: "",
    public: {
      apiUrl: "",
    },
  },
});
