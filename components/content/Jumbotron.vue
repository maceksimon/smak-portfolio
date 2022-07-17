<template>
  <div class="mb-8 sm:mb-12 sm:text-center lg:text-left">
    <h1
      class="not-prose text-2xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50 sm:text-3xl md:text-4xl"
    >
      <Markdown :use="$slots.title" unwrap="p" />
    </h1>
    <div
      class="mt-4 text-base leading-loose text-gray-500 dark:text-gray-300 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 lg:mx-0"
    >
      <Markdown :use="$slots.perex" unwrap="p" />
    </div>
    <div
      v-if="button1 || button2"
      class="not-prose mt-6 sm:mt-10 sm:flex sm:justify-center lg:justify-start"
    >
      <div class="rounded-md shadow">
        <a
          :href="link1"
          class="flex w-full items-center justify-center rounded-md border border-transparent bg-purple-600 px-4 py-2 text-base font-semibold text-white hover:bg-purple-700 md:py-3 md:px-7 md:text-lg"
        >
          {{ button1 }}
        </a>
      </div>
      <div class="mt-3 sm:mt-0 sm:ml-3">
        <a
          :href="link2"
          class="flex w-full items-center justify-center rounded-md border border-transparent bg-purple-100 px-4 py-2 text-base font-semibold text-purple-700 hover:bg-white md:py-3 md:px-7 md:text-lg"
        >
          {{ button2 }}
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

const { button1, button2, link1, link2 } = props;
</script>
