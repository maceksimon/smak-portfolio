---
head.title: Fellow Creatures Store
head.description: Find out how I developed the e-commerce website on Shopify that sells vegan chocolates.
head.image: /image/portfolio/fellow-creatures.jpg
fields.image: /image/portfolio/fellow-creatures.jpg
fields.order: 100
fields.skills: ["Shopify", "Liquid", "Tailwind CSS"]
featured: true
type: "full"
---

# Tasty treat: Designing a vegan chocolate eshop

Building an e-commerce website from scratch might not sound like an easy task. However, having an experienced guide can make it into an exciting and fun project.

## The e-commerce journey

This is how the journey started for me. Unsurprisingly, it was with a client...

### Having a great client helps

Zsolt is good friend of mine and a great mind for business. When he asked me to make his website, I went for it, even thought I had little experience with Shopify development.

### Testing the waters

Our first theme was built on top of a free theme and I would edit it so that it would suit Zsolt's needs as well as it could. However, there was still a need for a more specific layout and fine-grain control over the individual elements, so I decided to rebuild the theme from scratch.

This is how the current iteration came to be. The shop is designed with liquid templates and advanced functionality is added with JavaScript. This includes login modal windows. Cart panel that slides from the right. Adding to your cart and updating the items through Ajax (without reloading the page), and many other details that make the shopping experience so much smoother.

### Apps can be your friends

Additionally, there was the need to integrate several key apps.

- [Recharge Subscriptions](https://apps.shopify.com/subscription-payments) for the ability to sell subscription products
- [Advanced Custom Fields](https://apps.shopify.com/advanced-custom-field) for adding a bunch of important information about the products
- [Connected Inventory](https://apps.shopify.com/connected-inventory) for the ability to sell products in bundles
- [Customer Reviews](https://apps.shopify.com/product-reviews) for loads of stars
- [Order Printer](https://apps.shopify.com/order-printer) for easily printing the package labels and receipts

For Recharge Subscription, I made sure that the subscription products are added to cart with the correct monthly billing information. I also implemented a **one-click checkout** for quick and smooth buys.

Advanced Custom Fields are used mainly for product pages where different types of information is necessary. Products can have a list of ingredients, additional images, custom description for body text and other features.

Connected Inventory is vital if you want to sell your products in bundles. It allows you to link different products so that a box of five different chocolates registers in the stock quantity of the individual products. I have set up these relationships for the bundle products so that the numbers always match.

Customer Reviews is pretty self explanatory. The key element here is the design. It was important to get the style of the reviews to match the overall theme of the shop.

For Order Printer I designed custom labels which were made exactly for particular label sheets. This allows to simply print the labels and streamlines the process of packaging and posting.

### Images? Large but light

An important requirement for Fellow Creatures was image optimization. As the shop uses large images and gifs, it was essential to optimize them to make the shop load fast.

I use [Bulk Image Resizer](https://bulkresizephotos.com/) and [Tiny PNG](https://tinypng.com/) for optimizing images in advance. However, I also implement a solution which serves different sized images on different devices. On mobile, you might only need a 400x300 image, so why load 1920x1080? This greatly improves the performance for mobile shoppers.

Another important aspect of the Fellow Creatures brand was a fun and playful design. This includes the use of moving elements and images. I have designed an animated SVG strip on the homepage and a logo slider. Also, try going to the [shop page](https://www.fellowcreatures.co.uk/collections/frontpage) and hovering over a product. The image starts moving in a loop! These small touches are really what makes a website special.

## Final thoughts

All this work was worth it in my eyes. Zsolt is very happy with the site, it generates revenue, and we continue to work on further ideas and improvements.

Visit the store on [FellowCreatures.co.uk](https://www.fellowcreatures.co.uk/).
