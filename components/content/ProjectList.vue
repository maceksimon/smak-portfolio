<template>
  <pre>Component Project List</pre>
  <ul v-if="data.length" class="list-none">
    <li v-for="item in data" :key="item._id">
      <h2>{{ item.title }}</h2>
      <div>
        {{ item.description }}
      </div>
      <img :src="item.fields?.image" :alt="item.fields?.imageAlt" />
    </li>
  </ul>
</template>

<script setup>
const { data } = await useAsyncData("portfolio", () =>
  queryContent("/portfolio").sort({ "fields.order": 1 }).find()
);
</script>
