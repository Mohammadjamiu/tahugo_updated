---
title: Difference between Multiplexing and Multiple Access
slug: difference between multiplexing and multiple access
postdate: October 27, 2023
keywords:
  - Multiplexing
  - Multiple access techniques
  - Data transmission
  - Network protocols
description: Multiplexing uses a multiplexer to combine signals into one for
  shared transmission, while Multiple Access allows multiple devices to share a
  common medium for data transfer.
categorylabel: Networking and Communication
categories: '["Networking and Communication"]'
image: /images/multiplexing-and-multiple-access.webp
weight: 377
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
![Multiplexing and multiple access](/images/multiplexing-and-multiple-access.webp "Multiplexing and multiple access")

<small style='display: block; text-align: center;'>Multiplexing and multiple access</small>



{{< table-of-contents >}}

## **What is Multiplexing?**

Multiplexing is a method of combining multiple signals into a single signal that can be transmitted over a shared medium. 

This is done by using a device called a multiplexer. The multiplexer takes the multiple input signals and combines them into a single output signal. 

The output signal is then transmitted over the shared medium.

![multiplexor combining several input signals](/images/fdm_5.webp "multiplexor combining several input signals")



<small style='display: block; text-align: center;'>multiplexer combining several input signals</small>

**Read more:** [What Is Multiplexing and Its Techniques (FDM, WDM and TDM)?](/networking/multiplexing-and-its-techniques-fdm-wdm-and-tdm/)

Multiplexing is used in a variety of applications, including:

* **Communications:** Multiplexing is used to combine multiple voice or data signals into a single signal that can be transmitted over a shared telephone line or fiber optic cable.
* **Broadcasting:** Multiplexing is used to combine multiple television or radio signals into a single signal that can be transmitted over a shared broadcast channel.

### **Layers of Multiplexing**

Multiplexing can be performed at different layers of the [network protocol stack](/networking/the-seven-layers-of-the-osi-model-explained/). The most common layers at which multiplexing is performed are the physical layer and the data link layer.

* **Physical layer multiplexing:** This type of multiplexing combines multiple signals into a single signal at the physical layer of the network protocol stack. \
  \
  This is the lowest layer of the protocol stack and is responsible for transmitting and receiving raw bits of data over the physical medium.
* **Data link layer multiplexing:** This type of multiplexing combines multiple signals into a single signal at the data link layer of the network protocol stack. \
  \
  This layer is responsible for framing the data and providing error detection and correction.

### **Example of Multiplexing**

A common example of multiplexing is the way that telephone companies combine multiple voice signals into a single signal that can be transmitted over a shared copper telephone line. 

This is done by using a device called a frequency division multiplexer (FDM). 

The FDM takes the multiple voice signals and assigns each signal to a different frequency band.

The output of the FDM is then transmitted over the copper telephone line.

## **What is Multiple Access?**

Multiple access is a method that allows multiple devices to share a common medium. 

This is done by using a variety of different techniques, such as time division multiple access (TDMA), frequency division multiple access (FDMA), and code division multiple access (CDMA).

![multiple access](/images/multiple-access.webp "multiple access")

<small style='display: block; text-align: center;'>multiple access</small>

### **Types of Multiple Access**

**1. Time division multiple access (TDMA):** In TDMA, each device is assigned a specific time slot in which it can transmit data. \
\
This ensures that no two devices transmit at the same time and that all devices have an equal opportunity to transmit data.

**2. Frequency division multiple access (FDMA):** In FDMA, each device is assigned a specific frequency band in which it can transmit data. 

This ensures that no two devices transmit on the same frequency and that all devices have an equal opportunity to transmit data.

**3. Code division multiple access (CDMA):** In CDMA, each device is assigned a unique code that it uses to spread its signal across a wide range of frequencies. 

This ensures that no two devices transmit on the same frequency and that all devices have an equal opportunity to transmit data.

### **Example of Multiple Access**

A common example of multiple access is the way that cellular phones share a common radio frequency band. 

This is done by using a technique called code division multiple access (CDMA). 

CDMA assigns each cellular phone a unique code that it uses to spread its signal across a wide range of frequencies. 

This allows multiple cellular phones to share the same radio frequency band without interfering with each other.

## **Tabular Differences Between Multiplexing and Multiple Access**

| Feature                             | Multiplexing                                                                                                                                                                            | Multiple Access                                                                                                                                                               |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Definition**                      | Multiplexing is the process of combining multiple signals into a single signal that can be transmitted over a shared medium.                                                            | Multiple Access is a method that enables numerous devices to access and share a common medium for data transmission.                                                          |
| **Device used**                     | Multiplexing employs a device called a Multiplexer.                                                                                                                                     | Multiple Access doesn't require a specific device.                                                                                                                            |
| **Layer of Network Protocol Stack** | Multiplexing operates at the Physical Layer and Data Link Layer of the network protocol stack.                                                                                          | Multiple Access primarily functions at the Physical Layer.                                                                                                                    |
| **Example**                         | A common example of multiplexing is combining multiple voice signals into a single signal transmitted over a shared copper telephone line using a Frequency Division Multiplexer (FDM). | Multiple Access can be observed in cellular networks, where multiple phones share the same radio frequency band through techniques like Code Division Multiple Access (CDMA). |
| **Advantages**                      | Multiplexing offers a more efficient use of bandwidth and can lead to lower costs in various communication applications.                                                                | Multiple Access allows for multiple devices to share a common medium, providing flexibility in data transmission.                                                             |
| **Disadvantages**                   | Multiplexing may require special equipment, making it a more complex solution in some scenarios.                                                                                        | Multiple Access can sometimes lead to interference between devices sharing the same medium.                                                                                   |



## **Frequently Asked Questions**

1. **What is the main difference between multiplexing and multiple access?** Multiplexing combines signals before transmission, while multiple access allows devices to access a shared medium without predefined signals.
2. **Where is multiplexing typically used?** Multiplexing is used in applications like telecommunications, networking, and broadcasting.
3. **What are the primary layers of the network protocol stack where multiplexing occurs?** Multiplexing can occur at the physical layer and data link layer.
4. **Give an example of multiple access in everyday life.** Cellular phone networks use multiple access methods, such as Code Division Multiple Access (CDMA), to allow phones to share radio frequencies.