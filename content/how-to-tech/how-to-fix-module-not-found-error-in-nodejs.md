---
title: How To Fix ‘MODULE_NOT_FOUND’ Error in Node.js
slug: how to fix module not found error in nodejs
postdate: May 9, 2023
description: "`MODULE_NOT_FOUND`error occurs when you try to require a module in
  your Node.js code, but the module cannot be found. To fix this error, make
  sure the module is installed, double-check the path to the module, check the
  spelling and case of the module name in your require statement, and make sure
  the module has not been renamed or deleted."
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/node-module-not-found.webp
weight: 150
categorylink: /categories/how-to-tech
type: posts
author: Mohammad Jamiu
Affliate_Links: false
draft: false
mathjax: false
Google_Ads: true
---
If you have been working with Node.js for a while, chances are you have encountered the `MODULE_NOT_FOUND` error at some point. 

This error occurs when you try to require a module in your Node.js code, but the module cannot be found. 

In this blog post, we'll explore what causes this error and how to fix it.

## What Is the `MODULE_NOT_FOUND` Error?

The `MODULE_NOT_FOUND` error is a runtime error in Node.js that occurs when you try to require a module that does not exist. 

This error is thrown when Node.js is unable to find the specified module.

## What Causes the `MODULE_NOT_FOUND` Error and How To Fix It?

Here are some reasons why you might encounter the `MODULE_NOT_FOUND` error in your Node.js code and how to fix it:

### 1/ The module has not been installed

If you are trying to require a module that has not been installed in your project, you will get the `MODULE_NOT_FOUND` error. \
\
Make sure the module is installed in your project by running `npm install <module-name>` in your terminal.\
\
This should often be the first step that you need to take because most time it is usually the cause.

So let say you want to get the dimension (height x width) of an image, you need to install a package called sharp or image-size.

To install it, just run `npm install sharp`. 

> Make sure to install it in the root directory and not inside a subdirectory.
>
> For example, your node.js project folder name is `learn_node` and it has a subfolder within it like `learn_node/new_folder`, so to install any package you have to leave the subdirectory and go to the root directory.

### 2/ The module path is incorrect

Double-check the path to the module you are trying to require. Make sure the path is correct, and the module is located in the specified directory.

For example, if you create a custom node.js module, and you try to import the module using the `require` syntax inside a different directory, you will definitely get an error.

So make sure to check the path in which the module is located and fix it.

Let say you have a folder named `root_folder` and inside the folder there is `folder_1` and `folder_2`. 

Now inside `folder_2`, you create a `folder-2.js` file which need to access some code from the `folder-1.js` file inside the `folder_1.`  

Using the `require` syntax, it will look something like `const accessFileFromFolderOne = require('../folder-1/folder-1.js');` 

> **Where:**
>
>  ../ means “leave the current directory – which is `folder_2`” 
>
> ../folder-1 means leave the current directory and enter `folder_2.`That's the pattern.
>
> **Read on:** [How to access a file in NodeJS? /, ./ and ../ paths explained](/how-to-tech/access-a-file-in-node-js-using-relative-and-absolute-path/)

### 3/ The module has been renamed or deleted

 If the module has been renamed or deleted, you will get the `MODULE_NOT_FOUND` error. 

So make sure to check if the module has been renamed or deleted. If it has been renamed, make sure to update the require statement accordingly.

### 4/ The module has a different title case sensitivity

Node.js is case-sensitive, so make sure the case of the module name in your require statement matches the title case of the actual module.

**In a few points,** the `MODULE_NOT_FOUND` error is a common error in Node.js that occurs when the module you are trying to require cannot be found. 

To fix this error, make sure the module is installed, double-check the path to the module, check the spelling and case of the module name in your require statement, and make sure the module has not been renamed or deleted.