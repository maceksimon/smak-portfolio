<script lang="ts" setup>
import type { ServiceTeaser } from "@/types";

const title: string = "Na web tudy";
const description: string =
  'Nastupte na rychlík do stanice Internet. Vyberu pro vás digitální řešení na míru a společně projdeme procesem tvorby webu od "A" až po spuštění. Na každém kroku se budete moci opřít o know-how, které vychází z mých několikaletých zkušeností s vývojem webových stránek.';
const features: ServiceTeaser[] = [
  {
    title: "Web, který můžete mít rychle",
    description:
      "Nemáte chuť čekat na vývoj webu několik měsíců? Tady nemusíte. Díky zkušenostem a optimalizaci vývojového procesu můžu mít váš web <b>hotový v řádu dní</b>. Mám za sebou i projekty, které byly spuštěny do týdne od zadání.",
    icon: "icon-clock.svg",
  },
  {
    title: "Řešení navržené pro vás",
    description:
      "Weby tvořím individuálně a na míru. Budou vypadat a fungovat <b>přesně podle vašich představ</b>. Vyhnete se bojům s krabicovým řešením a určíte si podobu stránek tak, aby byly skutečně vaše.",
    icon: "icon-cogwheel.svg",
  },
  {
    title: "Design, který se vám přizpůsobí",
    description:
      'Ať už je váš styl inspirovaný severským minimalismem, nebo osmdesátkami, najdu pro vás <b>vizuální vyjádření, které vám bude sedět</b>. Samozřejmostí je možnost použít galerie, animace, interaktivní prvky a mnohem víc. Zkrátka zařídím, aby byl váš web "next in fashion".',
    icon: "icon-eye.svg",
  },
  {
    title: "Ideální poměr cena/výkon",
    description:
      "Mým cílem je dělat weby <b>dostupné všem</b>. Nebudete platit za složitou komunikaci nebo projektové řízení, jako u webových agentur. Rozpočet je předem daný a přímo závisí na rozsahu a složitosti zadání.",
    icon: "icon-wallet.svg",
  },
];
</script>

<template>
  <div class="not-prose my-8 sm:my-12 lg:my-16">
    <DivisionPill v-if="$slots.default">
      <Markdown :use="$slots.default" unwrap="p" />
    </DivisionPill>
    <div class="mx-auto mt-8 sm:mt-12 lg:mt-16">
      <div v-if="title || description" class="mx-auto max-w-2xl lg:mx-0">
        <h2
          class="inline-flex items-end gap-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:max-w-md sm:text-3xl lg:text-5xl xl:max-w-3xl"
        >
          <span v-html="title"></span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10"
            viewBox="0 0 32 32"
          >
            <g fill="none">
              <path
                fill="#00A6ED"
                d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 4 4v20a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V6Z"
              />
              <path
                fill="#fff"
                d="M9 8a1 1 0 0 1 1-1h1.993c.004 0 .007.003.007.007c0 .005.004.008.008.008c.163-.01.327-.015.492-.015c4.142 0 7.5 3.134 7.5 7v5.75c0 .138.112.25.25.25h1.988a.75.75 0 0 1 .528 1.283l-4.238 4.195a.75.75 0 0 1-1.056 0l-4.238-4.195A.75.75 0 0 1 13.762 20h1.988a.25.25 0 0 0 .25-.25V14c0-1.401-1.303-3-3.5-3c-.167 0-.329.01-.485.027a.014.014 0 0 1-.015-.013a.013.013 0 0 0-.014-.014H10a1 1 0 0 1-1-1V8Z"
              />
            </g>
          </svg>
        </h2>
        <p class="mt-6 text-lg leading-8 text-gray-300">
          {{ description }}
        </p>
      </div>
    </div>
    <div class="mt-8 rounded-lg bg-gray-900 py-8 sm:mt-12 sm:py-12 lg:mt-16">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:max-w-none">
          <dl
            class="grid max-w-xl grid-cols-1 gap-x-12 gap-y-20 lg:max-w-none lg:grid-cols-2"
          >
            <div
              v-for="feature in features"
              :key="feature.title"
              class="flex flex-col"
            >
              <dt class="text-lg font-semibold leading-7 text-white">
                <div
                  class="mb-6 flex h-16 w-16 items-center justify-center rounded-lg"
                >
                  <img
                    :src="'/icon/' + feature.icon"
                    alt=""
                    class="h-full w-full"
                  />
                </div>
                {{ feature.title }}
              </dt>
              <dd
                class="mt-2 flex flex-auto flex-col text-base leading-7 text-gray-300"
              >
                <p class="flex-auto" v-html="feature.description"></p>
              </dd>
            </div>
          </dl>
        </div>
        <div class="mt-6 flex sm:mt-8 lg:mt-12">
          <p>
            <a
              href="/services"
              class="text-sm font-semibold leading-6 text-blue-400 transition-colors duration-200 ease-in-out hover:text-blue-300"
            >
              {{ $t("benefitTeaser.button") }}
              <span aria-hidden="true">→</span>
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
