<script setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";

const toggleModal = inject("toggleModal");

const { locale } = useI18n();
const query = queryContent().where({ language: "en" }).find();
let { data } = await useAsyncData("navigation", () =>
  fetchContentNavigation(query)
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
</script>

<template>
  <div class="bg-blue-700">
    <Popover>
      <nav
        aria-label="Global"
        class="flex items-center justify-between px-4 py-2 sm:px-8 sm:py-4 md:justify-center"
      >
        <NuxtLink to="/" class="font-semibold text-white md:hidden"
          >Šimon Macek</NuxtLink
        >
        <div class="flex items-center md:hidden">
          <button
            @click="toggleModal()"
            class="dark:hover-gray-600 mr-2 inline-flex items-center justify-center rounded-md bg-gray-50 px-3 py-2 text-gray-800 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-100"
          >
            <Icon
              name="mi:email"
              class="h-5 w-auto text-gray-500 dark:text-gray-300"
            />
            <span class="ml-2 text-sm font-semibold">Contact Me</span>
          </button>
          <div class="-mr-2 flex items-center">
            <PopoverButton
              class="dark:hover-gray-600 inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-300"
            >
              <span class="sr-only">Open main menu</span>
              <Icon name="heroicons-outline:menu-alt-3" />
            </PopoverButton>
          </div>
        </div>
        <div
          class="mx-auto hidden w-full max-w-5xl items-center sm:px-8 md:flex md:justify-between"
        >
          <!-- Navigation -->

          <div class="flex flex-wrap gap-4 text-gray-100 md:gap-6 lg:gap-8">
            <VMenuLink v-for="link in navigation" :link="link" />
          </div>
          <!-- Social icons & Color Mode -->
          <div
            id="navbar-icons"
            class="flex items-center space-x-3 text-gray-100 transition md:space-x-4"
          >
            <button
              @click="toggleModal()"
              class="dark:hover-gray-600 mr-2 inline-flex items-center justify-center rounded-md bg-gray-50 px-3 py-2 text-blue-600 hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <Icon name="mi:email" class="h-5 w-auto text-blue-600" />
              <span class="ml-2 text-sm font-semibold">Contact Me</span>
            </button>
            <a
              href="https://twitter.com/maceksimondev"
              title="Twitter"
              class="hover:text-white"
            >
              <Icon name="fa-brands:twitter" />
            </a>
            <a
              href="https://github.com/maceksimon"
              title="GitHub"
              class="hover:text-white"
            >
              <Icon name="fa-brands:github" />
            </a>
            <ColorModeSwitch class="hover:text-white" />
            <LanguageSwitch />
          </div>
        </div>
      </nav>

      <transition
        enter-active-class="duration-150 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="duration-100 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <PopoverPanel
          focus
          class="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
          v-slot="{ close }"
        >
          <div
            class="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5 dark:bg-gray-700 dark:text-gray-300"
          >
            <div class="flex items-center justify-between px-5 pt-4">
              <div class="text-xl font-bold">Menu</div>
              <div class="-mr-2">
                <PopoverButton
                  class="dark:hover-text-gray-100 inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-300"
                >
                  <span class="sr-only">Close menu</span>
                  <Icon name="heroicons-outline:x" />
                </PopoverButton>
              </div>
            </div>
            <div class="px-2 pt-2 pb-3">
              <VMenuLink
                v-for="link of navigation"
                :key="link._path"
                :link="link"
                active-class="font-bold"
                class="menu-link dark:hover-bg-gray-500 dark:hover-text-white block rounded-md px-3 py-2 text-base text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-200"
                @click="close()"
              />
              <div class="space-x-3 px-3 py-2 text-gray-500 transition">
                <a
                  href="https://twitter.com/maceksimondev"
                  title="Twitter"
                  class="hover:text-gray-700 dark:hover:text-gray-300"
                >
                  <Icon name="fa-brands:twitter" />
                </a>
                <a
                  href="https://github.com/maceksimon"
                  title="GitHub"
                  class="hover:text-gray-700 dark:hover:text-gray-300"
                >
                  <Icon name="fa-brands:github" />
                </a>
                <ColorModeSwitch
                  class="hover:text-gray-700 dark:hover:text-gray-300"
                />
                <LanguageSwitch />
              </div>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </div>
</template>

<style lang="postcss">
.menu-link::after {
  content: attr(data-text);
  content: attr(data-text) / "";
  height: 0;
  visibility: hidden;
  overflow: hidden;
  user-select: none;
  pointer-events: none;
  font-weight: 700;
}
</style>
