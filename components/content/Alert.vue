<script setup lang="ts">
withDefaults(defineProps<{ icon: string }>(), {
  icon: "heroicons-outline:exclamation",
});
</script>

<template>
  <div
    class="rounded-md border border-blue-200 bg-blue-50 p-4 dark:bg-blue-100/25"
  >
    <div class="flex items-center">
      <div v-if="icon" class="mr-3 flex flex-shrink-0 items-center">
        <Icon
          class="h-5 w-5 text-blue-400 dark:text-blue-200/50"
          aria-hidden="true"
          :name="icon"
        />
      </div>
      <div class="alert-text not-prose flex items-center">
        <h3
          v-if="$slots.title"
          class="m-0 text-base font-medium text-blue-800 dark:text-blue-200"
        >
          <Markdown :use="$slots.title" unwrap="p" />
        </h3>
        <div v-if="$slots.default" class="mt-2 text-sm text-blue-700">
          <Markdown :use="$slots.default" unwrap="p" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="postcss">
.not-prose h3 :deep(a) {
  color: var(--tw-prose-bold);
  @apply underline;
  &:hover {
    @apply border-none no-underline;
  }
}
.dark .not-prose h3 :deep(a) {
  color: var(--tw-prose-invert-bold);
}
</style>
