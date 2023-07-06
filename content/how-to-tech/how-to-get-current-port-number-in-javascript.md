---
title: How to Get Current Port Number in JavaScript?
slug: how to get current port number in javascript
postdate: July 4, 2023
keywords:
  - JavaScript port number
  - Retrieve current port
  - Location object
  - URL parsing
  - Web development port handling
description: Discover how to retrieve the current port number in JavaScript
  using the location object and URL parsing.
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/current-port.webp
weight: 312
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
Before we look at how to get the current port number in JavaScript, we need to understand what port numbers are?

## Understanding port numbers in URLs

Suppose we have the URL: `http://example.com:8080/path/to/page`

In this example, the port number is `8080`. It is appended to the domain name `example.com` and separated by a colon (`:`). 

This specific port allows the web server to listen for incoming requests on that port.

> Please note that the actual port number used in URLs can vary depending on the specific web application or service being accessed.

## **How to Get Current Port Number in JavaScript?**

### **1. Make Use of the `location` Object**

JavaScript provides a built-in `location` object that represents the current URL of the webpage. 

This object allows us to easily retrieve the current port number. 

Here is the code to retrieve the port number:

```javascript
const currentPort = window.location.port;
console.log("Current Port:", currentPort);
```

In the code example above, we declared a variable `currentPort` which stores the information provided by `window.location.port`. 

* The `window` object represents the current browser window, while the `location` property of the `window` object provides information about the ongoing URL.
* The `port` property of the `location` object returns the current port number. 
* Finally, `console.log("Current Port:", currentPort)` is used to display the port number to the console.

For example, the page I was working on has the URL:  `http://localhost:1313/how-to-tech/how-to-get-current-port-number-in-javascript/` so in order for me to know the port number even though from the URL I can easily identify it, I just open the developer tool by right-clicking on the page.

And then I copied the code above into the console, and here is the result.

![URL](/images/url-complete-port.webp "URL")

![port number](/images/current-port.webp "port number")

If there is no port number, you will get an empty string as the result.

![empty port number](/images/empty-port-number.webp "empty port number")

### **2. Alternative Method: Parsing the URL**

If the `location` object is not available or does not provide the desired information, we can parse the URL string to extract the port number. 

For example, in the code below,

```javascript
const currentUrl = window.location.href;

const url = new URL(currentUrl);
const currentPort = url.port;

console.log("Current Port:", currentPort);
```

* The `href` property of the `location` object returns the complete URL of the current webpage.
* The `URL` constructor parses the URL string.
* The `port` property of the `URL` object returns the port number.
* Finally, `console.log("Current Port:", currentPort)` is used to display the port number to the console.

## **Wrap Up**

Retrieving the current port number in JavaScript is a fundamental task when working with web applications. 

In this guide, we look at two methods: making use of the `location` object and parsing the URL. 

By following the step-by-step instructions, you can easily obtain the current port number and use it in your JavaScript code. 

Remember that the methods discussed here retrieve the current port number of the webpage's URL and are not intended for remote URLs. 

For remote URLs, server-side solutions are typically required.

## **FAQs (Frequently Asked Questions)**

### **1. How can I verify if the current port matches a specific value?**

To check whether the current port matches a specific value, you can use a simple conditional statement in JavaScript. Here's an example:

```javascript
   if (currentPort === "8080") {
     console.log("The current port matches 8080.");
   } else {
     console.log("The current port does not match 8080.");
   }
```

In this example, we compare the `currentPort` variable with the value `"8080"`. If they match, it will log a message indicating that the current port matches the desired value. 

Otherwise, it will log a message stating that the current port does not match.

### **2. Can I use these methods to get the port number of a remote URL?**

No, these methods retrieve the port number of the current webpage's URL. They are not intended for retrieving the port number of remote URLs.

If you need to obtain the port number of a remote URL, you will typically require a server-side solution.

### **3. What if the URL does not contain a port number?**

If the URL does not specify a port number, both methods discussed in this guide will return an empty string (`""`) for the `currentPort` variable. You can check for an empty string and handle it accordingly in your JavaScript code.