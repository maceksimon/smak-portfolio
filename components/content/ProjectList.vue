<template>
  <div class="my-8 sm:my-12">
    <DivisionPill>
      <Markdown :use="$slots.default" unwrap="p" />
    </DivisionPill>
    <div
      v-if="data?.length"
      class="not-prose mx-auto my-8 grid gap-6 sm:my-12 lg:grid-cols-2 lg:gap-10"
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
const { data } = await useAsyncData("portfolioMain", () =>
  queryContent("portfolio")
    // do not fetch the root page
    .where({ _path: { $ne: "/portfolio" } })
    .sort({ "fields.order": 1 })
    .find()
);
</script>
