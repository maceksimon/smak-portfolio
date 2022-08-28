<template>
  <div class="grid grid-cols-8 gap-x-6 gap-y-8">
    <div
      class="grid grid-cols-8 gap-x-6 gap-y-8"
      :class="props.large ? 'col-span-8 lg:col-span-4' : 'col-span-8'"
    >
      <div
        class="relative col-span-8"
        :class="props.large ? '' : 'lg:col-span-4'"
      >
        <label
          for="name"
          class="block text-sm font-medium text-gray-700 dark:text-gray-200 lg:text-base"
          :class="{ 'mb-2': props.large }"
          >Your name
          <span class="text-orange-600 dark:text-orange-300">*</span></label
        >
        <input
          v-model="formData.name"
          type="text"
          name="name"
          id="name"
          autocomplete="name"
          class="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-700 dark:text-white sm:text-sm"
          @blur="validations.name.$touch"
        />
        <ErrorDisplay :validator="validations.name" />
      </div>

      <div
        class="relative"
        :class="props.large ? 'col-span-8' : 'col-span-8 lg:col-span-4'"
      >
        <label
          for="email"
          class="block text-sm font-medium text-gray-700 dark:text-gray-200 lg:text-base"
          :class="{ 'mb-2': props.large }"
        >
          Your e-mail
          <span class="text-orange-600 dark:text-orange-300">*</span>
        </label>
        <input
          v-model="formData.email"
          type="text"
          name="email"
          id="email"
          autocomplete="email"
          class="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-700 dark:text-white sm:text-sm"
          @blur="validations.email.$touch"
        />
        <ErrorDisplay :validator="validations.email" />
      </div>

      <div class="col-span-8">
        <RadioGroup v-model="formData.job">
          <RadioGroupLabel
            class="block text-sm font-medium text-gray-700 dark:text-gray-200 lg:text-base"
            :class="{ 'mb-3': props.large }"
          >
            What type of project are you interested in?
          </RadioGroupLabel>
          <div class="mt-2 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <RadioGroupOption
              as="template"
              v-for="option in jobOptions"
              :key="option.name"
              :value="option.value"
              v-slot="{ active, checked }"
            >
              <div
                :class="[
                  active ? 'ring-2 ring-blue-500 ring-offset-2' : '',
                  checked
                    ? 'border-transparent bg-blue-600 text-white hover:bg-blue-700 '
                    : 'border-gray-300 bg-white text-gray-900 shadow hover:bg-gray-50 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-50 dark:hover:bg-gray-500 dark:hover:text-white',
                  'flex cursor-pointer items-center justify-center rounded-md border py-3 px-3 text-sm font-semibold focus:outline-none sm:flex-1',
                ]"
              >
                <RadioGroupLabel as="span">
                  {{ option.name }}
                </RadioGroupLabel>
              </div>
            </RadioGroupOption>
          </div>
        </RadioGroup>
      </div>

      <!-- <div class="col-span-8">
        <fieldset class="mt-2">
          <legend class="sr-only">Choose additional service</legend>
          <div v-for="service in serviceOptions" class="grid grid-cols-3 gap-3">
            <input v-model="formData.service" :id="service.value" type="checkbox" name="additional-service" :value="service.value" class="sr-only" aria-labelledby="memory-option-0-label">
            <label :for="service.value" :class="['focus:ring-2 focus:ring-offset-2 ring-blue-500', formData.service.includes(service.value) ? 'bg-blue-600 border-transparent text-white hover:bg-blue-700' : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50', 'border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1']">

              <span id="memory-option-0-label"> {{ service.name }} </span>
            </label>
          </div>
        </fieldset>
      </div> -->
    </div>

    <div
      :class="props.large ? 'col-span-8 lg:col-span-4' : 'col-span-8'"
      class="sm:flex sm:flex-col"
    >
      <label
        for="message"
        class="block text-sm font-medium text-gray-700 dark:text-gray-200 lg:text-base"
        :class="props.large ? 'mb-2' : 'mb-1'"
      >
        Message
      </label>
      <div class="sm:flex sm:grow sm:flex-col">
        <textarea
          v-model="formData.message"
          id="message"
          name="message"
          rows="3"
          class="block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 dark:border-gray-500 dark:bg-gray-700 dark:text-white sm:grow sm:text-sm"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";

const props = defineProps({
  modelValue: {
    type: Object,
    default: {},
  },
  validations: {
    type: Object,
    default: {},
  },
  large: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["update:modelValue", "change"]);

const jobOptions = [
  { name: "Portfolio", value: "portfolio" },
  { name: "Blog", value: "blog" },
  { name: "E-shop", value: "e-commerce" },
  { name: "Other", value: "other" },
];

const serviceOptions = [
  { name: "Content + SEO", value: "content" },
  { name: "Social Media", value: "smm" },
  { name: "Complete Bundle", value: "bundle" },
];

const formData = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit("update:modelValue", value);
    emit("change");
  },
});
</script>
