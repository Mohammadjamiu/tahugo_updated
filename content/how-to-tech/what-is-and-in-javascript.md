---
title: What is != and !== in JavaScript?
slug: what is not equal and strict not equal in javascript
postdate: July 7, 2023
keywords:
  - JavaScript
  - inequality operators
  - "!= operator"
  - "!== operator"
  - JavaScript comparisons
description: The `!=` operator checks for inequality while ignoring type,
  whereas the `!==` operator checks for both inequality and type mismatch.
tags:
  - programming and coding
  - javascript
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/not-equal-and-strict-not-equal-in-js.webp
weight: 320
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
JavaScript provides two comparison operators, `!=` and `!==`, which are used to compare two values and determine their equality. 

These operators play a crucial role in JavaScript programming, as they allow developers to perform comparisons and make decisions based on the results.

{{< table-of-contents >}}

## **The != Operator**

The `!=` operator is known as the “not equal” operator in JavaScript. It compares two values and returns `true` if they are not equal, regardless of their data types. 

If the values are equal, it returns `false`. The `!=` operator performs both value and type coercion before making the comparison.

Here's an example:

```javascript
var a = 1;
var b = 2;

console.log(a != b);
```

```
 true
```

In this example, `a` and `b` are not equal, so the `!=` operator returns `true`. The operator compares the values `1` and `2` and determines that they are different.

The `!=` operator can also be used with strings:

```javascript
var c = "hello";
var d = "world";

console.log(c != d); 
```



```
 true
```

In this case, `c` and `d` are different strings, so the `!=` operator returns `true`.

## **The !== Operator**

The `!==` operator, called the “strict not equal” operator, compares two values for both inequality and type. 

It returns `true` if the values are not equal or if they have different types. 

If the values are equal and have the same type, it returns `false`.

Consider the following example:

```javascript
var e = 5;
var f = "5";

console.log(e !== f); 
```

```
 true
```

In this example, `e` and `f` have the same value, but they are of different types (`number` and `string`), so the `!==` operator returns `true`.

The `!==` operator is especially useful when you want to perform strict comparisons, ensuring that the values being compared are not only unequal but also of different types.

## **Usage of != and !== Operators**

The `!=` and `!==` operators can be utilized in various JavaScript expressions, including conditional statements, loops, and functions. 

These operators enable you to create decision-making logic based on value comparisons.

For instance, let's consider a conditional statement:

```javascript
var a = 1;
var b = 2;

if (a != b) {
  console.log("a is not equal to b");
} else {
  console.log("a is equal to b");
}
```

In this example, the `if` statement checks if `a` is not equal to `b`. 

If they are not equal, the code inside the `if` block will be executed and **“a is not equal to b”** will be printed to the console. 

Otherwise, the code inside the `else` block will be executed.

## **Wrap Up**

In JavaScript, the `!=` and `!==` operators provide a way to compare values for inequality. 

The `!=` operator checks for inequality while ignoring type, whereas the `!==` operator checks for both inequality and type mismatch. 

These operators are versatile tools that can be used in various JavaScript expressions, enabling developers to write concise and clear code. 

By understanding and utilizing these operators effectively, you can enhance your JavaScript programming skills and create more robust applications.

## **Frequently Asked Questions**

1. **Can I use the `!=` and `!==` operators with other data types like arrays or booleans?** Yes, the `!=` and `!==` operators can be used with other data types, including arrays and booleans. 
2. **Are there any performance differences between `!=` and `!==`?** In terms of performance, there is generally no significant difference between the `!=` and `!==` operators. Both operators are efficient and provide similar functionality.
3. **When should I use the `!=` operator instead of the `!==` operator?** The `!=` operator should be used when you want to compare values for inequality, while disregarding their types. If you need to compare values for both inequality and type mismatch, use the `!==` operator.
4. **Can I use the `!=` and `!==` operators with null and undefined values?** Yes, you can use the `!=` and `!==` operators to compare null and undefined values. 
5. **Are the `!=` and `!==` operators exclusive to JavaScript?** No, the `!=` and `!==` operators are commonly used in many programming languages. However, the exact behavior of these operators may vary slightly between languages.