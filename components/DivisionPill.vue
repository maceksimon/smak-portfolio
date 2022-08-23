<template>
  <div class="not-prose relative">
    <div class="absolute inset-0 flex items-center" aria-hidden="true">
      <div class="w-full border-t border-gray-300 dark:border-gray-500" />
    </div>
    <div class="relative flex justify-center">
      <h2
        class="inline-block rounded-full border border-gray-300 bg-white px-4 py-1 text-sm font-semibold text-gray-500 dark:border-gray-500 dark:bg-gray-800 dark:text-gray-300"
      >
        <slot />
      </h2>
    </div>
  </div>
</template>
