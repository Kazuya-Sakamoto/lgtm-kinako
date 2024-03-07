<script setup lang="ts">
import { useHead } from '@/.nuxt/imports'
import ThePages from '@/features/albums/components/ThePages.vue'
import { useMaintenanceStore } from '@/store/maintenance'
import { setSeo } from '@/lib/seo'

const maintenanceStore = useMaintenanceStore()
;(() => {
  maintenanceStore.openDialog()
})()

const json = {
  '@context': 'https://schema.org',
  '@type': 'ImageGallery',
  name: 'きなこ（犬）のLGTM画像ギャラリー',
  description:
    'LGTM-kinakoは、きなこ、犬、わんこ、わんちゃんのLGTM画像を集めたギャラリーです。',
}
const pageSeo = setSeo('きなこ（犬）のLGTM画像')
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
    <ThePages />
  </div>
</template>
