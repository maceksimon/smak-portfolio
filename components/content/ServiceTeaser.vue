<script setup>
const services = [
  {
    title: "Portfolio",
    key: "portfolio",
    subtitle: "Boost your online presence",
    href: "/services#portfolio",
    icon: "carbon:lightning",
    iconForeground: "text-white dark:text-orange-100",
    iconBackground:
      "bg-orange-600/75 dark:bg-orange-100/25 border border-transparent dark:border-orange-200/25",
    logos: [
      { name: "bxl:netlify", title: "Netlify logo" },
      { name: "bxl:vuejs", title: "Vue logo" },
      { name: "simple-icons:nuxtdotjs", title: "Nuxt logo" },
      { name: "simple-icons:graphql", title: "GraphQL logo" },
    ],
  },
  {
    title: "Blog",
    key: "blog",
    subtitle: "Share your story",
    href: "/services#blog",
    icon: "material-symbols:menu-book-outline",
    iconForeground: "text-white dark:text-blue-200",
    iconBackground:
      "bg-blue-600/75 dark:bg-blue-100/25 border border-transparent dark:border-blue-200/25",
    logos: [
      { name: "bxl:wordpress", title: "WordPress logo" },
      { name: "simple-icons:php", title: "PHP logo" },
      { name: "bxl:tailwind-css", title: "Tailwind CSS logo" },
      { name: "simple-icons:sass", title: "SASS logo" },
    ],
  },
  {
    title: "E-commerce",
    key: "e-commerce",
    subtitle: "Sell on the web",
    href: "/services#e-commerce",
    icon: "material-symbols:shopping-cart-outline-rounded",
    iconForeground: "text-white dark:text-emerald-200",
    iconBackground:
      "bg-emerald-600/75 dark:bg-emerald-100/25 border border-transparent dark:border-emerald-200/25",
    logos: [
      { name: "bxl:shopify", title: "Shopify logo" },
      { name: "bxl:tailwind-css", title: "Tailwind CSS logo" },
      { name: "simple-icons:javascript", title: "JavaScript logo" },
      { name: "bxl:vuejs", title: "Vue logo" },
    ],
  },
];
</script>

<template>
  <section class="my-8 sm:my-12 xl:my-16">
    <DivisionPill v-if="$slots.default">
      <MDCSlot :use="$slots.default" unwrap="p" />
    </DivisionPill>
    <div
      class="mx-auto my-8 gap-4 space-y-4 overflow-hidden sm:my-12 sm:grid sm:gap-8 sm:space-y-0 lg:grid-cols-3 lg:gap-4 xl:my-16">
      <div v-for="service in services" :key="service.title"
        class="group relative rounded-sm border bg-white p-6 pb-8 shadow transition-colors duration-300 ease-out focus-within:ring focus-within:ring-inset focus-within:ring-blue-200 dark:border-transparent dark:bg-gray-700 lg:flex lg:flex-col">
        <div
          class="pointer-none absolute inset-0 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 dark:bg-gradient-to-br dark:from-gray-700 dark:via-gray-700 dark:to-blue-800 dark:group-hover:opacity-50">
        </div>
        <div class="relative">
          <span :class="[
            service.iconBackground,
            service.iconForeground,
            'inline-flex rounded-lg p-3 ring-2 ring-transparent',
          ]">
            <Icon :name="service.icon" />
          </span>
        </div>
        <div class="service-content not-prose relative lg:flex lg:grow lg:flex-col lg:justify-between">
          <div class="mt-4">
            <h3 class="text-2xl font-bold text-gray-900 underline dark:text-gray-50 sm:text-2xl lg:no-underline">
              <a :href="service.href" class="focus:outline-none">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true" />
                {{ service.title }}
              </a>
            </h3>
            <div class="mt-2 text-lg font-semibold text-gray-700 dark:text-gray-200">
              {{ service.subtitle }}
            </div>
            <div v-if="$slots[service.key]" class="mt-4 text-gray-600 dark:text-gray-300">
              <MDCSlot :use="$slots[service.key]" unwrap="p" />
            </div>
          </div>
          <ul role="list" class="mt-6 flex space-x-4">
            <li v-for="logo in service.logos" :key="logo.name">
              <span class="sr-only">{{ logo.title }}</span>
              <Icon :name="logo.name" class="h-8 w-auto text-gray-400" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="postcss">
.service-content em {
  @apply text-orange-600 dark:text-orange-300;
}
</style>
