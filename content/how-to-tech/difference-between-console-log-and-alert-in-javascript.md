---
title: What Is the Difference Between console.log() and alert() in JavaScript?
slug: difference between console log and alert in javaScript
postdate: May 16, 2023
description: "`console.log()` is used for printing messages or values to the
  browser's console, which is a developer tool for debugging and troubleshooting
  code while `alert()` is used to display a message box to the user with the
  specified message and an OK button."
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/consolelog.webp
weight: 159
categorylink: /categories/how-to-tech
type: posts
author: Mohammad Jamiu
Affliate_Links: false
draft: false
mathjax: false
Google_Ads: true
---
`console.log()` and `alert()` are functions/methods in JavaScript that are used for displaying messages, but they are used for different purposes.

> Method is just a function inside another function.

The main difference between `console.log()` and `alert()` in JavaScript is that `console.log()` is part of the console object while `alert()` is part of the window object.

## What is `console.log()`?

`console.log()` is used for printing messages or values to the browser's console, which is a developer tool for debugging and troubleshooting code. 

It does not interrupt the execution of the code and is mainly used by developers to check the output of certain values or log messages for debugging purposes.

```javascript
let x = 10;
console.log(x);
```

The code above, will print out the value of `x` (which is 10) to the console, so you can see what the value is as your code runs.

![console.log() in javascript](/images/consolelog.webp "console.log() in javascript")

**Read on:** *[Difference Between console.log() and document.write() in JavaScript?](/how-to-tech/difference-between-console.log-and-document.write-in-javascript/)*



## What is `alert()`?

`alert()` is used to display a message box to the user with the specified message and an OK button. 

```javascript
alert("Are you sure you want to delete this?");
```

When you run this code, it will display a pop-up dialog box with the message *“Are you sure you want to delete this?”* and the user will have to click the “OK” button to continue.

![alert() in javascript](/images/alert.webp "alert() in javascript")

It interrupts the execution of the code until the user interacts with the message box by clicking OK. 

It's typically used to provide information or prompt the user for input, pausing the code's execution until the user responds.

## Difference between `console.log()` and `alert()` in JavaScript?

| Feature                        | console.log()                                                                                | alert()                                                                                        |
| ------------------------------ | -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Output                         | `console.log()` prints messages or values to the console.                                    | `alert()` displays a message box on the screen.                                                |
| Interruption of code execution | `console.log()` does not interrupt the code's execution, allowing it to continue running.    | `alert()`, however, pauses the code's execution until the user interacts with the message box. |
| Purpose                        | `console.log()` is primarily used by developers for debugging, logging, and checking values. | `alert()` is used when you want to communicate information or prompt user interaction.         |

In just a few points, `console.log()` **is used for internal debugging and logging purposes, while `alert()` is used to interact with the user and display messages in a pop-up window that pauses the code's execution.**