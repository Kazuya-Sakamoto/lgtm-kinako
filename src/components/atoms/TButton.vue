<script setup lang="ts">
import { defineProps, computed } from "vue";

type Size = "small" | "medium" | "large" | "full";
type Color = "default" | "blue" | "primaryB" | "primary";
type TextColor = "white" | "default";
const props = defineProps({
  color: String as () => Color,
  size: {
    type: String as () => Size,
    default: "medium",
  },
  text: String,
  textColor: String as () => TextColor,
});

const buttonColorClass = computed(() => {
  const buttonColor = props.color || "default";
  const buttonColorClassMap = {
    blue: "bg-blue-700 hover:bg-blue-800 border border-blue-700",
    default:
      "bg-white hover:bg-gray-100 text-gray-800 border border-gray-400 shadow",
    primaryB:
      "text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300",
    primary:
      "text-white bg-yellow-500 border border-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300",
  };
  return buttonColorClassMap[buttonColor];
});

const textColorClass = computed(() => {
  const textColor = props.textColor || "default";
  const textColorClassMap = {
    white: "text-white",
    default: "text-gray-800",
  };
  console.log(textColorClassMap[textColor], "textColorClassMap[textColor]");
  return textColorClassMap[textColor];
});

const sizeClass = computed(() => {
  const size = props.size || "medium";
  const sizeClassMap = {
    small: "px-3 py-2 text-sm",
    medium: "px-5 py-3 text-base",
    large: "px-6 py-3.5 text-lg",
    full: "w-full py-2.5 text-sm",
  };
  return sizeClassMap[size];
});

const buttonClass = computed(() => {
  return [
    "rounded",
    props.color || "",
    sizeClass.value,
    textColorClass.value,
    buttonColorClass.value,
  ];
});

const buttonStyle = computed(() => {
  return {};
});

const buttonText = computed(() => {
  return props.text || "Button";
});
</script>

<template>
  <div>
    <button :class="buttonClass" :style="buttonStyle">
      {{ buttonText }}
    </button>
  </div>
</template>
