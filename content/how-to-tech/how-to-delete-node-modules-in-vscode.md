---
title: How to Delete Node Modules in VSCode?
slug: how to delete node modules in vscode
postdate: September 17, 2023
description: There are basically two ways you can delete the node modules
  folder. Right-clicking on the folder and pressing the delete option or to use
  a command on the terminal.
tags:
  - how to
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/node-module-right-click-delete.webp
weight: 370
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
Frontend applications project often come with a hefty luggage known as the `node_modules` folder. 

While these modules are essential for the project's functionality, they can sometimes become a burden, taking up significant disk space or even become corrupted as it may contain outdated or conflicting data.

In this guide, we will look at two methods on how to delete the node modules in Visual Studio Code (VSCode).

## **Methods on How to Delete Node Modules Folder in VSCode**

### 1: Using the Right-Click Menu

You can delete the  node modules in VSCode by right-clicking on the node module folder.

1. Open your project in VSCode.
2. In the VSCode explorer, locate the `node_modules` folder.
3. Right-click on the `node_modules` folder.
4. Click on “Delete” to delete the folder.

   ![remove node module by right clicking](/images/node-module-right-click-delete.webp "remove node module by right clicking")

> :bulb:
>
> This action will remove the entire `node_modules` folder along with all installed packages. 
>
> Keep in mind that you'll need to reinstall these packages later using `npm install`.

### 2: Using Terminal for Deletion

To delete node modules using the terminal, follow these steps:

1. **Open Integrated Terminal:** Use ``Ctrl+Backtick(`)`` (or ``Cmd+Backtick(`)`` on Mac) to open the integrated terminal in VSCode.
2. **Navigate to Your Project:** Use the `cd` command to navigate to your project directory – If you need to.
3. **Run the Deletion Command:** Enter the command `rm -rf node_modules` and press Enter.

   ![rm rf command in terminal](/images/rm-rf-command-in-terminal.webp "rm rf command in terminal")

If you are a Windows user, and you encounter an error while running `rm -rf node_modules` as shown below, you can read more on how to fix it: [How to Fix “Remove-Item: A parameter cannot be found that matches parameter name 'rf'”](/how-to-tech/remove-item-a-parameter-cannot-be-found-that-matches-parameter-name-rf/)

![rm rf node module command not working](/images/rf-rm-powershell-error.webp "rm rf node module command not working")

> :bulb:
>
> Remember, using the terminal for deletion follows the same principle: it wipes out the `node_modules` folder and requires a subsequent `npm install` to reinstall packages.

If you want to remove or uninstall individual packages, read on: [How To Uninstall an NPM Package?](/how-to-tech/how-to-uninstall-an-npm-package/)

## **FAQs**

1. **Why should I delete node modules in VSCode?** Deleting unnecessary node modules can free up disk space and make your project more manageable. \
   \
   It's especially helpful when sharing your code with others or when using version control systems like Git.
2. **Do I need to reinstall packages after deleting node modules?** Yes, deleting the `node_modules` folder removes all installed packages. You'll need to run `npm install` or `yarn install` again to restore them.
3. **What is the purpose of adding `node_modules` to `.gitignore`?** Adding `node_modules` to `.gitignore` prevents the folder from being tracked by Git, reducing repository size and preventing unnecessary versioning of external dependencies.
4. **Is there a shortcut to open the integrated terminal in VSCode?** Yes, you can open the integrated terminal in VSCode by pressing `Ctrl+Backtick` (or `Cmd+Backtick` on Mac).