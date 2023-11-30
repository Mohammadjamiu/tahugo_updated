---
title: How to fix error hydration failed because the initial UI does not match
  what was rendered on the server in next JS?
slug: how to fix error hydration failed because the initial ui does not match
  what was rendered on the server in nextjs
postdate: November 29, 2023
keywords:
  - How to fix error hydration failed because the initial UI does not match what
    was rendered on the server in next JS?
description: Check your JSX/TSX files for incorrect HTML nesting, address issues
  with the Next.js Link component, and consider external factors like browser
  extensions or third-party libraries.
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/nextjs-hydration.webp
weight: 391
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
![hydration error in nextjs](/images/nextjs-hydration.webp "hydration error in nextjs")

The error “**Hydration failed because the initial UI does not match what was rendered on the server**” occurs in Next.js when there is a difference between the HTML markup generated on the server and the HTML markup rendered on the client-side.

This mismatch disrupts the hydration process, which is responsible for attaching event listeners and making the page interactive.

> :bulb:
>
> In Next.js, hydration is the process of transforming the server-rendered HTML into a fully interactive React application, enabling user interactions and a seamless user experience. 
>
> It involves attaching event listeners, handling user interactions, and updating the DOM in response to state changes.

## Common Causes of the Error

There are several reasons why this error might occur, but some of the most common include:

### **1. Incorrect HTML Structure**

Next.js expects the HTML structure to be consistent and semantically correct. 

For instance, nesting a `<div>` tag inside a `<p>` tag is invalid and can lead to hydration errors.

```jsx
export default function Home() {
	return (
		<main>
			<p>
				<div>Hello World</div>
			</p>
		</main>
	);
}

```

### **2. Misusing Next.js Components**

Some Next.js components, such as `<Link>`, have specific usage requirements. 

Using them incorrectly, such as wrapping an `<a>` tag within a `<Link>` component, can cause hydration issues.

```jsx
export default function Home() {
	return (
		<main>
			<Link>
				<a> </a>
			</Link>
		</main>
	);
}

```

### **3. Third-party Libraries**

Integration with third-party libraries can introduce compatibility issues and affect the hydration process.

### **4. Browser Extensions**

Certain browser extensions may inject code into the client-side rendering, leading to differences between the server-rendered and client-rendered markup.

### **5. Strict Mode**

Enabling strict mode in Next.js' configuration file (`next.config.js`) can trigger warnings for potential hydration mismatches, allowing you to identify and rectify them before they cause errors.

## **How to fix error: hydration failed because the initial UI does not match what was rendered on the server in Next.js?**

### **1. Verify HTML Structure**

Make sure that the HTML markup on the server and client-side is identical. 

Check for correct nesting of tags, proper use of semantic elements, and consistent attribute usage.

> :bulb:
>
> You can look at the error it shows and quickly figure out if it is due to the HTML structure.

### **2. Correct Component Usage**

Use Next.js components as intended and follow their API guidelines. 

Avoid misusing components or wrapping them in unnecessary elements.

### **3. Test with Incognito Mode**

Try disabling browser extensions or opening the Next.js application in incognito mode to eliminate interference from extensions that might be affecting hydration.

### **4. Identify Incompatible Libraries**

Investigate any third-party libraries or scripts you're using to ensure they are compatible with Next.js and don't interfere with hydration.

### **5. Use suppressHydrationWarning**

As a temporary workaround, you can suppress the hydration warning by adding the `suppressHydrationWarning` prop to the affected element. 

In this example below, `suppressHydrationWarning={true}` is applied to the `customComponent` to suppress the hydration warning.

```jsx
export default function Home() {
  return (
    <main>
      <customComponent suppressHydrationWarning={true} />
    </main>
  );
}

```

You can also use this prop with HTML elements, as shown below:

```jsx
export default function Home() {
  return (
    <main suppressHydrationWarning={true}>
      {/* Other components and content */}
    </main>
  );
}

```

This prop can be added to various elements, such as `html`, `body`, or `main` tags, to suppress hydration warnings for the entire component or page. 

> :warning:
>
> However, this should be used as a last resort and not a permanent solution.

### **6. Upgrade Dependencies** 

Ensure that Next.js and all related dependencies are up-to-date. Updates often address compatibility issues and bugs that might be causing hydration errors.

## **FAQs**

**1. How can I fix the “Hydration Failed” error in Next.js?** 

Review your JSX/TSX files for incorrect HTML nesting, address issues with the Next.js Link component, and consider external factors like browser extensions or third-party libraries.

**2. Why is incorrect HTML format a common cause of hydration issues?** 

Incorrect HTML structure can lead to mismatches between server-rendered HTML and client-rendered JavaScript, causing the “Hydration Failed” error.

**3. Is the misuse of the Next.js Link component a common issue?**

Yes, misusing the Link component with an anchor tag can create duplicate anchor tags, causing hydration errors.

**4. Can browser extensions contribute to hydration failures?** 

Yes, browser extensions injecting code may result in client-server mismatches. Try viewing your Next.js project in incognito mode or disabling extensions to identify and fix the issue.

**5. How do I handle hydration warnings with client-side libraries?** 

Use the `suppressHydrationWarning` prop on affected elements or tags, like `<body>` to temporarily suppress warnings caused by client-side libraries.