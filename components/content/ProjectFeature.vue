<template>
  <section class="my-8 sm:my-12 xl:my-16">
    <DivisionPill v-if="$slots.default">
      <Markdown :use="$slots.default" unwrap="p" />
    </DivisionPill>
    <div
      v-if="data?.length"
      class="not-prose mx-auto my-8 grid gap-6 sm:my-12 lg:grid-cols-2 lg:gap-10 xl:my-16"
    >
      <ProjectTeaser
        v-for="project in data"
        :project="project"
        :key="project.id"
      />
    </div>
  </section>
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
