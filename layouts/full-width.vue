<template>
  <div
    class="m-auto bg-white py-10 dark:bg-gray-800 sm:rounded sm:px-8 sm:shadow"
  >
    <main
      class="prose prose-gray mx-auto max-w-2xl px-4 dark:prose-invert sm:px-8"
    >
      <slot />
    </main>
  </div>
</template>

<style lang="postcss">
/* Customize headers to remove default underline */
.prose h2 a,
.prose h3 a {
  @apply no-underline;
  &:hover {
    @apply border-b border-neutral-600 dark:border-neutral-300;
  }
}
</style>
