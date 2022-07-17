<template>
  <div class="mb-6">
    <!-- could be wrapped into a component -->
    <a
      v-if="project?.fields?.image"
      :href="project?._path"
      class="group relative block"
    >
      <img :src="project.fields?.image" :alt="project.fields?.imageAlt" />
      <div
        class="absolute inset-0 flex h-full w-full items-center justify-center bg-violet-900 bg-opacity-0 text-white transition-all duration-300 ease-in group-hover:bg-opacity-90"
      >
        <div
          class="flex items-center space-x-2 text-xl font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        >
          <span>Explore</span>
          <Icon
            class="mt-1 h-5 w-5 text-violet-400"
            aria-hidden="true"
            name="majesticons:fast-forward-line"
          />
        </div>
      </div>
    </a>
    <a
      v-if="project?._path"
      class="mt-4 block text-purple-900 transition-colors duration-75 ease-out hover:text-black dark:text-purple-100 dark:hover:text-white"
      :href="project._path"
    >
      <h2 v-if="project?.title" class="text-xl font-bold lg:text-2xl">
        {{ project.title }}
      </h2>
    </a>
    <div v-else>
      <h2 v-if="project?.title" class="text-xl font-bold lg:text-2xl">
        {{ project.title }}
      </h2>
    </div>
    <!-- component would end here -->
    <ul
      v-if="project?.fields?.skills?.length"
      role="list"
      class="-mx-2 mt-4 flex flex-wrap"
    >
      <li v-for="skill in project.fields.skills" class="px-2" :key="skill">
        <span
          class="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800"
        >
          {{ skill }}
        </span>
      </li>
    </ul>
    <div v-if="project?.description" class="mt-4">
      {{ project.description }}
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
