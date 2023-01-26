---
title: "What Is Network Address Translation (NAT) and Its Types?"
postdate: July 25, 2022
image: ""
description: "NAT is termed network address translation, it is used to translate private IP address to public IP address. There are three types of NAT which are static NAT, Dynamic NAT and PAT (which is also called Overloading NAT)."
alt: ""
weight: "54"
author: Mohammad Jamiu
categorylabel: Networking and Communication
categorylink: /categories/networking-and-communication
categories: '["Networking and Communication"]'
type: posts
Google_Ads: true
wordcount: false
mathjax: false
draft: false
---

Every device needs an IP address (or public IP address) to access the internet. For that reason, engineers in the 1970’s decided to do some research so as to know how long an IP address needs to be.

Put in mind that a data packet (or information) often contains a sender IP and receiver IP address (or source and destination IP address) and the aim of the engineers also is to keep the packet as small as possible.

**If a 2-bit IP address is chosen, it will result in a small packet size but the drawback is that the available IP addresses slot is minimal.**

**If they also decide to go with 256-bit IP address, it will result in a huge data packet size with a lot of available slot to accompany even trillions of devices.**

Now due to the tradeoffs, they settled on 32-bit IP address which offers over 4 billion (4,294,967,296) IP addresses and also with a moderate file size and this IP address version is termed as IPv4 (IP version 4).

During that time, they believe 4 billion is enough as internet is not widely spread.

Years later, there is an increase reduction in the number of available slot so they tried as much to proffer solution which they decided also to go from the IPv4 to IPv6 with (3.4 x 10^38) number of IP addresses or 128-bit long addresses which is huge but the drawback is that devices have been built based on IPv4

so it’s kind of tedious but prior to working more on IPv6 they look out to providing a certain type of IP address called Private IP address so that if we have even a million device, they would provide only one public address to us so as to limit the usage of the public address.

This private IP address is of two type, one with the 192.168.X.X or 10.X.X.X and the reason being is to provide more available private address and a I am convinced that they have learnt from their mistakes.

The private IP address is uniquely assign to each devices we own e.g. smartphone, computer, laptop etc. with the help of a router in order to access the internet because the private IP address can only be used to communicate between different computers but not to access the internet.

The router which assign a private address to our device has a public address. But how does NAT come into play?

## What is Network Address Translation (NAT)?

**NAT** is a translator which is embedded into a router and it function is to translate private IP address to a public IP address. It stores this on a table called NAT forwarding table.

## Types of NAT

There are three types of NAT Which are:-

1. Port Address Translation (PAT) or NAT overloading
1. Dynamic NAT
1. Static NAT

Out of all the types of NAT, PAT is commonly used as it is what we use when accessing the internet with our device.

### what is Port Address Translation (PAT)?

In PAT, when a computer wants to communicate with the internet, it first sends it data packet which contains a source and destination address with port numbers attached to it, the router sees it but cannot directly push it to the internet so it does some underground work with the help of the NAT by translating the source address which is a private address to its own public address and then send to the internet.

The internet sends the query to the web server (e.g. google.com) and the web server responds to the query. The result is then send back to the router and the router sees a source address which is of the web server and a destination address which is the public address of the router.

The router then looks out on its NAT forwarding table to see the private address associated to it and boom it sends the response it got from the web server to it.

### what is Dynamic NAT?

The difference between PAT and Dynamic NAT is that, instead of assigning the routers public address to any device trying to access the internet, it has a pool of several public addresses which it can use.

This means that upon sending any data packet from a computer it assigns a public address which will be different from the public address it is going to assign when receiving the response to the data packet sent.

In essence it does not have to store any public address to a table as it is dynamic.

### what is static NAT?

In static NAT, instead of the router to do the job itself, the user has to manually type in the public address to be associated to with the private address.

## Advantages of NAT

It helps to translate or map private IP address to public IP address
It helps to reduce or conserve the number of public IPv4 addresses to be used
It helps protects the privacy of our devices as only the public address is available to the world

## Disadvantages of NAT

Due to translation that has to occur, there is delay in switching paths
When NAT is enabled, some applications would not function
Troubleshooting of certain network issues is quite complicated as there is no end to end IP traceability.
