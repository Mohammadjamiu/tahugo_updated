---
title: How to Stop or Disable VSCode Auto Update?
slug: how to stop or disable vscode auto update
postdate: September 3, 2023
description: Learn how to take control of your Visual Studio Code (VS Code)
  updates. Discover step-by-step instructions on disabling or stopping
  auto-updates for a more customized coding experience.
tags:
  - how to
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/vscode-update-mode.webp
weight: 360
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
Visual Studio Code (VS Code) is a powerful and widely used code editor, loved by developers for its versatility and features. 

However, one aspect that might not sit well with everyone is its default auto-update feature. 

While staying up-to-date is essential for security and performance reasons, some users prefer to have more control over when and how their software updates. 

In this article, we will guide you through the steps to stop or disable the auto-update feature in VS Code, ensuring you can manage updates on your terms.

## **Steps to Disable Auto Update**

### **Step 1: Open VS Code Settings**

* Launch Visual Studio Code on your computer.
* Click on “File” in the top-left corner, and then select “Preferences.” (On macOS, it's under “Code”).

  ![vs code file menu](/images/vscode-file-on-menu.webp "vs code file menu")
* Under the “Preferences” menu, click on “Settings” or use the shortcut **(`Ctrl+,`)** on Windows or (`Cmd+,`) on Mac.

  ![click on preferences and settings](/images/vscode-settings.webp "click on preferences and settings")

### **Step 2: Access Update Settings**

* In the Settings menu, you will find a search bar. Type “update mode” into the search bar.
* Locate the “Update: Mode” setting in the results and click on it.
* By default, it is set to “default.” Change it to “none” to disable auto-updates.

  ![auto update mode vscode](/images/vscode-update-mode.webp "auto update mode vscode")

### **Step 3: Alternative Method (Using JSON Editor)**

* If you prefer using the JSON editor for your settings, you can achieve the same result. Simply add the following line to your settings:

  ```json
  "update.mode": "none"
  ```

### **Step 4: Save Your Settings**

* Make sure to save your settings by clicking the “Save” button in the top-right corner of the Settings tab.

> **Note:**
>
> Sometimes, you might not find the "Save" button but it's going to prompt you to restart your VSCode.

## **Opting Out of Extension Updates**

In addition to disabling auto-updates for VS Code itself, you might also want to prevent extensions from updating automatically. Here's how:

* Open the Settings editor by pressing `Ctrl+,` (or `Cmd+,` on macOS).
* Type “Extensions: Auto Update"
* Look for the “Extensions: Auto Update” check box.
* Clear the checkbox to opt out of automatic extension updates.

  ![extension auto update](/images/extension-update-vscode.webp "extension auto update")

### **Alternative Method (Using JSON Editor)**

* If you prefer using the JSON editor for your settings, add the following line:

  ```json
  "extensions.autoUpdate": false
  ```

By following these steps, you can ensure that both your VS Code and its extensions will no longer update automatically, giving you full control over your development environment.

## **FAQs**

1. **Is it safe to disable auto-updates in VS Code?** Disabling auto-updates can be safe as long as you regularly check for manual updates and security patches. \
   \
   However, keeping your software up-to-date is generally recommended for security reasons.
2. **Can I re-enable auto-updates in the future?** Yes, you can easily re-enable auto-updates by following the same steps and changing the “Update: Mode” setting back to “default.”
3. **Do I need to restart VS Code after making these changes?** To make things function smoothly, it is better to restart.