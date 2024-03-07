<script setup lang="ts">
import { useHead } from '@/.nuxt/imports'
import ThePage from '@/features/albums/all/components/Page.vue'

useHead({
  meta: [
    {
      name: 'robots',
      content: 'noindex',
    },
  ],
})
</script>

<template>
  <div>
    <ThePage />
  </div>
</template>
