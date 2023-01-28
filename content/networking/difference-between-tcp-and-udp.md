---
draft: false
wordcount: false
alt: ""
title: 13 Differences Between Transmission Control Protocol (TCP) and User
  Datagram Protocol (UDP)
postdate: July 29, 2022
description: TCP is called transmission control protocol while UDP is user datagram protocol
categorylabel: Networking and Communication
categories: '["Networking and Communication"]'
image: ""
weight: "58"
categorylink: /categories/networking-and-communication
type: posts
author: Mohammad Jamiu
mathjax: false
Google_Ads: true
---
### Transmission Control Protocol (TCP)

1. TCP is termed as Transmission Control Protocol
2. TCP is a connection oriented protocol, meaning that before any message will be sent, it must establish a connection with the receiving device.
3. It undertakes a three handshake process for the establishment of connection by sending a SYN message and the receiving device replying with an ACK SYN and lastly the sending device will respond with ACK received
4. In terms of reliability, TCP is better than UDP, and it is also secure than UDP
5. It is slow since there is a lot of control protocol that exist
6. The header size of TCP is 20 bytes
7. It consists of more than eight fields in the message header and some of them are source port, destination port,
8. length, checksum, sequence number, acknowledgement number etc.
9. It has error-checking feature to ensure that data is sent or received successfully
10. It transmits lost packets
11. It is not used in real-time applications like steaming of online video games
12. TCP involves in a one-to-one communication or transmission
13. TCP is used in several protocols such as HTTP and HTTPS (for web), SMTP (for email), TELNET and FTP (file transfer)

### User Datagram Protocol (UDP)

1. UDP is termed as User Datagram Protocol
2. UDP is a connectionless-oriented protocol, meaning that there is no need of communicating with the receiving device before transmitting
3. It does not undertake any handshake
4. In terms of reliability, UDP is less reliable than TCP
5. It is fast as there are fewer features involved
6. It consists of four fields in the message header
7. The header size of UDP is 8 bytes
8. It consists of eight fields in the message header which are source port, destination port, length and checksum
9. It does not have error-checking feature
10. It does not retransmit lost packet
11. It is used in real-time applications
12. UDP involves in a multicast or broadcast communication or transmission
13. UDP is used in several protocols such as VoIP (voice over IP), DNS (server) and DHCP