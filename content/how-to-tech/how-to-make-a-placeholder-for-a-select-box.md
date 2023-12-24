---
title: How to make a placeholder for a 'select' box?
slug: how to make a placeholder for a select box
postdate: December 22, 2023
keywords:
  - How to make
  - placeholder
  - "'select' box"
  - html
  - css
description: "Learn how to create a placeholder for a <select> box in HTML using
  two effective methods. "
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/select-placeholder-1.webp
weight: 399
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
Select boxes, while versatile, lack a built-in placeholder attribute similar to input fields. 

However, there are several effective methods to create a placeholder effect that enhances user experience.

## How to make a placeholder for a 'select' box?

To create a placeholder for a `<select>` box, you can use the following methods:

### Method 1/ Disabled and Selected Option

In this method, the first `<option>` is disabled, preventing users from selecting it, and the `selected` attribute ensures that it is the default option displayed.

```html
<select>
  <option disabled selected>Please select an option</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>
```



![select placeholder with disable attribute](/images/select-placeholder-1.webp "select placeholder with disable attribute")

### Method 2/ Hidden Option with CSS

In this method, the placeholder option has the `hidden` attribute, making it invisible. 

The accompanying CSS uses the `:invalid` pseudo-class to target the `<select>` element when no valid option is selected. 

When no valid option is selected, the hidden option becomes visible (`display: block`).

```html
<select>
  <option value="" hidden>Please select an option</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</select>

<style>
  select:invalid + option[value=""] {
    display: block;
  }
</style>
```



![select placeholder with hidden attribute](/images/select-box-placeholder-2.webp "select placeholder with hidden attribute")