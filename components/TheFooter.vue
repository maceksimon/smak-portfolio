<template>
  <div
    class="bg-white px-4 text-gray-600 dark:bg-gray-700 dark:text-gray-400 sm:px-8"
  >
    <div
      class="mx-auto max-w-screen-2xl py-6 text-right text-sm font-semibold sm:px-8"
    >
      <div class="flex items-center justify-between">
        <div class="font-light">
          Icons by
          <a href="https://freeicons.io/profile/6156" target="_blank">Reda</a>
          on
          <a href="https://freeicons.io" target="_blank">freeicons.io</a>
        </div>
        <div>Simon Macek &#8212; {{ year }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const year = new Date().getFullYear();
</script>
