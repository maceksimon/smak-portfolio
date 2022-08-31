---
head.title: University department website
head.description: How to present a large variety of content to students and alumni? Let's find out!
head.image: /image/portfolio/sca-department.jpg
fields.image: /image/portfolio/sca-department.jpg
fields.order: 300
fields.skills: ["WordPress", "Twig", "Tailwind CSS", "Figma"]
featured: true
type: "full"
---

# Learning together: A university department website

In my experience, university websites are notorious for being hard to read and navigate. That's why I welcomed the challenge of creating a web for my university department.

[See the Department website](https://kska.upce.cz/).

## The challenge

I was asked to update the website of the Department of Social and Cultural Anthropology. Milan, a university researcher and lecturer who took care of the web had designed the previous version of the web using [Elementor](https://elementor.com/) and several other plugins. However, the site seemed to be lacking in design and readability. There were also requests for additional **content types** and an **multilingual translations**.

## Design first

I first supplied a [Figma](https://www.figma.com/) design for several pages to give a good idea of where I was headings. I was basing my design loosely on the previous version as there were some good elements in it. However, I redesigned and **simplified the content structure** - mainly the navigation links and the content of some pages.

Milan and other members of the staff loved the design, so I moved on to the implementation. I decided for a **custom built them**e, as it would give me full control over the content types and design templates. It also allows to [combine the existing Gutenberg blocks](/blog/wordpress-gutenberg-101) to create new pages efficiently.

## Planning the structure

I implemented an information board which shows the newest articles and short announcements about the day-to-day matters in the department. I also **provided instructions** to all staff on how to edit the content making them more comfortable with using the site.

### Performance and maintainability

By replacing the plugin components with custom ones, I removed the overhead of the plugin which may make the website load slower. The custom code also allows for **better maintainability** as the content structure of the website is managed from a single place - the Gutenberg editor - instead of being broken up into multiple plugins.

### Always think about the user

Thanks to the custom theme, I gained a fine-grain control over each part of the page so I could more easily make **UX improvements** such as making the staff images link to the individual profiles. On [lecturer's profile pages](https://kska.upce.cz/okatedre/lide/adam-horalek/), I used a card with tabs to more easily display various types of information.

## Final thoughts

The response to the new design was great. The theme is ready to be translated into English and I continue to make updates and implement new features in collaboration with Milan and the rest of the department.

Have a look at the live web on [KSKA.upce.cz](https://kska.upce.cz/)
