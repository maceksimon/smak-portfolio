<script setup lang="ts">
withDefaults(defineProps<{ icon: string }>(), {
  icon: "heroicons-outline:exclamation",
});
</script>

<template>
  <div
    class="rounded-md border border-orange-200 bg-orange-50 p-4 dark:bg-orange-100/25"
  >
    <div class="flex items-center">
      <div v-if="icon" class="mr-3 flex flex-shrink-0 items-center">
        <Icon
          class="h-5 w-5 text-orange-400 dark:text-orange-200/50"
          aria-hidden="true"
          :name="icon"
        />
      </div>
      <div class="alert-text not-prose flex items-center">
        <div
          v-if="$slots.title"
          class="m-0 text-base font-medium text-orange-800 dark:text-orange-200"
        >
          <Markdown :use="$slots.title" unwrap="p" />
        </div>
        <div v-if="$slots.default" class="mt-2 text-sm text-orange-700">
          <Markdown :use="$slots.default" unwrap="p" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.not-prose :deep(a) {
  color: var(--tw-prose-links);
  @apply underline;
  &:hover {
    @apply border-none no-underline;
  }
}
.dark .not-prose :deep(a) {
  color: var(--tw-prose-invert-links);
}
</style>
