---
title: How to Download Multiple Images in Node.js
slug: how to download multiple images nodejs
postdate: July 15, 2023
keywords:
  - Node.js
  - image download
  - multiple images
  - async/await
  - web development
description: Download multiple images in Node.js using Promise and async/await.
  Create an array of image URLs and use map and Promise.all to download them
  asynchronously.
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/multiple-images-nodejs.webp
weight: 331
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
Downloading multiple images in Node.js can be efficiently accomplished using the Promise and async/await features. 

In this article, we are going to look at how to achieve this in your Node.js projects.

{{< table-of-contents >}}

## **Installation and Setup**

To begin, ensure that you have Node.js installed on your system. Then, follow these steps to set up your project:

1. Create a new directory for your project.
2. Open a terminal and navigate to the project directory.
3. Run the following command to initialize a new Node.js project:

   ```shell
   npm init -y
   ```
4. Install the required dependencies by running the following command:

   ```shell
   npm install request fs
   ```

## **Downloading Multiple Images**

To download multiple images in Node.js, follow these steps:

1. Create a file named `imageDownloader.js` in your project directory.
2. Open the file and add the following code:

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
3. In your main file (e.g., `app.js`), import the `downloadImage` function and define an array of image URLs.

   ```javascript
   const downloadImage = require('./imageDownloader');

   const imageUrls = [
     'https://example.com/image1.jpg',
     'https://example.com/image2.jpg',
     'https://example.com/image3.jpg',
   ];

   // Call the downloadImages function
   downloadImages();
   ```
4. Implement the `downloadImages` function using the async/await approach.

   ```javascript
   async function downloadImages() {
     try {
       const downloadPromises = imageUrls.map((url, index) => {
         const destination = `./images/image${index + 1}.jpg`;
         return downloadImage(url, destination);
       });

       await Promise.all(downloadPromises);
       console.log('All images downloaded successfully!');
     } catch (err) {
       console.error('Error downloading images:', err);
     }
   }
   ```

**At the end of testing the code out, you should get something like this:**

![how to download multiple images nodejs](/images/multiple-images-nodejs.webp "how to download multiple images nodejs")

> 💡
>
> Make sure to create the folder that you intend to store the image so that, the image will be downloaded to that folder.

## **Handling Errors**

Handling errors during the image download process is crucial for a smooth user experience. 

By attaching an event listener to the `error` event, you can handle errors effectively. In the `imageDownloader.js` file, we already handle errors using the `on('error')` event listener.

## **Validating Image URLs**

Before downloading images, it's important to validate the image URLs to avoid unnecessary requests and handle invalid URLs. 

**Read on:** [How to Check if an Image URL is Valid in JavaScript?](/how-to-tech/how-to-check-if-an-image-url-is-valid-in-javascript/)

You can utilize regular expressions or libraries like `url-regex` to validate URLs. The [url-regex](https://www.npmjs.com/package/url-regex) library provides a simple way to validate URLs.