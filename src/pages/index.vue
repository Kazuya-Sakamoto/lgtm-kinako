<script setup lang="ts">
import { useHead } from 'nuxt/app'
import Page from '@/features/albums/components/Page.vue'
import { useMaintenanceStore } from '@/store/maintenance'
import { setSeo } from '@/lib/seo'

const maintenanceStore = useMaintenanceStore()
;(() => {
  maintenanceStore.openDialog()
})()

const json = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'きなこ, 犬, かわいい動物のLGTM画像ギャラリー',
  description:
    'LGTM-kinakoは、きなこ、犬、わんこ、わんちゃんのかわいい動物のLGTM画像を集めたギャラリーです。',
}
const pageSeo = setSeo('きなこ, 犬, かわいい動物のLGTM画像')
useHead({
  ...pageSeo,
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(json),
    },
  ],
})
</script>

<template>
  <div>
    <!-- TODO: メンテナンスダイアログを表示する際にopenにする -->
    <!-- <MaintenanceDialog :show="show" :close-dialog="closeDialog" /> -->
    <Page />
  </div>
</template>
