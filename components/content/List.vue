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
    <li v-for="(item, index) of flatUnwrap($slots.default(), ['ul'])" :key="index" class="flex space-x-2 pl-0">
      <Icon :name="icon" class="mt-1 h-5 w-5 flex-shrink-0 text-blue-500" />
      <span>
        <MDCSlot :use="() => item" unwrap="li" />
      </span>
    </li>
  </ul>
</template>
