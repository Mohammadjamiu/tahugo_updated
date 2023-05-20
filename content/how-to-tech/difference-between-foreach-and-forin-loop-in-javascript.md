---
title: Difference Between forEach and for…in Loop in JavaScript
slug: difference between foreach and forin loop in javascript
postdate: May 19, 2023
description: forEach is used to iterate over the elements of an array, while
  forin is used to iterate over the properties of an object.
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/foreach-and-forin-loop.webp
weight: 165
categorylink: /categories/how-to-tech
type: posts
author: Mohammad Jamiu
Affliate_Links: false
draft: false
mathjax: false
Google_Ads: true
---
`forEach` loop and the `for...in` loop are two different ways to iterate over elements in JavaScript.

**`forEach` loop is used to iterate over the elements of an array, whereas the `for...in` loop is used to iterate over the properties of an object. They have different purposes and are suited for different data structures.**

## Difference Between `forEach` and `for…in` Loop

### `forEach` **Loop:**

`forEach` loop is a method available for arrays in JavaScript. It allows you to iterate over each element in an array and perform a specific action for each element.

> The syntax for using a `forEach` is -  `array.forEach(callbackFunction)`

The `forEach` method takes a callback function as an argument. This callback function is called once for each element in the array. The current element of the array is passed as an argument to the callback function. 

You can perform any desired action within the callback function using the current element.

Here is a code example in which `forEach` loop is used to log each element of an array:

```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(num) {
  console.log(num);
});

// Output:
//
// 1
// 2
// 3
// 4
// 5
```

In the above code example, we have an array called `numbers` containing `[1, 2, 3, 4, 5]`. By using the `forEach` method on the `numbers` array, we provide a callback function as an argument.

This callback function is executed for each element of the array. In this case, we simply log each element (`num`) to the console.

> The `forEach` loop allows you to iterate over each element in a more concise and readable way compared to traditional `for` loops. It is commonly used when you want to perform an action for each element of an array.

### `for...in` **loop:**

`for...in` loop is used to iterate over the properties of an object in JavaScript.

> The syntax for using a `for...in` loop is – ⁣`for (variable in object) { ... }`

The `for...in` loop allows you to access each property of an object. It iterates over the enumerable properties of an object, and for each property, the loop assigns the property name to the specified variable. 

You can perform any desired action within the loop's block.

Here's an example using the `for...in` loop to access object properties:

```javascript
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

for (let key in person) {
  console.log(key + ": " + person[key]);
}

// Output:
//
// name: John 
// age: 30 
// city: New York
```

In the example code above, we have an object called `person` with properties such as `name`, `age`, and `city`. Using the `for...in` loop, we iterate over the properties of the `person` object. 

The `key` variable represents each property name, and we can access the corresponding value using `person[key]`.

> The `for...in` loop is specifically designed for object properties and is not intended for iterating over arrays. It allows you to access and perform operations on each property of an object.

## In Few Points:

`forEach` is used to iterate over the elements of an array, while `for...in` is used to iterate over the properties of an object.