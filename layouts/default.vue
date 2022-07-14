<template>
  <div
    class="m-auto max-w-2xl bg-white px-4 py-10 dark:bg-gray-800 sm:rounded sm:px-8 sm:shadow"
  >
    <main class="prose prose-gray max-w-none dark:prose-invert">
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
