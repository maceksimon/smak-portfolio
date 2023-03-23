<script setup lang="ts">
const { link, type, size } = withDefaults(
  defineProps<{ link?: string; type?: string; size?: string }>(),
  {
    link: "",
    type: "default",
    size: "default",
  }
);

const tag: string = link.length ? "a" : "button";
</script>

<template>
  <component
    :is="tag"
    :href="link"
    class="bg-gradient-animated inline-flex w-full items-center justify-center rounded-md border bg-gradient-to-r text-base font-semibold shadow dark:border-none md:py-3 md:px-7 md:text-lg"
    :class="{
      'border-transparent from-blue-700 via-blue-400 to-blue-500 text-white ':
        type === 'primary',
      'border-blue-200 bg-gradient-to-r from-blue-100 via-white to-blue-100 text-blue-800 dark:from-blue-200 dark:via-blue-50 dark:to-blue-100':
        type === 'secondary',
      'bg-blue-600  text-white transition-colors duration-150 ease-out hover:bg-blue-700':
        type === 'default',
      'px-4 py-2': size === 'default',
      'px-5 py-3': size === 'large',
    }"
  >
    <slot />
  </component>
</template>
