<script setup lang="ts">
const toggleModal: void = inject("toggleModal");
const { button1, button2, link1, link2 } = withDefaults(
  defineProps<{
    button1?: string;
    button2?: string;
    link1?: string;
    link2?: string;
  }>(),
  {
    button1: "",
    button2: "",
    link1: "",
    link2: "",
  }
);
</script>

<template>
  <div class="mb-8 sm:mb-12">
    <div
      v-if="$slots.highlight"
      class="mb-2 font-bold text-blue-700 dark:text-blue-300"
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
        <VButton :link="link1" type="primary">{{ button1 }}</VButton>
      </div>
      <div class="mt-3 sm:mt-0 sm:ml-3">
        <VButton type="secondary" @click="toggleModal()">
          {{ button2 }}
        </VButton>
      </div>
    </div>
  </div>
</template>
