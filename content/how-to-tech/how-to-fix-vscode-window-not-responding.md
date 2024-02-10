---
title: How to Fix VSCode Window Not Responding?
slug: how to fix vscode window not responding
postdate: February 9, 2024
keywords:
  - how to fix vscode window not responding
description: Are you experiencing some annoying issues like VSCode window not
  responding, a black screen, or sluggish performance? Learn how to fix it by
  clearing VSCode cache.
tags:
  - how to
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/vscode-is-not-responding.webp
weight: 416
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
![how to fix vscode window not responding](/images/vscode-is-not-responding.webp "how to fix vscode window not responding")

Are you experiencing some annoying issues like VSCode window not responding, a black screen, or sluggish performance? 

These problems can be incredibly frustrating, especially when you're in the midst of a project or trying to start a new one. 

Often, these issues are caused by cached VSCode files, but fear not – we have the solution.

{{< table-of-contents >}}

## **Steps to Fix VSCode Window Not Responding**

### Step 1: Force Close VSCode

Before attempting any fixes, ensure to force close the unresponsive VSCode window. 

You can do this by clicking on “close” on the “window is not responding” message, or by using the shortcut Ctrl+Shift+Esc to open the Task Manager. 

![vscode end task](/images/vscode-end-task.webp "vscode end task")

Then, select VSCode and click on “End Task” to shut it down forcefully.

### Step 2: Go to Your C:\ Drive and User’s Folder

Begin by accessing the C:\ drive (or local disk) on your computer and then navigate to the “Users” folder.

![user folder inside c drive](/images/user-folder-in-c-folder.webp "user folder inside c drive")

### Step 3: Locate the Folder with Your Username

Inside the “Users” folder, locate your specific username folder. This folder is unique to your user account.

![your folder with username](/images/username-folder.webp "your folder with username")

### Step 4: Access the AppData Folder

Ensure the display of hidden items is enabled by clicking on the icon in the view menu. 

![windows hidden items](/images/hidden-terminal-on.webp "windows hidden items")

This step is crucial to reveal the “AppData” folder. Then, open the folder.

![windows appdata folder](/images/open-app-data-folder.webp "windows appdata folder")

### Step 5: Find the Roaming Folder

Within the “AppData” folder, you'll find a “Roaming” folder. Open this folder to proceed.

![windows roaming folder](/images/roaming-folder.webp "windows roaming folder")

### Step 6: Identify the “Code” Folder or Directory

Inside the “Roaming” folder, search for the folder named “Code.” This is where the cached files for VSCode are stored.

![vscode folder ](/images/code-folder.webp "vscode folder ")

### Step 7: Delete All Files in Cache and CachedData

In the “Code” folder, you'll find two important subfolders: “Cache” and “CachedData.” 

![cache](/images/cache-and-cache-data.webp "cachedata")

Delete all the files within both these folders to clear the cached data. 

![file size of cacheddata](/images/cache-file-size.webp "file size of cacheddata")

![cache file delete](/images/delete-the-cache-files.webp "cache file delete")

> :bulb:
>
> If the cache files are not deleting, make sure to close any conflicting windows, like VSCode itself.

![files not deleting](/images/close-vscode-first.webp "files not deleting")

### Step 8: Launch VSCode Again

After applying these changes, give your VS Code a fresh start. Expect noticeably quicker opening times and a more responsive editing experience.

## **Wrap Up**

Dealing with a non-responsive VSCode window can be a frustrating experience, but by following these simple steps to clear the cached data, you can effectively resolve the issue and get back to coding seamlessly. 

Remember to perform regular maintenance to prevent such problems in the future and optimize your development environment for peak performance.

## **FAQs**

### *1. Why does VSCode become unresponsive?*

VSCode can become unresponsive due to various reasons, including cached files, conflicting extensions, or insufficient system resources.

### *2. Will clearing the cache affect my projects or settings?*

Clearing the cache will not affect your projects or settings in VSCode. It only removes temporary files to improve performance.

### *3. Is it safe to delete the cached data?*

Yes, it is safe to delete the cached data, as it only consists of temporary files used by VSCode for optimization.