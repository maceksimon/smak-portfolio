<template>
  <div class="mb-6">
    <!-- could be wrapped into a component -->
    <a
      v-if="project?.fields?.image"
      :href="project?._path"
      class="group relative block"
    >
      <NuxtPicture
        width="1200"
        height="675"
        :src="project.fields?.image"
        :alt="project.fields?.imageAlt"
        format="webp"
        :imgAttrs="{
          class: 'rounded-sm border dark:border-transparent',
        }"
        loading="lazy"
      />
      <div
        class="absolute inset-0 flex h-full w-full items-center justify-center rounded-sm bg-gradient-to-br from-blue-700 via-blue-700 to-blue-900 opacity-0 transition-opacity duration-300 ease-in group-hover:opacity-90"
      ></div>
      <div
        class="absolute inset-0 z-10 flex h-full w-full items-center justify-center space-x-2 text-xl font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <span>Explore</span>
        <Icon
          class="mt-1 h-5 w-5 text-blue-400"
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
          class="inline-flex items-center rounded-full border border-transparent bg-orange-600/70 px-2.5 py-0.5 text-xs font-medium text-white dark:border-orange-100 dark:bg-orange-50 dark:text-orange-800"
        >
          {{ skill }}
        </span>
      </li>
    </ul>
    <a
      v-if="project?._path"
      class="group mt-4 block text-blue-700 dark:text-blue-300"
      :href="project._path"
    >
      <h2
        v-if="project?.title"
        class="text-xl font-bold underline lg:text-2xl lg:no-underline lg:group-hover:underline"
      >
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
