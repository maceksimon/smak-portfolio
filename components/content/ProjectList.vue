<template>
  <div class="not-prose">
    <ul v-if="data?.length" class="list-none p-0">
      <li v-for="item in data" :key="item._id" class="mb-6">
        <!-- could be wrapped into a component -->
        <a
          v-if="item._path"
          class="no-underline hover:underline"
          :href="item._path"
        >
          <h2 v-if="item.title" class="text-xl font-bold lg:text-2xl">
            {{ item.title }}
          </h2>
        </a>
        <div v-else>
          <h2 v-if="item.title" class="text-xl font-bold lg:text-2xl">
            {{ item.title }}
          </h2>
        </div>
        <!-- component would end here -->
        <ul
          v-if="item?.fields?.skills?.length"
          role="list"
          class="-mx-2 mt-4 flex flex-wrap"
        >
          <li v-for="skill in item.fields.skills" class="px-2" :key="skill">
            <span
              class="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800"
            >
              {{ skill }}
            </span>
          </li>
        </ul>
        <div class="mt-4">
          {{ item.description }}
        </div>
        <a :href="item._path" class="group relative mt-4 block">
          <img :src="item.fields?.image" :alt="item.fields?.imageAlt" />
          <div
            class="absolute inset-0 flex h-full w-full items-center justify-center bg-violet-700 bg-opacity-0 transition-all duration-300 ease-in group-hover:bg-opacity-75"
          >
            <span
              class="inline-flex items-center rounded-full bg-white px-3 py-0.5 font-medium text-gray-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              Explore
            </span>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup>
const { data } = await useAsyncData("portfolio", () =>
  queryContent("/portfolio").sort({ "fields.order": 1 }).find()
);
</script>
