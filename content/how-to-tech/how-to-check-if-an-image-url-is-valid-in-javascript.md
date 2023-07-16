---
title: How to Check if an Image URL is Valid in JavaScript?
slug: how to check if an image url is valid in javascript
postdate: July 15, 2023
keywords:
  - image URL validation
  - JavaScript
  - URL validation
  - image URL verification
  - web development
description: Validate image URLs in JavaScript using techniques like regular
  expressions, the Fetch API, and external libraries. Ensure the URLs are
  correct, accessible, and error-free.
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/valid-image-in-js-or-not.webp
weight: 332
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
When working with image URLs in JavaScript, it's crucial to ensure their validity. This article provides a comprehensive guide on how to check if an image URL is valid in JavaScript, along with code examples.

{{< table-of-contents >}}

## **Understanding Image URL Validation**

Validating an image URL ensures that the URL points to an existing and accessible image file. 

It helps prevent errors when attempting to load or process the image in your JavaScript application.

## **Ways to Check if an Image URL is Valid in JavaScript?**

### **1. Using Regular Expressions**

Regular expressions provide a powerful way to validate image URLs. By defining a pattern that matches the expected format of an image URL, you can perform a validation check using JavaScript's `test()` method.

Here's an example of using regular expressions to validate an image URL:

```javascript
const imageUrl = 'https://example.com/images/image.jpg';
const imageUrlRegex = /\.(jpeg|jpg|gif|png)$/i;
const isValidImageUrl = imageUrlRegex.test(imageUrl);

console.log(isValidImageUrl);
```

```
 true
```

In the code snippet above, we define a regular expression pattern (`imageUrlRegex`) that matches common image file extensions. 

We then use the `test()` method to check if the `imageUrl` matches the pattern, indicating whether the URL is valid.

If you noticed in the code, you will see `(jpeg|jpg|gif|png).` This defines the extension of the image that you want to access.

If you want to validate for an image with a **.webp** extension, you have to modify it to this: `(jpeg|jpg|gif|png|webp).`

```javascript
const imageUrl =
  "https://tooabstractive.com/images/jonathan-kemper-n8ayh8r2rwq-unsplash.webp";
const imageUrlRegex = /\.(jpeg|jpg|gif|png|webp)$/i;
const isValidImageUrl = imageUrlRegex.test(imageUrl);

console.log(isValidImageUrl);

```

### **2. Using the Fetch API**

The Fetch API offers a convenient method to check the validity of an image URL. By making a `fetch` request to the URL and checking the response status, you can determine whether the URL points to a valid image.

Here's an example of using the Fetch API to validate an image URL:

```javascript
const imageUrl = 'https://example.com/images/image.jpg';

fetch(imageUrl)
  .then(response => {
    if (response.ok) {
      console.log('Image URL is valid');
    } else {
      console.log('Image URL is invalid');
    }
  })
  .catch(error => {
    console.error('Error validating image URL:', error);
  });
```

In the code snippet above, we use the `fetch()` function to make a GET request to the `imageUrl`. We then check the response's `ok` property to determine if the URL is valid.

**For example, if you run this:**

```javascript
const imageUrl =
  "https://tooabstractive.com/images/jonathan-kemper-n8ayh8r2rwq-unsplash.webp";

fetch(imageUrl)
  .then((response) => {
    if (response.ok) {
      console.log("Image URL is valid");
    } else {
      console.log("Image URL is invalid");
    }
  })
  .catch((error) => {
    console.error("Error validating image URL:", error);
  });

```

**You will get this as output:**

```
 Image URL is valid
```

### **3. Utilizing External Libraries**

In Node.js, several external libraries, such as `validator.js` and `url-regex`, provide ready-to-use functions for validating URLs, including image URLs. 

These libraries offer robust validation capabilities and handle edge cases effectively.

Here's an example of using the `validator.js` library to validate an image URL:

> :bulb:
>
> Make sure you have the necessary Node.js dependencies installed. For example, the `validator.js` library.

```javascript
const validator = require('validator');

const imageUrl = 'https://example.com/images/image.jpg';
const isValidImageUrl = validator.isURL(imageUrl, { protocols: ['http', 'https'], require_tld: true });

console.log(isValidImageUrl); 
```

In the code snippet above, we use the `isURL()` function from the `validator.js` library to validate the `imageUrl`. The function checks if the URL is valid based on specified options, such as required protocols and TLD.

**Also, if you run this:**

```javascript
const validator = require("validator");
const imageUrl =
  "https://tooabstractive.com/images/jonathan-kemper-n8ayh8r2rwq-unsplash.webp";

const isValidImageUrl = validator.isURL(imageUrl, {
  protocols: ["http", "https"],
  require_tld: true,
});

console.log(isValidImageUrl);

```

You should get `true` as the output.

```
 true
```



## **FAQs**

1. **Are there any built-in JavaScript functions for image URL validation?** JavaScript doesn't have built-in functions specifically for image URL validation. However, you can utilize regular expressions or external libraries to achieve URL validation.
2. **Can I check if an image URL exists without downloading the entire image?** Yes, by using techniques like the Fetch API, you can send a request to the image URL and check the response status. This allows you to verify if the image exists without downloading the entire file.
3. **What are some common edge cases to consider when validating image URLs?** Common edge cases include handling different URL formats (relative URLs, data URLs), checking for valid image file extensions, handling redirects, and considering URL encoding and decoding.
4. **Which external libraries are commonly used for URL validation in JavaScript?** Some popular external libraries for URL validation in JavaScript are `validator.js`, `url-regex`, `valid-url`, and `is-url`. These libraries provide comprehensive URL validation functionality.