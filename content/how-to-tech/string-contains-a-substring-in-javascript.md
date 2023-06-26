---
title: How to Check If a String Contains a Substring in JavaScript?
slug: string contains a substring in javascript
postdate: June 26, 2023
keywords:
  - JavaScript
  - substring
  - string manipulation
  - string search
  - programming
description: To determine if a string contains a substring in JavaScript, you
  can use methods like `indexOf()`, `includes()`, or regular expressions. These
  techniques offer efficient ways to perform substring checks and manipulate
  strings in JavaScript.
tags:
  - javascript
  - programming and coding
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/how-to-check-for-substring-in-js.webp
weight: 281
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
Checking whether a string contains a specific substring is a common requirement in JavaScript programming. 

Whether you need to validate user input or search for specific patterns within a larger string, having the ability to check for substrings is crucial.

This article will guide you through the process of checking for substrings in JavaScript, providing you with the necessary knowledge to implement this functionality in your projects.

{{< table-of-contents >}}

## Using the `indexOf()` Method

The `indexOf()` method is a built-in JavaScript function that allows you to find the position of a substring within a string. 

It returns the index of the first occurrence of the substring, or -1 if the substring is not found. 

Here's an example of how to use the `indexOf()` method to check for a substring:

```javascript
const str = "Hello, world!";
const substring = "world";

if (str.indexOf(substring) !== -1) {
  console.log("Substring found!");
} else {
  console.log("Substring not found.");
}
```

In the provided code, we first declare a constant variable named `str` and assign it the value “Hello, world!”. 

Then, we declare another constant variable named `substring` with the value “world”.

Next, we use an `if` statement to check if the `indexOf()` method is not equal to -1. The `indexOf()` method is applied to the `str` variable, passing the `substring` as an argument. 

If the `substring` is found within the `str`, the condition evaluates to true, and the message “Substring found!” is logged to the console. 

Otherwise, if the `substring` is not found, the condition evaluates to false, and the message “Substring not found.” is logged to the console.

This code checks whether the string “Hello, world!” contains the substring “world” using the `indexOf()` method and provides the corresponding output based on the result.

## Utilizing the `includes()` Method

Introduced in ECMAScript 2015 (ES6), the `includes()` method provides a simpler and more intuitive way to check for substrings in JavaScript. This method returns a boolean value indicating whether the substring is found or not. 

Here's an example:

```javascript
const str = "Hello, world!";
const substring = "world";

if (str.includes(substring)) {
  console.log("Substring found!");
} else {
  console.log("Substring not found.");
}
```

## Employing Regular Expressions (`RegExp`)

Regular expressions (`RegExp`) offer a powerful and flexible way to search for patterns within strings. 

You can use the `test()` method of a regular expression to check whether a string contains a specific substring. Here's an example:

```javascript
const str = "Hello, world!";
const pattern = /world/;

if (pattern.test(str)) {
  console.log("Substring found!");
} else {
  console.log("Substring not found.");
}
```

## Comparing Performance Considerations

When checking for substrings, it's important to consider the performance implications, especially if you're working with large strings or performing frequent checks. 

In general, the `includes()` method tends to be faster than the `indexOf()` method. However, for more complex pattern matching, regular expressions might provide better flexibility at the cost of performance.

## Case Sensitivity in Substring Checks

By default, the methods discussed earlier are case-sensitive, meaning they distinguish between uppercase and lowercase characters. 

If you want to perform a case-insensitive search, you can convert both the string and the substring to lowercase or uppercase before applying any of the methods. 

Here's an example using the `toLowerCase()` method:

```javascript
const str = "Hello, world!";
const substring = "WORLD";

if (str.toLowerCase().includes(substring.toLowerCase())) {
  console.log("Substring found!");
} else {
  console

.log("Substring not found.");
}
```

## Wrap Up

Checking whether a string contains a substring is a fundamental task in JavaScript. In this article, we explored three different methods to achieve this: the `indexOf()` method, the `includes()` method, and regular expressions (`RegExp`). 

Each method has its own advantages and considerations. Remember to choose the most suitable method based on your specific use case.

## FAQs

1. **Can I use these methods to check for multiple substrings within a string?** Yes, you can use these methods in a loop to check for multiple substrings within a string.
2. **Are these methods case-sensitive?** By default, these methods are case-sensitive. However, you can convert the string and substring to lowercase or uppercase to perform a case-insensitive search.
3. **Can I use regular expressions with variables to check for substrings?** Yes, you can use variables within regular expressions to dynamically search for substrings.
4. **Which method should I choose for better performance?** The `includes()` method generally performs better than the `indexOf()` method. However, for complex pattern matching, regular expressions may be more suitable.
5. **Is there a limit to the size of the string I can check?** There is no inherent limit to the size of the string you can check. However, keep in mind that larger strings may have a performance impact.