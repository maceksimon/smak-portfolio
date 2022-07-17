<template>
  <div class="not-prose my-8 sm:my-12">
    <div class="relative">
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="w-full border-t border-gray-300 dark:border-gray-700" />
      </div>
      <div class="relative flex justify-center">
        <span
          class="dark:border-bg-800 inline-block rounded-full bg-gray-200 px-4 py-1 text-sm font-semibold text-gray-700"
        >
          <slot />
        </span>
      </div>
    </div>
    <div
      v-if="data?.length"
      class="mx-auto my-8 grid gap-6 sm:my-12 lg:grid-cols-2 lg:gap-10"
    >
      <ProjectTeaser
        v-for="project in data"
        :project="project"
        :key="project.id"
      />
    </div>
  </div>
</template>

<script setup>
const { data } = await useAsyncData("portfolioFeature", () =>
  queryContent("portfolio")
    // do not fetch the root page
    .where({ featured: true })
    .sort({ "fields.order": 1 })
    .find()
);
</script>
