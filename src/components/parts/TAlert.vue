<script setup lang="ts">
import { computed } from 'vue'
type Color = 'default' | 'yellow' | 'red' | 'green'

type Props = {
  description: string
  color?: Color
}
const props = withDefaults(defineProps<Props>(), {
  description: '',
  color: 'default',
})

const alertClass = computed(() => {
  const colorClassMap = {
    default:
      'text-gray-800 bg-gray-50 border-gray-300 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600',
    yellow:
      'text-yellow-800 bg-yellow-50 border-yellow-300 dark:bg-yellow-800 dark:text-yellow-300 dark:border-yellow-600',
    red: 'text-red-800 bg-red-50 border-red-300 dark:bg-red-800 dark:text-red-300 dark:border-red-600',
    green:
      'text-green-800 bg-green-50 border-green-300 dark:bg-gray-800 dark:text-green-400 dark:border-green-800',
  }

  return [
    'flex items-center p-4 mb-4 text-sm rounded-lg',
    colorClassMap[props.color],
  ]
})
</script>

<template>
  <div :class="alertClass" role="alert">
    <svg
      class="flex-shrink-0 inline w-4 h-4 me-3"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"
      />
    </svg>
    <span class="sr-only">Info</span>
    <div>
      <span class="font-medium">{{ props.description }}</span>
    </div>
  </div>
</template>
