<template>
  <div class="grid grid-cols-8 gap-x-6 gap-y-8">
    <div
      class="grid grid-cols-8 gap-x-6 gap-y-8"
      :class="props.large ? 'col-span-4' : 'col-span-8'"
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
          <span class="text-pink-700 dark:text-pink-300">*</span></label
        >
        <input
          v-model="formData.name"
          type="text"
          name="name"
          id="name"
          autocomplete="name"
          class="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-violet-500 dark:border-gray-500 dark:bg-gray-700 dark:text-white sm:text-sm"
          @blur="validations.name.$touch"
        />
        <ErrorDisplay :validator="validations.name" />
      </div>

      <div
        class="relative col-span-8"
        :class="props.large ? '' : 'lg:col-span-4'"
      >
        <label
          for="email"
          class="block text-sm font-medium text-gray-700 dark:text-gray-200 lg:text-base"
          :class="{ 'mb-2': props.large }"
        >
          Your e-mail <span class="text-pink-700 dark:text-pink-300">*</span>
        </label>
        <input
          v-model="formData.email"
          type="text"
          name="email"
          id="email"
          autocomplete="email"
          class="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-violet-500 dark:border-gray-500 dark:bg-gray-700 dark:text-white sm:text-sm"
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
              :value="option.name"
              v-slot="{ active, checked }"
            >
              <div
                :class="[
                  active ? 'ring-2 ring-violet-500 ring-offset-2' : '',
                  checked
                    ? 'border-transparent bg-violet-600 text-white hover:bg-violet-700 '
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
    </div>

    <div
      :class="props.large ? 'col-span-4' : 'col-span-8'"
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
          class="block w-full rounded-md border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-inset focus:ring-violet-500 dark:border-gray-500 dark:bg-gray-700 dark:text-white sm:grow sm:text-sm"
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
  { name: "Portfolio" },
  { name: "Blog" },
  { name: "E-shop" },
  { name: "Other" },
];

const formData = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit("update:modelValue", value);
    emit("change");
  },
});
</script>
