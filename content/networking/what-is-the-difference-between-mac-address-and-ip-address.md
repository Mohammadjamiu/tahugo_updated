---
title: "What Is the Difference Between MAC Address and IP Address"
postdate: August 07, 2022
image: "diff-mac-ip.webp"
description: "Both MAC address and IP address are used to identify a device in a network but the only difference between a MAC address and an IP address is that, MAC address is available on a local network while an IP address is available on a global network (Internet)."
alt: "Difference Between MAC Address and IP Address"
weight: "66"
author: Mohammad Jamiu
categorylabel: Networking and Communication
categorylink: /categories/networking-and-communication
categories: ["Networking and Communication"]
type: posts
Google_Ads: true
wordcount: false
mathjax: false
draft: false
---

Both **MAC address and IP address** are used to identify a device in a network but the only difference between a MAC address and an IP address is that, MAC address is available on a local network while an IP address is available on a global network (Internet).

## What is MAC address?

MAC address which stands for Media Access Control is a unique address assigned to every network device and it cannot be changed. This MAC address is often imprinted on the device by the NIC manufacturer.

MAC address can be found at the data link layer which is layer 2 of the <a class="links-to-article" href="/networking/the-seven-layers-of-the-osi-model-explained/">OSI model</a>. It consists of 48bits and can be written as XX:XX:XX:XX:XX:XX. For example 2A:23:12:10:12:4A.

The first 24-bits (or 3 bytes) are assigned the Organizational Unique Identifier (OUI) while the last 24-bits are designated as the Network Interface Card.

There are three types of MAC addresses which are unicast, multicast and broadcast.

1. Unicast MAC address is often the address of a single device.

2. Multicast MAC address is the address which represent group of computers in a network.

3. Broadcast MAC address is used for broadcasting messages across different network.

_More on <a class="links-to-article" href="/networking/what-is-a-mac-address-with-examples/">MAC address</a>._

## What is IP address?

An IP address which stands for Internet Protocol is an address which is used to identify devices connected to the internet. An IP address resides on the network layer of the OSI model.

IP address is of two versions which is IPv4 (initial version) and IPv6 (later version).

IPv4 consists of 32-bits and is often written as XXX.XXX.XXX.XXX and it has value ranging from 0 – 255. For example, 192.168.48.5.

IPv4 consists of 128-bits and is it consists of eight set of four hexadecimal digits which are separated by colons. e.g. ECDA:BC12:4711:1034:5341:56BC:BACF.

As you can see IPv6 address is quite complex and it is so because IPv4 which is originally used in the 90’s and it is expected that with the over four billion address that is available in an IPv4 it would be sufficient but unfortunately, internet grow so fast and there is need to expand the available address and hence the IPv6.

_You can read more on why <a class="links-to-article" href="/networking/what-is-nat-and-its-types/">IPv4 needs to be transitioned to IPv6</a>._

## Difference between MAC address and IP address

|     | MAC Address                                                                                                                                    | IP address                                                                       |
| :-- | ---------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| 1   | MAC address stands for Media Access Control address.                                                                                           | IP address stands for Internet Protocol Address.                                 |
| 2   | It is used to identify a device on a local network.                                                                                            | It is used to identify a device on a global network.                             |
| 3   | It is a physical address attached to a device by NIC manufacturer.                                                                             | It is a logical address attached to a device by ISP (Internet Service Provider). |
| 4   | The address cannot be altered.                                                                                                                 | The address can be altered.                                                      |
| 5   | MAC address is hardware oriented.                                                                                                              | IP address is software oriented.                                                 |
| 6   | It operates on the layer 2 (Data link layer) of the OSI model.                                                                                 | It operates on the layer 3 (Network layer) of the OSI model.                     |
| 7   | It consists of 48-bits or 6 bytes which is seperated by either a semi-colon(:) or dash(-) For example, 2A:23:12:10:12:4A or 2A-23-12-10-12-4A. | It consists of 32-bits which is seperated by dots. For example, 192.168.48.5.    |
| 8   | There are three types of MAC address, unicast, multicast and broadcast MAC address.                                                            | There are two versions of IP address, IPv4 and IPv6 address.                     |
| 9   | MAC address can be used to resolve IP address issues.                                                                                          | IP address cannot be used to resolve MAC address issues.                         |
| 10  | MAC address identifies a device                                                                                                                | IP address identifies a connection to a device                                   |
