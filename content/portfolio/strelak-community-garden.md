---
head.title: Strelak Community Garden
head.description: Creating a website that helps to build a community. A heartwarming work 🌿.
head.image: /image/portfolio/community-garden.jpg
fields.image: /image/portfolio/community-garden.jpg
fields.order: 400
fields.skills: ["Netlify", "Vue.js", "Tailwind CSS"]
featured: false
type: "full"
---

# Watch it grow: Developing a community garden website

This was a lovely community garden project which I supported by volunteering as a web designer. The landing page I created provided a great for people to join the project.

## Garden needs water and...

The website's goal was to bring in people interested in gardening. The landing page enabled the visitors to register as either a volunteer (helping out in the garden) or a gardener (owning a piece of the garden bed to grow their plants in). I created a **database** which stored the information about the registered gardeners and calculated how many free spots were left for people to book.

## Tech for the nature

The website offers three ways of participating. Registering as a volunteer or a gardener, or subscribing to a newsletter. I created a special **form for each action**. The forms are linked to a shared email and to a central database, where the user data is safely stored. I used [Netlify Forms](https://docs.netlify.com/forms/setup/) to link the forms to the admin email. This way, the garden team gets a notification about each registration.

I used [Supabase](https://supabase.com/) to store the data. This makes it easy to link the database with the forms through the API. It also allows for **scalability** and **efficient data management**. The forms are built with Vue.js. This makes it very easy to implement important features such as **validation and error messages**.

The website was hosted on Netlify - did you know that [static hosting is better for the environment](https://www.netlify.com/sustainability/)?

## Sharing is caring

As the website was to be **shared across social media**, it was especially important to create optimized social sharing tags and [Open Graph images](https://css-tricks.com/essential-meta-tags-social-media/). This adds that extra punch when the web is shared on Facebook or Twitter.

## Animation is bringing things to life

We wanted to communicate a fun and friendly vibe which the garden has in real life. I used open source illustrations and **animated** them with [GSAP](https://greensock.com/) library. Little interactive elements make users stay on the page and play around with it. My goal, as always, is to create a digital experience which the users enjoy and spend time with.

## Final thoughts

The garden beds were soon booked for the summer and the website is going to grow together with the community, as we continue to develop new features.

You can follow the community growth on [ZahradaStrelak.cz](https://zahradastrelak.cz/).
