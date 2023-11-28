---
title: How to Make a Circular Image in CSS?
slug: " how to make a circular image in css"
postdate: November 27, 2023
keywords:
  - How to make a circular image in css?
description: ' To make a rounded image in CSS, set equal height and width (e.g.,
  50px by 50px), apply "border-radius: 50%", and use "object-fit: cover" for
  proper fitting without distortion.'
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/circular-image-css.webp
weight: 390
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
In web development, styling images is a common practice to enhance the visual appeal of a website. 

One popular design choice is to make images circular, providing a sleek and modern look. 

Achieving this effect in CSS is straightforward, primarily utilizing the `border-radius` property. 

In this blog post, we'll walk through the steps to create a circular image and provide a simple example for you to try.

## **How to Make an Image Rounded in CSS?**

To make an image circular or rounded, you need to follow these steps:

1. Begin by explicitly setting the height and width of the image, ensuring they are the same for a symmetrical circle. For example, 50px by 50px or 100px by 100px. 

2. Add the “border-radius” CSS property and set it to 50% i.e., `border-radius: 50%;` to make the image  rounded.

3. To make the image fit inside the circle or to cover the entire container without distortion, you can use the `object-fit: cover;` property.

</br>

**CSS code that you can implement:**

```css
.circular-image {
  width: 100px; 
  height: 100px; 
  border-radius: 50%; 
  object-fit: cover; 
}
```

But to see it in effect, you need to create an HTML code and add an image tag and a link to the image via the “src” attribute. 

In the case of the HTML code below, an online image is used for the image source. 

> :bulb:
>
> So you need to replace it with a link to your own image.

**HTML Code:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
 
  <title>How to Make a Circular Image in CSS</title>
</head>
<body>
  <img src="https://images.freeimages.com/variants/k1wQB7egQotJ7Hr3ZBPP1S5c/f4a36f6589a0e50e702740b15352bc00e4bfaf6f58bd4db850e167794d05993d" alt="Circular Image" class="circular-image">
</body>
</html>


```

</br>

**CodePen Version**

<iframe height="265" style="width: 100%;" scrolling="no" title="Your CodePen" src="https://codepen.io/devmohammad/embed/xxMJjrQ?height=265&theme-id=light&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>

## **Wrap Up**

As a wrap up, to make a rounded image in CSS, set equal height and width (e.g., 50px by 50px), apply “border-radius: 50%”, and use “object-fit: cover” for proper fitting without distortion.