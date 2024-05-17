<script setup lang="ts">
import { TButton } from '@/components/parts'
</script>

<template>
  <div class="flex h-screen items-center justify-center">
    <div class="flex max-w-5xl flex-col items-center">
      <img
        class="image"
        loading="lazy"
        decoding="async"
        src="@/assets/img/404_not_found.png"
        alt="LGTM-kinako 可愛い動物の画像。かわいい動物の画像の404ページ"
      />
      <a href="https://twitter.com/sawaratsuki1004">
        <p class="py-2 text-sm text-sky-600 underline">
          Image by @sawaratsuki1004
        </p>
      </a>
      <div>
        <br />
        <nuxt-link to="/">
          <TButton class="font-bold">きなこの一覧に戻る</TButton>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
