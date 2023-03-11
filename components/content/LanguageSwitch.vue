<script setup lang="ts">
const switchLocalePath = useSwitchLocalePath();
const { locale } = useI18n();
</script>

<template>
  <a v-if="locale !== 'en'" class="text-md ..." :href="switchLocalePath('en')">
    EN
  </a>
  <a v-if="locale !== 'cs'" class="text-md ..." :href="switchLocalePath('cs')">
    CS
  </a>
</template>
