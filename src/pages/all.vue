<script setup lang="ts">
import { useHead } from '@/.nuxt/imports'
import Page from '@/features/all/components/Page.vue'

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
    <Page />
  </div>
</template>
