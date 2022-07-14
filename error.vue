<template>
  <div class="relative font-sans" n="green6">
    <div
      class="m-auto max-w-2xl bg-white px-4 py-10 dark:bg-gray-800 sm:rounded sm:px-8 sm:shadow"
    >
      <div class="prose prose-gray max-w-none dark:prose-invert">
        <h1>{{ error.message }}</h1>
        There was an error 😱
        <br />
        <button @click="handleError">Clear error</button>
        <br />
        <NuxtLink to="/404"> Trigger another error </NuxtLink>
        <br />
        <NuxtLink to="/"> Navigate home </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  error: Object,
});

const handleError = () => clearError({ redirect: "/" });
</script>
