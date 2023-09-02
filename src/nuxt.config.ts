// import * as path from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
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
});
