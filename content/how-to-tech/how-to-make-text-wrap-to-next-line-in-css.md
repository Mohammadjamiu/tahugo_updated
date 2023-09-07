---
title: How to Make Text Wrap to Next Line in CSS?
slug: how to make text wrap to next line in css
postdate: September 7, 2023
keywords:
  - text wrap in CSS
  - word-wrap
  - overflow-wrap
  - new line in CSS
description: Learn how to make text wrap to the next line in CSS with the
  word-wrap, overflow-wrap, and white-space properties
tags:
  - how to
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/text-wrap-css.webp
weight: 363
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
If a line of text in HTML is not breaking, and it is leading to the overflow of the text, here are some ways you can fix it. 

## **Step on How to Fix Text Not Wrapping in CSS**

### **1. By Using the Word-Wrap Property**

To address the issue of text overflow in CSS, the **word-wrap** property comes in handy. 

This property allows long words to be broken and wrap onto the next line. By default, this property is set to 'normal,' which means that words will not be wrapped, even if they overflow the container. 

However, by using the value **break-word**, you can force words to wrap, even if they break in the middle.

```css
p {
  word-wrap: break-word;
}


```

When you apply this CSS to your HTML element, it ensures that text within that element wraps gracefully to the next line when needed.

### **2. By Using the Overflow-Wrap Property**

Similar to **word-wrap**, the **overflow-wrap** property offers a solution for handling text overflow. 

It allows the browser to break lines within an unbreakable string, making it particularly useful for wrapping long strings of text that contain punctuation or symbols. 

Just like **word-wrap**, the default value of **overflow-wrap** is 'normal,' which breaks lines only at word boundaries. 

However, you can use the value **break-word** to force the browser to break lines wherever necessary, even within unbreakable strings.

```css
p {
  overflow-wrap: break-word;
}
```

By applying this CSS to your HTML element, you enable the browser to handle text overflow gracefully, ensuring readability and a polished appearance.

### **3. Controlling Text Wrapping with the White-Space Property**

In addition to the above properties, you can use the **white-space** property to control how text wraps in your HTML documents. 

This property offers several values, including:

* **nowrap**: Prevents text from wrapping, even if it overflows the container.
* **normal**: The default value, allowing text to wrap at word boundaries.
* **pre**: Prevents text from wrapping and displays it as it is written, including spaces and tabs.

```css
p {
  white-space: nowrap;
}
```

By applying this CSS, you can customize the text wrapping behavior to suit your specific needs, ensuring a better reading experience for your website visitors.

## **FAQs**

1. **How do I make text wrap in CSS?** To make text wrap in CSS, you can use the **word-wrap**, **overflow-wrap**, or **white-space** properties. These properties allow you to control how text wraps and overflows within HTML elements.
2. **Can I force text to wrap in the middle of a word?** Yes, you can force text to wrap in the middle of a word by using the **word-wrap: break-word** property in your CSS. This will ensure that even long words are broken and wrapped to the next line when needed.
3. **What is the default behavior of text wrapping in CSS?** The default behavior of text wrapping in CSS is set to 'normal,' which means that text will not wrap, even if it overflows the container. To change this behavior, you can use the CSS properties mentioned in this article.
4. **Are there other CSS properties for controlling text wrapping?** While **word-wrap**, **overflow-wrap**, and **white-space** are commonly used properties, there may be other CSS properties that can affect text wrapping in specific situations. However, these are the most frequently used properties for this purpose.
5. **Is there a way to prevent text from wrapping at all?** Yes, you can prevent text from wrapping at all by using the **white-space: nowrap** property in your CSS. This will ensure that text remains on a single line, even if it overflows the container.