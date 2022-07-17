<template>
  <div class="not-prose sm:my-8 sm:text-center lg:text-left">
    <h1
      class="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl md:text-6xl"
    >
      <Markdown :use="$slots.title" unwrap="p" />
    </h1>
    <div
      class="mt-3 text-base text-gray-500 dark:text-gray-300 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0"
    >
      <Markdown :use="$slots.perex" unwrap="p" />
    </div>
    <div class="mt-6 sm:mt-12 sm:flex sm:justify-center lg:justify-start">
      <div class="rounded-md shadow">
        <a
          :href="props.link1"
          class="flex w-full items-center justify-center rounded-md border border-transparent bg-purple-600 px-4 py-2 text-base font-semibold text-white hover:bg-purple-700 md:py-4 md:px-10 md:text-lg"
        >
          {{ props.button1 }}
        </a>
      </div>
      <div class="mt-3 sm:mt-0 sm:ml-3">
        <a
          :href="props.link2"
          class="flex w-full items-center justify-center rounded-md border border-transparent bg-purple-100 px-4 py-2 text-base font-semibold text-purple-700 hover:bg-purple-200 md:py-4 md:px-10 md:text-lg"
        >
          {{ props.button2 }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  button1: { type: String, default: "" },
  button2: { type: String, default: "" },
  link1: { type: String, default: "" },
  link2: { type: String, default: "" },
});
</script>
