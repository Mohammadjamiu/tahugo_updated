---
draft: false
wordcount: false
alt: ""
title: Circuit Switching, Message Switching and Packet Switching Techniques Explained
postdate: February 12, 2022
description: In circuit switching, a dedicated path or route is established
  between the sender and the receiver while a message switching does not need a
  dedicated path also, in a packet switching each packet is sent individually
  with a source and destination IP address and also with a sequence number
categorylabel: Networking and Communication
categories: '["Networking and Communication"]'
image: /images/satellite.webp
weight: "39"
categorylink: /categories/networking-and-communication
type: posts
author: Mohammad Abdul
mathjax: false
Google_Ads: true
---
**Switching in computer network** is what help in deciding the best route for data transmission in a larger network if there are multiple paths.

This is to ensure that the efficient use of channels is achieved and to make communication and transmission reliable.

There are three types of switching techniques;

* Circuit switching,
* Message switching, and
* Packet switching

## What is Circuit Switching?

**In circuit switching**, a dedicated path or route is established between the sender and the receiver. In other words, before data can be transferred, a connection must be established.

During the communication or data transmission, the entire bandwidth of the circuit is reserved for the two devices (the sender and the receiver), even if they are not transmitting data.

This type of technique is used in telephone network whereby before you can communicate with your friend via the telephone, a connection is established between you and your friend as soon as you dial up to call your friend.

**Advantages of circuit switching**

1. Once the communication channel is established, it is dedicated and no other device can use that channel.
2. It is suitable for real-time services or communications.

**Disadvantages of circuit switching**

1. There is time delay due to the establishment of connection.
2. There is inefficient use of channel.
3. It is more expensive than other switching techniques.

## What is Message Switching?

Unlike in circuit switching where a dedicated path is established, **a message switching does not need a dedicated path**.

**Message switching**, is a method of transmitting data that involves dividing the data into messages.



> **A message** is a unit of data that contains the complete information that needs to be transmitted from the source to the destination. It is usually considered as a single entity, and it can be of any size depending on the amount of data being transmitted. For example, an email message or a text message is a complete message that contains all the information that needs to be sent.



It uses a store and forward mechanism whereby a message is broken into pieces or chunks and are transferred to an intermediary node which helps to store the messages.

When the messages are completely stored, they are forwarded to their destination.

**Advantage of message switching**

1. It is more efficient than circuit switching as there is no establishment of dedicated path and more device can share the channel.
2. Congestion of traffic can be reduced as the message is store temporarily along the transmission path.
3. Due to store and forward mechanism, message priorities can be established.

**Disadvantages of message switching**

1. It is not suitable for real-time communications or applications as messages are transmitted one at a time, and they may take longer to reach their destination.
2. The store and forward devices can be quite expensive because they must have large storage capacity to hold large amount of data.

## What is Packet Switching?

**In packet switching**, a message is broken into individual chunks called packets.



> **A packet** is a small unit of data that is used to transmit a part of the message over the network. A message is divided into several packets, and each packet contains a part of the message along with some additional information such as the destination address, the sequence number, and error checking information.



Each packet is sent individually with a source and destination IP address, and also with a sequence number to help in the reordering or rearrangement of the packets received at the receiver end.

This sequence number also helps to figure out if there is a missing packet.

If there is a missing packet, it sends an acknowledgement seeking for the missing packet.

Packet switching is an efficient way to transmit data over a network, as packets can be sent over different routes, which means that if one route is congested, packets can be rerouted through a different path. This helps to ensure that the data arrives at its destination quickly and efficiently.

This type of technique is used on the Internet.

**Read More:** [What Are the Similarities Between Packet Switching and Message Switching](/networking/what-are-the-similarities-between-packet-switching-and-message-switching/)

Packet switching is further divided into two;

* Datagram packet switching and
* Virtual circuit packet switching

## What is a Datagram Packet Switching?

**Datagram packet switching** is also known as connectionless switching and does not have a fixed path.

The datagram (or message) contain destination information which allow the intermediary node to take routing decisions and to forward the message.

## What is a Virtual (Circuit) Packet Switching?

**Virtual circuit packet switching** is also known as connection-oriented switching. A preplanned route (or logical path) is established before messages can be sent.

The connection between the sender and the receiver are established with the use of call request and call accept packet.

Due to call request and call accept, which do result in an acknowledgement, virtual circuit packet switching is more reliable.

The message arrives in the order that it has been sent.

**Advantage of packet switching**

1. In packet switching, there is an efficient use of channels.
2. Packet switching is cost-effective as switching devices must not have a huge storage capacity.
3. There is an improvement in delay characteristics as messages are broken into chunks.
4. If there is a problem with a path, data can be rerouted.

**Disadvantages of packet switching**

1. It is not suitable for real-time application also.
2. Initial implementation cost is high.
3. If a packet is lost, the sender needs to resend the missing packet.
4. The protocol for packet switching are quite complex.