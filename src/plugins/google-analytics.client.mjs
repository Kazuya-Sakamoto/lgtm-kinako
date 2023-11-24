import VueGtag from 'vue-gtag'

export default defineNuxtPlugin((nuxtApp) => {
  const router = useRouter()
  nuxtApp.vueApp.use(
    VueGtag,
    {
      appName: 'lgtm-kinako',
      pageTrackerScreenviewEnabled: true,
      config: { id: `G-TJ0G7F77QG` },
    },
    router
  )
})
