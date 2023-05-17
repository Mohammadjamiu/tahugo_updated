---
title: Difference Between console.log() and document.write() in JavaScript
slug: difference between console.log and document.write in javascript
postdate: May 17, 2023
description: "`console.log()` outputs information to the browser's console for
  debugging and testing purposes, while `document.write()` directly modifies the
  HTML document, inserting content into the web page visible to users."
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/log-and-write.webp
weight: 161
categorylink: /categories/how-to-tech
type: posts
author: Mohammad Jamiu
Affliate_Links: false
draft: false
mathjax: false
Google_Ads: true
---
The main difference between `console.log()` and `document.write()` is that `console.log()` **outputs information to the browser's console for debugging and testing purposes, while `document.write()` directly modifies the HTML document, inserting content into the web page visible to users.**

## What is `console.log()`?

`Console.log()` is a method used for debugging and logging purposes in JavaScript. It prints the specified message or value to the browser's console. 

The console is a developer tool included in web browsers like Chrome and Firefox that allows developers to view and interact with JavaScript code. 

**Read on:** *[What Is the Difference Between console.log() and alert() in JavaScript?](/how-to-tech/difference-between-console-log-and-alert-in-javascript/)*

It is primarily used for debugging, inspecting variables, and testing code. The output of `console.log()` can be seen in the browser's developer console, which provides a textual representation of the logged data.

```javascript
// Using console.log()
let myMessage = "Hello, world!";
console.log(myMessage); // Output: Hello, world!
```

The **myMessage** variable holds the string **“Hello, world!”**. When we call `console.log(myMessage)`, it prints the value of the **myMessage** variable to the browser's console, which is – “Hello, world!”.

![console.log() output](/images/loogmymessage.webp "console.log() output")

The console is a developer tool that can be accessed using browser developer tools (e.g., Chrome DevTools, Firefox Developer Tools). The output is displayed in the console, typically as part of a logged message.

## What is `document.write()`?

`Document.write()` is a method of the document object in JavaScript, representing the HTML document being displayed in the browser. 

It is used to dynamically insert content into the web page. When invoked, document.write() directly writes the provided content to the document, altering the HTML structure. 

It can be used to add text, HTML, or even JavaScript code to the page, and the output will be visible in the rendered web page.

```javascript
// Using document.write()
document.write("Hello, world!");
```

![document.write() in javascript](/images/document-write.webp "document.write() in javascript")

Here, we directly invoke document.write(“Hello, world!”). The specified content, in this case, the string “Hello, world!”, is written directly to the HTML document that is being displayed in the browser. 

When the web page loads or when this code is executed, the content is inserted into the document, modifying the rendered web page itself. 

You will see “Hello, world!” displayed on the web page as part of the visible content.

It's important to note that while `console.log()` works solely with JavaScript code and outputs to the console, `document.write()` directly modifies the HTML document and affects the visible content of the web page. 

Accordingly, `console.log()` is mainly used for debugging and logging during development, while `document.write()` is typically used for dynamically generating or modifying the content displayed on the page and is usually not recommended for extensive use.

## Difference Between console.log() and document.write() in JavaScript

|                 | console.log()                                      | document.write()                            |
| --------------- | -------------------------------------------------- | ------------------------------------------- |
| Purpose         | Output information to the console for debugging    | Output content directly to the web page     |
| Output          | Prints output to the console                       | Renders output as content on the web page   |
| Usage           | Debugging, logging                                 | Modifying the visible content of the page   |
| Supported Types | All types of data: strings, numbers, objects, etc. | Text, HTML, or JavaScript code              |
| Overwriting     | Does not overwrite the document                    | Can overwrite the entire document if called |
| Use with HTML   | Does not interpret HTML tags                       | Interprets and renders HTML tags            |