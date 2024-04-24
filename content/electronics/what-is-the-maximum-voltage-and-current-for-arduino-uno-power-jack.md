---
title: What is the Maximum Voltage and Current for Arduino Uno Power Jack?
slug: what is the maximum voltage and current for arduino uno power jack
postdate: April 24, 2024
description: The recommended voltage range for powering an Arduino Uno via its
  power jack is 7-12V, while the current rating, is a maximum of 1A.
categorylabel: Electronics
categories: '["Electronics"]'
image: /images/dc-power-jack-arduino.webp
weight: 429
categorylink: /categories/electronics
type: posts
author: Mohammad Jamiu
author_credit: true
author_credit_name: Mohammad Jamiu
author_credit_info: A telecommunications engineering graduate and web developer,
  demystifies topics he loves, ranging from (engineering, tech, to writing and
  productivity), and shares insights on this website.
author_credit_image: /images/new-author-photo.webp
Affliate_Links: false
draft: false
mathjax: false
Google_Ads: true
---
> **:bulb: Quick Answer**
>
> The voltage range for powering an Arduino Uno via its power jack is between 6-20V, but 7-12V is recommended, while the current rating, according to the datasheet, is a maximum of 1A.

![Arduino dc power or barrel jack](/images/dc-power-jack-arduino.webp "Arduino dc power or barrel jack")

The Arduino Uno is a microcontroller board designed for beginners and hobbyists to learn electronics and coding. It is like a mini-computer that allows you to control things like lights, motors, and sensors with code.

There are three ways to power the board:

1. Via its USB port
2. Vin Pin
3. DC power jack

Since this article focuses on the DC power jack, we will briefly discuss the other two and focus more on the DC power jack.

* **USB Port**: Using the USB port is the easiest way, as all you need to do is connect the Arduino board to a computer via a USB serial cable.
* **Vin Pin**: The Vin pin on the Arduino allows you to connect a power source like a battery. \
  \
  Connect the positive rail of the battery to the Vin pin on the Arduino board and the negative rail of the battery to the ground GND pin of the Arduino. \
  \
  The recommended battery voltage range is 7-12 volts.

## **The Maximum Voltage and Current for Arduino Uno Power Jack**

According to the datasheet, Arduino Uno boards' power jack can withstand 6-20V, but the recommended voltage is nominally between 7-12V. 

Now, let's talk about the current. The Arduino Uno, as stated in its datasheet, has a maximum allowable current of 1A since the board uses a voltage regulator rated for that current rating. 

A question that may arise is, "**What if I have a power supply rated at 12V 2A? Will it damage my Arduino board?**" The answer is no, as long as the amount of current drawn from the Arduino board itself by the devices or sensors you connected to it is less than 1A.