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
        class="hover-border-violet-300 group relative rounded-md border p-6 pb-8 shadow transition-colors duration-300 ease-out focus-within:ring focus-within:ring-inset focus-within:ring-purple-200 dark:border-transparent dark:bg-gray-900 dark:hover:border-violet-900 lg:flex lg:flex-col"
      >
        <div
          class="pointer-none absolute inset-0 bg-gradient-to-br from-white via-white to-purple-100 opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100 dark:from-gray-900 dark:via-violet-900 dark:to-purple-800 dark:group-hover:opacity-50"
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
              class="text-lg font-bold text-gray-900 dark:text-gray-50 sm:text-2xl"
            >
              <a :href="service.href" class="focus:outline-none">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true" />
                {{ service.title }}
              </a>
            </h3>
            <div
              v-if="$slots[service.key]"
              class="mt-4 text-sm text-gray-600 dark:text-gray-300"
            >
              <Markdown :use="$slots[service.key]" unwrap="p" />
            </div>
          </div>
          <ul role="list" class="mt-6 flex space-x-4">
            <li v-for="logo in service.logos" :key="logo.name">
              <span class="sr-only">{{ logo.title }}</span>
              <Icon :name="logo.name" class="h-5 w-auto" />
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
    title: "Static",
    key: "static",
    subtitle: "Flashy presentation website",
    href: "/services#static",
    icon: "carbon:lightning",
    iconForeground: "text-pink-700 dark:text-pink-200",
    iconBackground: "bg-pink-50 dark:bg-pink-100/25",
    logos: [
      { name: "logos:vue", title: "Vue logo" },
      { name: "logos:netlify", title: "Netlify logo" },
      { name: "logos:sanity", title: "Sanity logo" },
    ],
  },
  {
    title: "WordPress",
    key: "wordpress",
    subtitle: "Rich and beautiful blog",
    href: "/services#wordpress",
    icon: "material-symbols:menu-book-outline",
    iconForeground: "text-violet-700 dark:text-violet-200",
    iconBackground: "bg-violet-50 dark:bg-violet-100/25",
    logos: [
      { name: "logos:wordpress", title: "WordPress logo" },
      { name: "logos:tailwindcss-icon", title: "Tailwind CSS logo" },
    ],
  },
  {
    title: "Shopify",
    key: "shopify",
    subtitle: "Full-featured e-commerce store",
    href: "/services#shopify",
    icon: "material-symbols:shopping-cart-outline-rounded",
    iconForeground: "text-emerald-700 dark:text-emerald-200",
    iconBackground: "bg-emerald-50 dark:bg-emerald-100/25",
    logos: [
      { name: "logos:shopify", title: "Shopify logo" },
      { name: "logos:tailwindcss-icon", title: "Tailwind CSS logo" },
      { name: "logos:alpinejs-icon", title: "Alpine logo" },
    ],
  },
];
</script>
