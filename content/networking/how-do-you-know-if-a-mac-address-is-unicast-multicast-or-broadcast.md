---
draft: false
wordcount: false
alt: ""
title: How Do You Know if a MAC Address is a Unicast, Multicast or Broadcast MAC
  address
postdate: February 24, 2022
description: A MAC address consist of a 48-bit or 6-byte. If the Least
  significant bit of the first byte is zero then it is unicast, if it is one
  then it is multicast while a broadcast has all its bit as 1's or FF.
categorylabel: Networking and Communication
categories: '["Networking and Communication"]'
image: /images/macexample_3.webp
weight: "45"
categorylink: /categories/networking-and-communication
type: posts
author: Mohammad Abdul
mathjax: false
Google_Ads: true
---
In order to know if a MAC address is a unicast MAC address, multicast MAC address or Broadcast MAC address, you need to understand what a <a href="/networking/what-is-a-mac-address-with-examples/" class="links-to-article">MAC address</a> is.

We have gone into details about that. But in this we will briefly explain it and also solve some examples.

{{< youtube q2U7Rg9KNG8 how do you if a mac address is unicast multicast or broadcast >}}

A **MAC address** consists of a 48-bit or 6-byte. As an example — 4A:30:10:19:10:1A
But the main point needed in order to identify if a MAC address is a unicast or multicast is the first byte.

The first byte consists of 8-bits \[b7, b6, b5, b4, b3, b2, b1, b0], b7 is the MSB (Most Significant Bit) while b0 is the LSB (Least Significant Bit).

If the LSB (b0) is 0 then it is said to be a **unicast MAC address**, but if LSB (b0) is 1 then it is said to be a **multicast MAC address**.

But a broadcast MAC address is generic and does not need to be noted using the LSB or whatsoever because it consists of **FF:FF:FF:FF:FF:FF or 1111:1111:1111:1111:1111:1111**.

### Examples of a unicast and a multicast MAC address

<br>

1. **4A:30:10:19:10:1A**

   Firstly, take the first byte, which is 4A. This 4A is in hexadecimal, has it consist of ‘A’ and ‘A’ has a decimal value of 10.

   So we need to take note of something since we are dealing with a hexadecimal value which is base 16, therefore we can have value ranging from 0 to 15 and the 15 denotes F in hexadecimal.

   Next step is to use a pattern noted as *8 4 2 1* because if you sum up the value you get 15.

   Now all we need to do is pick 4A which is our target and split it up into 4 and A. from the *8 4 2 1* pattern locate 4 and put one under it (i.e., you are turning it ON) while you have to turn OFF the rest by putting zero. The result will be 0100.

   For A, since it is 10 you need to look for combinations which will result in 10, and I guess it is 8 and 2 then, just turn them ON and switch the rest OFF as shown below, so you will get 1010.

   The next thing is to join the binary values up — 0100 1010 and as it is ending with zero then it is a unicast MAC address.
2. **08:00:27:EC:10:61**

   08 – will yield 0000 1000 and since it is ending with zero then it is a unicast MAC address.

   ![unicast mac address another example](/images/macexample_3.webp "unicast mac address another example")
3. **54:04:A6:3F:0B:00**

   54 – will yield 0101 0100 and since it is also ending with zero then it is a unicast MAC address.

   ![unicast mac address](/images/macexample_2.webp "unicast mac address")
4. **01:00:5E:00:01:01**

   01 – will yield 0000 0001 and since it is ending with one then it is a multicast MAC address.

   ![multicast mac address](/images/macexample_1.webp "multicast mac address")