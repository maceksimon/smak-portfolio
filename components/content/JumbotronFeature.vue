<template>
  <div class="relative mb-8 flex flex-col-reverse sm:mb-12 sm:flex-col">
    <NuxtPicture
      src="/image/profile_light.png"
      alt="Simon Macek profile photo"
      aria-hidden="true"
      format="webp"
      :imgAttrs="{
        class:
          'bottom-0 right-0 isolate m-0 mt-4 h-full w-auto dark:hidden sm:absolute sm:mt-0',
      }"
      class=""
    />
    <NuxtPicture
      src="/image/profile_dark.png"
      alt="Simon Macek profile photo"
      aria-hidden="true"
      format="webp"
      :imgAttrs="{
        class:
          'bottom-0 right-0 isolate m-0 mt-4 hidden h-full w-auto dark:block sm:absolute sm:mt-0',
      }"
    />
    <div class="isolate">
      <div class="not-prose">
        <div
          v-if="$slots.highlight"
          class="mb-2 font-bold text-blue-700 dark:text-blue-300 sm:mb-4 sm:mt-12 sm:text-lg lg:mb-6 lg:text-xl"
        >
          <Markdown :use="$slots.highlight" unwrap="p" />
        </div>
        <h1
          class="sm: max-w-md text-4xl font-extrabold uppercase tracking-tight text-gray-900 dark:text-gray-50 sm:text-5xl lg:text-7xl xl:max-w-2xl"
          :class="{}"
        >
          <Markdown :use="$slots.title" unwrap="p" />
        </h1>
      </div>
      <div
        class="mt-6 max-w-xs leading-relaxed tracking-normal text-gray-500 dark:text-gray-300 sm:mt-8 sm:text-lg lg:mt-12 lg:text-xl lg:leading-loose xl:max-w-xl xl:max-w-none"
      >
        <Markdown :use="$slots.perex" unwrap="p" />
      </div>
      <div v-if="button1 || button2" class="not-prose mt-6 sm:mt-10 sm:flex">
        <div class="rounded-md">
          <a
            :href="link1"
            class="bg-gradient-animated flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-blue-700 via-blue-400 to-blue-500 px-4 py-2 text-base font-semibold text-white shadow hover:bg-blue-700 dark:border-none md:py-3 md:px-7 md:text-lg"
          >
            {{ button1 }}
          </a>
        </div>
        <div class="mt-3 sm:mt-0 sm:ml-3">
          <button
            class="bg-gradient-animated flex w-full items-center justify-center rounded-md border border-blue-200 bg-gradient-to-r from-blue-100 via-white to-blue-100 px-4 py-2 text-base font-semibold text-blue-800 shadow dark:border-none dark:border-transparent dark:from-blue-200 dark:via-blue-50 dark:to-blue-100 md:py-3 md:px-7 md:text-lg"
            @click="toggleModal()"
          >
            {{ button2 }}
          </button>
        </div>
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
  @apply bg-gradient-to-r from-orange-600 via-orange-300 to-orange-400;
}
</style>
