<template>
  <div class="bg-white text-gray-600 dark:bg-gray-700 dark:text-gray-400">
    <div
      class="mx-auto max-w-5xl py-6 px-4 text-right text-sm font-semibold sm:px-8"
    >
      Simon Macek &#8212; {{ year }}
    </div>
  </div>
</template>

<script setup>
const year = new Date().getFullYear();
</script>
