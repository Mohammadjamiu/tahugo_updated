---
title: GSM Burst and Its Types
slug: gsm burst and its types
postdate: November 20, 2023
keywords:
  - GSM Burst and Its Types
description: GSM Burst and Its Types
categorylabel: Networking and Communication
categories: '["Networking and Communication"]'
image: /images/normal-burst.webp
weight: 383
categorylink: /categories/networking-and-communication
type: posts
author: Mohammad Jamiu
author_credit: false
author_credit_name: ""
author_credit_info: ""
author_credit_image: /images/imgph.webp
Affliate_Links: false
draft: false
mathjax: false
Google_Ads: true
---
{{< table-of-contents >}}

## **What is GSM Burst?**

In the Global System for Mobile Communications (GSM), a burst is a short sequence of radio waves used to transmit data between a mobile station (MS) and a base station (BTS). 

Bursts are fundamental to the GSM system's Time Division Multiple Access (TDMA) scheme, which allows multiple users to share the same frequency channel efficiently. 

Bursts are typically transmitted within a time slot, which is a fixed-length duration of 0.577 milliseconds.

> :bulb:
>
> i.e., the actual content of a time slot is called the **burst**.

## **Types of GSM Bursts**

There are five main types of GSM bursts:

* **Normal Burst (NB)**
* **Frequency Correction Burst (FCB)**
* **Synchronization Burst (SB)**
* **Dummy Burst (DB)**
* **Access Burst (AB)**

### **Normal Burst (NB)**

The most common type of burst, used to carry both signaling and user data. Normal bursts are 0.577 milliseconds (or 577 microseconds) long and consist of 156 bits. 

![Normal burst structure](/images/normal-burst.webp "Normal burst structure")

Signaling data is used to establish and manage communication links between the MS and the BTS, while user data includes voice and data traffic.

The normal burst consists of two tail bits, two encrypted or information bits, a training sequence and a guard period.

#### **Structure of normal burst:**

* **Tail Bits (3 bits):** These three bits are used to terminate the convolutional encoding process, ensuring that the decoder can correctly interpret the encoded data.
* **Encrypted Bits (58 bits):** These 58 bits are used to carry encrypted user data or signaling information. They are divided into two sections:

  * **Data Bits (57 bits):** These 57 bits carry the actual information being transmitted.
  * **Stealing Flag (1 bit):** This single bit indicates whether the burst is carrying user data (speech) or has been “stolen” by the FACCH (Fast Associated Control Channel) for signaling purposes.
* **Training Sequence (26 bits):** This sequence of 26 bits is used for channel equalization and synchronization. It helps the receiver to identify and correct distortions in the signal caused by multipath propagation and other factors.
* **Guard Period (8.25 bits):** This period of 8.25 bits is used to prevent overlap between different bursts and ensure that they are received within their assigned time slots.

### **Frequency Correction Burst (FCB)**

Used to correct the frequency offset between the MS and the BTS, ensuring accurate data transmission. 

Frequency offset arises from variations in the carrier frequencies used by the MS and the BTS, which can lead to signal distortion and interference. 

> :bulb:
>
> Frequency correction burst is used for correcting frequency error. It used by the **FACCH** (Fast Associated Control Channel).

![frequency correction burst structure](/images/fcb-and-sburst_1.webp "frequency correction burst structure")

#### **Structure of frequency correction burst:**

* **Tail bits (3):** It consists of two tail bits.
* **Fixed bits sequence (142):** It consists of a fixed information bits which consist of 142 bits.
* **Guard period (8.25):** for avoiding overlap.

### **Synchronization Burst (SB)**

Used to synchronize the MS and the BTS, ensuring that they are both transmitting and receiving data at the same time. 

Synchronization is important for maintaining the integrity of data transmission and preventing errors. 

![synchronization burst structure](/images/fcb-and-sburst_2.webp "synchronization burst structure")

#### **Structure of synchronization burst:**

It consists of:

* **Tail bits (3)**
* **Sync bits (39):** There are two sync bits, each with 39 bits for synchronization.
* **Extended training sequence (64)**
* **Guard period (8.25)**

### **Dummy Burst (DB)**

Used to fill in unused time slots on the TDMA frame, preventing interference from other users. 

When no data needs to be transmitted, DBs are inserted to maintain the TDMA structure and prevent other MS's from using those time slots. 

![dummy burst structure](/images/dummy-burst_1.webp "dummy burst structure")

DBs are 0.577 milliseconds long just as the normal burst and contain no data.

> :bulb:
>
> Dummy burst looks like a normal burst but doesnot carry information.

#### **Structure of dummy burst:**

It consists of:

* **Tail Bits (3 bits)**
* **Data Bits (57 bits)**
* **Stealing Flag (1 bit)**
* **Training Sequence (26 bits)**
* **Guard Period (8.25 bits)**

### **Access Burst (AB)**

Used by the MS to request access to the network, typically during call setup or when sending a short message service (SMS) message. 

![access burst structure](/images/access-burst_1.webp "access burst structure")

Access burst is used by RACH (Random access grant channel) and AGCH (Access grant channel).

> :bulb:
>
> **RACH** is used for requesting access by the mobile station to the network.
>
> **AGCH** is used by the network to grant access to devices or mobile stations.

#### **Structure of access burst:**

It consists of:

* **Tail Bits (8 bits) and (3 bits):** The first tail bits contain 8 bits, and it is called *extended tail bits*, while the ending tail bits consist of 3 bits.
* **Sync Sequence (41 bits)**
* **Encrypted or information bits (36 bits)**
* **Guard Period (68.25 bits)**

They have longer guard period to account for the fact that the mobile station and the base station does not have time-advance information.

## **Wrap Up**

GSM bursts are fundamental building blocks of the GSM system, enabling efficient data transmission and multiple user access within a shared frequency channel. 

Each type of burst serves a specific purpose, from carrying signaling and user data to correcting frequency offsets and synchronizing timing. 

The structured arrangement of synchronization, data, and control bits ensures reliable and interoperable communication within the GSM network.

## **FAQs**

### 1. What is the purpose of the Normal Burst in GSM, and what type of information does it carry? 

The Normal Burst is the most common burst type in GSM, used for carrying both signaling and user data. It is 0.577 milliseconds long and consists of 156 bits. 

Signaling data is used for establishing and managing communication links, while user data includes voice and data traffic.

### 2. What is the duration of a GSM burst?

The duration of a GSM burst is typically 0.577 milliseconds. This fixed-length duration is a fundamental aspect of the Time Division Multiple Access (TDMA) scheme used in GSM.

### 3. What is the role of the Dummy Burst in the GSM Time Division Multiple Access (TDMA) scheme, and does it carry any information?

The Dummy Burst is used to fill unused time slots in the TDMA frame, preventing interference. Unlike other bursts, DBs do not carry any data. 

They are inserted when no data needs to be transmitted to maintain the TDMA structure and prevent interference from other users.

### 4. When is the Access Burst used in GSM, and what channels utilize it for network access?

The Access Burst is used by the MS to request access to the network, especially during call setup or when sending SMS messages. 

It is used by the Random Access Grant Channel (RACH) for requesting access and the Access Grant Channel (AGCH) for granting access to mobile stations.

### 5. What is transmission burst in GSM?

A transmission burst in GSM refers to a short sequence of radio waves used for transmitting data between a mobile station (MS) and a base station (BTS). 

### 6. What is the guard period in GSM?

The guard period in GSM is a segment within the structure of a burst that serves to prevent overlap between different bursts and ensure they are received within their assigned time slots.

### 7. How does the Frequency Correction Burst (FCB) contribute to accurate data transmission in GSM?

The Frequency Correction Burst corrects frequency offsets between the mobile station (MS) and the base station (BTS), ensuring accurate data transmission. 

Frequency offsets can cause signal distortion and interference, and the FCB is utilized by the Fast Associated Control Channel (FACCH) for this purpose.