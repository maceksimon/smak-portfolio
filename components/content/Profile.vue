<template>
  <div
    class="not-prose my-8 flex flex-col space-y-4 sm:my-12 sm:flex-row sm:space-y-0 sm:space-x-8"
  >
    <div v-if="image" class="aspect-w-1 aspect-h-1 w-40">
      <img class="rounded-sm object-cover" :src="image" :alt="name" />
    </div>
    <div>
      <div v-if="name || role" class="space-y-1 text-lg font-medium leading-6">
        <h2 class="text-lg font-bold sm:text-xl">{{ name }}</h2>
        <p class="text-blue-700 dark:text-blue-400">{{ role }}</p>
      </div>
      <ul
        v-if="twitterUrl || linkedinUrl"
        role="list"
        class="mt-4 flex space-x-4"
      >
        <li v-if="twitterUrl">
          <a :href="twitterUrl" class="text-gray-400 hover:text-gray-500">
            <span class="sr-only">Twitter</span>
            <Icon name="fa-brands:twitter" />
          </a>
        </li>
        <li v-if="linkedinUrl">
          <a :href="linkedinUrl" class="text-gray-400 hover:text-gray-500">
            <span class="sr-only">LinkedIn</span>
            <Icon name="fa-brands:linkedin" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  role: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
  twitterUrl: {
    type: String,
    default: "",
  },
  linkedinUrl: {
    type: String,
    default: "",
  },
});

const { name, role, image, twitterUrl, linkedinUrl } = props;
</script>
