---
head.title: Strelak Community Garden
head.description: Creating a website that helps to build a community. A heartwarming work.
head.image: /og/community-garden.jpg
fields.image: /og/community-garden.jpg
fields.order: 400
fields.skills: ["Netlify", "Vue.js", "Tailwind CSS"]
featured: false
type: "full"
---

# Watch it grow: Developing a community garden website

This project was initiated by the local community from my home town. A couple of great people founded a community garden in the public space of Hradec Kralove. The website provided an easy way for visitors to register as either a volunteer (helping out in the garden) or a gardener (owning a piece of the garden bed to grow their plants in).

Large part of growing a community is **collecting contacts**. The website offers three ways of participating. Registering as a volunteer or a gardener, or subscribing to a newsletter. Each of the forms is linked to a shared email and to a central database, where the user data is safely stored. This way, users can receive updates on the events and activities going on in the garden.

I use [Supabase](https://supabase.com/) to store all the data which makes it very easy to create hooks for each of the forms. It also allows for **scalability** and **efficient data management**. The forms are built with Vue.js. This makes it very easy to implement important features such as validation and error messages.

As the website was to be **shared across social media**, it was especially important to create optimized social sharing tags and [Open Graph images](https://css-tricks.com/essential-meta-tags-social-media/). This adds that extra punch when the web is shared on Facebook or Twitter.

We wanted to communicate a fun and friendly vibe which the garden has in real life. I used open source illustrations and **animated** them with [GSAP](https://greensock.com/) library. Little interactive elements make users stay on the page and play around with it. My goal, as always, is to create a digital experience which the users enjoy and spend time with.

The garden beds were soon booked for the summer and the website is going to grow together with the community, as we continue to develop new features.
