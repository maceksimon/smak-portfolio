<template>
  <div class="not-prose">
    <ul v-if="data?.length" class="list-none p-0">
      <ArticleTeaser v-for="post in data" :post="post" :key="post.id" />
    </ul>
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
