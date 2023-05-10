---
title: How To Uninstall an NPM Package?
slug: how to uninstall an npm package
postdate: May 9, 2023
description: To uninstall an npm Package you can either run `npm uninstall
  [package-name]` or remove the package from your package.json file.
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/npm-uninstall-sharp.webp
weight: 153
categorylink: /categories/how-to-tech
type: posts
author: Mohammad Jamiu
Affliate_Links: false
draft: false
mathjax: false
Google_Ads: true
---
As a developer, you're always on the lookout for new tools and packages that can help you build better software. 

But as your project grows and evolves, you may find yourself with a bloated dependency list that slows down your development process. 

**Removing or uninstalling unnecessary packages from your project is an important step in keeping your codebase clean and efficient.**

In this article, we'll explore two ways for uninstalling an npm package from your project. 

## 1/ Running `npm uninstall` in the terminal

Using `npm uninstall` command, is the most straightforward way to remove an npm package from your project. 

This command removes the specified package and all of its dependencies from your project.

To uninstall an NPM package using `npm uninstall`, you can run this command – ⁣`npm uninstall <package-name>`. 

Assuming you have the `sharp` Node.js package, which is used to get the width and height of an image and other metadata, installed on your machine, and you wish to uninstall it, 

here is the command you need to run in your terminal – ⁣`npm uninstall sharp`. 

![npm unistall sharp](/images/npm-uninstall-sharp.webp "npm unistall sharp")

This will remove the `sharp` package and all of its dependencies from your project.

**Read on:** [How To Get Image Width and Height in Node.js](/how-to-tech/how-to-get-image-width-and-height-in-nodejs/)

### How to Uninstall a devDependency with `npm uninstall`

What if the package you intend to uninstall is a dev dependency because the package that is removed above by using the syntax `npm uninstall <package-name>` is a dependency package.

Confused of what dependency and dev dependency are, check this article out – Difference[ Between Dev-Dependency and Dependency?](/how-to-tech/difference-between-dev-dependency-and-dependency/). 

> In simple term, **dependency** is a package that your application need to function both during the development stage and the production stage i.e., when you deploy the project.
>
> **Dev dependency** is a package that is needed only in the development stage.

Look at this package.json file, you will see an object with the name **dependencies** and another named **devDependencies.** 

```json
{
  "name": "learn-nodejs",
  "version": "1.0.0",
  "description": "Learn Node",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Mohammad Jamiu",
  "license": "ISC",
  "dependencies": {
    "image-size": "^1.0.2",
    "sharp": "^0.32.1",
    "uuid": "^9.0.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.22"
  }
}
```

To uninstall or remove the devDependency package, you need to run the command `npm uninstall -D <package-name>`. The `-D`  is a flag that denotes that only devDependencies should be uninstalled. 

So to uninstall `nodemon` which is a devDependency, `npm uninstall -D nodemon` is the command you need to run in the terminal.

> `nodemon` is like liveserver that help to keep your nodeJS file changes up-to-date.

### 2/ Editing and deleting the package from `package.json`

Another way to remove an npm package is by editing the `package.json` file and removing the package from the list of dependencies. 

This method is useful if you want to remove a package permanently from your project and prevent it from being installed again in the future.

Because a package.json file inside your project is the file that tracks all the dependencies and devDependencies your project relies on. 

That's why when you move a project to another machine, all the dependencies and devDependencies are known because they are tracked and can be installed onto the new machine.

To remove an npm package by editing `package.json`, all you need to do is -

1. Open the `package.json` file in your project directory.
2. Locate the `dependencies` section.
3. Remove the package you want to remove from the list of dependencies.
4. Save the changes to the `package.json` file.
5. Clean up the code base by running `npm prune`.

For example, if this is your package.json file - 

```json
{
  "name": "learn-nodejs",
  "version": "1.0.0",
  "description": "Learn Node",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Mohammad Jamiu",
  "license": "ISC",
  "dependencies": {
    "image-size": "^1.0.2",
    "sharp": "^0.32.1",
    "uuid": "^9.0.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.22"
  }
}
```

And you want to remove the `sharp` package using this method, you would remove the following line from your `package.json` file: `"sharp": "^0.32.1",` and then save the file.

So your new package.json file will look like this -

```json
{
  "name": "learn-nodejs",
  "version": "1.0.0",
  "description": "Learn Node",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Mohammad Jamiu",
  "license": "ISC",
  "dependencies": {
    "image-size": "^1.0.2",
    "uuid": "^9.0.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.22"
  }
}
```

After saving the changes to the `package.json` file, you still have to run `npm prune`. 

This purpose of running this command is to remove any packages that are not listed as dependencies in the project's package.json file, helping to keep the `node_modules` directory clean and efficient. 

`Pruning can also help to resolve issues related to version conflicts and missing dependencies.` 

To remove a devDependency with this approach, the same process applies, just remove the line with the package name and version, save and run `npm prune` to keep the `node_modules` clean.