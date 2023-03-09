---
title: How to Import and Export Modules in Javascript | Simple Explanation
slug: how to export and import modules in javascript
postdate: March 9, 2023
description: A simple explanation of how to import and export modules in javascript
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/imgph.webp
weight: 99
categorylink: /categories/how-to-tech
type: posts
author: Mohammad Jamiu
draft: false
mathjax: false
Google_Ads: true
---
**What is and Why use Module?**

A module in simple term is a broken piece from a huge file. Or let say you have several files and instead of jamming everything into a single js file you can split it into several js files and import each file where necessary. 

It makes code easier to manage and also to help abstract some stuff so you would just focus on executing.

## How to Import Modules in JavaScript.

To import modules in JavaScript, you need to link to the main JS file. The main JS file denotes the overhead file where other modules are imported into. In the index.html file of your webpage, you need to use `<script type="module" src="js/script.js"></script>` as oppose `<script src="js/script.js"></script>`. You can see that the difference is the added `type="module"` which tells the browser that the main JS file is using a module.

> If you got an error here is how to [truoubleshoot it](/how-to-tech/how-to-fix-uncaught-syntaxerror/).

Let create another JS file which we need to import. I will name it days.js,

> make sure that all js files are in the same folder or a defined hierachy

Inside the days.js add these following lines codes.

```js
const monday = function () {
  return "It's Monday!";
};
const tuesday = function () {
  return "It's Tuesday!";
};
const wednesday = function () {
  return "It's Wednesday!";
};
```

In order to use this functions in our main JS file, which in my case is named `script.js`, I need to make some tweak to the code. The tweak is to export the functions.

## How to Export Modules in JavaScript

```js
export const monday = function () {
  return "It's Monday!";
};
export const tuesday = function () {
  return "It's Tuesday!";
};
export const wednesday = function () {
  return "It's Wednesday!";
};
```

As you can see, the keyword `export` is added at the front of every function to make them available for other files.

> If you dont export the files, there is no way to access the file.

In the script.js file, to import the days.js file, you need to use the `import` keyword as below `import * as days from "/js/days.js";`

Where: **import** says import,


**\*** denotes everything


**as** is used to give **\*** a name


**days** is the name of the file we are importing, or whatever name you want


**from** is self-explanatory and lastly, the file path.

> The file path must be in quotes and it depends upon where your file lives.
>
> Sometimes it wont work the way i set it up as "/js/days.js" so you can try "./js/days.js", "../js/days.js" or "./days"

To test if everything is working well, log one of the function `console.log(days.monday());` 

Now let's destructure what we pass in the `console.log()` which is `days.monday()`.

`days` – is the name we named it from the `import * as [days] from "/js/days.js"` and, secondly, one of the name of the function inside the days.js file.

So to log other functions, you can do this

```js
import * as days from "/js/days.js";

console.log(days.monday());
console.log(days.tuesday());
console.log(days.wednesday());
```

Now we are done with importing and exporting of files using the **\*** placeholder.

There are other ways of importing files which is practical as it mostly used in JS library such as ReactJS.

### First way

If you just want to access specific function from the days.js file, instead of importing everything, you can use destructuring to access specific functions.

```js
import { monday, wednesday } from "/js/days.js";

console.log(monday());
console.log(wednesday());
```

```javascript
It's Monday!
It's Wednesday!
```

You can see that the difference is that instead of the `*`, `{}` is used, and the needed function name is passed in and separated with a comma if there are more than one. Another thing is that instead of the `days.monday()` used previously, it is eliminated completely and just `monday()` the function name is used.

## Second way

What if in the file you wanted to import into your main JS file contain only one function as it is mostly done in ReactJS because, each component contains a function, and it is going to return JSX (JavaScript XML – In simple term, It is HTML inside JavaScript). 

So in the case of just a single function, you export the file like this.

```javascript
export const week = function () {
  return "It's a new week!";
};
// export const monday = function () {
//   return "It's Monday!";
// };
// export const tuesday = function () {
//   return "It's Tuesday!";
// };
// export const wednesday = function () {
//   return "It's Wednesday!";
// };
```

> I commented out the files in the days.js and add a new single function called `week` and it is going to return `"It's a new week!"`

You can see that it is the same pattern as we have defined for the previous function, since it now contain single function week, the way to export the days.js file will be a bit different.

```javascript
export default function week() {
  return "It's a new week!";
}
// export const monday = function () {
//   return "It's Monday!";
// };
// export const tuesday = function () {
//   return "It's Tuesday!";
// };
// export const wednesday = function () {
//   return "It's Wednesday!";
// };
```

You have to use add default after the export keyword and remove `const week =` since export default allow only function to be exported and give the function a name. `week` which is used before is used.


To import the days.js file, it is imported this way. Notice that the function `week` is imported directly, as it is exported as default.

```javascript
import week from "/js/days.js";

console.log(week());
```

## Another way

There is another way in which you can export functions from a module, and here it is.

```javascript
export const week = function week() {
  return "It's a new week!";
};
export const weekOne = function weekOne() {
  return "It's another week!";
};
```

This code can be exported as

```javascript
const week = function week() {
  return "It's a new week!";
};
const weekOne = function weekOne() {
  return "It's another week!";
};

export default week;
export { weekOne };
```

> When you export using this method, you hve to export one of the functions as **default** and the rest as component using {...., ...., ....}

Here's how to import the module:

```javascript
import week from "/js/days.js";
import {weekOne, ...., .....} from "/js/days.js";
```

Have a nice day :tada: