---
title: "How to fix “Uncaught SyntaxError: import declarations may only appear at
  top level of a module” | Javascript"
slug: how to fix uncaught syntaxerror
postdate: February 7, 2023
description: "You can fix “Uncaught SyntaxError: import declarations may only
  appear at top level of a module” by adding type=module to the script tag"
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/code-944499_640.webp
weight: 89
categorylink: /categories/how-to-tech
type: posts
author: Mohammad Jamiu
draft: false
mathjax: false
Google_Ads: true
---
The first time I tried to use `import * as Math from "./math.js";`

I got an error saying **“Uncaught SyntaxError: import declarations may only appear at top level of a module”** 

I tried solving the issue by adding `type="module”` to the HTML script tag.

```javascript
<script src="/js/script.js"></script> 
// is changed to 
<script src="/js/script.js" type="module"></script>
```

 Which should work in most cases. Make sure to use **“./”, “../” or “/”** to kind of help in locating where the file exists.

## What ./, ../ and / means?

* **/** means the root of the current folder
* **./** means the current folder
* **../** means the parent of the current directory

**/ and ./** kind of do the same thing because it allows you to access any folder inside the main folder that cover the whole file.

But for **../** you are saying for the first dot **(.)** Go out to the folder that covers you just as **./** does now by adding another dot **(..)** you say not only the folder that covers you but the folder that covers the folder that covers you, meaning that it goes two steps upward.

Sometimes after adding a **“./”, “../” or “/”** it might still not work. 

One thing you can do is to try and remove the file from the let say, you put the file in a folder called **learnjs**, and inside the folder there are files named **main.js** and a **math.js** where the **math.js** file is what you want to import into your main.js as in my case. 

Just move the math.js from the **learnjs** folder to the root and remove the **./ or / or ../** in the import rule and use `import as Math from “math.js”`. 

If it does work, use it that way but if not, try to move it again back into the **learnjs** folder and use `import * as Math from “./math.js”` with the **./, ../ and /** again. Hope it helps.