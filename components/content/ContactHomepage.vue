<template>
  <div class="not-prose">
    <DivisionPill v-if="$slots.default">
      <Markdown :use="$slots.default" unwrap="p" />
    </DivisionPill>
    <form
      class="my-8 sm:my-12"
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
      <div class="mt-8 flex justify-end">
        <button
          type="submit"
          class="bg-gradient-animated rounded-md bg-gradient-to-r from-blue-700 via-blue-400 to-blue-500 px-4 py-2 text-base font-semibold text-white hover:bg-blue-700 md:py-3 md:px-7 md:text-lg"
        >
          Send
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength, helpers } from "@vuelidate/validators";
import axios from "axios";

const form = reactive({
  name: "",
  email: "",
  job: "",
  message: "",
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
</script>
