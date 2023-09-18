---
title: How to Clear npm Cache?
slug: how to clear npm cache
postdate: September 16, 2023
description: To clear npm cache, you can run the command "npm cache clean
  --force". To verify if cache is cleaned run "npm cache verify"
tags:
  - how to
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/npm-cache-preview-image.webp
weight: 368
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
The npm cache is essentially a local storage area where npm retains downloaded packages and their dependencies. 

Its primary goal is to aid package installations by reducing the need for constant internet downloads. 

However, over time, the npm cache can become a source of issues. 

In this guide, we will look at why clearing the npm cache is necessary and how to clear it.

{{< table-of-contents >}}

## **Why Clear the npm Cache?**

There are a few reasons why you might want to clear the npm cache:

* **Troubleshooting**: If you encounter strange errors during package installation or updates, clearing the cache can often resolve these issues. \
  \
  Cached files can become corrupted or outdated, leading to unexpected problems.
* **Cache Integrity:** Ensuring the integrity of the cache is paramount. Running the verification command helps identify and remove corrupted files, maintaining a healthy cache.\
  \
  If you encounter an error like this – ⁣`npm ERR! code EINTEGRITY`, you can read on how to fix it: [How to Fix npm Installation Error: npm ERR! code EINTEGRITY?](/how-to-tech/how-to-fix-npm-installation-error-npm-err-code-eintegrity/)
* **Freeing Up Disk Space:** The npm cache can accumulate a substantial amount of disk space over time. \
  \
  Clearing it periodically can help reclaim valuable storage.

## **Steps on How to Clear npm Cache?**

Here are steps to follow in order to clear the npm cache:

### Step 1: Verify the Cache

Start by verifying the integrity of the npm cache. 

This command checks for corrupted files and ensures the cache is in a healthy state.

> In order words, it helps to verify the cache's integrity and reports whether any files needs repair.



```shell
npm cache verify
```



![npm cache verify command](/images/npm-cache-verify.webp "npm cache verify command")

In the case of the image above, the output indicates that the cache verification process is completed successfully without finding any corrupted files.

### Step 2: Clear the Cache

After verifying the cache and there is an error, proceed to clear it with this command:

```shell
npm cache clean --force
```

> Even if there are no errors, but you still want to clear cache, then just run the command.

This command forcefully removes all files from the cache, including any outdated package versions. 

The `--force` flag ensures that the operation proceeds without requiring additional confirmation.

### Step 3: Manual Cache Deletion (If Necessary)

In rare cases, you may encounter issues when attempting to clear the npm cache using the `npm cache clean` command. 

If that happens, you can resort to manually deleting the cache folder. 

The cache is located in different directories depending on your operating system:

* **Linux and macOS**: `~/.npm`
* **Windows**: `%AppData%/npm-cache`

For example, for window users, you can press the “Win+R” key on the keyboard to launch the “Run” program.

![launch run program in windows](/images/windown-run-program.webp "launch run program in windows")

Type in `%AppData%/npm-cache` and click ok. This should bring forth the npm cache folder and then you can delete.

![npm cache folder on windows](/images/npm-cache-folder-on-windows.webp "npm cache folder on windows")

## **FAQs**

1. **What is the npm cache?** The npm cache is a local storage repository used by npm to store downloaded packages and their dependencies, reducing the need for repeated internet downloads.
2. **Is clearing the npm cache necessary?** Clearing the npm cache is generally not necessary for routine development. \
   \
   It's recommended primarily for troubleshooting issues or freeing up disk space.
3. **Can clearing the npm cache cause any issues?** Clearing the npm cache itself shouldn't cause issues. \
   \
   However, it may temporarily slow down installations as npm re-caches packages you use frequently.