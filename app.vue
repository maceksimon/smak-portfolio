<template>
  <div class="sm:py-10">
    <Html lang="en" />
    <Meta property="og:image" content="/cover.jpg" />
    <Meta name="twitter:card" content="summary_large_image" />
    <Navbar />
    <NuxtPage />
  </div>
</template>

<style lang="postcss">
body {
  @apply bg-gray-50 dark:bg-gray-900;
}
/* Customize headers to remove default underline */
.prose h2 a,
.prose h3 a {
  @apply no-underline;
  &:hover {
    @apply border-b border-neutral-600 dark:border-neutral-300;
  }
}
.prose img {
  @apply rounded-sm;
}

.bg-gradient-animated {
  background-size: 300% 100%;
  moz-transition: background-position 0.4s ease-in-out;
  -o-transition: background-position 0.4s ease-in-out;
  -webkit-transition: background-position 0.4s ease-in-out;
  transition: background-position 0.4s ease-in-out;
}
.bg-gradient-animated:hover {
  background-position: 100% 0;
}
</style>
