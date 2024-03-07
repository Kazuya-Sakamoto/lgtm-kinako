<script setup lang="ts">
import ThePage from '@/features/terms/components/Page.vue'
import { useHead } from '@/.nuxt/imports'

import { setSeo } from '@/lib/seo'
const pageSeo = setSeo('利用規約')
useHead(pageSeo)
</script>

<template>
  <div>
    <ThePage />
  </div>
</template>
