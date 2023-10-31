---
title: How to Delete VSCode Cached Data Files?
slug: how to delete vscode cached data files
postdate: October 31, 2023
keywords:
  - How to Delete
  - Cached Data File
  - VSCode
description: Are you tired of slow performance in VSCode due to cached files?
  Learn how to clear cached data in VSCode to boost its speed and efficiency.
tags:
  - how to
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/cache-file-size.webp
weight: 380
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
When it comes to working on files in Visual Studio Code (VSCode), you may have noticed that over time, the software's performance starts to slow down. 

One common reason for this is the accumulation of cached files. Though cached data can be helpful for quick access to files, but it can also slow down your system. 

In this article, we'll look at how to delete or remove VSCode cached data files to ensure that your coding experience is smooth and efficient.

{{< table-of-contents >}}

## **Steps on How to Delete VSCode Cached Data Files** 

### Step 1: Navigate to Your C:\\ Drive and User's Folder

The first step is to access the C drive (or local disk) on your computer and then navigate to the “Users” folder. 

![user folder in c drive](/images/user-folder-in-c-folder.webp "user folder in c drive")

### Step 2: Find the Folder with Your Username 

Inside the “Users” folder, locate your specific username folder. This folder is unique to your user account.

![username folder inside user folder](/images/username-folder.webp "username folder inside user folder")

### Step 3: Access the AppData Folder

Make sure to enable the display of hidden items by clicking on the icon in the view menu. 

![open the hidden items](/images/hidden-terminal-on.webp "open the hidden items")

This step is essential to reveal the “AppData” folder. Then open the folder.

![appdata folder](/images/open-app-data-folder.webp "appdata folder")

### Step 4: Locate the Roaming Folder

Within the “AppData” folder, you will find a “Roaming” folder. Open this folder to proceed.

![roaming folder](/images/roaming-folder.webp "roaming folder")

### Step 5: Identify the “Code” Folder

Inside the “Roaming” folder, look for the folder with the name “code.” This is where the cached files for VSCode are stored.

![open code folder](/images/code-folder.webp "open code folder")

### Step 6: Inside the “Code” Folder: Cache and CachedData

Within the “code” folder, you will see two important subfolders: “Cache” and “CachedData”.

![cache and cacheddata folder](/images/cache-and-cache-data.webp "cache and cacheddata folder")

These folders contain the cached data that needs to be removed.

### Step 7: Delete All Files in Cache and CachedData

Delete all the files within both the “Cache” and “CachedData” folders. This step is important for clearing the cached data.

![delete cacheddata files](/images/cache-file-size.webp "delete cacheddata files")

![delete cache files](/images/delete-the-cache-files.webp "delete cache files")

> :bulb:
>
> It's important to note that if you have VSCode open while attempting to delete the files, you may not be able to delete them. 

![cache files not deleting](/images/close-vscode-first.webp "cache files not deleting")

Ensure that VSCode is closed before proceeding.

### Step 8: Relaunch VSCode

After completing the previous steps, relaunch your Visual Studio Code. You should notice a significant improvement in how it runs, with faster loading times and smoother performance.

Happy coding! :tada:

## **FAQs**

**1. How often should I clear the cached data in VSCode?** Clearing cached data in VSCode is recommended as needed, especially when you experience a noticeable drop in performance.

**2. Will clearing cached data delete my code or project files?** No, clearing cached data will not affect your actual code or project files. It only removes temporary cached files.

**3. What should I do if I can't find the “AppData” folder?** Ensure that you have enabled the display of hidden items in the view menu, as the “AppData” folder is hidden by default.

**4. Can I recover deleted cached data if needed?** Once you delete cached data, it's not easily recoverable. Make sure you want to clear it before proceeding.

**5. Do I need to clear both the “Cache” and “CachedData” folders?** Yes, it's important to clear both the “Cache” and “CachedData” folders to remove all cached data.

**6. Is clearing cached data safe for my computer?** Yes, clearing cached data is safe and will not harm your computer. It's a routine maintenance task to ensure smooth performance in VSCode.