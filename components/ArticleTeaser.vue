<template>
  <div class="py-6 lg:py-8">
    <a
      v-if="post?.fields?.image"
      :href="post?._path"
      class="group relative block"
    >
      <img :src="post.fields?.image" :alt="post.fields?.imageAlt" />
      <div
        class="absolute inset-0 flex h-full w-full items-center justify-center bg-gradient-to-br from-purple-900 via-violet-900 to-gray-900 opacity-0 transition-opacity duration-300 ease-in group-hover:opacity-90"
      ></div>
      <div
        class="absolute inset-0 z-10 flex h-full w-full items-center justify-center space-x-2 text-xl font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <span>Read More</span>
        <Icon
          class="mt-1 h-5 w-5 text-violet-400"
          aria-hidden="true"
          name="majesticons:fast-forward-line"
        />
      </div>
    </a>
    <div v-if="post?.fields?.tags?.length" class="-mx-2 mt-4 flex flex-wrap">
      <div v-for="tag in post.fields.tags" :key="tag" class="px-2">
        <span
          class="inline-flex items-center rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-medium text-teal-900"
        >
          {{ tag }}
        </span>
      </div>
    </div>
    <a
      v-if="post.title || post.description"
      :href="post._path"
      class="mt-4 block text-purple-800 transition-colors duration-75 ease-out hover:text-purple-900 dark:text-purple-300 dark:hover:text-purple-200"
    >
      <p class="text-xl font-bold lg:text-2xl">
        {{ post.title }}
      </p>
      <p class="mt-3 text-base text-gray-800 dark:text-gray-300">
        {{ post.description }}
      </p>
    </a>
    <div class="mt-6 flex items-center">
      <div class="flex space-x-1 text-sm">
        <time :datetime="post.datetime">
          {{ formattedDate.toLocaleDateString() }}
        </time>
        <span aria-hidden="true"> &middot; </span>
        <span> {{ post.time }} read </span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  post: {
    type: Object,
    default: () => {},
  },
});

let formattedDate;
try {
  formattedDate = new Date(props.post.created);
} catch (err) {
  console.log(err);
  console.log("could not format date");
}
</script>
