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
          class="absolute top-0 -translate-y-1/2 transform rounded-full bg-purple-500 py-1.5 px-4 text-xs font-semibold uppercase tracking-wide text-white"
        >
          Most popular
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
              class="h-6 w-6 flex-shrink-0 text-emerald-500"
            />
            <span class="ml-3 text-gray-500 dark:text-gray-300">{{
              feature
            }}</span>
          </li>
        </ul>
      </div>

      <button
        class="bg-gradient-animated mt-4 flex w-full items-center justify-center rounded-md border border-purple-200 bg-gradient-to-r from-purple-50 via-violet-200 to-purple-100 px-4 py-2 text-base text-purple-900 md:py-3 md:px-7"
        @click.prevent="toggleModal()"
      >
        {{ tier.cta }}
      </button>
    </div>
  </div>
</template>

<script setup>
const toggleModal = inject("toggleModal");

const pricing = {
  tiers: [
    {
      title: "Portfolio",
      price: 325,
      frequency: "",
      description: "The simple and effective presentation of your business.",
      features: [
        "One-page portfolio",
        "Brand promotion",
        "Attractive animations",
        "Option to provide custom design",
      ],
      cta: "Request service",
      mostPopular: false,
    },
    {
      title: "Blog",
      price: 725,
      frequency: "",
      description:
        "Full-featured multi-page website to showcase your products.",
      features: [
        "Up to 8 customizable pages",
        "Blog section",
        "Up to 2 languages",
        "Dynamic UX components",
        "Optimized for SEO",
      ],
      cta: "Request service",
      mostPopular: false,
    },
    {
      title: "E-commerce",
      price: 1625,
      frequency: "",
      description: "All you need for your online business.",
      features: [
        "Up to 10 pages",
        "Shop page",
        "Unlimited products",
        "Core analytics",
        "Conversion-driven design",
      ],
      cta: "Request service",
      mostPopular: false,
    },
  ],
};
</script>
