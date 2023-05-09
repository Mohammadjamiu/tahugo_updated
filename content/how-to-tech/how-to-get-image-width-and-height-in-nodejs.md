---
title: How To Get Image Width and Height in Node.js
slug: how to get image width and height in nodejs
postdate: May 9, 2023
description: To get the height and width of an image in nodejs, you can use
  either one of these nodejs packages, sharp and image-size.
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/sharp-and-imagesize.webp
weight: 152
categorylink: /categories/how-to-tech
type: posts
author: Mohammad Jamiu
Affliate_Links: false
draft: false
mathjax: false
Google_Ads: true
---
Most times, when working with images in Node.js, you need to know the size or dimension like the **height** and **width** of the image in order to work with it in your code.

There are several libraries and modules available to help accomplish this task. Two of the most popular and widely used packages are `sharp` and `image-size`.

## `` `sharp` `` Package

`sharp` is a powerful and efficient image processing library that can be used for a wide range of image manipulation tasks. 

It is particularly useful for working with large images or performing complex operations on images. 

One of its features is the ability to extract **metadata** such as the **file format** of the image, like JPEG or PNG. 

It can also be used to get the **color space** of the image, like RGB or CMYK and also to extract the **dimensions** of the image, which means the width and height in pixels.

## How To Use `` `sharp` `` To Get the Height and Width of an Image

Assuming you have created a Node.js project, and you have subsequently created a `.js` file in the folder.

Here's how to use `sharp` to get the height and width of an image:

```javascript
const sharp = require("sharp");

sharp("path/to/image.jpg")
  .metadata()
  .then((metadata) => {
    const width = metadata.width;
    const height = metadata.height;
    console.log(`Image dimensions from sharp: ${width}x${height}`);
  })
  .catch((err) => {
    console.error(err);
  });
```

As you can see from the code, we first import the `sharp` module and then use its `metadata()` method to retrieve the metadata of the image file specified in the `sharp` function.

> Make sure to replace `path/to/image.jpg` with the actual path to your image file.

**Read on:** [How To Access a File in Node.js? /, ./ and ../ Paths Explained](/how-to-tech/access-a-file-in-node-js-using-relative-and-absolute-path/)

> Note: 
>
> Make sure to install the `sharp` package using either npm or yarn.
>
> To install sharp using npm, in your root directory run `npm install sharp`. 

![installing sharp using npm](/images/npm-install-sharp.webp "installing sharp using npm")

To see if the package is installed, open your package.json file and find where the dependencies are. You will see something like this-

![sharp installed in package.json](/images/sharp-in-packagejson.webp "sharp installed in package.json")

The `metadata()` method returns a **Promise** that resolves to an object containing various metadata about the image, including its width and height. 

We then extract these values from the metadata object and log them to the console.

Here is the result gotten when an image is used -` Image dimensions from sharp: 1584x616`



## `` `image-size` `` Package

`image-size` is a lightweight Node.js module that provides a simple and easy-to-use interface for retrieving the dimensions of an image. 

It supports a wide variety of image formats and requires the entire image file to be read into memory in order to determine its dimensions.

## How To Use `` `image-size` `` To Get the Height and Width of an Image

Here's the code on how to use `image-size` to get the height and width of an image:

```javascript
const sizeOf = require("image-size");

const dimensions = sizeOf("path/to/image.jpg");
console.log(
  `Image dimensions from image-size width: ${dimensions.width} x height: ${dimensions.height}`
);
```

Just as we did when using `sharp`, we first import the `sizeOf()` function from the `image-size` module and then call it with the path to the image file as its argument. 

> Make sure to replace `path/to/image.jpg` with the actual path to your image file.

The `sizeOf()` function returns an object containing the `width` and `height` properties, which can then log to the console.

> **Note:** 
>
> Make sure to install the `image-size` package using either npm or yarn.
>
> To install sharp using npm, in your root directory run `npm install image-size`. 

Here is the output when an image is used -` Image dimensions from image-size width: 1584 x height: 616`

One advantage of using `image-size` is that it supports a wide variety of image formats, including JPEG, PNG, GIF, BMP, ICO, and many others. However, its downside is that it does require the entire image file to be read into memory in order to determine its dimensions.

This may be slower and less efficient than using `sharp` to retrieve the image metadata.

> **Note:** 
>
> `sharp` may also be slow sometimes because the `metadata()` method return a Promise which need to be resolved first.

So if you need to work with large images or perform complex image processing tasks, `sharp` is the better choice. 

But if you need a simple and lightweight solution that supports a wide range of image formats, `image-size` is a good option.