---
title: "What is a MAC Address? Explained With Examples"
postdate: February 28, 2022
image: ""
description: ""
alt: ""
weight: "46"
author: Mohammad Abdul
categorylabel: Networking and Communication
categorylink: /categories/networking-and-communication
categories: ["Networking and Communication"]
type: posts
Google_Ads: true
wordcount: false
mathjax: false
draft: false
---

**MAC address is termed as Media Access Control address**. It is a unique address assigned to every network device and cannot be altered or changed. This address is also called a physical address which is attached to a device by the manufacturer.

The MAC address resides on the Layer 2 of the <a href="/networking/the-seven-layers-of-the-osi-model-explained/" class="links-to-article">OSI model</a>. It consists of 48-bits or 6-bytes and it is sometimes called MAC–48 or EUI-48 (Extension Unique Identifier). Each byte consists of a hexadecimal number.

An example of a MAC address is XX:XX:XX:XX:XX:XX or 4A:30:10:21:10:1A

The breakdown of a MAC address is shown below.

<img loading="lazy" src="/images/macad_1.webp" alt="breakdown of a MAC address">

<img loading="lazy" src="/images/macad_2.webp" alt="first byte of a MAC address">

The first 3 bytes or 24-bits are designated as the OUI (Organizational Unique Identifier) and the last the 3-bytes are designated as NIC/EI (Network Interface Card / Extension Identifier).

## Types of MAC address

1. Unicast MAC address
2. Multicast MAC address
3. Broadcast MAC address

The unicast MAC address is mostly the address of the sender or a particular device.

An example of a unicast MAC address is **4A:30:10:21:10:1A **

Multicast address is the address of group of computers or devices in a network.

An example of a multicast MAC address is **10:00:5E:00:01:01 **

Broadcast address is an address for sending broadcast message. It allows ARP request to be possible.

An example of a broadcast MAC address is **FF:FF:FF:FF:FF:FF **

## How do you Identify a MAC address?

The first byte or 8-bits has something important which allows you to identify if a MAC address is unicast or multicast. In the first 8-bits, there are 8 zeros and one’s but the focus here is that of the LSB (least significant bit) b0. If it is zero then it a unicast MAC address but if the LSB (b0) is one then it is a multicast address.

But for a broadcast MAC address, it has a generic address which consists of 48 1’s i.e. all the 48-bits are one’s. it is written as FF:FF:FF:FF:FF:FF and as each byte is hexadecimal, FF represent (1111).

Here is an article showing you <a href="/networking/how-do-you-know-if-a-mac-address-is-unicast-multicast-or-broadcast/" class="links-to-article">how to identify if a MAC address is unicast or multicast</a> with examples.

Another thing to note is that MAC address can be of different format or pattern for example, the 4A:30:10:21:10:1A has colon why some has dashes. The one with colon (:) is mostly found in devices such as Apple products while that of the dashes is found in windows. Also, Cisco uses this format 4A30.1021.101A and all of these format is same.

## How do you know the MAC address of your computer?

On your PC, just open up the command prompt and type _ipconfig /all_ on windows. Then it will pop out some information and in it you will be able to identify your MAC address.

<img loading="lazy" src="/images/ipconfig.webp" alt="How do you know the MAC address of your computer">

## Summary

In summary, a MAC address consists of 48-bits and it is needed to uniquely identify a network device.
