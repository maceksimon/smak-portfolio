<script setup>
import axios from "axios";

const form = inject("form");
const v = inject("v");
const toggleModal = inject("toggleModal");
const formSubmitted = inject("formSubmitted");
const formError = inject("formError");

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
    v.value.$reset();
    // Display confirmation
    formSubmitted.value = true;
  } else {
    formError.value = true;
  }
  toggleModal();
}

function encodeData(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}
</script>

<template>
  <div class="not-prose my-8 sm:my-12 xl:my-16">
    <DivisionPill v-if="$slots.default">
      <Markdown :use="$slots.default" unwrap="p" />
    </DivisionPill>
    <form
      class="my-8 sm:my-12 xl:my-16"
      :class="{ 'animate-shake': v.$error }"
      name="contact-form"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      netlify
      @submit.prevent="handleSubmit()"
    >
      <input type="hidden" name="form-name" value="contact-form" />
      <ContactForm v-model="form" :validations="v" :large="true" />
      <div class="mt-8 justify-end sm:flex">
        <button
          type="submit"
          class="bg-gradient-animated w-full rounded-md bg-gradient-to-r from-blue-700 via-blue-400 to-blue-500 px-4 py-2 text-base font-semibold text-white hover:bg-blue-700 sm:w-auto md:py-3 md:px-7 md:text-lg"
        >
          {{ $t("send") }}
        </button>
      </div>
    </form>
  </div>
</template>
