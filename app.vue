<template>
  <div class="flex min-h-screen flex-col">
    <Html lang="en" />
    <Link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <Link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <Link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <Link rel="manifest" href="/site.webmanifest" />
    <Link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
    <Meta name="msapplication-TileColor" content="#da532c" />
    <Meta name="theme-color" content="#ffffff" />
    <Meta property="og:image" content="/image/og-default.jpg" />
    <Meta name="twitter:card" content="summary_large_image" />
    <Navbar />
    <NuxtPage class="flex grow flex-col" />
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
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";

useHead({
  titleTemplate: (title) =>
    title ? `${title} | Šimon Macek` : "Šimon Macek | Web Developer",
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
});

const open = ref(false);
const formSubmitted = ref(false);
const formError = ref(false);

const jobs = ["portfolio", "blog", "e-commerce"];
const services = ["content", "smm", "bundle"];

const form = reactive({
  name: "",
  email: "",
  job: "",
  message: "",
  service: "",
});

const rules = {
  // "name": {
  //   required: helpers.withMessage("Povinné pole", required),
  //   minLength: helpers.withMessage(
  //     "Musí být delší než jedno písmeno",
  //     minLength(1)
  //   ),
  // },
  // "email": {
  //   required: helpers.withMessage("Povinné pole", required),
  //   email: helpers.withMessage("Neplatný e-mail", email),
  // },
  name: {
    required: required,
    minLength: minLength(1),
  },
  email: {
    required: required,
    email: email,
  },
};

const v = useVuelidate(rules, form);

function toggleModal(service) {
  if (jobs.includes(service)) {
    form.job = service;
  }
  if (services.includes(service)) {
    form.service = service;
  }
  open.value = !open.value;
}

provide("toggleModal", toggleModal);
provide("open", open);
provide("form", form);
provide("v", v);
provide("formSubmitted", formSubmitted);
provide("formError", formError);
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
  color: var(--tw-prose-invert-headings);
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
