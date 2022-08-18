<template>
  <div
    class="mx-auto max-w-5xl py-4 px-4 text-sm font-semibold text-white sm:px-8"
  >
    Simon Macek &#8212; {{ year }}
  </div>
</template>

<script setup>
const year = new Date().getFullYear();
</script>
