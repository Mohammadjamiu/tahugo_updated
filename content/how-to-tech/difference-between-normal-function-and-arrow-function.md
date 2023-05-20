---
title: Difference Between Normal (Regular) Function and Arrow Function
slug: difference between normal function and arrow function
postdate: May 20, 2023
description: What is difference between normal function and arrow function?
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/function-anatomy.webp
weight: 167
categorylink: /categories/how-to-tech
type: posts
author: Mohammad Jamiu
Affliate_Links: false
draft: false
mathjax: false
Google_Ads: true
---
Functions, in JavaScript, are a fundamental concept that allow us to encapsulate reusable blocks of code. 

**Regular functions** also known as *normal functions* and **arrow functions** are two commonly used function types, each with its own characteristics and use cases. 

In this blog post, we'll explore these differences in detail, covering their syntaxes, lexical scope (i.e., surrounding scope), “this” binding, the use of “return,”, others and provide code examples to illustrate each concept.

## Normal (Regular) Functions

Regular functions are defined using the “function” keyword, followed by the function name, a list of parameters enclosed in parentheses, and the function body enclosed in curly braces. Example: `function add(a, b) { return a + b; }` 

![function syntax breakdown](/images/function-anatomy.webp "function syntax breakdown")

Regular functions offer flexibility in terms of “this” binding, constructors, and explicit return statements.

Let's see how to use a regular function:

```javascript
// Regular function example
function multiply(a, b) {
  return a * b;
}

const result = multiply(5, 3);
console.log(result); // Output: 15
```

In this example, the regular function `multiply` takes two parameters `a` and `b` and returns their product using the `return` statement. 

Regular functions provide an explicit way to specify the value to be returned.

## Arrow Functions

Arrow functions, introduced in ES6, provide a more concise syntax and have some distinct characteristics compared to regular functions. 

They are defined using a parameter list (which can be empty or enclosed in parentheses for multiple parameters), followed by the arrow `(=>)` and the function body. Example: `(a, b) => a + b`

Let see how to use an arrow function:

```javascript
// Arrow function example
const multiply = (a, b) => a * b;

const result = multiply(5, 4);
console.log(result); // Output: 20
```

The arrow function `multiply` in this example achieves the same functionality as the regular function. 

It implicitly returns the result of the expression `a * b` without using the `return` keyword. 

Arrow functions are especially useful when the function body consists of a single expression.

When an arrow function consists of multiple expressions or requires more complex logic, you need to use explicit curly braces `({})` and the `return` keyword. Here's an example:

```javascript
// Arrow function with multiple expressions
const multiplyAndAdd = (a, b, c) => {
  const product = a * b;
  const sum = product + c;
  return sum;
};

const result = multiplyAndAdd(2, 3, 4);
console.log(result); // Output: 10
```

In this example, the arrow function `multiplyAndAdd` takes three parameters (`a`, `b`, and `c`). 

Inside the function body enclosed in curly braces, it performs multiple expressions: calculating the product of `a` and `b`, adding `c` to the product, and returning the sum using the `return` statement.

By using explicit curly braces and the `return` keyword, you can handle more complex computations or perform multiple statements within an arrow function. 

This allows you to have greater control over the logic and the value to be returned.

> Remember that the use of curly braces and the `return` keyword is optional when the arrow function has a single expression. However, when dealing with multiple expressions, always use the curly braces and explicitly specify the return value using `return`.

## **Differences between Regular Functions and Arrow Functions**

### **1. Lexical Scope and “this” Binding:**

**Regular functions** have their own “this” value, which is determined by how the function is called. 

The value of “this” can vary based on the context in which the function is invoked.

**Read on:** *[Difference Between the ‘This’ and ‘That’ Keyword in JavaScript](/how-to-tech/difference-between-this-and-that-in-javascript/)*

**Arrow functions** do not have their own “this” binding. Instead, they inherit the value of “this” from the surrounding (lexical) scope. 

This allows arrow functions to maintain the same “this” value as the enclosing scope.

### **2. Use of “return”:**

**Regular functions** use the `return` keyword to explicitly specify the value to be returned. If no `return` statement is used, the function will return `undefined` by default.

**Arrow functions** have an implicit return behavior. If the function body consists of a single expression, that expression is automatically returned without using the `return` keyword. 

But, for more complex logic or multiple statements, explicit curly braces and the `return` keyword are required.

### **3. Constructors:**

**Regular functions** can be used as constructors with the `new` keyword to create new objects. They have a `prototype` property that can be used to define shared methods and properties for instances.

**Arrow functions** cannot be used as constructors. They do not have a `prototype` property and cannot be used to create new objects.

Regular functions provide flexibility in terms of “this” binding, constructors, and explicit return statements. On the other hand, arrow functions offer a more concise syntax, lexical scoping behavior, and implicit return.

|                 | Normal Function                     | Arrow Function                         |
| --------------- | ----------------------------------- | -------------------------------------- |
| Syntax          | function functionName(params) {...} | (params) => {...}                      |
| Lexical Scope   | Has its own “this” value            | Inherits “this” from surrounding scope |
| Constructors    | Can be used as constructors         | Cannot be used as constructor          |
| Use of “return” | Uses explicit “return” statements   | Has implicit return                    |