---
title: How to Fix Emoji Rendering in MDX with remark-emoji in Next.js
slug: fixing-emoji-rendering-in-mdx-with-remark-emoji-in-nextjs
postdate: December 12, 2024
description: To render emojis in MDX content on Next.js, install remark-emoji
  and add it to remarkPlugins in your Next.js config.
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/emoji-rendering-in-mdx-with-remark-emoji-in-nextjs.png
weight: 451
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
I moved my Hugo website to Next.js, but all the emojis I used with markdown syntax (e.g., `:warning:` or `:bulb:`) were displayed as text instead of actual emoji icons. I needed Next.js to recognize the emoji text like `:bulb:` in the MDX content and render it as an emoji icon.

### How I Fixed the Issue

1. **Installed the Required Plugin**  
   I searched online and found that I needed the `remark-emoji` plugin to handle emoji rendering in MDX files. I installed it by running:

   ```bash
   pnpm add remark-emoji
   ```

2. **Updated Next.js Config**  
   In my `velite.config.ts` (since I’m using [Velite](https://velite.js.org/) for MDX content), I added the `remark-emoji` plugin to the `remarkPlugins` array, which is used to configure MDX processing:

   ```javascript
   mdx: {
     rehypePlugins: [
       rehypeSlug,
       [rehypePrettyCode, { theme: "github-dark" }],
       [
         rehypeAutoLinkHeadings,
         {
           behavior: "wrap",
           properties: {
             className: ["subheading-anchor"],
             ariaLabel: "Link to section",
           },
         },
       ],
     ],
     remarkPlugins: [remarkEmoji],
   },
   ```

3. **Tested the Emoji Rendering**  
   After making the changes, I restarted the development server, and the emojis in my MDX files were rendered correctly as icons instead of text.
