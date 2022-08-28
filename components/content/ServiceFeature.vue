<template>
  <div class="not-prose overflow-hidden" :id="features[props.id].id">
    <div class="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
      <div
        v-if="features[props.id].claim"
        class="mb-4 text-lg italic text-gray-200 dark:text-gray-600 sm:mb-6 sm:text-xl lg:col-span-3 lg:mb-12 lg:text-6xl"
      >
        {{ features[props.id].claim }}
      </div>
      <div class="lg:col-span-1">
        <h2
          class="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50 sm:text-3xl"
        >
          {{ features[props.id].title }}
        </h2>
        <div class="mt-4 text-lg text-gray-500 dark:text-gray-300">
          {{ features[props.id].perex }}
        </div>
      </div>
      <dl
        class="mt-10 space-y-10 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:space-y-0 lg:col-span-2 lg:mt-0"
      >
        <div
          v-for="service in features[props.id].services"
          :key="service.title"
        >
          <dt>
            <div
              :class="[
                service.iconBackground,
                service.iconForeground,
                'flex h-12 w-12 items-center justify-center rounded-sm',
              ]"
            >
              <Icon :name="service.icon" />
            </div>
            <p
              class="mt-5 text-lg font-medium leading-6 text-gray-900 dark:text-gray-50"
            >
              {{ service.title }}
            </p>
          </dt>
          <dd class="mt-2 text-base text-gray-500 dark:text-gray-300">
            {{ service.description }}
          </dd>
        </div>
      </dl>
    </div>
    <div class="py-12 lg:py-16">
      <div>
        <div
          class="overflow-hidden rounded-lg border border-transparent shadow-sm lg:flex lg:max-w-none"
        >
          <div class="flex-1 bg-white px-6 py-8 lg:p-12">
            <h3
              class="text-2xl font-bold text-gray-900 sm:text-3xl sm:tracking-tight"
            >
              Get this solution
            </h3>
            <p class="mt-6 text-base text-gray-500">
              Get in touch to get a free consultation and a project proposal.
            </p>
            <div class="mt-8">
              <div class="flex items-center">
                <h4
                  class="flex-shrink-0 bg-white pr-4 text-base font-semibold text-blue-700"
                >
                  What's included
                </h4>
                <div class="flex-1 border-t-2 border-gray-200"></div>
              </div>
              <ul
                role="list"
                class="mt-8 space-y-5 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5 lg:space-y-0"
              >
                <li
                  v-for="item in features[props.id].deliverables"
                  :key="item"
                  class="flex items-center lg:col-span-1"
                >
                  <div class="flex-shrink-0">
                    <!-- Heroicon name: solid/check-circle -->
                    <Icon
                      name="ph:check-circle-duotone"
                      class="flex-shrink-0 flex-grow-0 text-blue-500"
                    />
                  </div>
                  <div class="ml-3 text-gray-700">
                    {{ item }}
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="bg-blue-50 py-8 px-6 text-center lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12"
          >
            <p class="text-lg font-medium leading-6 text-gray-900">Starts at</p>
            <div
              class="mt-4 flex items-center justify-center text-5xl font-bold tracking-tight text-gray-900"
            >
              <span> $325 </span>
              <span
                class="ml-3 text-xl font-medium tracking-normal text-gray-500"
              >
                USD
              </span>
            </div>
            <p class="mt-4 text-sm text-gray-500">
              Final price is based on client's individual needs.
            </p>
            <div class="mt-6">
              <div class="rounded-md shadow">
                <a
                  href="#"
                  class="flex items-center justify-center rounded-md border border-transparent bg-blue-700 px-5 py-3 text-base font-semibold text-white hover:bg-blue-800 transition-colors duration-150 ease-out"
                >
                  Get started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  id: { type: String, default: "" },
});

const features = {
  portfolio: {
    title: "Portfolio",
    claim: "“A gleaming business card...”",
    id: "portfolio",
    perex:
      "One-page presentation site or a portfolio. Market your brand and achieve higher conversion rates through efficient UX design.",
    services: [
      {
        title: "Improved conversions",
        description:
          "With the experience of building websites for marketing agencies, I can create a web which will attract traffic and drive conversions.",
        icon: "fluent:target-arrow-20-filled",
        iconForeground: "text-white dark:text-orange-100",
        iconBackground:
          "bg-orange-600/70 dark:bg-orange-100/25 border border-transparent dark:border-orange-200/25",
      },
      {
        title: "Performant web",
        description:
          "Static sites score high in the key performance metrics. This will improve your SEO rankings and make users love your site.",
        icon: "tabler:bolt",
        iconForeground: "text-white dark:text-orange-100",
        iconBackground:
          "bg-orange-600/70 dark:bg-orange-100/25 border border-transparent dark:border-orange-200/25",
      },
      {
        title: "Secure solution",
        description:
          "Thanks to their simple architecure, static sites are less vulnerable to malware or spybot attacks.",
        icon: "tabler:shield-chevron",
        iconForeground: "text-white dark:text-orange-100",
        iconBackground:
          "bg-orange-600/70 dark:bg-orange-100/25 border border-transparent dark:border-orange-200/25",
      },
      {
        title: "Free hosting",
        description:
          "Your website will be hosted on Netlify or Vercel - services that provide free hosting. All you need is a domain name and you are good to go.",
        icon: "tabler:coin",
        iconForeground: "text-white dark:text-orange-100",
        iconBackground:
          "bg-orange-600/70 dark:bg-orange-100/25 border border-transparent dark:border-orange-200/25",
      },
    ],
    deliverables: [
      "One-page portfolio",
      "Original design",
      "Responsive version",
      "SEO optimization",
    ],
  },
  blog: {
    title: "Blog",
    claim: "“A beautiful home for my project...”",
    id: "blog",
    perex:
      "Larger web or a blog built with a industry standard open-source technology.",
    services: [
      {
        title: "Open-source software",
        description:
          "WordPress is free and open-source. This means that developers around the world have been creating solutions for various use cases that we can build on.",
        icon: "tabler:brand-open-source",
        iconForeground: "text-white dark:text-blue-200",
        iconBackground:
          "bg-blue-600/70 dark:bg-blue-100/25 border border-transparent dark:border-blue-200/25",
      },
      {
        title: "Flexibile customization",
        description:
          "There is hardly anything that cannot be built with WordPress. Blogs, portfolios, e-commerce, event websites... this platform can get you there.",
        icon: "tabler:world",
        iconForeground: "text-white dark:text-blue-200",
        iconBackground:
          "bg-blue-600/70 dark:bg-blue-100/25 border border-transparent dark:border-blue-200/25",
      },
      {
        title: "Popular platform",
        description:
          "Nearly half of all the websites use WordPress. Most content editors have worked with it before, and there is a plethora of guides and tutorials out there.",
        icon: "tabler:tool",
        iconForeground: "text-white dark:text-blue-200",
        iconBackground:
          "bg-blue-600/70 dark:bg-blue-100/25 border border-transparent dark:border-blue-200/25",
      },
      {
        title: "Robust architecture",
        description:
          "The security of WordPress sites is closely followed by milions of developers. Bugs and vulnerabilities are quickly spotted and promptly fixed.",
        icon: "tabler:lock",
        iconForeground: "text-white dark:text-blue-200",
        iconBackground:
          "bg-blue-600/70 dark:bg-blue-100/25 border border-transparent dark:border-blue-200/25",
      },
    ],
  },
  ecommerce: {
    title: "E-commerce",
    claim: "“My business in online space...”",
    id: "e-commerce",
    perex:
      "Business solution built on Shopify with a website to exactly match your design.",
    services: [
      {
        title: "Scaleable system",
        description:
          "Well-designed and easy-to-use admin UI that will help you create products, pages and posts in a couple of minutes.",
        icon: "tabler:brand-open-source",
        iconForeground: "text-white dark:text-emerald-200",
        iconBackground:
          "bg-emerald-600/70 dark:bg-emerald-100/25 border border-transparent dark:border-emerald-200/25",
      },
      {
        title: "Payment management",
        description:
          "Shopify provides you with ways to secure your payment process. It allows for a variety of payment methods, takes care of calculating tax and many other important details.",
        icon: "tabler:world",
        iconForeground: "text-white dark:text-emerald-200",
        iconBackground:
          "bg-emerald-600/70 dark:bg-emerald-100/25 border border-transparent dark:border-emerald-200/25",
      },
      {
        title: "Customer data",
        description:
          "You can browse and analyze the data about your customers in minutes. Shopify offers a streamlined workflow for processing orders and shipments",
        icon: "tabler:tool",
        iconForeground: "text-white dark:text-emerald-200",
        iconBackground:
          "bg-emerald-600/70 dark:bg-emerald-100/25 border border-transparent dark:border-emerald-200/25",
      },
      {
        title: "Conversion-focused",
        description:
          "Nearly half of all the websites use WordPress. Most content editors have worked with it before, and there is a plethora of guides and tutorials out there.",
        icon: "tabler:tool",
        iconForeground: "text-white dark:text-emerald-200",
        iconBackground:
          "bg-emerald-600/70 dark:bg-emerald-100/25 border border-transparent dark:border-emerald-200/25",
      },
    ],
  },
};
</script>
