---
title: Difference Between map() and filter() in JavaScript With Example
slug: difference between map and filter in JavaScript with example
postdate: May 19, 2023
description: " map() and filter() are methods in JavaScript that are used to
  perform operations on arrays. The map method transforms each element of an
  array and creates a new array with the transformed values, while the `filter`
  method creates a new array by selecting only the elements that satisfy a
  specified condition."
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/map-and-filter.webp
weight: 164
categorylink: /categories/how-to-tech
type: posts
author: Mohammad Jamiu
Affliate_Links: false
draft: false
mathjax: false
Google_Ads: true
---
 `map()` and `filter()` are methods in JavaScript that are used to perform operations on arrays. When the operation or transformation is done, a new array is returned as a result.

**The `map` method transforms each element of an array and creates a new array with the transformed values, while the `filter` method creates a new array by selecting only the elements that satisfy a specified condition.**

## **Difference Between map() and filter()**

### `map()` Method

`map` method is used to transform an array by applying a function to each element and creating a new array with the transformed values.

> Here is the syntax for using the `map` method – ⁣`array.map(callbackFunction)`

The `map` method is called on an array and takes a callback function as an argument. The callback function is executed for each element in the array, and the result of each function call is stored in a new array. 

The new array, containing the transformed elements, is returned as the result of the `map` method.

Imagine you have a list of numbers and you want to double each number. Instead of manually iterating over the array and performing the doubling operation, you can use the `map` method.

Let's look at how to double each number manually by using the traditional for loop to loop through the numbers and then push the result unto a new variable.

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}

console.log(doubledNumbers);
// Output: [2, 4, 6, 8, 10]
```

As you can see in this code example, we defined a variable called `numbers` that holds an array of numbers `[1, 2, 3, 4, 5]`.

We then create another variable, `doubledNumbers` and initialize it with an empty array – ⁣`[]`.

`for` loop is then used to loop through the numbers array, and each number is doubled by multiplying 2 to it.

The result is stored in the `doubledNumbers` array which, when console logged, we get `Output: [2, 4, 6, 8, 10]`. The process is quite simple but not as easier and better as using the map method.

Here is an example code that illustrate how to use a `map` method to double the numbers in an array.

```javascript
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(function(num) {
  return num * 2;
});

console.log(doubledNumbers);
// Output: [2, 4, 6, 8, 10]
```

In the above code example, we have the same array called `numbers` containing `[1, 2, 3, 4, 5]`. By using the `map` method on the `numbers` array, we provide a function (often called a ***callback function***) as an argument or parameter. 

This function takes each number from the array, doubles it by multiplying it by 2, and returns the doubled value. The `map` method then stores the transformed values in the new array (`doubledNumbers`). 

The new array `doubledNumbers` now contains `[2, 4, 6, 8, 10]`, where each element is the original value from the `numbers` array multiplied by 2.

### `filter()` Method

`filter` method is used to extract elements from an array based on a condition and create a new array containing only the elements that satisfy that condition.

> Here is the syntax for using the `filter`⁣ method – ⁣`array.filter(callbackFunction)`

The `filter` method is called on an array and takes a callback function as an argument. The callback function is executed for each element in the array, and only the elements that satisfy a specified condition are included in the new array. 

The new array, containing the filtered elements, is returned as the result of the `filter` method.

Let's say you have a list of numbers, and you want to extract only the even numbers. Instead of manually iterating over the array and checking each element, you can use the `filter` method.

First, let us use the traditional `for` loop method.

```javascript
const numbers = [1, 2, 3, 4, 5];
const evenNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}

console.log(evenNumbers);
// Output: [2, 4]
```

In the above code example, we initialize an empty array called `evenNumbers` to store the filtered elements. We use a `for` loop to iterate over each element of the `numbers` array. Inside the loop, we check if the current number is divisible by 2 (i.e., an even number) using the condition `numbers[i] % 2 === 0`. 

If the condition is true, we push the number into the `evenNumbers` array.

After the loop finishes, the `evenNumbers` array contains only the even numbers from the original `numbers` array, which in this case is `[2, 4]`.

Using the `filter` method provides a more concise and readable way to filter elements from an array based on a condition. 

Now let's use the filter method.

```javascript
const numbers = [1, 2, 3, 4, 5];

const evenNumbers = numbers.filter(function(num) {
  return num % 2 === 0;
});

console.log(evenNumbers);
// Output: [2, 4]
```

In the above code example, we have the same array called `numbers` containing `[1, 2, 3, 4, 5]`. By using the `filter` method on the `numbers` array, we provide a function (callback function) as an argument. 

This function takes each number from the array, checks if it is divisible by 2 (i.e., an even number) using the condition `num % 2 === 0`, and returns `true` or `false` accordingly.

The `filter` method evaluates the condition for each number in the array. It collects only the numbers for which the condition returns `true` and creates a new array (`evenNumbers`) with those numbers.

In this example, the resulting `evenNumbers` array contains `[2, 4]`, which are the even numbers from the original `numbers` array.

## In Few Points:

Both the `map` and `filter` methods are useful in JavaScript when working with arrays. They allow you to transform and extract data in a simpler and more concise way compared to traditional loops. 

The difference between map and filter method is that – ⁣`map` transforms each element of an array based on a transformation function and returns a new array of the same length, 

While, `filter` creates a new array with only the elements that satisfy a specified condition.

Both methods return a new array and do not modify the original array.