---
title: Difference Between JavaScript Object and JSON
slug: difference between javascript object and json
postdate: May 21, 2023
description: A JavaScript object is a data structure that allows for the
  organization and manipulation of data using key-value pairs, while JSON is a
  lightweight data interchange format derived from JavaScript object syntax.
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/js-object.webp
weight: 172
categorylink: /categories/how-to-tech
type: posts
author: Mohammad Jamiu
Affliate_Links: false
draft: false
mathjax: false
Google_Ads: true
---
JavaScript Objects are in-memory data structures that allow direct manipulation and access within JavaScript code. They are versatile, mutable, and provide an object-oriented approach to organizing data.

JSON, on the other hand, is a text-based data interchange format designed for easy data transmission and interoperability between systems. 

It provides a standardized way to represent structured data as a string, making it suitable for communication between different platforms and programming languages.

## **Difference Between JavaScript Object and JSON**

### \# **JavaScript Object**

A JavaScript object is a data structure that allows you to store and organize data using key-value pairs. It is a fundamental feature of the JavaScript programming language and provides a way to group related properties and methods together. 

Here are some key aspects of JavaScript objects:

#### a) Syntax -

JavaScript Objects are defined using curly braces `{}` and contain properties and methods enclosed within. Properties are specified as key-value pairs, where the keys are strings and the values can be of any data type, including strings, numbers, booleans, arrays, other objects, and even functions.

Here is an example code snippet:

```javascript
const person = {
  name: "John Doe",
  age: 25,
  isActive: true,
  address: {
    city: "New York",
    country: "USA"
  },
  hobbies: ["reading", "coding", "traveling"]
};

console.log(person.name); // Output: "John Doe"
console.log(person.age); // Output: 25
console.log(person.isActive); // Output: true
console.log(person.address.city); // Output: "New York"
console.log(person.address.country); // Output: "USA"
console.log(person.hobbies); // Output: ["reading", "coding", "traveling"]
```

![js object syntax](/images/js-object.webp "js object syntax")

In this code, the JavaScript object `person` is directly defined using the JSON-like syntax. It has properties such as `name`, `age`, `isActive`, `address`, and `hobbies`. The `address` property is an object itself, containing properties like `city` and `country`. The `hobbies` property is an array.

You can access the properties of the JavaScript object using dot notation (`person.name`, `person.age`, etc.), as demonstrated in the `console.log()` statements.

> When we discuss about JSON, you will discover that both JSON and JavaScript Object look alike but the obvious difference in their syntax is that - JS Object property looks like this -   `name: "John Doe"` while in JSON format look like -   `"name": "John Doe"`. 
>
> Do you notice the quotes that surround the **key name.**
>
> The other difference is that JS Object start with `{ code goes here }` while in JSON `` `{ Code goes here }` `` For example, in JS Object we have - `{ name: "John Doe" }` while in JSON we have - `` `{ "name": "John Doe"}` ``

#### b) Flexibility -

JavaScript Objects are dynamic and mutable, meaning that you can add, modify, or remove properties at any time. They provide a flexible way to represent and manipulate data within JavaScript code.

Here is a code snippet that demonstrate the dynamic and mutable nature of JavaScript Objects:

```javascript
// Define a JavaScript object
let person = {
  name: "John Doe",
  age: 25,
  isActive: true
};

console.log(person); // Output: { name: 'John Doe', age: 25, isActive: true }

// Add a new property
person.address = "123 Main St";
console.log(person); // Output: { name: 'John Doe', age: 25, isActive: true, address: '123 Main St' }

// Modify an existing property
person.age = 30;
console.log(person); // Output: { name: 'John Doe', age: 30, isActive: true, address: '123 Main St' }

// Remove a property
delete person.isActive;
console.log(person); // Output: { name: 'John Doe', age: 30, address: '123 Main St' }
```

![dynamic and mutablenature of js object](/images/flexibility-of-js-object.webp "dynamic and mutablenature of js object")

In this code, we start by defining a JavaScript object `person` with properties such as `name`, `age`, and `isActive`. We then demonstrate the dynamic and mutable nature of JavaScript objects.

First, we add a new property `address` to the `person` object using dot notation (`person.address = "123 Main St"`). This showcases the ability to add properties to an object dynamically.

Next, we modify the `age` property by assigning it a new value (`person.age = 30`). This demonstrates the capability to modify existing properties of an object.

Finally, we remove the `isActive` property using the `delete` keyword (`delete person.isActive`). This highlights the ability to remove properties from an object.

Throughout the code, we log the `person` object to the console to observe the changes made to the object. This exemplifies the flexibility of JavaScript objects, allowing for the addition, modification, and removal of properties at any time.

#### c) Object-Oriented Programming (OOP) -

JavaScript Objects are a fundamental part of object-oriented programming in JavaScript. They can serve as blueprints for creating multiple instances of similar objects using constructor functions or classes.

Here's a code snippet that demonstrates how JavaScript objects can serve as blueprints for creating multiple instances using constructor functions:

```javascript
// Constructor function for creating Person objects
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Create instances of Person using the constructor function
const person1 = new Person("John Doe", 25);
const person2 = new Person("Jane Smith", 30);

console.log(person1); // Output: Person { name: 'John Doe', age: 25 }
console.log(person2); // Output: Person { name: 'Jane Smith', age: 30 }
```

#### d) Functionality - 

JavaScript Objects can have methods, which are functions stored as object properties. These methods can be called to perform specific actions or computations related to the object's data.

Here's a code snippet that illustrates how JavaScript objects can have methods:

```javascript
// Define a JavaScript object with a method
const calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  }
};

// Call the methods of the object
console.log(calculator.add(5, 3)); // Output: 8
console.log(calculator.subtract(10, 4)); // Output: 6
```

#### e) In-Memory Data Structure -

JavaScript Objects are in-memory data structures, allowing direct manipulation and access to properties and methods within JavaScript code.

### \# **JSON (JavaScript Object Notation)**

JSON is a lightweight data interchange format that originated from JavaScript object syntax. It provides a standardized way to represent structured data as a string, making it easy to transmit and exchange data between different systems and programming languages. 

Here are some important aspects of JSON:

#### a) Syntax -

JSON follows a specific syntax derived from JavaScript object syntax. It uses key-value pairs separated by colons (`:`) and is typically represented as a string. Property names in JSON must be enclosed in double quotes (`"`), and strings, numbers, booleans, arrays, objects (limited to key-value pairs), and `null` are supported data types.

```javascript
// JSON Syntax Example
const jsonCode = `{
  "name": "John Doe",
  "age": 25,
  "isActive": true,
  "hobbies": ["reading", "coding"],
  "address": {
    "city": "New York",
    "country": "USA"
  }
}`;

console.log(jsonCode);

// Output:
// {
//   "name": "John Doe",
//   "age": 25,
//   "isActive": true,
//   "hobbies": ["reading", "coding"],
//   "address": {
//     "city": "New York",
//     "country": "USA"
//   }
// }
```

#### b) Data Interchange -

JSON is primarily used as a data interchange format. It allows data to be easily transferred between systems, platforms, and programming languages. 

JSON provides a universal format that is widely supported and understood across different environments.

#### c) String Representation -

JSON data is represented as a string, allowing for easy storage and transmission. The string representation enables JSON to be consumed by various systems, including web browsers, servers, and APIs.

#### d) Limited Data Types -

Unlike JavaScript Object that supports all data types, JSON supports a subset of the data types available in JavaScript. 

It does not include functions or undefined values. JSON's focus is on data representation and interchange rather than executing code.

#### e) Serialization and Deserialization -

JSON provides mechanisms for serializing (converting to a string) and deserializing (parsing from a string) data. 

Serialization converts JavaScript objects or other data types into JSON strings, while deserialization converts JSON strings back into their respective data structures.

Here comes the end. Hope you get the point :tada: