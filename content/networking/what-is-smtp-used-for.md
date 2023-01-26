---
title: "What Is SMTP (Simple Mail Transfer Protocol) Used For?"
postdate: July 30, 2022
image: "/images/smtpserver.webp"
description: "SMTP stands for simple Mail transfer protocol and it is a protocol used for the sending of mails from one client to another over the internet"
alt: "smtp for mail transfer"
weight: "60"
author: Mohammad Jamiu
categorylabel: Networking and Communication
categorylink: /categories/networking-and-communication
categories: '["Networking and Communication"]'
type: posts
Google_Ads: true
mathjax: false
wordcount: false
draft: false
---

**SMTP** stands for Simple Mail transfer protocol and it is a protocol used for the sending of mails from one client to another over the internet.

This protocol is used in two stages, one is from the client sending the mail to the sender server and from this server to another server close to the recipient of the mail.
<img src="/images/smtpserver.webp" alt="smtp for mail transfer" loading="lazy">
The email can then be retrieved by the client receiving the email from the server using the POP3 or IMAP protocol.

The protocol SMTP uses is the <a class="links-to-article" href="/networking/what-is-tcp-ip-and-how-it-is-different-from-osi-model/">Transmission Control Protocol (TCP)</a>. TCP is a connection oriented protocol that ensures the successful delivery of packets and has an error-checking feature.

SMTP uses commands and responses to transfer messages between a Message Transfer Agent (MTA) client and an MTA server.

The SMTP consists of 14 commands and they are;

| s/n | Keyword   | Argument(s)                       |
| :-- | :-------- | :-------------------------------- |
| 1   | HELO      | Sender's host name                |
| 2   | MAIL FROM | Sender of the message             |
| 3   | RCPTTO    | Intended recipient of the message |
| 4   | DATA      | Body of the mail                  |
| 5   | QUIT      |                                   |
| 6   | RSET      |                                   |
| 7   | VRFY      | Name of recipient to be verified  |
| 8   | NOOP      |                                   |
| 9   | TURN      |                                   |
| 10  | EXPN      | Mailing list to be expanded       |
| 11  | HELP      | Command name                      |
| 12  | SEND FROM | Intended recipient of the message |
| 13  | SMOLFROM  | Intended recipient of the message |
| 14  | SMALFROM  | Intended recipient of the message |

The responses are sent from the SMTP server to the client and each response consists of a three digit code.

### Positive Completion Reply

| Code | Description                                   |
| :--- | :-------------------------------------------- |
| 211  | System status or help reply                   |
| 214  | Help message                                  |
| 220  | Service ready                                 |
| 221  | Service closing transmission channel          |
| 250  | Request command completed                     |
| 251  | User not local; the message will be forwarded |

### Positive Intermediate Reply

| Code | Description                |
| :--- | :------------------------- |
| 354  | Start mail input Transient |

### Negative Completion Reply

| Code | Description                           |
| :--- | :------------------------------------ |
| 421  | Service not available                 |
| 450  | Mailbox not available                 |
| 451  | Command aborted: local error          |
| 452  | Command aborted: insufficient storage |

### Permanent Negative Completion Reply

| Code | Description                                          |
| :--- | :--------------------------------------------------- |
| 500  | Syntax error; unrecognized command                   |
| 501  | Syntax error in parameters or arguments              |
| 502  | Command not implemented                              |
| 503  | Bad sequence of commands                             |
| 504  | Command temporarily not implemented                  |
| 550  | Command is not executed; mailbox unavailable         |
| 551  | User not local                                       |
| 552  | Requested action aborted; exceeded storage location  |
| 553  | Requested action not taken; mailbox name not allowed |
| 554  | Transaction failed                                   |

T|he first digits (2,3,4 and 5) in the response digit is used to define different category.
