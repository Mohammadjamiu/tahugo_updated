---
title: Are Semicolons Needed in CSS?
slug: are semicolons needed in css
postdate: December 22, 2023
keywords:
  - Semicolons
  - CSS
description: Yes, in CSS, semicolons are needed to separate each statement to
  avoid code misinterpretation or potential errors.
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/semicolon-needed-css.webp
weight: 398
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
**Yes, in CSS, semicolons are needed to separate each statement to avoid code misinterpretation or potential errors.**

Note that if there's only one CSS statement declaration, no ending semicolon is required.

**For example:**

```css
p {
  font-size: 30px
}
```

However, if there are multiple statement declarations, you need to separate them with semicolons: 

```css
p {
  font-size: 30px;
  text-align: center;
}
```

While it's technically optional to use a semicolon at the end of the last statement when there are multiple declarations, it's highly recommended to include it for consistency and to prevent potential errors if you add more statements later.

**For example:**

```css
p {
  font-size: 24px;
  text-align: center /* Semicolon excluded for last declaration */
}
```



## **Wrap Up**

As a wrap up, an answer to the question  “are semicolons needed in CSS?”, yes, semicolons are essential in CSS for the following purposes:

* For separating declarations,
* For ensuring proper parsing,
* For enhancing code readability, and
* For maintaining consistent CSS code syntax.