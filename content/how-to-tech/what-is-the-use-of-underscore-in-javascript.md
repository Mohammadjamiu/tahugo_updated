---
title: What is the use of underscore ( _ ) in JavaScript?
slug: what is the use of underscore in javascript
postdate: May 20, 2023
description: underscore (_) is used in JavaScript is to give space to a variable
  name, to ignore a function parameter, and it is also used in a library like
  underscore.js to transform arrays and object.
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/underscore-in-js.webp
weight: 168
categorylink: /categories/how-to-tech
type: posts
author: Mohammad Jamiu
Affliate_Links: false
draft: false
mathjax: false
Google_Ads: true
---
Underscore `(_)` is just a character that has no special meaning in JavaScript. But it can be used for different purposes.

## Use of underscore (_) in JavaScript

Here are some of the uses of underscore in JavaScript:

### 1. Variable name spacing

The most common use of an underscore in JavaScript is to give space to a variable name, which makes it easier to understand what a variable is all about. For example, `var my_variable = 10;`.

### 2. Ignoring function parameters

Underscore can be used for ignoring function parameters. For example, you may define a function that requires parameters, but you don't intend to use all of them at that time. 

In such cases, you can use an underscore as a convention to indicate that the parameter is intentionally being ignored. 

It's a way to communicate to other developers that the parameter value is not relevant to the function's logic.

```javascript
function exampleFunc(_, b) {
  // The first parameter (_) is ignored
  console.log(b);
}

exampleFunc('ignored', 'used');
// Output: "used"
```

### Ignoring value when calling functions

When calling functions that return multiple values, you can use an underscore to ignore values that you don't need from the functions.

```javascript
function getCoordinates() {
  // Simulating a function that returns an array of coordinates
  return [10, 20, 30];
}

const [x, y, _] = getCoordinates();
console.log(x, y);
// Output: 10 20
```

### Library or framework conventions

Some JavaScript libraries or frameworks, like Underscore.js or Lodash, use the underscore as part of their naming conventions. 

These libraries provide utility functions for working with arrays, objects, and other data types. 

For example, in [Underscore.js](https://underscorejs.org/), you can transform an array into a new array using the functions or methods it provides like filter and map. 

Here is a code snippet that use Underscore.js map method to double the value of the numbers in an array.

```javascript
_.map([1, 2, 3], function(num) {
  return num * 2;
});

// Output: [2, 4, 6]
```

Though, the map method in the code above was used to transform the array `[1, 2, 3]` into `[2, 4, 6]` by multiplying `[1, 2, 3]` by 2.  

This way of transforming or mapping an array into a new array was done using the underscore.js library.

In today's modern [ES6 JavaScript](/how-to-tech/explain-es6-in-detail/), there are inbuilt functions/method like `map()` and `filter()` that comes with JavaScript, which makes the use of underscore.js quite obsolete.

**Read on:** *[Difference Between map() and filter() in JavaScript With Example](/how-to-tech/difference-between-map-and-filter-in-javascript-with-example/)*

## In Few Points:

The use of _ in JavaScript is to give space to a variable name, to ignore a function parameter, and it is also used in a library like underscore.js to transform arrays and object.