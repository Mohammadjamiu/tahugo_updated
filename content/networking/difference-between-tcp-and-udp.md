---
title: "13 Differences Between Transmission Control Protocol (TCP) and User Datagram Protocol (UDP)"
postdate: July 29, 2022
image: ""
description: "TCP is called transmission control protocol while UDP is user datagram protocol"
alt: ""
weight: "58"
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

### Transmission Control Protocol (TCP)

1. TCP is termed as Transmission Control Protocol

1. TCP is connection oriented protocol meaning that before any message will be sent, it must establish a connection with the receiving device.

1. It undertakes a three handshake process for the establishment of connection by sending a SYN message and the receiving device replying with an ACK SYN and lastly the sending device will respond with ACK received

1. In terms of reliability, TCP is better than UDP and it is also secure than UDP

1. It is slow since there is a lot of control protocol that exist

1. The header size of TCP is 20 bytes

1. It consists of more than eight fields in the message header and some of them are source port, destination port,
1. length, checksum, sequence number, acknowledgement number etc.

1. It has error-checking feature to ensure that data is sent or received successfully

1. It transmits lost packets

1. It is not used in real-time applications like steaming of online video games

1. TCP involves in a one-to-one communication or transmission

1. TCP is used in several protocols such as HTTP and HTTPS (for web), SMTP (for email), TELNET and FTP (file transfer)

### User Datagram Protocol (UDP)

1. UDP is termed as User Datagram Protocol

1. UDP is a connectionless oriented protocol meaning that there is no need of communicating with the receiving device before transmitting

1. It does not undertake any handshake

1. In terms of reliability, UDP is less reliable than TCP

1. It is fast as there is less features involved

1. It consists of four fields in the message header

1. The header size of UDP is 8 bytes

1. It consists of eight fields in the message header which are source port, destination port, length and checksum

1. It does not have error-checking feature

1. It does not retransmit lost packet

1. It is used in real-time applications

1. UDP involves in a multicast or broadcast communication or transmission

1. UDP is used in several protocols such as VOIP (voice over), DNS (server) and DHCP
