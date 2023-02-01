---
title: "Netlify Sitemap Plugin: How to Exclude Certain Pages"
slug: "netlify sitemap plugin how to exclude certain pages "
postdate: January 31, 2023
description: In this post, we would be looking at how to exclude some certain
  pages that we dont want to show on the sitemap page since google will crawl
  and index whatever it finds in the sitemap.
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/screenshot-2023-01-31-at-08-58-20-content-manager.webp
weight: 81
categorylink: /categories/how-to-tech
type: posts
author: Mohammad Jamiu
draft: false
mathjax: false
Google_Ads: true
---
In one of the previous post, we discussed how to automatically generate a sitemap for a website (Specifically Static Site) using Netlify [sitemap plugin](/how-to-tech/how-to-add-sitemap-to-your-site-using-netlify-plugin/).

**But in this post, we would be looking at how to exclude some certain pages that we don't want to show on the sitemap page, since Google will crawl and index whatever it finds in the sitemap.**

## Go to your netlify.toml config file and add the following code to it.

```toml
[[plugins]]
  package = "@netlify/plugin-sitemap" # The netlify sitemap plugin
  
  [plugins.inputs]
    exclude = [
      '**/admin',    # Excluding the admin folder for netlifyCMS
      '**/contact.html',  # Excluding contact page
      '**/404.html',  # Excluding 404 page
    ]
```

> **Note:**
>
> Every pages like /contact, /about or /404 need .html to be added but in the case of the admin folder, you don't put .html since it is a folder used for Netlify CMS