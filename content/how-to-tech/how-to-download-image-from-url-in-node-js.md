---
title: How to Download Images from URL in Node.js?
slug: how to download image from url in node js
postdate: July 15, 2023
keywords:
  - image download
  - URL
  - Node.js
  - web development
  - file system
description: Download images from URLs in Node.js using the 'request' and 'fs'
  modules. Stream the image data and save it to a specified destination.
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/download-image-from-url.webp
weight: 330
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
When working with Node.js, you may come across situations where you need to download images from a given URL. 

This article will guide you through the process of downloading images from a URL in Node.js, providing step-by-step instructions and code snippets to help you accomplish this task effectively.

{{< table-of-contents >}}

## **How to Download Image from URL in Node.js**

### **1. Installing Dependencies**

Before diving into the actual implementation, it's essential to install the necessary dependencies in your Node.js project. 

We'll be using the `request` and `fs` modules for this purpose. Open your terminal and run the following command to install the dependencies:

```shell
npm install request fs
```

### **2. Writing the Download Function**

To begin, let's create a function that can download an image from a given URL. In your Node.js project, create a new file and name it `imageDownloader.js`. 

Open the file and add the following code:

```javascript
const request = require('request');
const fs = require('fs');

function downloadImage(url, destination) {
  request(url)
    .pipe(fs.createWriteStream(destination))
    .on('close', () => {
      console.log('Image downloaded successfully!');
    })
    .on('error', (err) => {
      console.error('Error downloading the image:', err);
    });
}

module.exports = downloadImage;
```

In the code above, we import the `request` module to make HTTP requests and the `fs` module to work with the file system. 

The `downloadImage` function takes two parameters: the `url` of the image and the `destination` path where the downloaded image will be saved. 

It uses the `request` module to stream the image data and the `fs` module to create a write stream and save the image to the specified destination.

### **3. Implementing the Image Download**

Now that we have the `downloadImage` function ready, we can use it to download images from a URL. 

Create a new file in your project's directory, name it `app.js`, and add the following code:

```javascript
const downloadImage = require('./imageDownloader');

const imageUrl = 'https://example.com/image.jpg';
const destination = './images/image.jpg';

downloadImage(imageUrl, destination);
```

In the code above, we import the `downloadImage` function from the `imageDownloader.js` file using the `require` statement. 

We then define the `imageUrl` variable with the URL of the image you want to download and the `destination` variable with the desired path where the image will be saved. 

Finally, we call the `downloadImage` function, passing the URL and destination as arguments.

When you run the `app.js` file, Node.js will execute the code and download the image from the provided URL to the specified destination. 

You can customize the URL and destination path according to your requirements.

**Here is the kind of output you should see:**

![how to download image from url in node js](/images/download-image-from-url.webp "how to download image from url in node js")

> :bulb:
>
> Make sure to create the folder that you intend to store the image so that, the image will be downloaded to that folder.

![folder create](/images/url-image-download-folder.webp "folder create")

**You can also read on:** [How to Download Multiple Images in Node.js](/how-to-tech/how-to-download-multiple-images-nodejs/)