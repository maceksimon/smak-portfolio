<template>
  <div class="not-prose overflow-hidden">
    <div class="lg:grid lg:grid-cols-3 lg:gap-x-8">
      <div class="lg:col-span-1">
        <h2
          :id="features[props.id].id"
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
  </div>
</template>

<script setup>
const props = defineProps({
  id: { type: String, default: "" },
});

const features = {
  portfolio: {
    title: "Portfolio",
    id: "portfolio",
    perex:
      "Modern lightweight solution ideal for presentation sites and personal portfolios. Market your brand and achieve higher conversion rates through efficient UX design.",
    services: [
      {
        title: "Improved conversions",
        description:
          "With the experience of building websites for marketing agencies, I can create a web which will attract traffic and drive conversions.",
        icon: "fluent:target-arrow-20-filled",
        iconForeground: "text-pink-700 dark:text-pink-100",
        iconBackground:
          "bg-pink-50 dark:bg-pink-100/25 border border-pink-100 dark:border-pink-200/25",
      },
      {
        title: "Performant web",
        description:
          "Static sites score high in the key performance metrics. This will improve your SEO rankings and make users love your site.",
        icon: "tabler:bolt",
        iconForeground: "text-pink-700 dark:text-pink-100",
        iconBackground:
          "bg-pink-50 dark:bg-pink-100/25 border border-pink-100 dark:border-pink-200/25",
      },
      {
        title: "Secure solution",
        description:
          "Thanks to their simple architecure, static sites are less vulnerable to malware or spybot attacks.",
        icon: "tabler:shield-chevron",
        iconForeground: "text-pink-700 dark:text-pink-100",
        iconBackground:
          "bg-pink-50 dark:bg-pink-100/25 border border-pink-100 dark:border-pink-200/25",
      },
      {
        title: "Free hosting",
        description:
          "Your website will be hosted on Netlify or Vercel - services that provide free hosting. All you need is a domain name and you are good to go.",
        icon: "tabler:coin",
        iconForeground: "text-pink-700 dark:text-pink-100",
        iconBackground:
          "bg-pink-50 dark:bg-pink-100/25 border border-pink-100 dark:border-pink-200/25",
      },
    ],
  },
  blog: {
    title: "Blog",
    id: "blog",
    perex:
      "Larger web or a blog built with a industry standard open-source technology.",
    services: [
      {
        title: "Open-source software",
        description:
          "WordPress is free and open-source. This means that developers around the world have been creating solutions for various use cases that we can build on.",
        icon: "tabler:brand-open-source",
        iconForeground: "text-violet-700 dark:text-violet-200",
        iconBackground:
          "bg-violet-50 dark:bg-violet-100/25 border border-violet-100 dark:border-violet-200/25",
      },
      {
        title: "Flexibile customization",
        description:
          "There is hardly anything that cannot be built with WordPress. Blogs, portfolios, e-commerce, event websites... this platform can get you there.",
        icon: "tabler:world",
        iconForeground: "text-violet-700 dark:text-violet-200",
        iconBackground:
          "bg-violet-50 dark:bg-violet-100/25 border border-violet-100 dark:border-violet-200/25",
      },
      {
        title: "Popular platform",
        description:
          "Nearly half of all the websites use WordPress. Most content editors have worked with it before, and there is a plethora of guides and tutorials out there.",
        icon: "tabler:tool",
        iconForeground: "text-violet-700 dark:text-violet-200",
        iconBackground:
          "bg-violet-50 dark:bg-violet-100/25 border border-violet-100 dark:border-violet-200/25",
      },
      {
        title: "Robust architecture",
        description:
          "The security of WordPress sites is closely followed by milions of developers. Bugs and vulnerabilities are quickly spotted and promptly fixed.",
        icon: "tabler:lock",
        iconForeground: "text-violet-700 dark:text-violet-200",
        iconBackground:
          "bg-violet-50 dark:bg-violet-100/25 border border-violet-100 dark:border-violet-200/25",
      },
    ],
  },
  ecommerce: {
    title: "E-commerce",
    id: "e-commerce",
    perex:
      "Business solution built on Shopify with a website to exactly match your design.",
    services: [
      {
        title: "Scaleable system",
        description:
          "Well-designed and easy-to-use admin UI that will help you create products, pages and posts in a couple of minutes.",
        icon: "tabler:brand-open-source",
        iconForeground: "text-emerald-700 dark:text-emerald-200",
        iconBackground:
          "bg-emerald-50 dark:bg-emerald-100/25 border border-emerald-100 dark:border-emerald-200/25",
      },
      {
        title: "Payment management",
        description:
          "Shopify provides you with ways to secure your payment process. It allows for a variety of payment methods, takes care of calculating tax and many other important details.",
        icon: "tabler:world",
        iconForeground: "text-emerald-700 dark:text-emerald-200",
        iconBackground:
          "bg-emerald-50 dark:bg-emerald-100/25 border border-emerald-100 dark:border-emerald-200/25",
      },
      {
        title: "Customer data",
        description:
          "You can browse and analyze the data about your customers in minutes. Shopify offers a streamlined workflow for processing orders and shipments",
        icon: "tabler:tool",
        iconForeground: "text-emerald-700 dark:text-emerald-200",
        iconBackground:
          "bg-emerald-50 dark:bg-emerald-100/25 border border-emerald-100 dark:border-emerald-200/25",
      },
      {
        title: "Conversion-focused",
        description:
          "Nearly half of all the websites use WordPress. Most content editors have worked with it before, and there is a plethora of guides and tutorials out there.",
        icon: "tabler:tool",
        iconForeground: "text-emerald-700 dark:text-emerald-200",
        iconBackground:
          "bg-emerald-50 dark:bg-emerald-100/25 border border-emerald-100 dark:border-emerald-200/25",
      },
    ],
  },
};
</script>
