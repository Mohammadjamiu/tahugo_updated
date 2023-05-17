---
title: When To Use Var, Let, and Const in JavaScript?
slug: when to use var let and const in javascript
postdate: May 17, 2023
description: Use `let` to declare variables that may change, and you should use
  `const` to declare variables that should not change while use `var` only if
  you need to support older browsers that do not support let or` const`.
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/let-keyword-reassignment.webp
weight: 160
categorylink: /categories/how-to-tech
type: posts
author: Mohammad Jamiu
Affliate_Links: false
draft: false
mathjax: false
Google_Ads: true
---
`var`, `let`, and `const` are all used for declaring variables in JavaScript, but they have some differences in terms of scoping and mutability. 

> **Variable:**
>
> *Think of a variable as a labeled storage box where you can put different things, like numbers, words, or even more complex information. You can name the box, store values in it, and later access or modify those values as needed in your code.*

In this article, we will delve into the intricacies of `var`, `let`, and `const`, explaining their characteristics and when to use each one.

## The `var` Keyword

The `var` keyword is the oldest and most basic way to declare variables in JavaScript. It provides function-level scoping, meaning that a variable declared with `var` is accessible throughout the entire function in which it is defined. 

Variables declared with `var` can be reassigned, meaning you can assign a new value to the variable at any point in the code. Another characteristic of `var` variables is hoisting, where the variable declaration is moved to the top of its scope during the code execution phase. 

This allows you to use the variable before it is actually declared, which can sometimes lead to unexpected behavior and bugs.

Let's look at a code example and analyze how variables declared with the `var` keyword works.

```javascript
function myExample() {
  console.log(age); // Output: undefined
  var age = 25;
  console.log(age); // Output: 25
}

myExample();

```

In this code example, the variable *age* is declared with` var` inside the `myExample()` function, and it comes after logging it to the console.

The normal way code should be written is the declaration coming first before logging it value to the console. But as you can see, when we try to log the value of age, it outputs `undefined` instead of *throwing an error*. 

This is because the `var` declaration is hoisted to the top, and it is considered as if the variable was defined but not assigned a value yet.

**To avoid the potential issues caused by hoisting and unexpected behavior, it is recommended to use `let` or `const` instead of var in modern JavaScript development.**

Next, let's explore the `let` and `const` keywords in more detail.



## The `let` keyword

The `let` keyword is a newer addition to JavaScript and is widely recommended for declaring variables. 

It provides block scoping, meaning that the variable is only accessible within the block (typically enclosed in curly braces) where it is declared. Let's explore its key features:

Here is a code snippet we can use to analyze how the let keyword works and how it is used:

**Declaration -**

```javascript
// Block scope with let
function myExample() {
  let x = 10; // Declared within the block
  if (true) {
    let x = 20; // Different variable with the same name within the inner block
    console.log(x); // Output: 20
  }
  console.log(x); // Output: 10 (outer block variable remains unchanged)
}

myExample();

```

In this code example, we declare a variable `x` using let within the outer block of the `myExample()` function. 

Inside the inner block (i.e., the `if` statement), we declare another variable `x` with the same variable name. 

The let keyword ensures that these variables are distinct and separate within their respective blocks. 

As a result, we can have different values assigned to `x` within each block, and the variable remains confined to its specific block.

![let keyword in javascript](/images/let-keyword.webp "let keyword in javascript")



**Reassignment -**

```javascript
// Variable reassignment with let
let score = 100;
console.log(score); // Output: 100

score = 200; // Reassigning the let variable
console.log(score); // Output: 200

```

As you can see in this code example, we declare a variable `score` using let and assign it an initial value of 100. 

Later in the code, we can reassign a new value (200) to the `score` variable. The let keyword allows for variable reassignment within its scope, making it flexible for scenarios where the value needs to change.

![let keyword reassignment in js](/images/let-keyword-reassignment.webp "let keyword reassignment in js")

By using the let keyword, you can create variables that are block-scoped, cannot be hoisted, and can be reassigned within their respective scope. 

This provides certainty and avoids potential issues caused by variable hoisting.

## The` const` Keyword

The `const` keyword is the newest addition among the three keywords (`var`, ⁣` let`, and `const`), and it is used to declare constant variables. Here's a detailed explanation of its features:

**Declaration and Reassignment -** 

```javascript
// Constant variable declaration with const
const PI = 3.14159;
console.log(PI); // Output: 3.14159

// Trying to reassign a constant variable (results in an error)
PI = 3.14; // Error: TypeError: Assignment to constant variable.

```

In this code example, we declare a constant variable `PI` using the `const` keyword and assign it the value 3.14159. 

The `const `keyword ensures that the variable cannot be reassigned a new value. If we attempt to reassign a new value to `PI`, it will result in a ***TypeError*** indicating that we cannot assign a new value to a constant variable. 

![const typeerror](/images/const-typeerror.webp "const typeerror")

Constants are useful for values that should remain constant throughout the execution of the program, such as mathematical constants or configuration values.

**Scoping -**

```javascript
// Block scope with const
function myNewExample() {
  if (true) {
    const x = 10; // Constant variable within the block
    console.log(x); // Output: 10
  }
  console.log(x); // ReferenceError: x is not defined
}

myNewExample();

```

In this code example, we declare a constant variable `x` using `const` within the inner block (i.e., `if` statement). 

The` const` keyword ensures that `x` is block-scoped, meaning it is only accessible within the block in which it is declared. 

If we try to access `x` outside the block, it will result in a ***ReferenceError*** since `x` is not defined in that scope.

![const reference error](/images/referror-const.webp "const reference error")

By using the `const` keyword, you can declare variables that are constant, meaning they cannot be reassigned after their initial assignment. 

In addition to that, `const` variables are block-scoped, making them useful for values that should not be changed, such as the names of objects, configuration values, or mathematical constants just as it was mentioned earlier.

## Summary

In just few points, **you use `let` to declare variables that may change, and you should use `const` to declare variables that should not change.** 

**You should only use `var` if you need to support older browsers that do not support let or` const`.**