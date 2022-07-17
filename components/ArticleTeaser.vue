<template>
  <div>
    <div v-if="post?.fields?.tags?.length" class="-mx-2 mt-4 flex flex-wrap">
      <div v-for="tag in post.fields.tags" :key="tag" class="px-2">
        <span
          class="inline-flex items-center rounded-full bg-pink-100 px-2.5 py-0.5 text-xs font-medium text-pink-800"
        >
          {{ tag }}
        </span>
      </div>
    </div>
    <a
      v-if="post.title || post.description"
      :href="post._path"
      class="mt-4 block text-purple-800 hover:text-purple-900 dark:text-purple-200"
    >
      <p class="text-xl font-bold lg:text-2xl">
        {{ post.title }}
      </p>
      <p class="mt-3 text-base text-gray-800">
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
