---
title: How to Use Vite with React? Learn How to Create React App with Vite
slug: how to use vite with react
postdate: February 14, 2023
description: how to use vite with react
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/vite-localserver-on-web.webp
weight: 97
categorylink: /categories/how-to-tech
type: posts
author: Mohammad Jamiu
draft: false
mathjax: false
Google_Ads: true
---

[Vite ](https://vitejs.dev/)is a popular build tool among developers which offers fast development and reduced build times.

It is packed with features like instant server start, hot module reload (HMR) and pre-bundling.

## Why should you use Vite to Create React App (CRA)?

If you have ever used the normal create react app offered by the developers of React, you will see that it takes time to create a React app even though you just want to use it for a simple project.

Another thing is that its folders are kind of bloated with files, which for a starter project might not be useful.

But with Vite, you can create a React app with less build time and the files in the folder are minimal with optimal output.

## How do I use Vite for React app?

Here are the steps to follow to create a React app with Vite from scratch -

> **Pre-requisite:**
>
> Make sure to have node installed on your machine.
>
> To see if you have node install, use the command `node -v` in your terminal to know the version of node that you have.
>
> If you dont have node install, you can go to their website and [install](https://nodejs.org/en/) it on your machine - it is that straight forward.

1. Create a folder and name it whatever you want – in this example, **vite_react** is used as the name of the folder.

![create a new folder](/images/create-new-folder-vite-react.webp "create a new folder")

2. Open the folder with your preferred IDE, – in this case I will be using VS Code so, I will have to right-click on the folder and **Open with Code**.

![right click and open with vscode](/images/right-click-open-with-vscode.webp "right click and open with vscode")

3. A new window will pop up. Make sure to open your terminal in that folder.

![open the terminal to use vite](/images/open-the-terminal-vite-react.webp "open the terminal to use vite")

4. To install Vite, you need to run `npm create vite@latest` and press enter.

![run npm create vite@latest](/images/run-npm-create-vite-latest.webp "run npm create vite@latest")

5. After running `npm create vite@latest`, you will be asked to put a project name, so you can name it whatever you like and in this example, the project name where our React app will live is `"start-react-project"`. Then click enter.

![npm project name prompt](/images/vite-project-name.webp "npm project name prompt")

![vite project name](/images/vite-project-name-start-react-project.webp "vite project name")

6. It will ask you to select a framework. Since, this project is a React project, you need to select React from the list.

> To select React from the lists, you the up and down arrow key on your keyboard.
>
> Note:
>
> From the list you can see that Vite is not used only for React projects but for others as well.

![vite select framework](/images/vite-select-framework.webp "vite select framework")

![vite choose react](/images/vite-choose-react.webp "vite choose react")

7. It will also ask to choose a variant. The variant indicates if you would like to use Vanilla JavaScript or Typescript. So select your choice, but I will select JavaScript.

   Then click enter.

![select variant](/images/vite-select-variant.webp "select variant")

8. Now change your directory to the **"start-react-project"** by running `cd start-react-project`

![vite ask to cd into folder](/images/vite-cd-to-project.webp "vite ask to cd into folder")

![cd into project](/images/cd-start-react-project-vite.webp "cd into project")

9. Run `npm install` to install all the dependencies React needs.

![project created](/images/vite-npm-install.webp "project created")

![installing dependencies](/images/vite-installing-dependencies.webp "installing dependencies")

![npm install complete](/images/npm-install-complete.webp "npm install complete")

10. After the dependencies are installed completely, you need to spin up a local server by running `npm run dev` and go to the provided URL.

![npm run dev](/images/vite-npm-run-dev.webp "npm run dev")

![vite local server](/images/vite-local-server.webp "vite local server")

![vite on the web](/images/vite-localserver-on-web.webp "vite on the web")

11. Boom that's all. You can see from the folder structure provided by Vite, it is quite minimal as compared to using a create-react-app.

![vite folder structure](/images/vite-react-src-folder.webp "vite folder structure")

Good luck to using React + Vite :tada:
