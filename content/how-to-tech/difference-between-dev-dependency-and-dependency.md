---
title: Difference Between Dev Dependency and Dependency?
slug: difference between dev dependency and dependency
postdate: April 23, 2023
description: The difference between a dependency and a devDependency is that
  dependency is needed always both in development and production phase, while
  devDependency is needed only in the development phase.
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/dependency-nad-devdep.webp
weight: 143
categorylink: /categories/how-to-tech
type: posts
author: Mohammad Jamiu
Affliate_Links: false
draft: false
mathjax: false
Google_Ads: true
---
![Dependency and devDependency in pacakage.json](/images/dependency-nad-devdep.webp "Dependency and devDependency")

**Dependency and devDependency** are external packages or libraries that a project or application relies on in order to function or execute properly.

The difference between a dependency and a devDependency is that dependency is needed always both in development and production phase, while devDependency is needed only in the development phase.

## What is Dependency and DevDependency?

**Dependency** is a package that is required for an application to function, and it is needed in the development process as well as in the production process. These can include frameworks (like Angular, Vue and Express), libraries (like ReactJS), or any other package that is necessary for an application to run properly.

**DevDependency** is a package that is only needed during the development process. This includes tools like testing frameworks, build tools (such as Webpack, Babel and Vite), and linters (like ESLint).

These tools are not needed for the actual running of the application, but they are necessary for building and testing it.

Dependencies and devDependencies can be found in the package.json file inside a project. This package.json file is the first thing that must be created when developing an application, as it keep track of all the dependencies and devDependencies a project relies or depend on.

It can be created manually and automatically. The latter is the best way and can be done by running `npm init`.

Here is how a package.json file for a ReactJS project looks like.

```json
{
  "name": "start-react-project",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.0.27",
    "@types/react-dom": "^18.0.10",
    "@vitejs/plugin-react": "^3.1.0",
    "vite": "^4.1.0"
  }
}
```

## Example of Dependency and DevDependency

For example, when building a ReactJS project, you need to import some packages like -

react (library) itself, react-dom (which help to render the React code to the DOM), react-router-dom (for routing react pages), webpack (for bundling react code), ESLint (for checking errors in code and for styling the way you write your code), Vite (a fast build tool) and others.

**Read on:** [How to Use Vite with React? Learn How to Create React App with Vite](/how-to-tech/how-to-use-vite-with-react/)

Out of these packages, react, react-dom and react-router-dom are dependencies that make a ReactJS project a ReactJS project as without these packages the project won't run properly not only during the development phase but also on production.

As you can see from the package.json file shown above, you will notice that there is an object in the JSON file that is tagged “dependencies”,

```json
 "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
```

These are the dependencies needed for the ReactJS project.

While packages like Webpack, Vite and ESLint are devDependencies. **Webpack** is a build tool used for bundling and optimizing react application code for production.

**Vite** is a build tool which offers fast development and reduced build times.

**ESLint** is a linter that checks your code for errors, coding style, and best practices while in development phase.

This means that once you are done coding or developing the application, you don't need these packages again once the project is live or deployed.

Inside the package.json file, you will see an object tagged `devDependencies`

```json
"devDependencies": {
    "@types/react": "^18.0.27",
    "@types/react-dom": "^18.0.10",
    "@vitejs/plugin-react": "^3.1.0",
    "vite": "^4.1.0"
  }
```

These are the devDependencies.

## Difference Between Dev Dependency and Dependency

|     | Dependency                                                                                                                                                                   | DevDependency                                                                                                                                                                                                                                              |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1.  | **Dependency** is a package that is required for an application to function, and it is needed in the development process as well as in the production process.               | **DevDependency** is a package that is required for an application to function, and it is needed only in the development process.                                                                                                                          |
| 2.  | A dependency package can be installed using npm (Node Package Manager) by running `npm install <package-name>` e.g., `npm install express` where **express** is the package. | A devDependency package can be installed using npm by running `npm install -D <package-name>` e.g., `npm install -D tailwindcss` where **tailwindcss** is the package. The flag `-D` is what differentiate a dependency package and that of devDependency. |
| 3.  | It can be found inside the package.json file inside a project with the tag `"dependencies"`                                                                                  | It can be found inside the package.json file inside a project with the tag `"devDependencies"`                                                                                                                                                             |
| 4.  | Examples of dependencies include react, react-dom, express etc.                                                                                                              | Examples of devDependencies include webpack, babel, ESLint etc.                                                                                                                                                                                            |