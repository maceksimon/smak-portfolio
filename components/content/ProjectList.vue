<template>
  <div class="not-prose my-8 sm:my-12">
    <div class="relative">
      <div class="absolute inset-0 flex items-center" aria-hidden="true">
        <div class="w-full border-t border-gray-300 dark:border-gray-700" />
      </div>
      <div class="relative flex justify-center">
        <span
          class="dark:border-bg-800 inline-block rounded-full bg-gray-200 px-4 py-1 text-sm font-semibold text-gray-700"
          ><slot
        /></span>
      </div>
    </div>
    <ul
      v-if="data?.length"
      class="mx-auto my-8 grid list-none gap-10 p-0 sm:my-12 lg:grid-cols-2"
    >
      <li v-for="item in data" :key="item._id" class="mb-6">
        <!-- could be wrapped into a component -->
        <a
          v-if="item.fields?.image"
          :href="item._path"
          class="group relative block"
        >
          <img :src="item.fields?.image" :alt="item.fields?.imageAlt" />
          <div
            class="absolute inset-0 flex h-full w-full items-center justify-center bg-violet-900 bg-opacity-0 text-white transition-all duration-300 ease-in group-hover:bg-opacity-90"
          >
            <span
              class="font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              >Explore</span
            >
          </div>
        </a>
        <a
          v-if="item._path"
          class="mt-4 block no-underline hover:underline"
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
      </li>
    </ul>
  </div>
</template>

<script setup>
const { data } = await useAsyncData("portfolio", () =>
  queryContent("portfolio")
    // do not fetch the root page
    .where({ _path: { $ne: "/portfolio" } })
    .sort({ "fields.order": 1 })
    .find()
);
</script>
