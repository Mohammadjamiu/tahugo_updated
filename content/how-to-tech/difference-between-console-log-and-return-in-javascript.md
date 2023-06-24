---
title: Difference Between console.log() and return in JavaScript
slug: difference between console.log and return in javascript
postdate: May 17, 2023
description: "`console.log()` is for logging, while `return` is for determining
  the output or result of a function."
tags:
  - javascript
  - difference between
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/return-keyword.webp
weight: 162
categorylink: /categories/how-to-tech
type: posts
author: Mohammad Jamiu
Affliate_Links: false
draft: false
mathjax: false
Google_Ads: true
---
`console.log()` is used for printing information to the console during program execution, while `return` is used to provide a value back to the caller and terminate the execution of a function. 

i.e., `console.log()` is for logging, while `return` is for determining the output or result of a function.

## What is `console.log()` in JavaScript?

`console.log()` is a built-in function that allows developers to print information to the console during the execution of a program. It is commonly used for debugging and testing purposes. 

`console.log()` can output various types of data, such as strings, numbers, objects, and arrays. 

The output is displayed in the browser's console, which is a developer tool for inspecting and logging information.

```javascript
// Example using console.log()
function greet(name) {
  console.log("Hello, " + name + "!"); // Output: Hello, Mohammad!
}

greet("Mohammad");
```

In the example code above, we define a function called `greet()` that takes a name parameter. Inside the function, we use `console.log()` to print a greeting message to the console, including the provided name. 

When we call `greet(“Mohammad”)`, it prints *“Hello, Mohammad!”* to the console.

![logging to the console](/images/log-mohammad-to-console.webp "logging to the console")

Hence, `console.log()` is used for displaying information during the execution of the program.

## What is `return` in JavaScript?

`return` is a keyword used within functions to provide a result or value back to the caller. When a function encounters a return statement, it stops executing and immediately returns the specified value to the caller. 

The returned value can be of any data type, including primitive values like numbers and strings, as well as objects or even other functions.

```javascript
// Example using return
function multiply(a, b) {
  return a * b;
}

let result = multiply(5, 3);
console.log(result); // Output: 15
```

In this code example, we define a function called `multiply()` that takes two parameters, a and b. Inside the function, we use the return keyword to specify the result of multiplying a and b. 

When we call `multiply(5, 3)` and assign the returned value to the variable result, it calculates the product (5 × 3) and returns the value 15. 

We then use `console.log(result)` to print the result to the console.

![return keyword in js](/images/return-keyword.webp "return keyword in js")

## **Difference Between console.log() and return in JavaScript**

|               | console.log()                    | return                                                              |
| ------------- | -------------------------------- | ------------------------------------------------------------------- |
| Purpose       | Output information for debugging | Provide a value back to the caller, e.g., when a function is called |
| Output        | Prints output to the console     | Returns value to the caller                                         |
| Execution     | Does not stop the execution      | Stops the execution of the function                                 |
| Usage         | Debugging, testing, and logging  | Determining function output                                         |
| Usage Example | `console.log("Hello, world!");`  | `return result;`                                                    |