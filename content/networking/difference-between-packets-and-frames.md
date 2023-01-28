---
draft: false
wordcount: false
alt: ""
title: Difference Between Packets and Frames In Networking
postdate: August 01, 2022
description: "A packet is composed of streams of bits and can be found in the
  network layer while a frame is composed of packets of bits and can be found in
  the layer 2 which is the data link layer. "
categorylabel: Networking and Communication
categories: '["Networking and Communication"]'
image: ""
weight: "61"
categorylink: /categories/networking-and-communication
type: posts
author: Mohammad Jamiu
mathjax: false
Google_Ads: true
---
Generally, packets and frames are almost the same but are given different names based on the layer they reside at.

In order words, both packet and frames deals with a unit of data called bits.

The way I like to think of these two terms is;

Packets are streams of bits, while Frames are composed of packets.

## Difference between packet and frame

|     | Packets                                                                                                                  | Frames                                                                                                                             |
| --- | ------------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| 1   | **A packet** is composed of streams of bits packed to form a packet                                                      | **A frame** is composed of packets of (bits) packed into frames                                                                    |
| 2   | A packet resides on layer 3 which is the network layer of the OSI model                                                  | A Frame resides on layer 2 which is the data link layer of the OSI model                                                           |
| 3   | The packet which can be found on the network layer is the IP packet which consist of both source and destination address | The Frame which can be found on the data link layer is the Ethernet frame which consist of both source and destination MAC address |