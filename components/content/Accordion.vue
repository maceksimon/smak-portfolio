<template>
  <section class="my-8 sm:my-12">
    <DivisionPill v-if="$slots.default">
      <Markdown :use="$slots.default" unwrap="p" />
    </DivisionPill>
    <dl class="space-y-6 divide-y divide-gray-200 dark:divide-gray-600">
      <Disclosure
        as="div"
        v-for="faq in faqs"
        :key="faq.question"
        class="pt-6"
        v-slot="{ open }"
      >
        <dt class="text-lg">
          <DisclosureButton
            class="group flex w-full items-start justify-between text-left text-gray-400"
          >
            <span
              class="font-semibold text-gray-900 transition-colors duration-150 ease-out group-hover:text-purple-800 dark:text-gray-200 dark:group-hover:text-purple-300"
            >
              {{ faq.question }}
            </span>
            <span class="ml-6 flex h-7 items-center">
              <Icon
                name="heroicons-outline:chevron-down"
                :class="[
                  open ? '-rotate-180' : 'rotate-0',
                  'h-6 w-6 transform',
                ]"
                aria-hidden="true"
              />
            </span>
          </DisclosureButton>
        </dt>
        <DisclosurePanel as="dd" class="mt-2 pr-12">
          <p class="text-base text-gray-500 dark:text-gray-300">
            {{ faq.answer }}
          </p>
        </DisclosurePanel>
      </Disclosure>
    </dl>
  </section>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
const faqs = [
  {
    question: "How do you charge?",
    answer:
      "Typically, I charge a fixed rate based on the project specifications. This is paid in two installments, each 50% of the final price.",
  },
  {
    question: "Do you take care of the content editing?",
    answer:
      "I certainly can. All my websites are designed to provide simple means of editing the content with no code involved. However, I am happy to assist you with copywriting and content editing.",
  },
  {
    question: "What do you do for SEO?",
    answer:
      "I provide full-featured on-site SEO services, making sure that titles, descriptions, and heading structure are used optimally. This should significantly boost your organic traffic. I do not provide off-site SEO services.",
  },
  {
    question: "Do you update existing websites?",
    answer:
      "Yes, I can update or extend your current theme. However, I will need to inspect your website first before I agree to work on it.",
  },
  {
    question: "What do you need to get started?",
    answer:
      "Depending on the previous agreements, I might need a design file (Figma or Adobe XD), photos for the content. If the project is an update or a theme rework, I will ask you for access to your hosting services or a server.",
  },
];
</script>
