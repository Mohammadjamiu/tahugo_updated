---
title: How to Shuffle an Array Randomly in JavaScript?
slug: how to shuffle an array randomly in javascript
postdate: July 8, 2023
keywords:
  - JavaScript array shuffling
  - Random array reordering
  - Array manipulation in JavaScript
  - Randomization algorithms in JavaScript
  - JavaScript array operations
description: Learn how to shuffle arrays randomly in JavaScript with an
  easy-to-follow guide. Explore the code snippet that uses a simple algorithm to
  shuffle array elements, ensuring a randomized order every time.
tags:
  - javascript
  - programming and coding
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/shuffle-array.webp
weight: 322
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
In JavaScript, shuffling an array randomly can be a useful technique when you want to randomize the order of elements. 

Whether you're building a game, conducting statistical analysis, or simply adding some randomness to your application, understanding how to shuffle an array is essential. 

In this article, we will provide a detailed explanation of the code used to shuffle an array randomly in JavaScript. Let's dive in!

{{< table-of-contents >}}

## **The Code**

```javascript
const array = [1, 2, 3, 4, 5];

for (let i = array.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [array[i], array[j]] = [array[j], array[i]];
}

console.log(array);
```

## **Understanding the Code**

To understand the code, let's break it down step by step.

### **Step 1: Initializing the Array**

The first line of code declares a variable called `array` and assigns it an array of numbers `[1, 2, 3, 4, 5]`. 

This array can be customized to contain any elements you want to shuffle.

### **Step 2: Looping through the Array**

The second line of code starts a `for` loop. The loop will iterate `array.length - 1` times, where `array.length` is the number of elements in the array. 

The loop begins from the last index of the array and goes backwards to the first index.

### **Step 3: Generating a Random Index**

In each iteration of the loop, the following code is executed:

```javascript
const j = Math.floor(Math.random() * (i + 1));
```

This code generates a random number between `0` and `i + 1`, where `i` is the current index in the loop. 

The `Math.random()` function generates a random decimal number between `0` and `1`, which is then multiplied by `(i + 1)`. 

The `Math.floor()` function is used to round down the resulting number to the nearest integer. 

The variable `j` is assigned the value of the rounded-down random number.

### **Step 4: Swapping Elements**

The next line of code swaps the elements at indices `i` and `j` in the array:

```javascript
[array[i], array[j]] = [array[j], array[i]];
```

This line of code uses destructuring assignment and the square bracket notation to create a temporary array with the elements at indices `i` and `j` in the original array. 

The values of `array[i]` and `array[j]` are swapped by assigning them to the elements of the temporary array in reverse order.

### **Step 5: Repeat Until Shuffled**

The swapping process is repeated until the `i` variable is `0`. At this point, the loop will terminate, and the array will be shuffled.

### **Step 6: Console Log the Shuffled Array**

By using `console.log(array);` you will get a new shuffled array.

```javascript
console.log(array);
```

For example, when the code is run in the console, here is the result gotten.

![array shuffle in js](/images/shuffle-array.webp "array shuffle in js")

Voilà :tada: Happy shuffling!