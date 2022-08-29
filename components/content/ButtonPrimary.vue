<template>
  <div class="my-8 sm:my-12">
    <a
      :href="props.url"
      class="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-5 py-3 text-base font-semibold text-white no-underline transition-colors duration-150 ease-out hover:bg-blue-700"
      >{{ props.text }}</a
    >
  </div>
</template>

<script setup>
const props = defineProps({
  url: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    default: "Default Button",
  },
});
</script>
