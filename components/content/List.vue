<script setup lang="ts">
// Utils from Nuxt Content
const { flatUnwrap } = useUnwrap();

defineProps({
  icon: {
    type: String,
    default: "ph:check-circle-duotone",
  },
});
</script>

<template>
  <ul class="mt-4 space-y-3 p-0">
    <li
      v-for="(item, index) of flatUnwrap($slots.default(), ['ul'])"
      :key="index"
      class="flex space-x-2 pl-0"
    >
      <Icon :name="icon" class="h-6 w-6 flex-shrink-0 text-emerald-500" />
      <span><Markdown :use="() => item" unwrap="li" /></span>
    </li>
  </ul>
</template>
