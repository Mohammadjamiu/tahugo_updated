---
title: How to Split an Array in 2 Parts in JavaScript?
slug: how to split array in 2 parts javascript
postdate: May 26, 2023
description: In JavaScript, you can split an array into two parts using various
  methods. One common approach is to use the slice() method, specifying the
  start and end indices for each part. Another method involves utilizing the
  splice() method to remove elements from the original array and create the two
  parts. Additionally, you can use the spread operator and slice() to achieve
  the splitting. These techniques allow for efficient division of arrays in
  JavaScript.
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/slice-method-1.webp
weight: 188
categorylink: /categories/how-to-tech
type: posts
author: Mohammad Jamiu
Affliate_Links: false
draft: false
mathjax: false
Google_Ads: true
---
Arrays are a fundamental data structure in JavaScript that allow us to store multiple values in a single variable. 

There are various scenarios where we may need to split an array into two parts. 

In this article, we will explore different methods to achieve this task and understand their pros and cons.

## **What is an Array in JavaScript?**

Before going into splitting arrays, let's quickly review what arrays are in JavaScript. **An array is an ordered collection of elements, where each element can be accessed by its index.** 

Arrays in JavaScript are zero-indexed, meaning that the first element is at index 0, the second element at index 1, and so on.

## **Methods of Splitting an Array into Two Parts**

There are multiple ways to split an array into two parts in JavaScript. Let's look at three common methods.

### **Method 1: Using the slice() method**

The `slice()` method is a built-in function in JavaScript arrays that allows us to extract a portion of an array into a new array without modifying the original array. 

To split an array into two parts using `slice()`, we can specify the start and end indices for each part.

```javascript
const array = [1, 2, 3, 4, 5, 6];
const midIndex = Math.floor(array.length / 2);
const firstPart = array.slice(0, midIndex);
const secondPart = array.slice(midIndex);
```

### **Method 2: Using the splice() method**

The `splice()` method is another built-in function in JavaScript arrays that can be used to add or remove elements from an array. 

We can also utilize `splice()` to split an array into two parts. By specifying the index at which to start the split and removing the elements after that index, we can obtain the two parts.

```javascript
const array = [1, 2, 3, 4, 5, 6];
const midIndex = Math.floor(array.length / 2);
const firstPart = array.splice(midIndex);
const secondPart = array;
```

### **Method 3: Using the spread operator and slice()**

In ES6, JavaScript introduced the spread operator (`...`) which allows us to expand an iterable object, such as an array, into individual elements. 

We can use the spread operator in combination with the `slice()` method to split an array into two parts.

```javascript
const array = [1, 2, 3, 4, 5, 6];
const midIndex = Math.floor(array.length / 2);
const [firstPart, secondPart] = [array.slice(0, midIndex), ...array.slice(midIndex)];
```

### **Choosing the Right Method**

The choice of method for splitting an array into two parts depends on the specific requirements of your task. 

If you need to preserve the original array, methods 1 and 3 are suitable since they create a new array. 

If you don't need the original array and want to modify it, method 2 can be used.

## **Example Code on Implementations**

Let's see some practical examples of splitting arrays in JavaScript.

**Example 1: Splitting an array of names into two groups**

```javascript
const names = ['Alice', 'Bob', 'Charlie', 'David', 'Eve', 'Frank'];
const midIndex = Math.floor(names.length / 2);
const firstGroup = names.slice(0, midIndex);
const secondGroup = names.slice(midIndex);
console.log(firstGroup); // Output: ['Alice', 'Bob', 'Charlie']
console.log(secondGroup); // Output: ['David', 'Eve', 'Frank']
```

**Output:**

![split array method example 1](/images/slice-method-1.webp "split array method example 1")

**Example 2: Splitting an array of numbers into two halves**

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const midIndex = Math.floor(numbers.length / 2);
const firstHalf = numbers.slice(0, midIndex);
const secondHalf = numbers.slice(midIndex);
console.log(firstHalf); // Output: [1, 2, 3, 4, 5]
console.log(secondHalf); // Output: [6, 7, 8, 9, 10]
```

**Output:**

![split array method example 2](/images/split-array-method-2.webp "split array method example 2")

**Example 3: Splitting an Array into Two Parts using the Spread Operator**

```javascript
const array = [1, 2, 3, 4, 5, 6];
const midIndex = Math.floor(array.length / 2);
const [firstPart, ...secondPart] = [array.slice(0, midIndex), ...array.slice(midIndex)];

console.log(firstPart); // Output: [1, 2, 3]
console.log(secondPart); // Output: [4, 5, 6]
```

## **Wrap Up**

Splitting an array into two parts is a common operation in JavaScript, and there are multiple methods to accomplish it. 

In this article, we explored three approaches: using the `slice()` method, the `splice()` method, and a combination of the spread operator `...` and `slice()`. 

The choice of method depends on whether you want to modify the original array and other specific requirements of your task.

By understanding these techniques, you can effectively split arrays in JavaScript to manipulate and process data more efficiently.