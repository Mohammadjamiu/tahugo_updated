---
title: How to Turn Off or Disable Text Selection Highlight in CSS?
slug: how to turn off or disable text selection highlight in css
postdate: December 23, 2023
keywords:
  - Turn Off
  - Disable Text
  - Selection Highlight
  - CSS
description: To disable text selection in CSS, use the "user-select" property.
  By setting it to 'none' for specific elements, you can make them unselectable.
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/text-cannot-be-selected.webp
weight: 400
categorylink: /categories/how-to-tech
type: posts
author: Mohammad Jamiu
author_credit: false
author_credit_name: ""
author_credit_info: ""
author_credit_image: /images/imgph.webp
Affliate_Links: false
draft: false
mathjax: false
Google_Ads: true
---
![how to turn off or disable text selection highlight in css](/images/text-cannot-be-selected.webp "how to turn off or disable text selection highlight in css")

CSS provides a powerful way to control the visual aspects of a webpage, and one common requirement is the ability to turn off or disable text selection highlighting.

Whether you want to enhance the design or prevent users from copying content, CSS offers a solution. In this article, we will look at how to achieve this.

## **How to Turn Off or Disable Text Selection Highlight in CSS?**

To disable text selection in CSS, use the `user-select` property. By setting it to 'none' for specific elements, you can make them unselectable.

Let's take a look at the basic code snippet:

```css
.no-select {
  user-select: none;
}
```

To ensure your CSS code works seamlessly across different browsers, it's essential to include vendor prefixes.

This is particularly important for older versions of browsers.

Here's an example with prefixes for Safari, Chrome, Firefox, and Internet Explorer.

```css
.no-select {
  -webkit-user-select: none; /* for Safari and Chrome */
  -moz-user-select: none; /* for Firefox */
  -ms-user-select: none; /* for Internet Explorer 10+ */
  user-select: none; /* for modern browsers */
}
```

Now that we have CSS code ready, you can apply the `no-select` class to the elements you want to make unselectable.


In the following HTML example, the `<p>` element with the "no-select" class will be unselectable, while the `<p>` element without the "no-select" class can be selectable.

```html
<p class="no-select">This text cannot be selected.</p>
<p>This text can be selected.</p>
```

:bulb: **Extra Tips on Text Selection for you:**

On the other way round, if you want a whole line of text to be selected at once when a user clicks on the block of text once 

(i.e., to select the entire element and its contents on a single click), you can use the CSS style below. 

The `user-select` property is set to 'all'.

```css
.select-all {
  user-select: all;
}
```

```html
<p class="select-all">This text can be selected just with a single click.</p>
```

## **Wrap Up**

There you have it on how to turn off or disable text selection highlight in CSS.

## **FAQs**

1. **Does disabling text selection impact SEO?** Disabling text selection itself does not directly impact SEO. However, it's crucial to ensure that your content remains accessible and user-friendly.
2. **Are there any alternatives to disabling text selection?** Yes, consider providing a copy button or using JavaScript selectively to disable selection for specific interactions. This ensures better accessibility.
3. **Is it recommended to use the user-select property for all elements?** No, it's advisable to use the user-select property selectively based on design requirements. \
   \
   Applying it to all elements may hinder user experience and accessibility.
4. **What are the potential challenges of disabling text selection?** Disabling text selection can pose challenges for users who rely on assistive technologies.