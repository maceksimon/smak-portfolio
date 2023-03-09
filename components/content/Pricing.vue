<script setup>
const toggleModal = inject("toggleModal");

const pricing = {
  tiers: [
    {
      id: "content",
      title: "Content + SEO",
      price: 19,
      frequency: "/month",
      description:
        "Publish content on regular basis to increase your relevance and build a better SERP position.",
      features: [
        "One 500-word article",
        "SEO optimization",
        "Performance optimization",
      ],
      cta: "Request service",
      mostPopular: false,
    },
    {
      id: "smm",
      title: "Social Media",
      price: 39,
      frequency: "/month",
      description:
        "Promote your project on social media and direct your online audience to your website to ensure conversions.",
      features: [
        "4 social media posts",
        "SEO optimization",
        "Performance optimization",
      ],
      cta: "Request service",
      mostPopular: false,
    },
    {
      id: "bundle",
      title: "Complete Bundle",
      price: 49,
      frequency: "/month",
      description:
        "Get a full treatment and boost your online presence through both your website and social media.",
      features: [
        "One 500-word article",
        "4 social media posts",
        "SEO optimization",
        "Performance optimization",
        "Regular reports",
      ],
      cta: "Request service",
      mostPopular: true,
    },
  ],
};
</script>

<template>
  <div
    class="not-prose mt-24 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0"
  >
    <div
      v-for="tier in pricing.tiers"
      :key="tier.title"
      class="relative flex flex-col rounded-sm border border-gray-200 bg-white p-8 shadow-sm dark:border-transparent dark:bg-gray-700"
    >
      <div class="flex-1">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-50">
          {{ tier.title }}
        </h3>
        <p
          v-if="tier.mostPopular"
          class="absolute top-0 -translate-y-1/2 transform rounded-full bg-blue-500 py-1.5 px-4 text-xs font-semibold uppercase tracking-wide text-white"
        >
          15% OFF
        </p>
        <p class="mt-4 flex items-baseline text-gray-900 dark:text-gray-50">
          <span class="text-4xl font-bold tracking-tight"
            >${{ tier.price }}</span
          >
          <span class="ml-1 text-lg font-semibold">{{ tier.frequency }}</span>
        </p>
        <p class="mt-6 text-gray-500 dark:text-gray-300">
          {{ tier.description }}
        </p>

        <!-- Feature list -->
        <ul role="list" class="mt-6 space-y-4">
          <li v-for="feature in tier.features" :key="feature" class="flex">
            <Icon
              name="ph:check-circle-duotone"
              class="h-6 w-6 flex-shrink-0 text-blue-500"
            />
            <span class="ml-3 text-gray-500 dark:text-gray-300">{{
              feature
            }}</span>
          </li>
        </ul>
      </div>

      <button
        class="bg-gradient-animated mt-4 flex w-full items-center justify-center rounded-md border bg-gradient-to-r px-4 py-2 text-base sm:mt-6 md:py-3 md:px-7 lg:mt-8"
        :class="[
          tier.mostPopular
            ? 'border-transparent from-blue-700 via-blue-400 to-blue-500 text-white'
            : ' border-blue-100 from-blue-100 via-white to-blue-100 text-blue-800 dark:from-blue-200 dark:via-blue-50 dark:to-blue-100',
        ]"
        @click.prevent="toggleModal(tier.id)"
      >
        {{ tier.cta }}
      </button>
    </div>
  </div>
</template>
