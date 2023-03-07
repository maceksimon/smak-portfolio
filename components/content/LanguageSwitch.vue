<script setup lang="ts">
const switchLocalePath = useSwitchLocalePath();
</script>

<template>
  <ul class="lang-switch flex justify-around">
    <li v-if="$i18n.locale !== 'en'">
      <nuxt-link class="text-md ..." :to="switchLocalePath('en')">EN</nuxt-link>
    </li>
    <li v-if="$i18n.locale !== 'cs'">
      <nuxt-link class="text-md ..." :to="switchLocalePath('cs')">CS</nuxt-link>
    </li>
  </ul>
</template>
