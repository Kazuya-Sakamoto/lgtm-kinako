<script setup lang="ts">
import ThePage from '@/features/privacy/components/Page.vue'
import { useHead } from '@/.nuxt/imports'

import { setSeo } from '@/lib/seo'
const pageSeo = setSeo('プライバシーポリシー')
useHead(pageSeo)
</script>

<template>
  <div>
    <ThePage />
  </div>
</template>
