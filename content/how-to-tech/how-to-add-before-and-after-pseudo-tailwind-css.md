---
title: "Tailwind CSS: how do you add :before and :after pseudo-element?"
slug: how to add before and after pseudo tailwind css
postdate: February 12, 2023
description: how to add before and after pseudo tailwind css
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/pseudo-before-tailwindcss.webp
weight: 96
categorylink: /categories/how-to-tech
type: posts
author: Mohammad Jamiu
draft: false
mathjax: false
Google_Ads: true
---
**Tailwind CSS** is a nice way to write CSS without having to leave your HTML file, which makes it good for large projects.

But one of it downside is that you need to be good at CSS to use it.

In this article, we are going to be looking at how to add the :before and :after pseudo-element to an HTML element.

Know that `:before and ::before` is the same, the only difference is that the former **(:before or :after)** is the old version while the later **(::before or ::after)** is used in CSS3 – the new version to separate pseudo-elements from pseudo-classes.

The way we are going to approach this is to write a normal CSS while using a pseudo-element and then convert it to tailwind, so you see the distinctions.

Here is a heading 2 tag to hold our heading, and it has a class called `"no-tailwind"`, so that we can target the `"no-tailwind"` class and style it with CSS.

```html
<h2 class="no-tailwind">Be great</h2>
```

```css
.no-tailwind {
  font-size: 58px;
  position: relative;
  width: fit-content;
}

.no-tailwind:before {
  position: absolute;
  top: -15px;

  content: "Learn to";

  font-size: 16px;
  background-color: blue;
  color: white;

  padding-top: 2px;
  padding-bottom: 4px;
  padding-left: 8px;
  padding-right: 8px;

  margin-bottom: 4px;
  border-radius: 4px;
}
```

![tailwind before and after pseudo](/images/pseudo-before-tailwindcss.webp "tailwind before and after pseudo")

The `.no-tailwind{ ..... }` CSS selector is used to target the H2 tag, as we stated earlier. The style applied is:

```css
.no-tailwind {
  font-size: 58px;
  position: relative;
  width: fit-content;
}
```

To make the font size big, make the width to be fit content and lastly the position relative to make the before or after pseudo-element work.

After that, the `:before` pseudo-element is used to target the H2 tag.

Now, to do this in tailwind CSS, each of the styles applied in the `:before{ .... }` will be prefixed with **before** keyword. For example `position: absolute;` in the `.no-tailwind:before{ ... }` class in normal CSS will be `before:absolute` in tailwind CSS likewise, the `content: "Learn to";` would be `before:content-["Learn_to"].`

> **Note:**
>
> You can see that "Learn to" in normal CSS is replaced with "Learn_to" with an underscore.
>
> The `_` is used to denote whitespace. But what if you want to add something like `"Amazing 1_0 "` to do this, you type `"Amazing_1\_0"`. the `\` introduced is to escape any special character that you want to show up.

Here is what the outcome of converting the normal CSS to tailwind CSS looks like -

```html
<h2
  class="text-[58px] relative w-[fit-content] before:absolute before:top-[-15px] before:content-['Learn_to'] before:text-[16px] before:bg-blue-600 before:text-white before:pt-[2px] before:pb-[4px] before:pl-[8px] before:pr-[8px] before:mb-[4px] before:rounded-[4px]"
>
  Be great
</h2>
```

You can see that the first 3 classes applied to the H2 tag `text-[58px] relative w-[fit-content]` is for the `.no-tailwind{ ... }` while the rest goes for the `.no-tailwind:before{ ... }.`

This goes also for the :after pseudo-element.

Hope the abstractions are demystified. Keep learning :tada: