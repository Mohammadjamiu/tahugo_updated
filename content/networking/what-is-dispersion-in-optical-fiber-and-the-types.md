---
draft: false
wordcount: false
alt: ""
postdate: January 23, 2022
author: Mohammad Abdul
Google_Ads: true
date: 2023-01-04T23:43:06.642Z
title: What Is Dispersion Loss in Optical Fiber and Types of Dispersion Loss?
description: Dispersion refers to the broadening or spreading of transmitted
  light pulses as they travel along the fiber. The two types of dispersion loss
  are intramodal (chromatic dispersion) and intermodal (modal dispersion).
categorylabel: Networking and Communication
categories: '["Networking and Communication"]'
image: /images/disp_2.webp
weight: "37"
categorylink: /categories/networking-and-communication
type: posts
mathjax: false
---
In fiber optics communication, there are several [transmission impairments](/networking/what-are-the-different-causes-of-transmission-impairments/) which degrades signal strength as light pulses travel along a fiber. 

Among the transmission impairment in fiber optics communication, is **dispersion**, and it is discussed below.

## What Is Dispersion?

**Dispersion** refers to the broadening or spreading of transmitted light pulses as they travel along the fiber. 

As each light pulse broadens and overlap with the neighboring pulse, Inter-symbol Interference (ISI) occurs, which makes the pulses indistinguishable at the receiver.

![dispersion loss in optical fiber](/images/disp_2.webp "dispersion loss in optical fiber")

## Types of Dispersion

There are three types of dispersion:

* **Modal dispersion** (Inter-modal dispersion)
* **Chromatic Dispersion** (Intra-modal dispersion)
* **Polarization mode dispersion (PMD)**



### **1/ Modal Dispersion (Inter-modal dispersion)**

**Modal dispersion,** also known as intermodal dispersion, is a type of dispersion due to multimode propagating through an optical fiber. 

In other words, the propagation delay differences between modes (different light pulses) within a multimode fiber is termed as intermodal or modal dispersion.

It occurs in **multimode fibers**, where multiple modes of light can propagate through the fiber. 

**Modal dispersion** limits the bandwidth and transmission distance of multimode fibers and can cause pulse broadening and distortion.

It can be minimized by using single-mode fibers, which only allow a single mode of light to propagate through the fiber. 

Alternatively, it can be compensated for by using mode conditioning patch cords or by using graded-index fibers with a lower refractive index profile.

### **2/ Chromatic Dispersion (Intra-modal dispersion)**

**Chromatic dispersion,** also known as intramodal dispersion, is the most common type of dispersion that occur in optical fibers.

It is caused due to finite spectral linewidth of the optical sources i.e., the different speeds at which different wavelengths of light travel down the fiber.

As optical light sources like (Laser and LED) emit not just a single frequency but band of frequencies then the propagation delay difference yields an **intramodal dispersion**.

**Read on:** [Optical Sources in Optical Fiber Communication (LED and Laser)](/networking/optical-sources-in-optical-fiber-communication/)

This propagation delay differences can be caused by the waveguide material and fiber structure which is used for confining the light.

**Chromatic dispersion** limits the transmission distance and bandwidth of optical fibers. 

It can be compensated for by using dispersion compensation techniques, such as dispersion-shifted fibers, and dispersion-compensating fibers.

**Chromatic dispersion** can be further divided into two types: 

* Material dispersion, and 
* Waveguide dispersion

**Material dispersion** occurs because different wavelengths of light travel at different speeds through the fiber material itself. 

In other wors, when the dispersion is caused due to the material of the fiber then it is said to be **material dispersion**. 

**Waveguide dispersion** on the other hand, occurs because the effective refractive index of the fiber core varies with wavelength.

In other words, when the dispersion is caused by the fiber structure then it is said to be **waveguide dispersion**.



### **3/ Polarization Mode Dispersion (PMD)**

**Polarization mode dispersion (PMD)** is another type of dispersion that can occur in optical fibers. 

It is caused by the different propagation speeds of light waves with different polarization states. 

**Polarization mode dispersion** can cause pulse broadening and distortion, particularly in long-distance and high-speed fiber optic systems.

It is typically caused by fiber imperfections or stress-induced birefringence, which can cause the fiber to have different refractive indices for light polarized in different directions. 

**Polarization mode dispersion** can be compensated for by using polarization controllers, polarization-maintaining fibers, or by using signal processing techniques.

### Summary

**Dispersion** is the broadening of light pulses which tend to degrade the transmitted signal strength.

**Modal dispersion** or intermodal dispersion occurs mostly or only in multimode fibers.

**Chromatic dispersion** or intramodal dispersion occurs in both single and multimode optical fiber.

**Polarization mode dispersion (PMD)** is caused by the different propagation speeds of light waves with different polarization states.