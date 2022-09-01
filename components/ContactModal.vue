<template>
  <!-- this is an open issue https://github.com/tailwindlabs/headlessui/issues/1496 -->
  <ClientOnly>
    <Dialog
      as="div"
      :open="open"
      @close="closeForm()"
      class="fixed inset-0 z-30 overflow-y-auto"
    >
      <div
        class="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0"
      >
        <DialogOverlay
          class="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity duration-150 ease-in"
        />

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span
          class="hidden sm:inline-block sm:h-screen sm:align-middle"
          aria-hidden="true"
          >&#8203;</span
        >
        <div
          :class="{ 'animate-shake': v.$error }"
          class="relative inline-block w-full transform overflow-hidden rounded-lg bg-white text-left align-bottom text-gray-800 shadow-xl transition-all dark:bg-gray-800 dark:text-gray-200 sm:my-8 sm:max-w-lg sm:align-middle"
        >
          <!-- Render the modal content -->
          <div class="relative px-4 py-5 sm:p-6">
            <button
              class="absolute right-4 top-5 h-4 w-4 sm:hidden"
              @click="open = false"
            >
              <Icon name="heroicons-outline:x" />
            </button>
            <div>
              <!-- On success -->
              <div v-if="formSubmitted">
                <div
                  class="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-emerald-200 bg-emerald-100 text-emerald-700"
                >
                  <Icon name="fluent:chat-20-regular" />
                </div>
                <DialogTitle
                  as="h3"
                  class="text-primary-900 pr-4 text-left text-xl font-bold leading-6 sm:my-4 sm:pr-0 sm:text-center"
                >
                  Success
                </DialogTitle>
                <div class="mb-3">
                  Thank you for your message! We will get in touch with you
                  shortly.
                </div>
              </div>
              <!-- On error -->
              <div v-if="formError">
                <div
                  class="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-orange-200 bg-orange-100 text-orange-700"
                >
                  <Icon name="fluent:chat-dismiss-20-regular" />
                </div>
                <DialogTitle
                  as="h3"
                  class="text-primary-900 pr-4 text-left text-xl font-bold leading-6 sm:my-4 sm:pr-0 sm:text-center"
                >
                  Error
                </DialogTitle>
                <div class="mb-3">
                  An error occurred while sending the form. Please try again
                  later, or email us at
                  <a
                    class="text-emerald-600 underline hover:no-underline dark:text-emerald-300"
                    :href="`mailto:${emailAddress}`"
                  >
                    {{ emailAddress }}
                  </a>
                </div>
              </div>
              <!-- Form -->
              <div v-if="!formSubmitted && !formError">
                <div
                  class="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white"
                >
                  <Icon name="heroicons-outline:chat-alt-2" />
                </div>
                <DialogTitle
                  as="h3"
                  class="text-primary-900 pr-4 text-center text-xl font-bold leading-6 sm:my-4 sm:pr-0"
                >
                  Hey, drop me a message.
                </DialogTitle>
                <div class="mt-6">
                  <form
                    name="contact-form"
                    method="post"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    netlify
                    @submit.prevent="handleSubmit()"
                  >
                    <input
                      type="hidden"
                      name="form-name"
                      value="contact-form"
                    />
                    <!-- Only the contact fields -->
                    <ContactForm v-model="form" :validations="v" />
                    <button
                      type="submit"
                      class="bg-gradient-animated mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-gradient-to-r from-blue-700 via-blue-400 to-blue-500 px-4 py-2 text-base font-semibold text-white hover:bg-blue-700 md:py-3 md:px-7 md:text-lg"
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  </ClientOnly>
</template>

<script setup>
import { Dialog, DialogOverlay, DialogTitle } from "@headlessui/vue";
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, helpers } from "@vuelidate/validators";
import axios from "axios";

// open is being injected as a ref
const open = inject("open");
const form = inject("form");

const formSubmitted = ref(false);
const formError = ref(false);
const emailAddress = "simon.macek@proficio.cz";

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

async function handleSubmit() {
  v.value.$touch();
  if (v.value.$error) {
    return;
  }

  formError.value = false;

  const axiosConfig = {
    header: { "Content-Type": "application/x-www-form-urlencoded" },
  };
  const response = await axios.post(
    "/",
    encodeData({
      "form-name": "contact-form",
      ...form,
    }),
    axiosConfig
  );
  if (response.status === 200) {
    // Reset form by looping over properties
    Object.keys(form).forEach((key) => {
      form[key] = "";
    });
    // Display confirmation
    formSubmitted.value = true;
  } else {
    formError.value = true;
  }
}

function encodeData(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

function closeForm() {
  open.value = false;
  formSubmitted.value = false;
  formError.value = false;
  v.value.$reset();
}
</script>
