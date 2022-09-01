<template>
  <nav
    :class="{ hidden: page.hideBreadcrumb }"
    class="not-prose mb-4 flex sm:mb-8"
    aria-label="Breadcrumb"
  >
    <ol role="list" class="flex items-center space-x-4">
      <li class="">
        <div class="flex items-center">
          <a
            href="/"
            class="text-sm font-medium text-gray-500 hover:text-gray-700"
          >
            <span>Home</span>
          </a>
        </div>
      </li>
      <li v-for="page in pages" :key="page.title">
        <div class="flex items-center">
          <Icon
            name="heroicons-outline:chevron-right"
            class="h-4 w-4 flex-shrink-0 text-gray-400"
            aria-hidden="true"
          />
          <a
            :href="page._path"
            class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
            :aria-current="page.current ? 'page' : undefined"
            >{{ page.title }}</a
          >
        </div>
      </li>
      <li>
        <div class="flex items-center">
          <Icon
            name="heroicons-outline:chevron-right"
            class="h-4 w-4 flex-shrink-0 text-gray-400"
            aria-hidden="true"
          />
          <span
            class="ml-4 text-sm font-medium text-gray-500"
            aria-current="page"
          >
            {{ page.title }}
          </span>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script setup>
const route = useRoute();
const { navigation, page } = useContent();

// allow to index navigation objects by route
const navigationRoutes = {};
navigation.value.forEach((route) => {
  navigationRoutes[route._path] = route;
});

// loop over path params and link to pages if possible
const pages = [];
if (route.params.slug.length > 1) {
  route.params.slug.forEach((param, index) => {
    if (Object.keys(navigationRoutes).includes(`/${param}`)) {
      pages.push(navigationRoutes[`/${param}`]);
    }
  });
}
</script>
