<script setup lang="ts">
import { useHead } from '@/.nuxt/imports'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
import { setSeo } from '@/lib/seo'
const pageSeo = setSeo('プライバシーポリシー')
useHead(pageSeo)
</script>

<template>
  <div class="mx-auto max-w-5xl px-4 pb-10 leading-8 sm:px-6 lg:px-8">
    <h1 class="text-xl">{{ t('$privacy.title') }}</h1>
    <p>{{ t('$privacy.content.introduction') }}</p>
    <h2 class="mt-8 text-lg">{{ t('$privacy.content.section1.title') }}</h2>
    <p>{{ t('$privacy.content.section1.content') }}</p>
    <h2 class="mt-8 text-lg">{{ t('$privacy.content.section2.title') }}</h2>
    <p>{{ t('$privacy.content.section2.content') }}</p>
    <h2 class="mt-8 text-lg">{{ t('$privacy.content.section3.title') }}</h2>
    <p>{{ t('$privacy.content.section3.content') }}</p>
    <h2 class="mt-8 text-lg">{{ t('$privacy.content.section4.title') }}</h2>
    <p>{{ t('$privacy.content.section4.content') }}</p>
    <h2 class="mt-8 text-lg">{{ t('$privacy.content.section5.title') }}</h2>
    <p>{{ t('$privacy.content.section5.content') }}</p>
    <h2 class="mt-8 text-lg">{{ t('$privacy.content.section6.title') }}</h2>
    <p>{{ t('$privacy.content.section6.content') }}</p>
    <h2 class="mt-8 text-lg">{{ t('$privacy.content.section7.title') }}</h2>
    <p>{{ t('$privacy.content.section7.content') }}</p>
    <h2 class="mt-8 text-lg">{{ t('$privacy.content.section8.title') }}</h2>
    <p>{{ t('$privacy.content.section8.content') }}</p>
    <p>Email: lgtm.kinako@gmail.com</p>
  </div>
</template>

<style scoped lang="scss"></style>
