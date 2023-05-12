---
draft: false
wordcount: false
alt: What is multiplexing and its techniques (FDM, WDM and TDM)
title: What Is Multiplexing and Its Techniques (FDM, WDM and TDM)? All You Need
  To Know
postdate: January 08, 2022
description: Multiplexing involves the use of some techniques in order to allow
  the simultaneous transmission of several or multiple signals through a single
  data link. The three types of multiplexing techniques are FDM,WDM and TDM.
categorylabel: Networking and Communication
categories: '["Networking and Communication"]'
image: /images/fdm_5.webp
weight: "31"
categorylink: /categories/networking-and-communication
type: posts
author: Mohammad Abdul
mathjax: true
Google_Ads: true
---
In this modern day, the rate of data transmission is high and as data and telecommunication needs increases, there is a need for higher bandwidth which will allow high transmission rate of data.

**One way to efficiently utilize the data link which is used for the transmission of data is by implementing multiplexing techniques**.

## What Is Multiplexing?

**Multiplexing** is a technique used in telecommunications and computer networking to combine multiple signals onto a single transmission medium. 

By sharing the same transmission medium, multiple signals can be sent more efficiently, which reduces the cost and complexity of the communication system.

> In simple term, multiplexing is the combination of multiple signals into a single signal, which is then transmitted into a common link or channel.

In a multiplexed system, **(n)** number of input is sent into a MUX (which combines the signals) and then is transmitted or transferred through a link. At the receiving end, there is another device called DEMUX (which splits the multiplexed signal) into its components.

![multiplexed system](/images/fdm_5.webp "multiplexed system")

> **Note:**
>
> **A channel** and **a link** seems the same, as they are the medium for the transmission of data.
>
> But the difference here is that a data link (or link) can be thought of a hollow pipe with wide diameter which can accommodate multiple hollow pipes with less diameter. 
>
> This hollow pipe that has less diameter designates each channel.

## Types of Multiplexing Techniques

There are several multiplexing techniques, but the major ones are three which are discussed below;

* **Frequency division multiplexing (FDM)**
* **Wavelength division multiplexing (WDM)**
* **Time division multiplexing (TDM)**

## a) Frequency Division Multiplexing (FDM)

**Frequency division multiplexing (FDM)** is a multiplexing technique which allows multiple signals to be combined (but are separated using different carrier wave frequency) and transferred through a common link.

Each channel is separated by a strip of unused bandwidth (called **guard band**) to prevent the signals from overlapping.

![frequency division multiplexing](/images/fdm_2.webp "frequency division multiplexing")

**FDM** is used with analogue signals only. But this does not mean that digital signals cannot be multiplexed using FDM because a digital signal can be converted to an analog signal using shift keying method.

### **Here’s a conceptualization of how FDM works**

**Multiplexing Process:**

At first, different message signals undergo modulation or modulates different carrier wave and are combined into a single composite signal which is sent out over a link that has huge bandwidth to accommodate it.

![multiplexing](/images/fdm_3.webp "multiplexing")

**Demultiplexing Process:**

After the composite signal is transferred through the link, on reaching the DEMUX, the DEMUX accepts the signal and uses a series of filters to decompose the multiplexed signal into its constituent component signal.

![demultiplexing](/images/fdm_7.webp "demultiplexing")

The individual signals are then passed to a demodulator, which helps in retrieving the original signal by removing the carrier wave that is added earlier.

For example, in the case of a cable TV network, FDM is used to combine several TV channels onto a single coaxial cable. Each channel is assigned a separate frequency band, which is modulated onto a carrier frequency within the band. 

When the channels are received by the cable box, they are demodulated and separated into individual TV channels.

**FDM is used in AM and FM radio broadcasting – In** **AM**, ranges of frequencies are assigned to AM so that all station works within this boundary so as not to cause interference of signal.

The range of frequencies for AM are 530KHz to 1700KHz, and each AM station is given 10Khz of bandwidth. 

The signals that go to the space are the combinations of many signals, and these signal are received by our radio (e.g., home radio).

In the radio, there is a filter that helps filter the received signal, so you can listen to your desired station.

 So without multiplexing only a single AM signal can be sent to the space and results in wasteful of bandwidth.

The same goes for **FM**, but the only difference is that FM has a very high range of frequencies in the Megahertz range.

## b) Wavelength Division Multiplexing (WDM)

**Wavelength division multiplexing (WDM)** is also an analog multiplexing technique which allows multiple optical (light) signals to be combined and transferred through a common link (fiber).

**Read on:** [Optical Sources in Optical Fiber Communication](/networking/optical-sources-in-optical-fiber-communication/)

![wavelength division multiplexing](/images/fdm_6.webp "wavelength division multiplexing")

Each signal is assigned a separate wavelength of light, which is modulated with the signal. The wavelengths are spaced apart so that they don't interfere with each other.

For example, in the case of a fiber-optic network, WDM is used to combine several data streams onto a single optical fiber. 

Each data stream is assigned a separate wavelength of light, which is modulated with the data. 

When the data is received at the other end of the fiber, it is demodulated and separated into individual data streams.

> Note:
>
> Optical fiber has a high data rate capability than normal coaxial cable, hence has enormous bandwidth in the range of Terahertz.

Though WDM is complex to achieve, but the idea can be conceptualized just as in FDM. 

The light rays or input signals can be said to be multiplexed using a prism (which bends beams or ray of light based on the angle of incidence and the frequency).

![wavelength division multiplexing using prism](/images/fdm_4.webp "wavelength division multiplexing using prism")

Another technique which is better than WDM is DWDM (dense WDM) and their difference is explained [here](/networking/difference-between-wdm-and-dwdm-multiplexing-technique).

## c) Time Division Multiplexing (TDM)

TDM is a technique that allows multiple digital signals to share a common link in time.

It is a technique that is used to divide a transmission medium into time slots. Each time slot is assigned to a separate signal, and the signals take turns transmitting during their allocated time slot. 

The time slots are arranged in a repeating pattern, so each signal gets the same amount of time to transmit.

> In essence, instead of sending the signal all at once, each digital signal is assigned a time slot. Each moving one after the other.

![time division multiplexing](/images/fdm_1.webp "time division multiplexing")

For example, in the case of a telephone network, TDM is used to combine several phone calls onto a single line. 

Each call is assigned a time slot, and the calls take turns transmitting during their allocated time slot. 

The time slots are arranged in a repeating pattern, so each call gets the same amount of time to transmit.

## Summary

**Multiplexing** is a way of combining multiple signal in order to effectively utilize link bandwidth.

**Demultiplexing** is a way of recovering the original signal from the multiplexed signal in conjunction with the use of filters and demodulators.

**FDM** is an analogue multiplexing technique that combine multiple analog signals into a single signal and then is transmitted through a common link.

**WDM** is an analogue multiplexing technique that combine multiple optical or light signals into a single signal and then is transmitted through a common link.

**TDM** is a digital multiplexing technique that allows digital signals to share a common link in time.