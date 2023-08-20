---
title: "How to Fix \"Module not found: Can't resolve encoding\" in Next.js"
slug: module not found cant resolve encoding in next js
postdate: August 19, 2023
description: "module not found: can't resolve 'encoding' next js"
tags:
  - javascript
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/npm-install-encoding.webp
weight: 353
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
The error **“Module not found: Can't resolve encoding” in Next.js** typically arises when the encoding module is missing from your project's dependencies. 

This module plays a crucial role in handling the encoding and decoding of strings, which is essential for various functionalities within Next.js, including the popular `useRouter` hook.

## **How to Fix the Error**

Resolving this error involves a few straightforward steps. Follow these instructions to get your project back on track:

#### **Step 1: Install the Encoding Module**

To begin, you'll need to ensure that the encoding module is installed in your project. Open your terminal and execute the following command:

```bash
npm install encoding
```

This command will fetch and install the necessary encoding module from the npm repository.

#### **Step 2: Verify the Installation**

Once the encoding module is successfully installed, the error should no longer persist. 

However, if you're still encountering the same issue, it's possible that the module isn't located in your project's `node_modules` directory.

To check if the encoding module is present, enter the following command in your terminal:

```bash
ls node_modules/encoding
```

If you find that the module is missing, move on to the next step.

#### **Step 3: Add the Encoding Module**

In case the encoding module is absent from your project, you can add it using the following command:

```bash
npm install encoding --save
```

Executing this command will not only install the module but also add it to your project's dependencies, ensuring it's accessible whenever you run your project.

#### **More checks that can be done:**

If, despite following the steps above, the error persists, consider the following:

1. **Check the Version**: Confirm that you're using the correct version of the encoding module. You can always refer to the latest version on the npm website: [npmjs.com/package/encoding](https://www.npmjs.com/package/encoding).
2. **Correct Module Import**: Ensure you're importing the encoding module accurately. The correct import statement is as follows:

```javascript
import encoding from 'encoding';
```

3. **Restart Development Server**: Sometimes, a simple restart can work wonders. Try restarting your development server to see if the error vanishes.

## **FAQs**

1. **Why am I getting the “Module not found: Can't resolve encoding” error?**

   This error occurs when the encoding module is missing from your project's dependencies. The module is essential for string encoding and decoding in Next.js.
2. **How do I install the encoding module?**

   You can install the encoding module by running the command `npm install encoding` in your terminal.
3. **What if the encoding module is still not found after installation?**

   If the module isn't in your `node_modules` directory, use the command `npm install encoding --save` to add it to your project.
4. **How can I confirm the latest version of the encoding module?**

   Visit the npm website at [npmjs.com/package/encoding](https://www.npmjs.com/package/encoding) to check the most recent version.
5. **Are there any other troubleshooting steps I can take?**

   Yes, ensure you're importing the module correctly (e.g., `import encoding from 'encoding';`) and consider restarting your development server if issues persist.