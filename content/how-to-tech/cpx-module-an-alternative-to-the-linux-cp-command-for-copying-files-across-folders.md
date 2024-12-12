---
title: "cpx Module: An Alternative to the Linux cp Command for Copying Files
  Across Folders"
slug: cpx-module-an-alternative-to-the-linux-cp-command-for-copying-files-across-folders
postdate: December 7, 2024
description: The cpx module provides a simple, cross-platform way to copy
  files   and folders, making it an excellent alternative to the Linux cp
  command for   Windows users.
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/cpx-an-alternative-to-cp-linux-command.png
weight: 448
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

I was studying a GitHub repository and decided to download a copy of the code to my machine. After running `npm install`, I encountered an error caused by this `postinstall` script:

```json
"postinstall": "cp node_modules/swiftlatex/dist/swift*.js node_modules/swiftlatex/dist/*.wasm public"
```

It required the use of the `cp` command, which I learned is a Linux command used for copying files or folders from one part of the file system to another. It’s a powerful tool for file system operations like moving, deleting, or duplicating files.

Since I’m using a Windows machine, the Linux `cp` command wouldn’t work. After doing some research, I found an npm package called **cpx**.

**Link to the cpx module:** https://www.npmjs.com/package/cpx

According to its documentation, cpx provides a CLI tool similar to `cp`, with added functionality like watching for file changes.

Here’s how you can install it:

```bash
npm install cpx
```

The usage pattern is:

```bash
cpx <source> <dest> [options]
```

Where:

- `<source>` is the glob pattern for the files you want to copy.
- `<dest>` is the destination directory.

For example:

```bash
cpx "src/**/*.{html,png,jpg}" app --watch
```

This command copies all `.html`, `.png`, and `.jpg` files from the `src` directory to the `app` directory, preserving the folder structure. It also watches for changes and re-copies files as needed.

In the project I was working on, the `postinstall` script looked like this:

```json
"postinstall": "cp node_modules/swiftlatex/dist/swift*.js node_modules/swiftlatex/dist/*.wasm public"
```

To make it work on Windows, I replaced `cp` with `cpx`, like this:

```json
"postinstall": "cpx \"node_modules/swiftlatex/dist/swift*.js\" public && cpx \"node_modules/swiftlatex/dist/*.wasm\" public"
```

This version uses `cpx` to copy all files matching `swift*.js` and `.wasm` from the `node_modules/swiftlatex/dist` directory into the `public` folder in my Next.js project.

In essence, **cpx** is a great alternative to the Linux `cp` command for Windows users. It was exciting to learn something new and see how seamlessly I could adapt the project to my environment!
