---
title: How to fix "No utility classes were detected in your source files"
slug: no utility classes were detected in your source files fixed
postdate: February 10, 2023
description: To fix no utility classes were detected in your source files, you
  need to check if there is a tailwind.config.js and you must configure the file
  path of your projects.
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/screenshot_2-2-.webp
weight: 91
categorylink: /categories/how-to-tech
type: posts
author: Mohammad Jamiu
draft: false
mathjax: false
Google_Ads: true
---
In this post, I am going to highlight how to troubleshoot **“No utility classes were detected in your source files”** error in tailwindcss.

The problem comes most time due to file path not configured properly. So if you don't have a tailwindcss config file in your project, then that might be one of the issue.

To make a tailwindcss config file, you need to run this command - 

```javascript
npx tailwindcss init
```

A `tailwind.config.js` file will be created. Inside the config file, you need to specify the paths to all of your template files.

This means that all the files that use tailwindcss will have to be specified.

For example, your index.html file which is the HTML file to display your page, if it uses tailwindcss, you need to specify the path to which it can be located inside the `tailwind.config.js.` 

> Note: 
>
> Make sure that there is @tailwind directives inside your styles file which is located inside the src folder.

```css
/* This should be inside the styles file inside the src folder */

@tailwind base;
@tailwind components;
@tailwind utilities;
```

The `tailwind.config.js` file will look have some content like this:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

In the `content: [],` put in the path for the files that is using tailwindcss.

In my case, inside the legacy1.0 project, there are a bunch of folders and files. But the most important one is the public folder – this folder holds the index.html file of the webpage and since it uses tailwind then it's file path must be specified.

![legacy folder](/images/screenshot_2-2-.webp "legacy folder")

![folders structure](/images/screenshot_3-2-.webp "folders structure")

In the `tailwind.config.js` file, to specify the path to which index.html is, `"./public/index.html"` is used which corresponds to how it is in the structure of the folder.

The src folder is also important because, depending on the project you're working on. Let say it is a ReactJS project, then you know you will need a `src` folder which includes HTML file and JS file.

> Note:
>
> **.css** is not added in both the public folder file path and in the **src** folder because tailwind does everything under the hood.
>
> It will be good to add the src folder file path even if you are not working with reactjs project as the tailwindcss file is stored in the src folder.

```javascript
/* *@type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Lastly, after all this changes, run the script for building your tailwindcss file. Remember to use a `--watch` flag inside your package.json script.

```json
 "scripts": {
    "build-css": "tailwindcss build -i ./src/styles.css -o ./public/styles.css --watch"
  },
```

Hope this helps. Keep coding! :tada: