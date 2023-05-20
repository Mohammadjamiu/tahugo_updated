---
title: Difference Between the ‘This’ and ‘That’ Keyword in JavaScript
slug: difference between this and that in javascript
postdate: May 20, 2023
description: Difference Between This and That in JavaScript
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/this-in-object-scope.webp
weight: 166
categorylink: /categories/how-to-tech
type: posts
author: Mohammad Jamiu
Affliate_Links: false
draft: false
mathjax: false
Google_Ads: true
---
`this` is a keyword in JavaScript that refers to the current execution context or the object that a function is being executed within. It allows you to access and manipulate properties and methods within that context.

While `that` are commonly used variables as workarounds to preserve the value of `this` in certain situations, especially when dealing with nested or callback functions, where the value of `this` might refer to a different object or be undefined.

## **Difference Between the ‘This’ and ‘That’ Keyword**

### **The `this` Keyword:**

`this` is a special keyword in JavaScript that refers to the current execution context or the object that the function is being executed within.

The value of `this` is determined dynamically at runtime, based on how a function is invoked.

`this` provides a way to access and manipulate properties and methods within the current execution context.

> In simple term, when you enter a building, what wraps you up is the building because you are inside the building.
>
> Now, when you enter a room inside the building, what wraps you up is not the building, but the room that you entered.
>
> **How is this related to the `this` keyword?** The building can be thought of as an object or a function, and you (the person), inside the building (i.e., object or function) is representing the `this` keyword.
>
> So now as you entered a room, you are not directly enclosed by the building (i.e., object or function) rather you are enclosed by a new room (i.e., another object or function) hence your context or the `this` keyword context changes.

The value of `this` can change depending on the way a function is called:

**Global Scope** – When `this` is used in the global scope (outside any function), it refers to the global object, which is `window` in browsers and `global` in Node.js.

![this in the global scope](/images/this-in-global-scope.webp "this in the global scope")

**Object Method** – When `this` is used inside a method of an object, it refers to the object itself. It allows the method to access and manipulate the object's properties and methods.

```javascript
const person = {
  name: "John",
  greet: function () {
    console.log("Hello, " + this.name);
  },
};

person.greet(); // Output: Hello, John
```

![this in object scope](/images/this-in-object-scope.webp "this in object scope")

In the code example above example, `this` inside the `greet` method refers to the `person` object, so `this.name` accesses the `name` property of the object – `name: “John”`.

**Event Handlers** –When `this` is used within an event handler, such as a click event or a timer function e.g., (setTimeout), it usually refers to the element that triggered the event.

```javascript
const button = document.querySelector("#myButton");
button.addEventListener("click", function () {
  console.log("Button clicked:", this);
});
```

![this in event handlers context](/images/this-in-enventlistener-scope.webp "this in event handlers context")

In this case, `this` refers to the `button` element, as it is the object that triggered the click event.

**Explicit Binding** – JavaScript provides methods that allow us to explicitly set the value of `this` using functions such as `call()`, `apply()`, and `bind()`.

```javascript
function greet() {
  console.log("Hello, " + this.name);
}

const person = { name: "John" };

greet.call(person); // Output: Hello, John
```

In this code example, `greet()` is a function on its own and `person` is an object on its own.

In order to use the name in the `person` object inside the `greet()` function, `call()` is used to invoke the `greet` function with `person` as the explicit context for `this`.

> ***Note:***
>
> *The behavior of `this` can be different in arrow functions, as they do not bind their own `this` value, but rather inherit it from the surrounding lexical scope.*

Regular functions in JavaScript have their own `this` value, which is determined by how the function is called. It can change depending on the context or the way the function is invoked.

In arrow functions, the value of `this` is not determined by how the function is called, but rather by the surrounding (lexical) scope.

This means that `this` inside an arrow function refers to the same `this` value as the enclosing scope where the arrow function is defined.

Let's see an example to illustrate this behavior:

```javascript
const person = {
  name: "John",
  sayHello: function () {
    setTimeout(function () {
      console.log("Hello, " + this.name);
    }, 1000);
  },
  sayHelloArrow: function () {
    setTimeout(() => {
      console.log("Hello, " + this.name);
    }, 1000);
  },
};

person.sayHello(); // Output: Hello, undefined
person.sayHelloArrow(); // Output: Hello, John
```

In the code example above, we have an object called **“person”** with two methods: **“sayHello”** and **“sayHelloArrow”**. Both methods use a `setTimeout` function to delay the execution of an inner function.

In the **“sayHello”** method, we use a regular function as the inner function of `setTimeout`.

But, since regular functions have their own `this` value, the `this` inside the inner function (i.e., the function inside the `setTimeout()`) refers to the global object (or undefined in strict mode) – which is the **sayHello** method rather than the “person” object.

> **Remember the building analogy we gave previously.**
>
> *This means that `sayHello` method is the room that covers the function.*
>
> *While the `person` object is the building that covers the sayHello (the room).*

Hence, when we try to access “this.name”, it results in “undefined”.

On the other hand, in the **“sayHelloArrow”** method, we use an arrow function as the inner function of `setTimeout`.

The arrow function does not have its own `this` value and instead inherits the `this` value from the surrounding (lexical) scope, which is the “person” object.

Therefore, when we access “this.name” inside the arrow function, it correctly refers to the “name” property of the “person” object, resulting in the expected `output “Hello, John”`.

> Arrow functions in JavaScript provide a more convenient and predictable way to access the `this` value. By inheriting the `this` value from the surrounding scope, arrow functions eliminate the need to use workarounds like creating a separate variable or using functions like `bind()` to maintain the desired `this` context.

### **The `that` Keyword:**

`that` is just a keyword commonly used as variables within JavaScript functions as a workaround to preserve the value of `this` in certain scenarios.

This workaround is often used in nested functions or callback functions, where `this` might refer to a different object, context or is undefined.

Here is a code snippet to illustrate the `that` keyword:

```javascript
const person = {
  name: "John",
  greet: function () {
    const that = this;
    setTimeout(function () {
      console.log("Hello, " + that.name);
    }, 1000);
  },
};

person.greet(); // Output: Hello, John
```

In this example, the `greet` method of the `person` object uses the variable `that` to preserve the value of `this` within the nested callback function of **“setTimeout”**.

Without using `that`, `this` would refer to the global object (or undefined in strict mode) which is the function above it – the `greet` method instead of the `person` object.

It's important to note that the choice between using `this` or `that` depends on the specific context and requirements of the code.

**Generally, `this` is preferred when it correctly refers to the desired object, while `that` is used as a workaround when `this` needs to be preserved in nested or callback functions.**