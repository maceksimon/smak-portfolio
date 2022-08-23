<template>
  <div
    v-if="validator.$errors.length"
    class="absolute -bottom-6 text-sm text-pink-700 dark:text-pink-200"
  >
    <span v-for="error in validator.$errors" :key="error.$validator">
      {{ error.$message }}
    </span>
  </div>
</template>

<script setup>
const props = defineProps({
  validator: {
    type: Object,
    default: () => {},
  },
});
</script>
