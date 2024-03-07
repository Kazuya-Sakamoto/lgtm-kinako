<script setup lang="ts">
import { computed } from 'vue'

type Size = 'small' | 'medium' | 'large' | 'full'
type Color = 'default' | 'yellow'
type TextColor = 'white' | 'default'

const props = defineProps({
  color: {
    type: String as () => Color,
    default: 'default',
  },
  size: {
    type: String as () => Size,
    default: 'medium',
  },
  textColor: {
    type: String as () => TextColor,
    default: 'default',
  },
  disabled: Boolean,
  loading: Boolean,
})

const buttonClass = computed(() => {
  const buttonColorClassMap = {
    default:
      'bg-gray-100 border border-gray-200 shadow-xl hover:bg-gray-200 hover:border-gray-300',
    yellow:
      'bg-yellow-400 border border-yellow-400 shadow-xl hover:opacity-85 hover:border-yellow-600',
  }

  const textColorClassMap = {
    white: 'text-white',
    default: 'text-gray-600',
  }

  const sizeClassMap = {
    small: 'px-3 py-2 text-sm',
    medium: 'px-5 py-3 text-base',
    large: 'px-6 py-3.5 text-lg',
    full: 'w-full py-2.5 text-sm',
  }

  const cursorClass = props.disabled ? 'cursor-not-allowed' : 'cursor-pointer'

  return [
    'rounded',
    cursorClass,
    sizeClassMap[props.size],
    textColorClassMap[props.textColor],
    buttonColorClassMap[props.color],
  ]
})

const loadingClass = computed(() => {
  return props.loading ? 'cursor-wait' : ''
})
</script>

<template>
  <button :class="[buttonClass, loadingClass]" :disabled="props.disabled">
    <slot v-if="!props.loading">ボタン</slot>
    <span className="flex justify-center" aria-label="読み込み中" v-else>
      <span
        className="h-6 w-6 animate-spin rounded-full border-4 border-t-transparent"
    /></span>
  </button>
</template>
