<template>
  <div class="mb-8 sm:mb-12">
    <div
      v-if="$slots.highlight"
      class="mb-2 font-bold text-blue-800 dark:text-blue-300"
    >
      <Markdown :use="$slots.highlight" unwrap="p" />
    </div>
    <h1
      class="not-prose text-2xl font-extrabold tracking-tight text-gray-900 dark:text-gray-50 sm:text-3xl md:text-4xl"
      :class="{}"
    >
      <Markdown :use="$slots.title" unwrap="p" />
    </h1>
    <div
      class="mt-2 text-base font-light leading-loose text-gray-500 dark:text-gray-300 sm:max-w-xl sm:text-lg"
    >
      <Markdown :use="$slots.perex" unwrap="p" />
    </div>
    <div v-if="button1 || button2" class="not-prose mt-6 sm:mt-10 sm:flex">
      <div class="rounded-md shadow">
        <a
          :href="link1"
          class="bg-gradient-animated flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-blue-700 via-orange-600 to-blue-600 px-4 py-2 text-base font-semibold text-white shadow hover:bg-blue-700 md:py-3 md:px-7 md:text-lg"
        >
          {{ button1 }}
        </a>
      </div>
      <div class="mt-3 sm:mt-0 sm:ml-3">
        <button
          class="bg-gradient-animated flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-blue-50 via-blue-200 to-blue-100 px-4 py-2 text-base font-semibold text-blue-900 shadow md:py-3 md:px-7 md:text-lg"
          @click="toggleModal()"
        >
          {{ button2 }}
        </button>
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

const toggleModal = inject("toggleModal");

const { button1, button2, link1, link2 } = props;
</script>
