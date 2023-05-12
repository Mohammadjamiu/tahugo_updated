---
draft: false
wordcount: false
alt: simplex, half-duplex and full-duplex explanation
title: What Is Simplex, Half-Duplex and Full-Duplex Mode of Communication?
postdate: December 31, 2021
description: The communication between two devices can be said to be simplex,
  half-duplex and full duplex. Simplex is a one-way communication, half-duplex
  is a two-way communication but not simultaneous and full-duplex is a two-way
  communication but simultaneous.
categorylabel: Networking and Communication
categories: '["Networking and Communication"]'
image: /images/duplex.webp
weight: "25"
categorylink: /categories/networking-and-communication
type: posts
author: Mohammad Abdul
mathjax: false
Google_Ads: true
---
The **mode or direction** in which a device communicates with another device can be said to be **simplex, half-duplex or full duplex**.

**Simplex is a one-way communication, half-duplex is a two-way communication but not simultaneous and full-duplex is a two-way communication but simultaneous.**

![simplex half-dulpex and full-duplex mode of communication](/images/duplex.webp "simplex half-dulpex and full-duplex mode of communication")

{{< youtube rEOiVaLRMsM simplexmode half duplex and full duplex mode >}}

## Simplex Mode of Communication

**In simplex mode,** the direction at which devices communicate is **unidirectional**.

In other words, the direction of data flow is in only one direction, i.e., one can only send while the other can receive and not the other way round.

The receiver can only receive the data and cannot send any data back. 

> This type of communication is used in situations where data transfer is one-way.

For example, a television broadcast is a simplex communication system. The television station broadcasts signals, and the viewers receive them. The viewers cannot send any signals back to the station.

Another example is, a keyboard can only send to a monitor, and a monitor can only display the information on its screen.

**Examples of device and systems that use simplex mode;**

1. Keyboard
2. Monitor
3. Speaker
4. Public address system
5. Traffic cameras

## Half Duplex Mode of Communication

**In half-duplex mode,** each device can both transmit and receive information or communicate with other devices, but not at the same time. 

In other words, data can flow in two directions, but not at the same time. Each device or system can send and receive data, but not simultaneously. 

When one device is sending data, the other device can only receive it, and vice versa. 

> This type of communication is used in situations where data transfer is bidirectional but not constant.

For example, walkie-talkies are half-duplex communication systems. One person talks while the other listens, and then the roles are reversed. 

This type of communication is also used in computer networks, where data is sent and received in packets.

Another example is if computer A is sending to computer B, computer B has to wait until computer A is done sending before it can send.

In half-duplex, since communication is one way there is high rate of collision which can be controlled by using CSMA/CD (Carrier Sense Multiple Access with Collision Detection).

**Examples of devices and systems that use half duplex mode:**

1. Walkie-talkie.
2. Two-way radios
3. Remote control toys

> These systems are designed for short-range communication, where data transfer is required in both directions, but not continuously.

## Full Duplex Mode of Communication

**In full-duplex mode,** which can be called **duplex mode** for short, devices can both transmit and receive information or communicate with one another simultaneously. 

In other words, data can flow in two directions simultaneously. Each device or system can send and receive data simultaneously, and there are no restrictions on the data flow. 

> This type of communication is used in situations where data transfer is bidirectional and constant just as in the telephone network.

A  telephone call is a full-duplex communication system. Both parties can speak and listen simultaneously, and the conversation flows smoothly without any interruptions. 

This type of communication is also used in video conferencing systems, where participants can see and hear each other in real-time.

As opposed to half-duplex, full-duplex is a two-way communication that does not need CSMA/CD.

**Examples of devices or systems that use full duplex mode:**

1. Internet telephony
2. Streaming media
3. Satellite communication

> These systems require continuous data transfer in both directions, and any delay or interruption can result in poor performance or a dropped connection.

## Summary

**Simplex communication** takes place in only one direction while **half-duplex communication** takes place in one direction at a time and lastly **full-duplex communication** takes place in both directions.

In today's modern world, simplex and full-duplex mode of communication is still used but for half-duplex, it is no longer used.