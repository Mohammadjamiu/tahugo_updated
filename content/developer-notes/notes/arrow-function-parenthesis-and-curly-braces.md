---
description: s
draft: false
wordcount: false
alt: ""
Google_Ads: true
layout: developer-notes
postdate: September 6, 2024
categorylabel: Developer's Note
author: Mohammad Jamiu
developernotes: '[""]'
title: Difference Between Arrow Function with Parentheses and Curly Braces
categories: '["Developer Notes"]'
image: ""
weight: "1"
categorylink: /developernotes
type: developer-notes
mathjax: false
---

### Summary:

- **Parentheses `()`**: Implicit return, the value is automatically returned.
- **Curly braces `{}`**: Explicit return required, you need to use `return` inside the function.

The difference between `{data.map((item, index) => ())}` and `{data.map((item, index) => {})}` lies in the syntax for returning values in arrow functions.

### 1. **Arrow Function with Parentheses `()`**:

When you use parentheses around the body of the arrow function, it implies an **implicit return**. This means the value inside the parentheses will be automatically returned.

Example:

```jsx
{
  data.map((item, index) => <div key={index}>{item.title}</div>);
}
```

In this case, the JSX `<div>` is returned implicitly.

### 2. **Arrow Function with Curly Braces `{}`**:

When you use curly braces, you need to use the `return` keyword to explicitly return a value. Without the `return`, the function will not return anything.

Example:

```jsx
{
  data.map((item, index) => {
    return <div key={index}>{item.title}</div>;
  });
}
```

If you forget the `return` in a curly-braced function, nothing will be returned:

```jsx
{
  data.map((item, index) => {
    <div key={index}>{item.title}</div>; // Nothing returned, causes issue
  });
}
```
