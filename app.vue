<template>
  <div class="flex flex-col min-h-screen">
    <Html lang="en" />
    <Meta property="og:image" content="/cover.jpg" />
    <Meta name="twitter:card" content="summary_large_image" />
    <Navbar />
    <NuxtPage class="grow flex flex-col" />
    <TheFooter />
    <ContactModal />
    <form
      name="contact-form"
      data-netlify="true"
      netlify
      netlify-honeypot="bot-field"
      hidden
    >
      <input type="text" name="name" />
      <input type="text" name="email" />
      <input type="radio" name="job" />
      <textarea name="message"></textarea>
    </form>
  </div>
</template>

<script setup>
const open = ref(false);

function toggleModal() {
  open.value = !open.value;
}

provide("toggleModal", toggleModal);
provide("open", open);
</script>

<style lang="postcss">
body {
  @apply bg-gray-100;
}
/* Customize headers to remove default underline */
.prose-primary h2 a,
.prose-primary h3 a {
  color: var(--tw-prose-headings);
  @apply no-underline;
  &:hover {
    @apply border-b border-neutral-600 dark:border-neutral-300;
  }
}
.dark .prose-primary h2 a,
.dark .prose-primary h3 a {
  color: var(--tw-prose-invert-headings)
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
