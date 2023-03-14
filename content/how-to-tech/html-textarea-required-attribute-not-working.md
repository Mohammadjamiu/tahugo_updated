---
title: HTML “textarea” Required Attribute Not Working | How to Fix?
slug: HTML textarea required attribute not working
postdate: March 14, 2023
description: Make sure that the <textarea></textarea> does not have space in
  between because if it does have then you have already input some character or
  text.
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/tahtmlfrontpage.webp
weight: 105
categorylink: /categories/how-to-tech
type: posts
author: Mohammad Jamiu
draft: false
mathjax: false
Google_Ads: true
---
To make an HTML form “textarea” to have a required attribute, all you need to do is to add `required` or `required="required"`

But sometimes when you add the required attribute to force the user to input data, it does not work. Here's how to fix it.

Make sure that the `<textarea></textarea>` does not have space in between because if it does have then you have already input some character or text.

```html
<!-- Do this -->
<textarea></textarea>

<!-- Dont do this!!!!!!  -->
<textarea> </textarea>
```

> Do not forget to add the `required` attribute.

```html
<!-- Do this -->
<textarea required></textarea>

<!-- or -->

<!-- This -->
<textarea required="required" ></textarea>
```

> Another reason why you need to make sure that the `textarea` tag are closed and no space is becasue if you add a `placeholder` attribute it wont work.

Voilà :tada: that's all.