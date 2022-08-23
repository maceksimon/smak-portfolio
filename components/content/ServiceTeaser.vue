<template>
  <section class="my-8 sm:my-12">
    <DivisionPill v-if="$slots.default">
      <Markdown :use="$slots.default" unwrap="p" />
    </DivisionPill>
    <div
      class="mx-auto my-8 gap-4 overflow-hidden sm:my-12 sm:grid lg:grid-cols-3"
    >
      <div
        v-for="service in services"
        :key="service.title"
        class="group relative rounded-sm border bg-white p-6 pb-8 shadow transition-colors duration-300 ease-out focus-within:ring focus-within:ring-inset focus-within:ring-purple-200 dark:border-transparent dark:bg-gray-700 lg:flex lg:flex-col"
      >
        <div
          class="pointer-none absolute inset-0 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 dark:bg-gradient-to-br dark:from-gray-700 dark:via-gray-700 dark:to-violet-800 dark:group-hover:opacity-50"
        ></div>
        <div class="relative">
          <span
            :class="[
              service.iconBackground,
              service.iconForeground,
              'inline-flex rounded-lg p-3 ring-2 ring-transparent',
            ]"
          >
            <Icon :name="service.icon" />
          </span>
        </div>
        <div
          class="not-prose relative lg:flex lg:grow lg:flex-col lg:justify-between"
        >
          <div class="mt-4">
            <h3
              class="text-2xl font-bold text-gray-900 dark:text-gray-50 sm:text-2xl"
            >
              <a :href="service.href" class="focus:outline-none">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true" />
                {{ service.title }}
              </a>
            </h3>
            <div class="mt-2 text-lg font-semibold">{{ service.subtitle }}</div>
            <div
              v-if="$slots[service.key]"
              class="mt-4 text-gray-600 dark:text-gray-300"
            >
              <Markdown :use="$slots[service.key]" unwrap="p" />
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

<script setup>
const services = [
  {
    title: "Portfolio",
    key: "static",
    subtitle: "Boost your online presence",
    href: "/services#static",
    icon: "carbon:lightning",
    iconForeground: "text-pink-700 dark:text-pink-100",
    iconBackground:
      "bg-pink-50 dark:bg-pink-100/25 border border-pink-100 dark:border-pink-200/25",
    logos: [
      { name: "bxl:netlify", title: "Netlify logo" },
      { name: "bxl:vuejs", title: "Vue logo" },
      { name: "simple-icons:nuxtdotjs", title: "Nuxt logo" },
      { name: "simple-icons:graphql", title: "GraphQL logo" },
    ],
  },
  {
    title: "Blog",
    key: "wordpress",
    subtitle: "Share your story",
    href: "/services#wordpress",
    icon: "material-symbols:menu-book-outline",
    iconForeground: "text-violet-700 dark:text-violet-200",
    iconBackground:
      "bg-violet-50 dark:bg-violet-100/25 border border-violet-100 dark:border-violet-200/25",
    logos: [
      { name: "bxl:wordpress", title: "WordPress logo" },
      { name: "simple-icons:php", title: "PHP logo" },
      { name: "bxl:tailwind-css", title: "Tailwind CSS logo" },
      { name: "simple-icons:sass", title: "SASS logo" },
    ],
  },
  {
    title: "E-commerce",
    key: "shopify",
    subtitle: "Sell on the web",
    href: "/services#shopify",
    icon: "material-symbols:shopping-cart-outline-rounded",
    iconForeground: "text-emerald-700 dark:text-emerald-200",
    iconBackground:
      "bg-emerald-50 dark:bg-emerald-100/25 border border-emerald-100 dark:border-emerald-200/25",
    logos: [
      { name: "bxl:shopify", title: "Shopify logo" },
      { name: "bxl:tailwind-css", title: "Tailwind CSS logo" },
      { name: "simple-icons:javascript", title: "JavaScript logo" },
      { name: "bxl:vuejs", title: "Vue logo" },
    ],
  },
];
</script>

<style lang="postcss">
em {
  @apply text-pink-600 dark:text-pink-300;
}
</style>
