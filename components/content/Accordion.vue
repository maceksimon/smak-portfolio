<template>
  <section class="my-8 sm:my-12">
    <DivisionPill v-if="$slots.default">
      <Markdown :use="$slots.default" unwrap="p" />
    </DivisionPill>
    <dl class="space-y-6 divide-y divide-gray-200">
      <Disclosure
        as="div"
        v-for="faq in faqs"
        :key="faq.question"
        class="pt-6"
        v-slot="{ open }"
      >
        <dt class="text-lg">
          <DisclosureButton
            class="flex w-full items-start justify-between text-left text-gray-400"
          >
            <span class="font-medium text-gray-900">
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
          <p class="text-base text-gray-500">
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
      "Typically we charge a fixed rate based on the project specifications. The price might change depending on special features requested.",
  },
  {
    question: "Do you take care of the content editing?",
    answer:
      "We certainly can. All our websites are designed to provide simple means of editing the content with no code involved. However, we are also happy to assist you with the copywriting and content editing.",
  },
  {
    question: "How do you ensure good search engine performance?",
    answer:
      "We provide full-featured on-site SEO services, making sure that titles, descriptions, heading structure are used according to industry standards. This is enough to significantly boost your organic traffic. We currently do not provide off-site SEO.",
  },
  {
    question: "Do you update existing websites?",
    answer:
      "Yes, we can update or extend your current theme. However, we will need to inspect your website first before we agree to work on it.",
  },
];
</script>
