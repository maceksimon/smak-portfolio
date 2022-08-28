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
          class="overflow-hidden rounded-lg border border-blue-100 shadow-sm lg:flex lg:max-w-none"
        >
          <div class="flex-1 bg-white px-6 py-8 dark:bg-gray-700 lg:p-12">
            <h3
              class="text-2xl font-bold text-gray-900 dark:text-gray-50 sm:text-3xl sm:tracking-tight"
            >
              Get this solution
            </h3>
            <p class="mt-6 text-base text-gray-500 dark:text-gray-300">
              Get in touch to get a free consultation and a project proposal.
            </p>
            <div class="mt-8">
              <div class="flex items-center">
                <h4
                  class="flex-shrink-0 bg-white dark:bg-gray-700 pr-4 text-base font-semibold text-blue-700 dark:text-blue-400"
                >
                  What's included
                </h4>
                <div
                  class="flex-1 border-t-2 border-gray-200 dark:border-gray-500"
                ></div>
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
                  <div class="ml-3 text-gray-700 dark:text-gray-200">
                    {{ item }}
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="bg-blue-50 dark:bg-blue-200/20 py-8 px-6 text-center lg:flex lg:flex-shrink-0 lg:flex-col lg:justify-center lg:p-12"
          >
            <p
              class="text-lg font-medium leading-6 text-gray-900 dark:text-gray-50"
            >
              Starts at
            </p>
            <div
              class="mt-4 flex items-center justify-center text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-50"
            >
              <span> {{ features[props.id].price }} </span>
              <span
                class="ml-3 text-xl font-medium tracking-normal text-gray-500 dark:text-gray-300"
              >
                USD
              </span>
            </div>
            <p class="mt-4 text-sm text-gray-500 dark:text-gray-300">
              Final price is based on client's individual needs.
            </p>
            <div class="mt-6">
              <div class="rounded-md shadow">
                <button
                  @click.prevent="toggleModal(features[props.id].id)"
                  class="flex w-full items-center justify-center rounded-md border border-transparent bg-blue-600 hover:bg-blue-700 px-5 py-3 text-base font-semibold text-white transition-colors duration-150 ease-out"
                >
                  Get started
              </button>
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

const toggleModal = inject("toggleModal");

const features = {
  portfolio: {
    title: "Portfolio",
    claim: "“A gleaming business card...”",
    id: "portfolio",
    perex:
      "One-page presentation site or a portfolio. Perfect for introducing your products and services.",
    price: "$325",
    services: [
      {
        title: "Tell your story",
        description:
          "One-page website is a great way to introduce yourself or your idea. It will allow your branding to stand out and give you a great way to promote your work.",
        icon: "tabler:speakerphone",
        iconForeground: "text-white dark:text-orange-200",
        iconBackground:
          "bg-orange-600/70 dark:bg-orange-100/25 border border-transparent dark:border-orange-200/25",
      },
      {
        title: "Find the right words",
        description:
          "It is the right kind of content that attracts your target audience to your site. I will guide you through the process of creating it, or write it for you.",
        icon: "tabler:ballpen",
        iconForeground: "text-white dark:text-orange-200",
        iconBackground:
          "bg-orange-600/70 dark:bg-orange-100/25 border border-transparent dark:border-orange-200/25",
      },
      {
        title: "Make it beautiful",
        description:
          "I will turn your design file into a pixel-perfect copy on the web. And if you do not have a design ready, I can create one for you, just get in touch!",
        icon: "tabler:flower",
        iconForeground: "text-white dark:text-orange-200",
        iconBackground:
          "bg-orange-600/70 dark:bg-orange-100/25 border border-transparent dark:border-orange-200/25",
      },
      {
        title: "Host for free",
        description:
          "This solution can easily be hosted using one of the modern services which offer free plans. All you need is a domain name and you are good to go.",
        icon: "tabler:coin",
        iconForeground: "text-white dark:text-orange-200",
        iconBackground:
          "bg-orange-600/70 dark:bg-orange-100/25 border border-transparent dark:border-orange-200/25",
      },
    ],
    deliverables: [
      "One-page website",
      "Original design",
      "Copywriting",
      "Free hosting",
    ],
  },
  blog: {
    title: "Blog",
    claim: "“A beautiful home for my project...”",
    id: "blog",
    perex:
      "Larger web or a blog built with a industry standard open-source technology.",
    price: "$725",
    services: [
      {
        title: "Enjoy the flexibility",
        description:
          "There is hardly anything that this solution cannot do for you. Multi-page portfolio, event website, recipe cookbook... you name it. Your content will decide.",
        icon: "tabler:settings",
        iconForeground: "text-white dark:text-blue-200",
        iconBackground:
          "bg-blue-600/70 dark:bg-blue-100/25 border border-transparent dark:border-blue-200/25",
      },
      {
        title: "Edit comfortably",
        description:
          "I will provide you with a clean and easy-to-use interface for editing your website. This means you can change every piece of content on the web on your own. No code involved.",
        icon: "tabler:adjustments-horizontal",
        iconForeground: "text-white dark:text-blue-200",
        iconBackground:
          "bg-blue-600/70 dark:bg-blue-100/25 border border-transparent dark:border-blue-200/25",
      },
      {
        title: "Make your web move",
        description:
          "Users love to interact with websites. Allow them to search and filter your posts, use maps, sliders and galleries. They will keep coming back.",
        icon: "tabler:wind",
        iconForeground: "text-white dark:text-blue-200",
        iconBackground:
          "bg-blue-600/70 dark:bg-blue-100/25 border border-transparent dark:border-blue-200/25",
      },
      {
        title: "Leave no user behind",
        description:
          "I strive to build websites with great accessibility to allow everyone to use them without limitations. Web must be a tool, not an obstacle.",
        icon: "tabler:wheelchair",
        iconForeground: "text-white dark:text-blue-200",
        iconBackground:
          "bg-blue-600/70 dark:bg-blue-100/25 border border-transparent dark:border-blue-200/25",
      },
    ],
    deliverables: [
      "Multi-page website",
      "Customized admin environment",
      "Interactive components",
      "Accessible content",
    ],
  },
  ecommerce: {
    title: "E-commerce",
    claim: "“My business in online space...”",
    id: "e-commerce",
    perex:
      "Business solution built on Shopify with a website to exactly match your design.",
    price: "$1625",
    services: [
      {
        title: "Improve conversions",
        description:
          "I design websites with efficient UX design. Well-built e-shop will attract traffic and drive customer conversions. This way, the web will pay for itself.",
        icon: "fluent:target-arrow-20-filled",
        iconForeground: "text-white dark:text-emerald-200",
        iconBackground:
          "bg-emerald-600/70 dark:bg-emerald-100/25 border border-transparent dark:border-emerald-200/25",
      },
      {
        title: "Let customers find you",
        description:
          "I rigorously optimize e-commerce websites for SEO performance. This raises your organic traffic and helps you to gain better position at search engine results pages.",
        icon: "tabler:zoom-money",
        iconForeground: "text-white dark:text-emerald-200",
        iconBackground:
          "bg-emerald-600/70 dark:bg-emerald-100/25 border border-transparent dark:border-emerald-200/25",
      },
      {
        title: "Control your business",
        description:
          "I offer robust solutions which can be customized according to your needs. This includes shipping and payment methods, discounts, inventory management, customer emails etc. The web will put you into the driver's seat.",
        icon: "tabler:chair-director",
        iconForeground: "text-white dark:text-emerald-200",
        iconBackground:
          "bg-emerald-600/70 dark:bg-emerald-100/25 border border-transparent dark:border-emerald-200/25",
      },
      {
        title: "Know your audience",
        description:
          "I integrate analytic tools into your website. This means you will have the data about your customers right at your fingertips. This will help you to make well-informed and efficient marketing decisions in the future.",
        icon: "tabler:users",
        iconForeground: "text-white dark:text-emerald-200",
        iconBackground:
          "bg-emerald-600/70 dark:bg-emerald-100/25 border border-transparent dark:border-emerald-200/25",
      },
    ],
    deliverables: [
      "Multi-page e-shop",
      "Unlimited products",
      "Blog section",
      "Dynamic cart functionality",
      "Conversion oriented design",
      "App integration",
      "SEO optimization",
    ],
  },
};
</script>
