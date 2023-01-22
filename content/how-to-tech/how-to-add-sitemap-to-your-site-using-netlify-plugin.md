---
title: How to add sitemap to your site using netlify plugin
slug: how to add sitemap to your site using netlify plugin
postdate: January 17, 2023 8:35 AM
description: Here is a simple way to generate sitemap for your site
  automatically using netlify plugin
categorylabel: Tech Stuff
categories: "['How-to-tech']"
image: /images/promptinstallplugin.webp
weight: 76
categorylink: /categories/how-to-tech
type: posts
author: Mohammad Jamiu
draft: false
mathjax: false
Google_Ads: true
---

**You are done building your website but you need an automatic way of generating sitemap for your website without having to do much work.**

Here is a simple guide on how to do just that.



> **Note**.
>
> Your website has to be built with plain old HTML or any SSG (Static Site Generator) such as Hugo, Gatsby, 11ty etc. and also must be uploaded to Netlify.

1. You need to go to your Netlify dashboard
   ![Netlify Dashboard](/images/netlify-dashboard.webp "Netlify dashboard")

2. Click on the **Integrations** tab
   ![netlify integrations tab](/images/navtointegrations.webp "netlify integrations tab")

3. On the integration dashboard, click on the search bar and type **"sitemap"**
   ![search for sitemap integration tab](/images/searchforsitemap.webp "search for sitemap integration tab")

4. Then, click on **enable**
   ![sitemap plugin on Netlify dashboard](/images/presstheenablebtn.webp "sitemap plugin on Netlify dashboard")

5. The sitemap plugin prompt "install" will appear
   ![install plugin prompt](/images/promptinstallplugin.webp "install plugin prompt")

6. After clicking the install botton, you will be redirected to the dashboard.
   ![dashboard after plugin install](/images/backtodb.webp "dashboard after plugin install")
   Voila, you are done! But one last thing to do is for you to clear the cache of your site and redeploy.

7. You can do this by clicking on the production deploys tab then, you will see a page as below
   ![clear cache of site](/images/clearcachedeploy.webp "clear cache of site")

8. Click on the Trigger deploy dropdown and then click on clear cache. wait for netlify to do it's work and then visit your site url and apply /sitemap.xml e.g. yoursite.com/sitemap.xml

![your site url sitemap](/images/yoursitesitemapurl.webp "your site url sitemap")
