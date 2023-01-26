---
title: "What is MAC Layer and the Different Types of Multiple Access Protocol"
postdate: February 24, 2022
image: ""
description: "MAC is termed as Media Access Control and it is a sublayer under the data-link layer which consist of protocols (called Multiple Access Protocol) that coordinate the access of nodes (or stations) to a link or multipoint"
alt: ""
weight: "44"
author: Mohammad Abdul
categorylabel: Networking and Communication
categorylink: /categories/networking-and-communication
categories: '["Networking and Communication"]'
type: posts
Google_Ads: true
wordcount: false
mathjax: false
draft: false
---

**MAC is termed as Media Access Control** and it is a sublayer under the data-link layer which consist of protocols (called Multiple Access Protocol) that coordinate the access of nodes (or stations) to a link or multipoint.

## Why is MAC necessary

The reason why a MAC is needed is that when nodes or devices are connected to a common link (multipoint), a protocol is needed to help control or coordinate the way each node transmits data mostly in order to avoid collision and traffic jam.

## The different types of multiple access protocol

There are generally three types of multiple access protocol which are;

1. Random Access Protocol

2. Controlled Access Protocol

3. Channelization Protocol

But they are further subdivided into as;

1). **Random-Access Protocol**

<ul class="ul-in-post">

<li>ALOHA</li>
<li>CSMA</li>
<li>CSMA/CD</li>
<li>CSMA/CA</li>
</ul>

2). **Controlled-Access Protocol**

<ul class="ul-in-post">
   <li>Reservation</li>
   <li>Polling</li>
   <li>Token passing</li>
</ul>

3). **Channelization Protocol**

<ul class="ul-in-post">
   <li>FDMA</li>
   <li>TDMA</li>
   <li>CDMA</li>
</ul>
<br>

## 1. What is Random-Access Protocol?

In Random-access method, node/station can transmit data whenever it desires (i.e. they have random access to link) but on condition that it follows a predefined procedure (or protocol)/.

### ALOHA

ALOHA – was the earliest random-access method which was designed for wireless LAN (Local Area Network). It uses a simple procedure called Multiple Access. But the problem with ALOHA is that when stations are randomly sending data, data collides and become distorted.

That’s why an improved version of ALOHA was designed and it is called CSMA.

### CSMA (Carrier Sense Multiple Access)

The CSMA uses the simple procedure in ALOHA called Multiple Access but it also has the ability to force stations to sense if link is idle or busy (hence Carrier Sense) before transmitting data.

CSMA minimizes collision by sensing but still cannot deal with collision and another protocol under the CSMA was developed which were CSMA/CD and CSMA/CA.

### CSMA/CD (Carrier Sense Multiple Access /with Collison Detection)

It allows multiple access, by sensing the channel or link (if idle or busy) before transmitting and it also tell if collision has occurred.

In CSMA/CD, a station/adapter monitors the medium after it sends frame to see if transmission was successful.

### CSMA/CA (Carrier Sense Multiple Access /with Collison Avoidance)

In CSMA/CA, instead of detecting collision, it tries to avoid collision entirely. It is mostly used in wireless LANs.

Collisions are avoided through the use of three strategies: the interframe space, the contention window, and acknowledgments.

## 2. What is Controlled-Access Protocol?

In controlled access, the stations consult one another to find which station has the right to send. A station cannot send unless it has been authorized by other stations.

### Reservation

In the reservation access method, a station needs to make a reservation before sending data. Time is divided into intervals. In each interval, a reservation frame precedes the data frames sent in that interval.

### Polling

In the polling method, all data exchanges must be made through the primary device even when the ultimate destination is a secondary device. The primary device controls the link; the secondary devices follow its instruction.

### Token-Passing

In the token-passing method, the stations in a network are organized in a logical ring. Each station has a predecessor and a successor. A special packet called a token circulates through the ring.

## 3. What is Channelization protocol?

Channelization is a multiple-access method in which the available bandwidth of a link is shared in time, frequency, or through code, between different stations.

### FDMA (frequency division multiple access)

In frequency division multiple access (FDMA), the available bandwidth is divided into frequency bands. Each station is allocated a band to send its data. In other words, each band is reserved for a specific station, and it belongs to the station all the time.

### TDMA (time-division multiple access)

In time-division multiple access (TDMA), the stations share the bandwidth of the channel in time. Each station is allocated a time slot during which it can send data. Each station transmits its data in its assigned time slot.

### CDMA (code-division multiple access)

In code-division multiple access (CDMA), the stations use different codes to achieve multiple access. CDMA is based on coding theory and uses sequences of numbers called chips. The sequences are generated using orthogonal codes such as the Walsh tables.

<br>

**Reference:**
<br>
:book: <a class="links-to-others" href="https://amzn.to/3zgwhJB" target="_blank">Data Communications
and Networking </a>by Behrouz A. Forouzan

<br>
