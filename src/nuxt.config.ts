// import * as path from "path";

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  imports: {
    dirs: [
      // Scan top-level modules
      'composables',
      // ... or scan modules nested one level deep with a specific name and file extension
      'composables/*/index.{ts,js,mjs,mts}',
      // ... or scan all modules within given directory
      'composables/**',
    ],
  },
  app: {
    pageTransition: { name: 'page', mode: 'in-out' },
    head: {
      title: 'LGTM-kinako | きなこ, 犬, かわいい動物のLGTM画像',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'description',
          content:
            'LGTM-kinakoは、きなこ、犬、かわいい動物、わんこ、わんちゃんのLGTM画像を自由にダウンロードして使用できるサービスです。GitHubでプルリクエストをレビューした際にLooks Good To Meの略でLGTMと書くことがあります。このLGTM画像にかわいい動物の画像を使ってみてください。LGTM-kinakoは、様々なエンジニアたちがLGTMを送り合うことができます。',
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'LGTM-kinako' },
        {
          property: 'og:image',
          content: 'https://d18g0hf2wnz3gs.cloudfront.net/favicon.jpg',
        },
        {
          property: 'og:url',
          hid: 'og:url',
          content: 'https://lgtm-kinako.com/',
        },
        { hid: 'og:title', property: 'og:title', content: 'LGTM-kinako' },
        {
          property: 'og:description',
          content:
            'LGTM-kinakoは、きなこ、犬、わんこ、わんちゃんのLGTM画像を自由にダウンロードして使用できるサービスです。GitHubでプルリクエストをレビューした際にLooks Good To Meの略でLGTMと書くことがあります。このLGTM画像にかわいい動物の画像を使ってみてください。LGTM-kinakoは、様々なエンジニアたちがLGTMを送り合うことができます。',
        },
        { name: 'twitter:card', content: 'summary' },
        {
          name: 'keywords',
          content:
            'LGTM,犬,わんこ,わんちゃん,きなこ,動物,生き物,かわいい,いきもの',
        },
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    },
  },
  plugins: ['~/plugins/google-analytics.client.mjs'],
  typescript: {
    shim: false,
    strict: true,
    typeCheck: false,
  },
  alias: {
    // "@src": path.resolve(__dirname, "../src"),
  },
  modules: [
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/color-mode',
    '@intlify/nuxt3',
    '@nuxt/test-utils/module',
  ],
  colorMode: {
    classSuffix: '',
  },
  components: [
    {
      path: '@/components',
      pathPrefix: false,
    },
  ],
  css: ['~/assets/css/main.css'],
  vite: {
    build: {
      minify: 'terser',
    },
    assetsInclude: ['**/*.MP4'],
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
    apiKey: '',
    public: {
      API_URL: '',
      persistedState: {
        storage: 'localStorage',
        debug: false,
      },
    },
  },
  intlify: {
    locale: 'ja',
    fallbackLocale: 'ja',
  },
  nitro: {
    compressPublicAssets: true,
  },
  experimental: {
    typedPages: true,
  },
})
