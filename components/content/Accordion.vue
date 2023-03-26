<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
const { locale } = useI18n();

const faqs = {
  cs: [
    {
      question: "Kolik mě bude stát web?",
      answer:
        "To záleží na mnoha okolnostech. Jde o jednu přistávací stránku, nebo rozsáhlý web s různými typy obsahu? Jak má vypadat, a jaké má mít funkce? Obecně řečeno, pořídit si web stojí asi tolik co koupit si jízdní kolo. A výsledek by měl být také tak užitečný.",
    },
    {
      question: "Jak probíhá platba?",
      answer:
        "Zakázka je placena ve dvou částech. Polovina je splatná při zadání a polovina po dokončení práce.",
    },
    {
      question: "Je moje poptávka nezávazná?",
      answer:
        "Ano. Po odeslání poptávky se vám v co nejkratší době ozvu a domluvíme si bezplatnou schůzku kde probereme váš projekt. Pak vám připravím nabídku, na základě které se můžete rozhodnout, jestli budeme dál spolupracovat.",
    },
    {
      question: "Co si musím nachystat já?",
      answer:
        "V první řadě informace o vašem projektu. Budete-li chtít použít vlastní texty nebo grafický design nebo logo, je dobré, dodáte-li mi tyto podklady co nejdříve. Před realizací projektu se je třeba dohodnout o plánovaném obsahu webu, s tím vám ale rád poradím. Momentálně neposkytuji fotografické služby.",
    },
    {
      question: "Dostanu grafický návrh webu?",
      answer:
        "Ano. Nemáte-li vlastní grafický návrh, můžu ho připravit jako samostatnou součást zakázky. Podle naší domluvy připravím design webu, který bude odrážet vaše estetické cítění a vkus. Ten pak budete moci opoznámkovat a upravit aby přesně ladil s vaší představou. Výsledkem bude finální návrh, který převedu do podoby webových stránek.",
    },
    {
      question: "Kdo napíše a zadá obsah?",
      answer:
        "Záleží na dohodě. Někteří mí klienti rádi píšou a upravují obsah svých stránek sami. V takovém případě rád poskytnu instrukce k práci s administračním prostředím. Pokud nejsou texty na web váš oblíbený žánr, není problém tenhle úkol delegovat jako samostatnou součást zakázky.",
    },
    {
      question: "Bude můj web na první stránce Google vyhledávání?",
      answer:
        "Ano, jen ne hned. Ptáte se na optimalizaci pro vyhledávače (neboli SEO), a to je dlouhodobý, pozvolný proces. Záleží zde na relevantním obsahu, důvěryhodnosti vaší stránky a jejím 'zasíťování' do internetu. Weby, které stavím, mají ale pro závod na první příčky vyhledávání všechny předpoklady, od rychlosti, po bezchybnou strukturu.",
    },
    {
      question: "Můžu si nechat upravit už existující web?",
      answer:
        "Záleží na dohodě. Určitě ale budu potřebovat bližší informace o vašem webu a konkrétní zadání. Ozvěte se, a můžeme to probrat.",
    },
  ],
  en: [
    {
      question: "How much do you charge?",
      answer:
        "The exact price depends on several variables, including the complexity of the web, and the amount of copy and design that we agree on. You can check out the <a href='/services'>services page</a> for more details.",
    },
    {
      question: "What is the payment arrangement?",
      answer:
        "Typically, I ask for the project to be paid in two installments, each 50% of the final price.",
    },
    {
      question: "What do you need to get started?",
      answer:
        "Depending on the previous agreements, I might ask for a design file (Figma or Adobe XD). I will need you to provide images if they are a part of the design. For the rework and redesign projects, I will ask for access to your hosting services or a server.",
    },
    {
      question: "Do you take care of the content editing?",
      answer:
        "I certainly can. All my websites are designed to provide simple means of editing the content with no code involved. However, I am happy to assist you with copywriting and content editing.",
    },
    {
      question: "Can you design my web?",
      answer:
        "Yes. I am happy to deliver a custom design which will perfectly suit your project or a brand. The design work is not included in the estimated prices on the <a href='/services'>services page</a>.",
    },
    {
      question: "What do you do for SEO?",
      answer:
        "I provide full-featured on-site SEO services, making sure that titles, descriptions, headings and content structure are designed optimally. I also provide advice on copywriting and I can set up analytics tools for you. I do not provide off-site SEO services.",
    },
    {
      question: "Do you update existing websites?",
      answer:
        "Yes, I can update or extend your current theme. However, I will need to inspect your website first before I start working on it.",
    },
  ],
};
</script>

<template>
  <section class="my-8 sm:my-12 xl:my-16">
    <DivisionPill v-if="$slots.default">
      <Markdown :use="$slots.default" unwrap="p" />
    </DivisionPill>
    <dl
      class="my-8 space-y-6 divide-y divide-gray-200 dark:divide-gray-600 sm:my-12"
    >
      <Disclosure
        as="div"
        v-for="faq in faqs[locale]"
        :key="faq.question"
        class="pt-6"
        v-slot="{ open }"
      >
        <dt class="text-lg">
          <DisclosureButton
            class="group flex w-full items-start justify-between text-left text-gray-400"
          >
            <span
              class="font-semibold text-gray-700 transition-colors duration-150 ease-out group-hover:text-blue-700 dark:text-gray-200 dark:group-hover:text-blue-300"
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
          <p
            class="text-base text-gray-500 dark:text-gray-300"
            v-html="faq.answer"
          />
        </DisclosurePanel>
      </Disclosure>
    </dl>
  </section>
</template>
