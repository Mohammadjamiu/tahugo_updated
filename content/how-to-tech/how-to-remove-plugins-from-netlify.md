---
title: How to remove plugins from Netlify?
slug: how to remove plugins from netlify
postdate: February 6, 2023
description: Here are the steps to follow to remove unwanted plugins from Netlify
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/screenshot-2023-02-06-at-03-51-12-enabled-integrations.webp
weight: 87
categorylink: /categories/how-to-tech
type: posts
author: Mohammad Jamiu
draft: false
mathjax: false
Google_Ads: true
---
In one of our previous post, we discussed on how to [install plugins](/how-to-tech/how-to-add-sitemap-to-your-site-using-netlify-plugin/) on Netlify. 

But in this post, we are going to be looking at how to remove plugins from Netlify.

**Plugins might be very important because it helps to automate task like generating sitemap for a website or minifying of CSS, JS, or HTML files but with its advantage, it also has downside.**

Because plugins, do increase the build time for deploying a site or even does the opposite of making a site fast.

## Step to remove or uninstall plugins from Netlify

1. Login to your Netlify dashboard and click on the site you want to uninstall or remove Netlify plugin from.

![netlify sites](/images/screenshot-2023-02-06-at-04-16-19-team-overview-netlify.webp "netlify sites")

![site overview](/images/screenshot-2023-02-06-at-03-49-43-site-overview-taacademy.webp "site overview")

2. After clicking on the site, go to the integrations tab and click on it.

![all plugins](/images/screenshot-2023-02-06-at-03-50-17-all-integrations.webp "all plugins")

3. Click on the “Enabled” link on the left sidebar, and it will list all the plugins that you have installed.

![plugins enabled](/images/screenshot-2023-02-06-at-03-50-37-enabled-integrations.webp "plugins enabled")

4. Check for the Netlify plugin you wish to uninstall and click **“Disable”**.

![](/images/screenshot-2023-02-06-at-03-51-12-enabled-integrations.webp)

5. Now that you have removed the plugin, there is one last step to take.

 You need to clear cache and redeploy your site for the removed plugin to not have effect again.

![](/images/screenshot_1-2-.webp)