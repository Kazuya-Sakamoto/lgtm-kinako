<script setup lang="ts">
import { useColorMode } from '@/.nuxt/imports'
import { m } from '@/master'

const colorMode = useColorMode()
</script>

<template>
  <footer
    class="transition duration-300 ease-in-out bg-yellow-50 dark:theme__dark shadow pt-5"
  >
    <div class="flex w-11/12 justify-between pr-2">
      <img
        class="wcb-chan"
        loading="lazy"
        decoding="async"
        src="https://d18g0hf2wnz3gs.cloudfront.net/favicon.jpg"
        alt="LGTM-kinako 可愛い動物の画像。かわいい動物の画像。"
        width="100"
        height="100"
      />
      <img
        v-show="colorMode.value === m.MODE_LIGHT"
        class="image"
        loading="lazy"
        decoding="async"
        src="@/assets/img/sun.png"
        alt="LGTM-kinako 可愛い動物の画像。かわいい動物の画像。"
        width="50"
        height="50"
      />
      <img
        v-show="colorMode.value === m.MODE_DARK"
        class="image"
        loading="lazy"
        decoding="async"
        src="@/assets/img/moon.png"
        alt="LGTM-kinako 可愛い動物の画像。かわいい動物の画像。"
        width="50"
        height="50"
      />
    </div>
    <div class="mx-auto w-full bg-lime-300 p-2 font-bold dark:bg-lime-800">
      <span class="block text-sm text-white sm:text-center"
        >© LGTM-kinako</span
      >
    </div>
  </footer>
</template>

<style scoped lang="scss">
.image {
  width: 50px;
  height: 50px;
}
.wcb-chan {
  animation: img-move 6s steps(6, start) infinite;
}
.wcb-chan-nostep {
  animation: img-move 6s infinite;
}
@keyframes img-move {
  to {
    transform: translateX(300px);
  }
}
</style>
