<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="mx-auto max-w-5xl px-4 pb-10 leading-8 sm:px-6 lg:px-8">
    <h1 class="text-xl">{{ t('$terms.title') }}</h1>
    <p>{{ t('$terms.content.introduction') }}</p>
    <h2 class="mt-8 text-lg">{{ t('$terms.content.section1.title') }}</h2>
    <p>{{ t('$terms.content.section1.content') }}</p>
    <h2 class="mt-8 text-lg">{{ t('$terms.content.section2.title') }}</h2>
    <p>{{ t('$terms.content.section2.content') }}</p>
    <h2 class="mt-8 text-lg">{{ t('$terms.content.section3.title') }}</h2>
    <p>{{ t('$terms.content.section3.content') }}</p>
    <h2 class="mt-8 text-lg">{{ t('$terms.content.section4.title') }}</h2>
    <p>{{ t('$terms.content.section4.content') }}</p>
    <h2 class="mt-8 text-lg">{{ t('$terms.content.section5.title') }}</h2>
    <p>{{ t('$terms.content.section5.content') }}</p>
    <h2 class="mt-8 text-lg">{{ t('$terms.content.section6.title') }}</h2>
    <p>{{ t('$terms.content.section6.content') }}</p>
    <p>Email: lgtm.kinako@gmail.com</p>
  </div>
</template>

<style scoped lang="scss"></style>
