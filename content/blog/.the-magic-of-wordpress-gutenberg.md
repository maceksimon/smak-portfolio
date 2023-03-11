---
head.title: The Magic of WordPress Gutenberg
head.description: Check out our solution for WordPress admin which enables us to create amazing configurable websites.
head.image: /image/blog/the-magic-of-wordpress-gutenberg.jpg
fields.image: /image/blog/the-magic-of-wordpress-gutenberg.jpg
fields.tags: ["WordPress", "PHP", "Twig"]
created: "2022-07-17T12:34:44"
time: ""
---

# The Magic of WordPress Gutenberg

In 2018 WordPress made a big step and transitioned from its classic editor to a new shiny block editor with live preview. Read how we make use of it and what kind of editing experience it enables.

## WordPress + ACF history

Back in the day, WordPress would allow editors to enter a block of rich text on the page and then display it within a particular template. If you wanted to add multiple text blocks, or create an interesting non-linear layout, you would have to create more complex templates with multiple input fields in the admin. Sometimes you could leverage a plugin such as [Advanced Custom Fields](https://www.advancedcustomfields.com/) to make your life easier, but in general, there would be a lot of custom work and the templates would generally be sigle-purpose.

![Image of a textfield with different formatting buttons](/image/blog/gutenberg_classic_editor.jpg)

_A familiar view for any WordPress content editor._

## Bright future of the Gutenberg editor

Nowadays, WordPress [Gutenberg editor](https://wordpress.org/gutenberg/) allows you to use **blocks**. These are pieces of HTML, CSS and JavaScript which you can place directly onto your page and fill with data. In a way the approach is similar to popular builder plugins such as Elementor or DIVI. The advantage to using a native approach is twofold.

1. Better performance
2. More freedom

Native technology always gives better performance, since you do not have to install a suite of heavyweight plugins.

What gives you the freedom is, of course, the fact that you can build your own custom blocks that look and function exactly the way you want. You can also use them multiple times across multiple pages and thus make the web building process so much more efficient.

![Info graphics that lists the advantages of Gutenberg editor](/image/blog/gutenberg_info.jpg)

## What's the catch?

Well, the native way of building Gutenberg blocks is React. This is a complex JavaScript framework which may not be easy to maintain or work with for many developers.

## No catch!

Luckily, there is a way around this - and just like before, ACF comes to the rescue and makes everything so much more simple.

By using [ACF Blocks](https://www.advancedcustomfields.com/resources/blocks/) you get a simple way of creating blocks in PHP - the standard language of WordPress. The result is a maintainable and robust code which gives you all the advantages of using the new Gutenberg editor.

## Clean solution for easy editing

On our WordPress projects we tend to use ACF Blocks paired with the [Twig](https://twig.symfony.com/) templating language and the [Tailwind CSS](https://tailwindcss.com/) framework. This makes the code even more modular and reusable.

However, the main thing for every editor is that they will be able to see the results of their edits right away. Just switch from the editing mode to the preview and you will see the page as rendered after publishing.

Here is an example of how a block might look like in the editing view.

![List of input fields in the admin using](/image/blog/gutenberg_admin.jpg)

_Input fiedls of a block_

And here is the result.

![A preview of a hero section with video on the background](/image/blog/gutenberg_result.jpg)

_Preview of a block_

## Wrapup

Gutenberg blocks are a great addition to WordPress. They greatly speed up the creation of new pages and posts, and when used well, they largely improve the content editing experience. Working with this solution enables us to deliver a modern user-friendly web applications.

If you're interested in details, get in touch!
