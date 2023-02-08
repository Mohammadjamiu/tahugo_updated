---
title: 5 Steps on How to Get Youtube Video Data in JSON Format
slug: how to get youtube video data in json format
postdate: February 8, 2023
description: Here are steps on how to get any feeds like youtube video data in json format
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/screenshot-2023-02-08-at-14-56-12-rss-to-json-online-converter-rss2json.com.webp
weight: 90
categorylink: /categories/how-to-tech
type: posts
author: Mohammad Jamiu
draft: false
mathjax: false
Google_Ads: true
---
To get your YouTube video data such as link, title in JSON format, here are the steps to follow

1. Go to[ RSS-to-JSON](https://rss2json.com) Online converter 

2. Go to your YouTube channel and grab your channel ID \
\
To grab your ID you need to go to your YouTube channel and on the URL of your YouTube page, you will see some code after the `https://www.youtube.com/channel/`which in my case is `UCm814ttdg5c0GvOrRCUE3z8g`that's your channel ID.\
\
**For example:** `https://www.youtube.com/channel/UCm814ttdg5c0GvOrRCUE3z8g` 

3. After grabbing your channel's ID, you need to replace the bolded ID in the YouTube feeds link below

```http
https://www.youtube.com/feeds/videos.xml?channel_id=UCm814Any5c0GvOrRCUE3z8g
```

After replacing the ID in the YouTube feeds link with your own ID, copy the whole link and go back to the RSS-to-JSON website.

4. Paste the code in the box and click on **convert to JSON**. It will reload, and you will see your YouTube video data in JSON format. 

![rss to json](/images/screenshot-2023-02-08-at-14-56-12-rss-to-json-online-converter-rss2json.com.webp "rss to json")

5. If you want the link of the JSON format instead of copying the JSON data from the website, below the convert to JSON box you will see **"API call: "**

![rss to json api call](/images/screenshot-2023-02-08-at-14-56-43-rss-to-json-online-converter-rss2json.com.webp "rss to json api call")

Copy the link after the colon, that it is a link that will automatically update itself when you upload new video.

```http
<https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3DUCm814Any5c0GvOrRCUE3z8g>
```

That the link of your YouTube video in JSON format.

Let say you are using HUGO (a static site generator) to get the json data from the url, all you need to do is use the getJSON command in Hugo.

```go
{{ getJSON  "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3DUCm814Any5c0GvOrRCUE3z8g"}}
```