<template>
  <div class="m-auto w-full grow bg-gray-50 dark:bg-gray-800">
    <div class="m-auto max-w-2xl px-4 py-10 sm:px-8">
      <main
        class="prose prose-primary max-w-none dark:prose-invert"
        :class="[$route.path.includes('/blog/') ? '' : ' -mb-8 sm:-mb-12']"
      >
        <slot />
      </main>
    </div>
  </div>
</template>
