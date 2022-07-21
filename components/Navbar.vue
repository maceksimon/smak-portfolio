<template>
  <div>
    <Popover>
      <nav
        aria-label="Global"
        class="flex items-center justify-end px-4 py-2 sm:py-4 md:justify-center"
      >
        <div class="-mr-2 flex items-center md:hidden">
          <PopoverButton
            class="dark:hover-gray-600 inline-flex items-center justify-center rounded-md bg-gray-50 p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-violet-500 dark:bg-gray-700 dark:text-gray-300"
          >
            <span class="sr-only">Open main menu</span>
            <Icon name="heroicons-outline:menu-alt-3" />
          </PopoverButton>
        </div>
        <div
          class="mx-auto hidden w-full max-w-5xl sm:px-8 md:flex md:justify-between"
        >
          <!-- Navigation -->
          <div class="text-gray-700 dark:text-gray-200">
            <NuxtLink
              v-for="link of navigation"
              :key="link._path"
              :to="link._path"
              active-class="font-bold"
              class="mr-4"
            >
              {{ link.navTitle || link.title }}
            </NuxtLink>
          </div>
          <!-- Social icons & Color Mode -->
          <div id="navbar-icons" class="space-x-3 text-gray-500 transition">
            <button
              @click="toggleModal()"
              class="hover:text-gray-700 dark:hover:text-gray-300"
            >
              <Icon name="mi:email" class="h-5 w-auto" />
            </button>
            <a
              href="https://twitter.com/maceksimon1"
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
                  class="dark:hover-text-gray-100 inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-violet-500 dark:bg-gray-700 dark:text-gray-300"
                >
                  <span class="sr-only">Close menu</span>
                  <Icon name="heroicons-outline:x" />
                </PopoverButton>
              </div>
            </div>
            <div class="px-2 pt-2 pb-3">
              <NuxtLink
                v-for="link of navigation"
                :key="link._path"
                :to="link._path"
                active-class="font-bold"
                class="dark:hover-bg-gray-500 dark:hover-text-white block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-200"
                @click="close()"
              >
                {{ link.navTitle || link.title }}
              </NuxtLink>
              <div class="space-x-3 px-3 py-2 text-gray-500 transition">
                <a
                  href="https://twitter.com/maceksimon1"
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
              </div>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </div>
</template>

<script lang="ts" setup>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";

const toggleModal = inject("toggleModal");

const { navigation } = useContent();
</script>
