<script setup>
const route = useRoute();
const { locale } = useI18n();

const { data } = await useAsyncData("navigation", () =>
  fetchContentNavigation()
);
const pathCore = route.fullPath.split("#")[0];
const pathParts = pathCore.split("/");

// localize navigation
let navigation = [];
let localeSubtree = null;
const rootPageIndex = ref(1);

const isDefaultLocale = computed(() => {
  return locale.value === "cs";
});

if (isDefaultLocale.value) {
  navigation = data.value.filter((link) => {
    return link.language === "cs";
  });
} else {
  [localeSubtree] = data.value.filter((link) => {
    return link.language === locale.value;
  });
  rootPageIndex.value = 2;
  navigation = localeSubtree.children;
}

// allow to index navigation objects by route
const navigationRoutes = {};
navigation.forEach((route) => {
  if (route) {
    navigationRoutes[route._path] = route;
  }
  if (route.children) {
    route.children.forEach((child) => {
      navigationRoutes[child._path] = child;
    });
  }
});

// loop over routes and select children of root path
const pages = computed(() => {
  let path = "";
  let pages = [];

  pathParts.forEach((part) => {
    if (part) {
      path += `/${part}`;
    }
    if (path && part !== locale.value && navigationRoutes[path]) {
      pages.push(navigationRoutes[path]);
    }
  });

  return pages;
});
</script>

<template>
  <ContentQuery :path="$route.path" v-slot="{ data }">
    <nav
      :class="{ hidden: data[0]?.hideBreadcrumb }"
      class="not-prose mb-4 flex sm:mb-8"
      aria-label="Breadcrumb"
    >
      <ol role="list" class="flex items-center space-x-4">
        <li class="">
          <div class="flex items-center">
            <a
              :href="locale === 'cs' ? '/' : '/' + locale"
              class="text-sm font-medium text-gray-500 transition-colors duration-200 ease-in-out hover:text-gray-700 dark:hover:text-gray-300"
            >
              <span>{{ $t("home") }}</span>
            </a>
          </div>
        </li>
        <li v-for="page in pages" :key="page.title">
          <div v-if="page" class="flex items-center">
            <Icon
              name="heroicons-outline:chevron-right"
              class="h-4 w-4 flex-shrink-0 text-gray-400"
              aria-hidden="true"
            />
            <a
              :href="page._path"
              class="line-clamp-1 ml-4 text-sm font-medium text-gray-500 transition-colors duration-200 ease-in-out hover:text-gray-700 dark:hover:text-gray-300"
              :aria-current="page.current ? 'page' : undefined"
              >{{ page.title }}</a
            >
          </div>
        </li>
        <li class="hidden sm:block">
          <div v-if="page" class="flex items-center">
            <Icon
              name="heroicons-outline:chevron-right"
              class="h-4 w-4 flex-shrink-0 text-gray-400"
              aria-hidden="true"
            />
            <a
              :href="page._path"
              class="line-clamp-1 ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
              aria-current="page"
            >
              {{ page.title }}
            </a>
          </div>
        </li>
      </ol>
    </nav>
  </ContentQuery>
</template>
