<template>
  <a
    :key="link._path"
    :href="link._path"
    class="shrink-0"
    :class="{ 'font-bold': $route.path === link._path }"
    :data-text="link.navTitle || link.title"
  >
    {{ link.navTitle || link.title }}
  </a>
</template>

<script setup lang="ts">
import { NavItem } from "@nuxt/content/dist/runtime/types";

defineProps<{
  link: NavItem;
  activeClass?: string;
}>();
</script>
