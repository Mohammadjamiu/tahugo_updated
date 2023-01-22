---
title: "{{ replace .Name "-" " " | title }}"
postdate: {{ dateFormat "January 02, 2006" .Date }}
image: ""
description: ""
alt: ""
weight: ""
type: em-post
author: {{ .Site.Params.author }}
categories: ["Electromagnetics"]
categorylink: "/categories/electromagnetics/"
wordcount: false
Google_Ads: false
mathjax: false
draft: false
---
