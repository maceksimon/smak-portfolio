<template>
  <div class="mb-6">
    <!-- could be wrapped into a component -->
    <a
      v-if="project?.fields?.image"
      :href="project?._path"
      class="group relative block"
    >
      <img
        :src="project.fields?.image"
        :alt="project.fields?.imageAlt"
        class="rounded-sm border dark:border-transparent"
      />
      <div
        class="absolute inset-0 flex h-full w-full items-center justify-center rounded-sm bg-gradient-to-br from-purple-900 via-violet-900 to-gray-900 opacity-0 transition-opacity duration-300 ease-in group-hover:opacity-90"
      ></div>
      <div
        class="absolute inset-0 z-10 flex h-full w-full items-center justify-center space-x-2 text-xl font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <span>Explore</span>
        <Icon
          class="mt-1 h-5 w-5 text-violet-400"
          aria-hidden="true"
          name="majesticons:fast-forward-line"
        />
      </div>
    </a>
    <ul
      v-if="project?.fields?.skills?.length"
      role="list"
      class="-mx-2 mt-4 flex flex-wrap"
    >
      <li v-for="skill in project.fields.skills" class="px-2" :key="skill">
        <span
          class="inline-flex items-center rounded-full border border-pink-100 bg-pink-50 px-2.5 py-0.5 text-xs font-medium text-pink-800 dark:border-pink-100"
        >
          {{ skill }}
        </span>
      </li>
    </ul>
    <a
      v-if="project?._path"
      class="mt-4 block text-purple-800 transition-colors duration-150 ease-out hover:text-purple-900 dark:text-purple-300 dark:hover:text-purple-100"
      :href="project._path"
    >
      <h2 v-if="project?.title" class="text-xl font-bold lg:text-2xl">
        {{ project.title }}
      </h2>
      <div
        v-if="project?.description"
        class="mt-3 text-base text-gray-800 dark:text-gray-300"
      >
        {{ project.description }}
      </div>
    </a>
    <div v-else>
      <h2 v-if="project?.title" class="text-xl font-bold lg:text-2xl">
        {{ project.title }}
      </h2>
      <div
        v-if="project?.description"
        class="mt-3 text-base text-gray-800 dark:text-gray-300"
      >
        {{ project.description }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  project: {
    type: Object,
    default: () => {},
  },
});
</script>
