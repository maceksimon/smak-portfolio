<template>
  <div class="my-8 sm:my-12">
    <DivisionPill v-if="$slots.default">
      <Markdown :use="$slots.default" unwrap="p" />
    </DivisionPill>
    <div class="not-prose">
      <div v-if="data?.length" class="grid divide-y">
        <ArticleTeaser v-for="post in data" :post="post" :key="post.id" />
      </div>
    </div>
  </div>
</template>

<script setup>
const { data } = await useAsyncData("blog", () =>
  queryContent("blog")
    // do not fetch the root page
    .where({ _path: { $ne: "/blog" } })
    .find()
);
</script>
