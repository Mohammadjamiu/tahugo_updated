---
title: Difference Between || and && in JavaScript?
slug: what is the difference between logical or and logical and in javascript
postdate: July 7, 2023
keywords:
  - JavaScript logical operators
  - Difference between || and && operators
  - Logical OR operator in JavaScript
  - Logical AND operator in JavaScript
  - Usage of || and && with non-Boolean values
description: "What sets the || and && operators apart in JavaScript? Discover
  their distinctions: || returns the first truthy value, while && returns the
  first falsy value."
tags:
  - javascript
  - programming and coding
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/logical-or-and-logical-and.webp
weight: 321
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
In JavaScript, the `||` (logical OR) and `&&` (logical AND) operators are used to combine two or more expressions and return a Boolean value. 

The && operator returns true if both of its operands are true, and false otherwise. The || operator returns true if either of its operands are true, and false otherwise.

{{< table-of-contents >}}

## **\|| (Logical OR) Operator**

The `||` operator in JavaScript is primarily used to combine expressions and return the value of the first truthy operand encountered. 

If both operands are falsy, the operator returns the value of the last operand. 

Let's dive deeper into the behavior of the `||` operator:

### **\|| (Logical OR) Operation**

```javascript
// Logical OR operation
true || true; // true
true || false; // true
false || true; // true
false || false; // false
```

### **\|| (Logical OR) Example Code**

```javascript
var a = true;
var b = false;

console.log(a || b); 

```

```
 true
```

In this case, `a` is evaluated first, and since it is a truthy value, the expression `a || b` returns `true`.

### **Usage with Non-Boolean Values**

While the `||` operator is commonly associated with Boolean values, it can also work with non-Boolean values. 

JavaScript utilizes a process called “coercion” to convert these values into Boolean equivalents before evaluation.

In the context of the `||` operator, if the first operand is truthy, it immediately returns that value without evaluating the second operand. 

If the first operand is falsy, the operator proceeds to evaluate the second operand and returns it if it is truthy.

For example:

```javascript
const favoriteFruit = "apple";
const fallbackFruit = "orange";

const selectedFruit = favoriteFruit || fallbackFruit;
console.log(selectedFruit);  // "apple"
```

```
 apple
```

In this scenario, `favoriteFruit` has a truthy value (“apple”), so the `||` operator returns that value without evaluating `fallbackFruit`. 

This behavior allows for concise fallback or default value assignments.

### **Usage in Conditional Statements**

The `||` operator is commonly used in conditional statements to provide a default value when a variable or expression is falsy. 

Consider the following example:

```javascript
const username = getUserInput() || "Guest";
console.log("Welcome, " + username);
```

In this case, if the `getUserInput()` function returns a truthy value (e.g., a valid username), the `||` operator short-circuits and assigns that value to `username`. 

However, if the function returns a falsy value (e.g., an empty string or `null`), the `||` operator assigns the default value "Guest" to `username`. 

This approach ensures that a meaningful username is used when available, or a fallback value is provided.

### **Usage in Loops**

The `||` operator can also be useful in loop conditions, allowing for concise termination conditions. 

Consider the following example:

```javascript
let i = 0;
const array = [1, 2, 3, 4];

while (array[i] || i === 0) {
  console.log(array[i]);
  i++;
}
```

In this scenario, the loop continues as long as the `array[i]` expression is truthy or if `i` is equal to 0. 

The `||` operator ensures that the loop terminates once both conditions are falsy, effectively iterating over the elements of the array.

## **&& (Logical AND) Operator**

The `&&` operator in JavaScript is used to combine expressions and return the value of the first falsy operand encountered. 

If both operands are truthy, the operator returns the value of the last operand. 

Let's explore the behavior of the `&&` operator in more detail:

### **&& (Logical AND) Operation**

```javascript
// Logical AND operation
true && true; // true
true && false; // false
false && true; // false
false && false; // false
```

### **&& (Logical AND) Example Code**

```javascript
var a = true;
var b = false;

console.log(a && b); 
```

```
 false
```

In this case, `a` is evaluated first, and since it is a truthy value, it proceeds to the second value b which is falsy. 

Hence, the expression `a && b` returns `false` since `b` is falsy.

### **Usage with Non-Boolean Values**

Similar to the `||` operator, the `&&` operator can work with non-Boolean values by employing coercion to Boolean equivalents.

When the `&&` operator encounters a falsy value as the first operand, it immediately returns that value without evaluating the second operand. 

This behavior is based on the principle of short-circuiting, which saves unnecessary evaluation when the first operand already determines the outcome.

Consider the following examples:

```javascript
const a = "apple";
const b = "orange";

console.log(a && b);  // "orange"
console.log(b && a);  // "apple"
console.log(a && ""); // ""
console.log("" && a); // ""
```

```


  orange
  apple
  " "
  " "
```

In the first two cases, both operands are truthy, so the `&&` operator returns the value of the second operand. 

The operator evaluates the first operand and then proceeds to evaluate the second operand. 

Since both operands have truthy values, the result is the value of the second operand.

In the last two cases, one of the operands is falsy. When the `&&` operator encounters a falsy value as the first operand, it immediately returns the falsy value without evaluating the second operand.

### **Usage in Conditional Statements**

The `&&` operator is frequently used in conditional statements to perform multiple checks within a single expression. This allows for concise and readable code.

Consider the following example:

```javascript
if (condition1 && condition2) {
  // Code to execute if both conditions are true
}
```

In this scenario, the code inside the `if` statement is executed if both `condition1` and `condition2` are truthy. 

If either of the conditions evaluates to a falsy value, the code block is skipped. 

The `&&` operator enables the logical combination of conditions, providing a compact syntax for complex conditions.

### **Usage in Loops**

The `&&` operator is also beneficial in loop conditions to specify multiple criteria for iteration. 

Let's look at an example:

```javascript
for (let i = 0; i < array.length && array[i] !== 0; i++) {
  console.log(array[i]);
}
```

In this case, the loop continues as long as both conditions are true: `i` is less than the length of the array, and the value of `array[i]` is not equal to 0. 

If either condition becomes false, the loop terminates. The `&&` operator allows for concise specification of multiple conditions within the loop.

### **Usage in Functions**

The `&&` operator can be utilized within functions to perform conditional operations or set default values. Let's consider an example:

```javascript
function greetUser(name) {
  name && console.log("Hello, " + name);
  !name && console.log("Hello, Guest");
}

greetUser("John");   // "Hello, John"
greetUser(null);     // "Hello, Guest"
greetUser(undefined);  // "Hello, Guest"
```

```


  Hello, John
  Hello, Guest
  Hello, Guest
```

In this function, the `&&` operator is used to conditionally execute code based on the truthiness of the `name` parameter. 

If `name` is truthy (e.g., a valid name), the `&&` operator executes the first expression, which logs a personalized greeting. 

If `name` is falsy (e.g., `null` or `undefined`), the `&&` operator skips the first expression and executes the second expression, which logs a generic greeting for guests.

## **Wrap Up**

In JavaScript, the `||` and `&&` operators are very important  in controlling the flow of execution and combining expressions. 

The `||` operator returns the value of the first truthy operand encountered, while the `&&` operator returns the value of the first falsy operand encountered. 

These operators can work with both Boolean and non-Boolean values through coercion.

The `||` operator is commonly used to provide fallback or default values, especially in conditional statements and assignments. 

It allows for concise code by short-circuiting when a truthy value is encountered. On the other hand, the `&&` operator is often utilized for conditional checks and loop conditions. 

It enables the combination of multiple conditions within a single expression, making the code more compact and readable.

## **FAQs**

1. **What happens if both operands in the `||` operator are falsy?** In such cases, the `||` operator returns the value of the last operand. It evaluates both operands and returns the last operand when both are falsy.
2. **Can the `||` operator be used with Boolean values directly?** Yes, the `||` operator can be used with Boolean values. It simply returns the value of the first truthy operand encountered or the last falsy operand if both are falsy.
3. **How does the `&&` operator work with non-Boolean values?** When the `&&` operator encounters non-Boolean values, it undergoes coercion to convert them into Boolean equivalents. The operator returns the first falsy operand encountered or the last truthy operand if both are truthy.
4. **Is short-circuiting unique to `||` and `&&` operators in JavaScript?** No, short-circuiting is a fundamental principle in JavaScript that applies to other logical operators as well. It allows for efficient evaluation by skipping unnecessary operations when the outcome is already determined.
5. **Can the `&&` operator be used for assigning default values?** Yes, the `&&` operator can be used to assign default values when combined with conditional checks. It allows for concise syntax by checking the truthiness of a variable or expression and providing a fallback value if it is falsy.
6. **How can the `&&` operator be used within functions?** The `&&` operator can be used in functions to conditionally execute code based on the truthiness of a parameter or variable. It enables concise conditional operations and default value assignments.