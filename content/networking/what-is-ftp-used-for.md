---
title: "What Is FTP (File Transfer Protocol) Used For?"
postdate: August 09, 2022
image: ""
description: "FTP stands for File Transfer Protocol. It is a protocol which is used for transferring files across network."
alt: ""
weight: "67"
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

**Transferring of files from your computer to the internet can be done through the use of a protocols called FTP.**

## What is FTP and What is it used for?

**FTP** stands for File Transfer Protocol. It is a protocol which is used for transferring files across network.

It uses a client-server model in which the server host or store the files while the client (e.g. a computer) can connect, access, download, upload, rename and delete files which is hosted on the server.

FTP is not commonly used these days but is still in use in some areas such as web development where developers or frontend engineers upload files to the server through the use of a client application called FileZilla.

Also, it is still in use in network management.

FTP uses Transmission Control Protocol (TCP). TCP is a protocol that uses a three-way handshake for connection to be established. The client will have to send a “SYN” message, the server will respond with “SYN-ACK” and lastly the client will respond with “ACK”.

If the handshake is done successfully, there will be an open connection between the client and the server.

FTP uses two types of connections, the control connection and the data connection.

The control connection handles all of the FTP commands and instruction e.g. GET command, PUT command etc. the client will be able to connect to the server with a port number of 21 and a randomly selected dynamic source port number (e.g. 42363).

The data connection is in action when files are being shared or transferred.

Data connections is also divided into types which are active data connection and passive data connection.

Active data connection is established by the server initiating a session and the server does this through a port number of 20 and it uses a randomly generated port (e.g. 45363).

The issue with the active data connection is that, because of the firewall (for protection) which often exist between a client and a server, the firewall discard the session initiated by the server because the purpose of a firewall is to block incoming data.

That’s why a passive data connection is often used and in this case, the client is responsible for the initiation of session.

In passive data connection, random source port and destination port numbers are used.

## How do you access a file using FTP?

To access a file on a server using FTP, all you need to do is the IP address or URL which points to the server and you need to replace the http:// or https:// part in an address with ftp:// so that the browser will understand the protocol to use. e.g. ftp://google.com

## Advantage(s) of FTP

1. FTP is simple and easy to use.

1. Speed at which data can be transferred.

1. It allows the accessing, uploading, downloading etc. of file across a server.

## Disadvantage(s) of FTP

1. Data are transmitted in plain text or format.

1. There is limit to the file size that can be transferred.

1. It does not support multiple receivers.

1. There is no data encryption hence, often result in data bridges.

In order to make FTP safe and secured, some layers of security are added and it results in a new type or version of FTP which is called FTPs.

## What is FTPs?

**FTPs** stands for File Transfer Protocol Secure. It is a newer version of FTP which is secure and it uses Transport Layer Security (TLS) and Secure Sockets Layer SSL encryption.

## Advantage(s) of FTPs

1. It uses an addition layer of security.

1. Data are not transmitted in plain format.

1. It provides encryption of data.

## Disadvantage of FTPs

1. The addition layer of security leads to complexity.

Another version of FTP is TFTP.

## What is TFTP?

**TFTP** is termed as Trivial File Transfer Protocol.

It is a simple form of FTP which is not used to transfer file over the internet but on a Local Area Network.

The kind of files which can be transferred using TFTP is a Configuration files often shortened as Config files.
