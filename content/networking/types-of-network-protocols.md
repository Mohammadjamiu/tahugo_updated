---
title: "Types of Network Protocols"
postdate: August 02, 2022
image: ""
description: "A protocol is defined as a set of rules that govern data communications. examples of a network protocol are HTTP, HTTPs, TCP, UDP, FTP, SFTP,TFTP, ARP, DNA, DDNS, TELNET, SMTP, POP3, IMAP4 etc."
alt: ""
weight: "63"
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

There are several types of protocol that exist in computer and networking and these protocol are what ensure that the connection between several computers and server is established based on specific rule because if there are no protocols, devices might be connected but would not be communicating.

## What is a network protocol or protocol?

A protocol is defined as a set of rules that govern data communications. There are three key elements of a protocol and they are

1. Syntax is the format or the structure of the data. e.g. the data sent can contain 8-bits. And the first 4 bits must be zero for the receiver to understand.

2. Semantics is the meaning of each portion of the bits. For example, the first zero might mean “to synchronize”.

3. Timing is the time rate or speed for data transmission.
   Because we do not want a scenario where a data is sent at 50Mbps and the receiver can only understand or process the data at just 20Mbps.

Here is some list of the networking protocol we have;

## Types of network protocol

1. **HTTP** - stands for Hypertext Transfer Protocol (HTTP) and it is a protocol which is mainly used to access data on the World Wide Web. The problem of this protocol is that it is not secured and that’s why a new version is devised.

1. **HTTPs** - is a secured version of HTTP which is also used to access data over the internet.

1. **TELNET** - stands for Teletype Network and it is a command line tool which is used to access remote servers. It is also used to manage and configure other network devices.

1. **DNS** - is termed as Domain Name Server and it is a server which is used to translate a domain name e.g. google.com into an IP address (static IP address).

1. **DDNS** - stands for dynamic Domain Name Server and it is used to translate a domain name into a dynamic IP address. It is often used to access files in a Local Area Network (LAN)

1. **SMTP** - stands for simple mail transfer Protocol. It is used for sending e-mails to a client over the internet.

1. **POP3** - stands for Post Office Protocol, version 3 and it is a mail access protocol which is used for retrieving e-mails unlike SMTP which is used for sending e-mail over the internet.

1. **IMAP4** - is another mail access protocol which stands for Internet Mail Access Protocol, version 4. It is similar to POP3, but the only difference is that it is more complex than POP3 has it has more features.

1. **FTP** - stands for file transfer protocol and it is a standard protocol which is used for transferring file over the internet.
   There are two methods in which files can be transferred over the internet, one is through the browser and secondly is through a client application such as Filezilla.

   The downside to FTP is the un-encryption of data hence it is not a secured protocol.

1. **SFTP** - stand for Secure File Transfer Protocol and it is a secure version of FTP as data is encrypted.

1. **TFTP** - stand for trivial File Transfer Protocol. It is a simple form of FTP which is not used to transfer file over the internet rather on a Local Area Network.
   Configuration files is an example of files which can be transferred using TFTP.

1. **TCP** - stands for transmission control protocol. It is a protocol which ensures the save delivery of data packets.

   It does so by handshaking (i.e. before sending data from the sender end to the receiving end, the sender will first send a SYN message to tell the receiver are you ready to take in my data then, the receiver will reply with ACK SYN meaning that I acknowledge you and lastly the receiver will send an ACK message).

   As you can see there is a lot to TCP and that’s why it is not used for real time application such as streaming live videos.

1. **UDP** - is termed as User Datagram Packets and it is similar to TCP only that it does not have complex features such as error-checking and handshaking that TCP has. It is used in real-time application such as streaming online video games.

1. **ARP** - stands for address resolution protocol and it purpose is to associate logical address with a physical address.

   Because on a typical network like LAN, each device on a link is identified only by a physical address and this physical address can be found on the network interface card (NIC) and ARP is used to find that physical address of the node when it’s internet address is known.
