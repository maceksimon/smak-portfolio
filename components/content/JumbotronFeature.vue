<template>
  <div class="relative mb-8 sm:mb-12">
    <!-- <img
      src="/simon_macek.png"
      alt=""
      aria-hidden="true"
      class="absolute inset-y-0 right-0 h-full w-auto -scale-x-100 opacity-50"
    /> -->
    <div class="not-prose isolate">
      <div
        v-if="$slots.highlight"
        class="mb-2 font-bold text-violet-800 dark:text-violet-500 sm:mb-4 sm:mt-12 sm:text-lg lg:mb-6 lg:text-xl"
      >
        <Markdown :use="$slots.highlight" unwrap="p" />
      </div>
      <h1
        class="max-w-2xl font-extrabold uppercase tracking-tight text-gray-900 dark:text-gray-50 sm:text-3xl md:text-4xl lg:text-7xl"
        :class="{}"
      >
        <Markdown :use="$slots.title" unwrap="p" />
      </h1>
    </div>
    <div
      class="mt-6 leading-loose tracking-normal text-gray-500 dark:text-gray-300 sm:mt-8 sm:max-w-xl sm:text-lg lg:mt-12 lg:text-xl"
    >
      <Markdown :use="$slots.perex" unwrap="p" />
    </div>
    <div v-if="button1 || button2" class="not-prose mt-6 sm:mt-10 sm:flex">
      <div class="rounded-md shadow">
        <a
          :href="link1"
          class="bg-gradient-animated flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-violet-700 via-pink-600 to-purple-600 px-4 py-2 text-base font-semibold text-white shadow hover:bg-purple-700 md:py-3 md:px-7 md:text-lg"
        >
          {{ button1 }}
        </a>
      </div>
      <div class="mt-3 sm:mt-0 sm:ml-3">
        <button
          class="bg-gradient-animated flex w-full items-center justify-center rounded-md border border-purple-100 bg-gradient-to-r from-purple-50 via-violet-200 to-purple-100 px-4 py-2 text-base font-semibold text-purple-900 shadow md:py-3 md:px-7 md:text-lg"
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

<style lang="postcss">
h1 > strong,
b {
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  @apply bg-gradient-to-r from-violet-700 via-purple-800 to-pink-600;
}
</style>
