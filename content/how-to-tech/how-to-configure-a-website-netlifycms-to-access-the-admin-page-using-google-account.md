---
title: How to configure a website netlifyCMS to access the admin page using
  google account
slug: how to configure a website netlifyCMS to access the admin page using
  google account
postdate: January 26, 2023
description: In today's mini guide, I will be explaining how to access the admin
  page of a website e.g. yoursite.com/admin which is configured using
  netlifyCMS using google account.
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/screenshot-2023-01-26-at-14-47-52-identity-site-settings.webp
weight: 78
categorylink: /categories/how-to-tech
type: posts
author: Mohammad Jamiu
draft: false
mathjax: false
Google_Ads: true
---
**In today's mini guide, I will be explaining how to access the admin page of a website e.g., yoursite.com/admin which is configured using netlifyCMS using google account.**

The first thing to do is, make sure that there is an admin folder in the root of your website, which has to contain two files: a **config.yml and index.html**. 

The important thing which allows Netlify to grant access to the admin page when a user goes to his or her  website URL/admin is that you there must be a link that has to be embedded into the index.html file inside the admin folder.

 It must also be embedded inside the head tag of the homepage.

Depending on how you build your site, as in the case of mine, I use Hugo (an SSG) which means that the homepage is the index.html inside layout/index.html. 

Also, as I break my site into manageable chunks, I have a partial inside the partials folder called the head.html. It holds all the stuffs that have to go into the head tag of a webpage.

So just place the Netlify identity script link and you are done with that for now.

![identity script link](/images/identity-script-link.webp "identity script link")

```html
<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
```
Now you will need to log in to your Netlify dashboard and click on the integrations tab.

On the integrations page, you will see a sidebar in which there is a link called **identity**.

Click on it and it shows display the Netlify identity integration.

![netlify identity integration](/images/identity-integrations.webp "netlify identity integration")

Then, click on **View** 

![identity setting and usage](/images/identity-integrations-settings-and-usage.webp "identity setting and usage")

Next, is to click on **Settings and Usage** and then move to the **Registration** tab, click on edit settings and click on **Invites only.** The purpose of this is to allow only the user you give access to, to be able to log in with their Google email account.

![netlify config registration tab](/images/screenshot-2023-01-26-at-14-49-23-identity-site-settings.webp "netlify config registration tab")

![invites only](/images/screenshot-2023-01-26-at-14-49-49-identity-site-settings.webp "invites only")

You then need to go to the external provider tab, which is right under the registration tab.

![netlify external provider](/images/screenshot-2023-01-26-at-14-50-08-identity-site-settings.webp "netlify external provider")

Under the dropdown, click on Google, as in my case I have already done that, that's why you see it as default.

One last thing to not forget is to enable **Git Gateway** if you are using GitHub.

> **Note:** 
>
> NetlifyCMS works with Github as of now.

![enable git gateway](/images/screenshot-2023-01-26-at-14-45-49-identity-site-settings.webp "enable git gateway")

Go back to the Netlify Identity tab and then click on invite users. You will need to add the email address that you wish to give access to, and that's it.

![back to netlify identity tab](/images/screenshot-2023-01-26-at-14-51-42-identity-integrations.webp "back to netlify identity tab")

![choose email](/images/screenshot-2023-01-26-at-15-16-09-identity-integrations.webp "choose email")

After sending the **invite link** to the email, open the email and then click on the invite link.

![invite link in email](/images/screenshot-2023-01-26-at-14-53-49-you-ve-been-invited-to-join-tahugo-update.netlify.app-jamiubabatundebalogun-gmail.com-gmail.webp "invite link in email")

Now login to your website/admin and click on Google and then the Google account.

![netlify admin login](/images/screenshot-2023-01-26-at-14-55-27-content-manager.webp "netlify admin login")

Boom that's all.