---
title: Where Is the Best Place To Put an HTML Script Tag?
slug: where is the best place to put the script tag
postdate: April 30, 2023
description: Place both inline scripts and external scripts at the bottom of the
  `body` section. But if there is a need for script to be downloaded before an
  HTML document is completely parsed, then place the script at the `head`
  section.
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/script-tag-in-html.webp
weight: 145
categorylink: /categories/how-to-tech
type: posts
author: Mohammad Jamiu
Affliate_Links: false
draft: false
mathjax: false
Google_Ads: true
---
An HTML script tag `<script> ..... </script>` can be placed in the head section `<head> .. </head>` or at the bottom of an HTML document – which is just before the closing of the body tag `<body> ... </body>`. 

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <title>Script Tag Placement</title>

    <script>
        // Inline script in the <head> section
            console.log('This is an inline script in the <head> section');
    </script>
</head>
<body>
<h1>Ahoy! Everyone</h1>
<p>This inline script below is place at the bottom of the body section </p>

     <script>
        // Inline script in the <body> section just before the body closing tag
            console.log('This is an inline script in the <body> section');
    </script>
</body>
</html>
```

It can also be placed as an inline script or as an external script. 

An **inline script** is a script which is placed or written directly inside the HTML document, while an **external script** is a script written in a separate file but imported into the HTML document.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Script Tag Placement</title>

    <!-- External script in the head section -->
    <script src="external-script.js"></script>
  </head>
  <body>
    <h1>Ahoy! How You</h1>
    <!-- External script at the body section -->
    <script src="external-script.js"></script>
  </body>
</html>
```

The placement of the `<script>` tag in an HTML document can have an impact on how quickly the page loads and how it behaves once it has loaded.

When a web browser loads an HTML page, it goes through a process called **parsing**, during which it reads and interprets the HTML code.

When it encounters a `<script>` tag, it will stop the parsing of the HTML page and download the script and then execute the script.

As you can see, it is very important to place the script tag in the best place to reduce the loading time for a webpage and to improve performance.

There are some parameters that Google always use to considered how fast and enhanced a webpage is which are **CLS** (Cumulative Layout Shift), **FCP** (First Contentful Paint), **LCP** (Large Contentful Paint) and others. 

For example, FCP, is a website performance metric that measures the amount of time (in seconds or milliseconds) it takes for the first piece of content on a webpage to be displayed on the user's screen. 

While LCP, is a website performance metric that measures the amount of time (in seconds or milliseconds) it takes for the largest element on a webpage to be displayed on the user's screen. 

Here is an example of how the page below loads and the time frame.

![page speed and load time](/images/web-performance.webp "page speed and load time")

## **Where Is the Best Place To Put the `<Script>` Tag?**

### 1/ Putting script tag in the head section

If the `<script>` tag is placed in the `<head>` section of an HTML document, the web browser will start downloading and parsing the script as soon as it encounters the script tag.

This can be important if the script in the script tag is critical for the webpage to function properly,

such as scripts that are used to set up the structure of a webpage or those that are used to add additional functionality.

However, if the script is large or takes a long time to be downloaded and executed, it may result in delay which will hinder the rendering of the rest of the webpage or the contents on the webpage.

It can also result in a slower initial webpage load time and perceived load time, which can negatively impact user experience.

### 2/ Putting script tag at the bottom section – just before the body closing tag

If the `<script>` tag is placed just before the closing of the body tag `<body>`, the web browser will download and parse the entire HTML document before it encounters the script tag and then download and parse the script.

This can improve and reduce the initial page load time, as the web browser can start to render or display the HTML documents (like texts and images) before downloading and executing the script.

However, if the webpage has some scripts that tend to modify the webpage after the complete rendering of the webpage, it can result in the webpage to flicker and shift its layout.

This can result in an increase in time, one of the parameters Google used to measure a website load time such as CLS (Contentful Layout Shift).

**To optimize the loading and rendering of a webpage**, it is generally a good practice to place scripts that are critical for a webpage to function properly in the `<head>` section. 

While scripts that are not critical are to be placed at the bottom section of the body tag.

For example, let say your script contain scripts that allow for the dynamic functionality of the menu bar and other user authentication, you might consider placing the script at the bottom.

Because as soon as a webpage load, the menu bar is not the first thing the user will interact with, but rather it is the content that is displayed.

### 3/ Using the `defer` attribute to defer scripts

Another approach, if you want to place a script in the `<head>` section of an HTML document, is to use the `defer` keyword.

> **Note:**
>
> The script has to be in an external file. 
>
> Because the `defer` attribute should only be used for external scripts and not for inline scripts.

So when you want to import it into the HTML document using the `<script>` tag, the defer keyword can then be added. As in -

`<script defer src="external-script.js"></script>`

The **defer** keyword is an attribute which is used to tell the web browser to download and parse the script in the background while it continues to parse the HTML document, and to only execute the script once the parsing of the HTML is complete.

Also, there is no need putting the script tag with the **defer** keyword at the bottom of the body section since by just placing the script tag at the bottom section of the body, you are implicitly saying `defer` the script.

> In other words, use this `<script src="external-script.js"></script>` as oppose to `<script defer src="external-script.js"></script>`

### 4/ Using the `async` attribute to load scripts asynchronously

Just like the `defer` attribute, `async` keyword is another attribute which can be used instead of a defer attribute.

When either “defer” or “async” attribute is used, the web browser downloads the script in the background, but the execution is what brought about their difference.

The difference between the “defer” and “async” attribute is that, when defer is used, the script can only be executed once the HTML document is parsed completely.

While for the async attribute, it allows for scripts to be executed asynchronously and the HTML must not be parsed completely before the execution. 

i.e., if there are several script files imported, the second script can be executed before the first while the HTML continues to parse.

`<script src="first-external-script.js" async></script>`

`<script src="second-external-script.js" async></script>`

In the case of the defer attribute, each is executed as it is imported (the first before the second).

`<script src="first-external-script.js" defer></script>`

`<script src="second-external-script.js" defer></script>`

**In a few sentences**, place both inline scripts and external scripts at the bottom of the `<body>` section. 

But if there is a need for script to be downloaded before an HTML document is completely parsed, then place the script at the `<head>` section.