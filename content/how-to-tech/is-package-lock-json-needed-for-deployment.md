---
title: Is package-lock.json needed for deployment?
slug: is package lock json needed for deployment
postdate: May 8, 2023
description: Yes, the `package-lock.json` file is needed for deployment because
  when you deploy your application, the package manager either npm or yarn will
  use the information in the `package-lock.json` file to install the exact same
  versions of the packages and dependencies that you have been working with
  during development.
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/dependency-nad-devdep.webp
weight: 148
categorylink: /categories/how-to-tech
type: posts
author: Mohammad Jamiu
Affliate_Links: false
draft: false
mathjax: false
Google_Ads: true
---
When working on a Node.js project or any project that need some Node.js dependencies, you will definitely have two JSON files. One of them been package.json and the other package-lock.json.

**The purpose of package.json and package-lock.json in a Node.js project, is to ensure that all the dependencies or packages that are needed for your application to function properly are tracked.** 

The main things that are tracked are the names of the packages and their versions.

Let's take an example of a package.json file and package-lock.json and see their difference.

**Package.json snippet**

```json
{
  "name": "legacy1.0",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build-css": "tailwindcss build -i ./src/styles.css -o ./public/styles.css --watch"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "tailwindcss": "^3.2.6"
  }
}
```



**Package-lock.json snippet**

```json
 "node_modules/tailwindcss": {
      "version": "3.2.6",
      "resolved": "https://registry.npmjs.org/tailwindcss/-/tailwindcss-3.2.6.tgz",
      "integrity": "sha512-BfgQWZrtqowOQMC2bwaSNe7xcIjdDEgixWGYOd6AL0CbKHJlvhfdbINeAW76l1sO+1ov/MJ93ODJ9yluRituIw==",
      "dependencies": {
        "arg": "^5.0.2",
        "chokidar": "^3.5.3",
        "color-name": "^1.1.4",
        "detective": "^5.2.1",
        "didyoumean": "^1.2.2",
        "dlv": "^1.1.3",
        "fast-glob": "^3.2.12",
        "glob-parent": "^6.0.2",
        "is-glob": "^4.0.3",
        "lilconfig": "^2.0.6",
        "micromatch": "^4.0.5",
        "normalize-path": "^3.0.0",
        "object-hash": "^3.0.0",
        "picocolors": "^1.0.0",
        "postcss": "^8.0.9",
        "postcss-import": "^14.1.0",
        "postcss-js": "^4.0.0",
        "postcss-load-config": "^3.1.4",
        "postcss-nested": "6.0.0",
        "postcss-selector-parser": "^6.0.11",
        "postcss-value-parser": "^4.2.0",
        "quick-lru": "^5.1.1",
        "resolve": "^1.22.1"
      },
      "bin": {
        "tailwind": "lib/cli.js",
        "tailwindcss": "lib/cli.js"
      },
      "engines": {
        "node": ">=12.13.0"
      },
      "peerDependencies": {
        "postcss": "^8.0.9"
      }
    },
```

As you can see, the `package.json` file has just little information like the dependency name and the corresponding version.

`"dependencies": {
    "tailwindcss": "^3.2.6"
  }`

But package-lock.json file takes its own to another level by providing details about the name of the package, the corresponding version, the npm registry where the package is downloaded from, 

and other behind the scene packages that the package you intend to install also depends on.

Like in the example above, you will see that the package or dependency is `tailwindcss`.

This `tailwindcss` package also depends on another package called `postcss`.

Also, this `postcss` package in the package-lock.json file under the `tailwindcss` dependency has it own corresponding version. That's how detailed the information in the package-lock.json file is.

Now here comes the answer to the question – “Is package-lock.json needed for deployment?”

**Yes, the `package-lock.json` file is needed for deployment in most cases. Because when you deploy your application, the package manager either npm or yarn will use the information in the `package-lock.json` file to install the exact same versions of the packages and dependencies that you have been working with during development.**

**Read on:** [Which Is Better Yarn or npm?](/how-to-tech/which-is-better-yarn-or-npm/)

This ensures that your application runs as expected in the production environment, with the same package versions and dependencies as in your development environment.

So therefore, the `package-lock.json` file is an essential part of the Node.js application deployment process and should be included in the deployment package.