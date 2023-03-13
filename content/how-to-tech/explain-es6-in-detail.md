---
title: Javascript ES6 (ECMAScript 6) Explained for Beginners
slug: explain es6 in detail
postdate: March 13, 2023
description: ES6, or ECMAScript 6, is a version of JavaScript that comes several
  new features and improvements to the language
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/code-944499_640.webp
weight: 104
categorylink: /categories/how-to-tech
type: posts
author: Mohammad Jamiu
draft: false
mathjax: false
Google_Ads: true
---
**ES6, or ECMAScript 6**, is a version of JavaScript that comes with several new features and improvements to the language.

Here are some of the key features of ES6 explained for beginners:

**1. let and const keywords**: let and const are two new ways to declare variables in JavaScript. Variables declared with let are block-scoped, meaning they are only accessible within the block they are declared in, and can be reassigned. Variables declared with const are also block-scoped, but cannot be reassigned.

> In the old version of JavaScript, the `Var` keyword is used and it is not block-scoped. i.e it can be accessed from anywhere which can cause bugs in codes.

**2. Arrow functions:** Arrow functions are a shorthand way of writing functions in JavaScript. They use a => syntax and have a more concise syntax than traditional function declarations.

The traditional way of writing functions

```js
const regularFunc = function () {
  console.log("No arrow function");
};

regularFunc();
```

The arrow function way of writing functions

```js
const regularFunc = () => {
  console.log("No arrow function");
};

regularFunc();

// The keyword `function` is removed
```

**3. Template literals:** Template literals are a way of writing strings in JavaScript that allow for variable interpolation and multi-line strings. They use backticks (`) instead of single or double quotes.

The traditional way

```js
const a = 2;
const b = 5;

console.log("Seven is " + (a + b));
// Output: Seven is (7)
```

The template literal way

```js
const a = 2;
const b = 5;

console.log(`Seven is (a + b)`);
// Output: Seven is (7)
```

> In the template literal way, no use of `+` and `" "` rather `(` `)`

**4. Destructuring:** Destructuring is a way of extracting values from arrays or objects and assigning them to variables in a single line of code. This can help simplify code and make it more readable.

```js
const x = [apple, 100, happy];
```

To get the values from the array, in the traditional way it can be done as:

```js
const x = [apple, 100, happy];

const fruit = x[0];
const number = x[1];
const mood = x[2];
```

In the new version, it can be done as:

```js
const x = [apple, 100, happy];

const [fruit, number, mood] = x;
```

**5. Spread syntax:** The spread syntax allows you to “spread” the elements of an array or object into another array or object. This can be useful when creating new arrays or objects or passing arguments to functions.

```js
const array = [1, 2, 3];
const newArray = { ...array, 4,5 }; // { 0: 1, 1: 2, 2: 3 }
```

> Now `newArray` has the value of `array` and thenit own unique value 5,6

**6. Classes:** ES6 introduced a new syntax for defining classes in JavaScript, making it easier to create and work with object-oriented code.

**7. Promises:** Promises are a way of handling asynchronous code in JavaScript. They allow you to write code that will run when an asynchronous operation is completed, rather than waiting for the operation to finish.

**8. Modules:** ES6 introduced a standard syntax for creating and importing modules in JavaScript. This allows for better organization and separation of code, and makes it easier to share code between different files and projects.

**9. Default parameters:** Default parameters allow you to specify default values for function parameters, which will be used if no value is provided when the function is called.

**10. Rest parameters:** Rest parameters allow you to pass an arbitrary number of arguments to a function as an array. This can be useful when working with functions that take a variable number of arguments.

These are just a few of the many new features and improvements introduced in ES6. By learning and using these features, you can write cleaner, more efficient, and more readable JavaScript code.