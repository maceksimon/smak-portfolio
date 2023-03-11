<script setup>
const route = useRoute();
const { locale } = useI18n();

const { data } = await useAsyncData("navigation", () =>
  fetchContentNavigation()
);

// localize navigation
let navigation = [];
let localeSubtree = null;

// if default locale
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
  navigation = localeSubtree.children;
}

// allow to index navigation objects by route
const navigationRoutes = {};
navigation.forEach((route) => {
  if (route) {
    navigationRoutes[route._path] = route;
  }
});

// loop over path params and link to pages if possible
const pages = ref([]);
if (route.params.slug.length > 1) {
  route.params.slug.forEach((param) => {
    for (const key in navigationRoutes) {
      if (key.includes(param)) {
        pages.value.push(navigationRoutes[key]);
      }
    }
  });
}
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
              class="text-sm font-medium text-gray-500 hover:text-gray-700"
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
              class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
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
              class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
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
