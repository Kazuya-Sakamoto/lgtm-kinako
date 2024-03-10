<script setup lang="ts">
import Page from '@/features/terms/components/Page.vue'
import { useHead } from 'nuxt/app'

import { setSeo } from '@/lib/seo'
const pageSeo = setSeo('利用規約')
useHead(pageSeo)
</script>

<template>
  <div>
    <Page />
  </div>
</template>
