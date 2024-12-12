---
title: "getStaticProps and getStaticPaths Are No Longer Supported in the Next.js
  App Router: Use generateStaticParams Instead"
slug: getstaticprops-and-getstaticpaths-are-no-longer-supported-in-the-next-js-app-router-use-generatestaticparams-instead
postdate: December 12, 2024
description: If you're transitioning to Next.js 15 or starting a new
  project   with the App Router, remember that getStaticProps and getStaticPaths
  are no   longer supported. Use generateStaticParams to pre-render dynamic
  routes effectively.
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/use-generatestaticparam-instead-of-getstaticprops-and-getstaticpath.png
weight: 449
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
I was working on a Next.js 15 project using the App Router when I needed to handle dynamic routes. While reviewing an older project from GitHub, I noticed the use of `getStaticProps` and `getStaticPaths` to fetch and pre-render data.

However, when I tried implementing them in my project, I realized that these functions were not supported in the App Router. This left me confused about how to achieve the same functionality in the latest version of Next.js.

The issue arises because the App Router, introduced in Next.js 13 and refined in versions 14 and 15, replaces the `getStaticProps` and `getStaticPaths` functions with `generateStaticParams` for handling static generation of dynamic routes.

## **Use generateStaticParams Instead of getStaticProps and getStaticPaths for Dynamic Routes**

To handle dynamic routes in the Next.js App Router, you need to use the `generateStaticParams` function. This approach is designed to work with server components and pre-render pages at build time.

Here’s how I updated the project to use `generateStaticParams` instead of `getStaticProps` and `getStaticPaths`.

### Step 1: Define Dynamic Route

In the App Router, create a file for your dynamic route inside the `app` directory. For example, to define a route like `/posts/[postId]`, create the following structure:

```
app/
  posts/
    [postId]/
      page.js
```

### Step 2: Use `generateStaticParams`

Add the `generateStaticParams` function to fetch the dynamic route parameters and pre-render pages for them.

```javascript
// app/posts/[postId]/page.js
export async function generateStaticParams() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return posts.map((post) => ({
    postId: post.id.toString(),
  }));
}

export default function PostPage({ params }) {
  const { postId } = params;

  return <div>Post ID: {postId}</div>;
}
```

### Explanation

1. **`generateStaticParams`:**\
   This function fetches the list of posts from the API and maps them into an array of `params` objects. Each object contains the dynamic route parameter (`postId`).
2. **`params` Prop:**\
   In the page component, the `params` prop is automatically passed, containing the `postId` value for the corresponding route.

## **Why `generateStaticParams`?**

The shift from `getStaticProps` and `getStaticPaths` to `generateStaticParams` reflects Next.js's evolution towards server components and improved build-time performance. Unlike the old functions, `generateStaticParams` works well with the App Router and focuses solely on pre-rendering dynamic routes.

## **Wrapping Up**

If you're transitioning to Next.js 15 or starting a new project with the App Router, remember that `getStaticProps` and `getStaticPaths` are no longer supported. Use `generateStaticParams` to pre-render dynamic routes effectively.

This not only aligns with Next.js's latest architecture but also simplifies dynamic route handling with server components.
