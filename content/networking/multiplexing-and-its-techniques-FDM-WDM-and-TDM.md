---
draft: false
wordcount: false
alt: What is multiplexing and its techniques (FDM, WDM and TDM)
title: What is multiplexing and its techniques (FDM, WDM and TDM)? All you need
  to know
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
In this modern day, the rate of data transmission is high and as data and telecommunication needs increases, there is need for higher bandwidth which will allow high transmission rate of data.

**One way to efficiently utilize the data link which is used for the transmission of data is by implementing multiplexing techniques**.

## What is multiplexing

Multiplexing involves the use of some techniques in order to allow the simultaneous transmission of several or multiple signals through a single data link.

In simple term, multiplexing is the combination of multiple signals into a single signal, which is then transmitted into a common link or channel.

In a multiplexed system, (n) number of input is sent into a MUX (which combines the signals) and then is transmitted or transferred through a link. At the receiving end, there is another device called DEMUX (which splits the multiplexed signal) into its components.

<img loading="lazy" src="/images/fdm_5.webp" alt="multiplexed system">

One thing to note is that a channel and a link seems the same, as they are the medium for the transmission of data.

But the difference here is that a data link (or link) can be thought of a hollow pipe with wide diameter which can accommodate multiple hollow pipes with less diameter. This hollow pipe that has less diameter designates each channel.

## Types of multiplexing techniques

There are several multiplexing techniques, but the major ones are three which are discussed below;

* Frequency division multiplexing (FDM)
* Wavelength division multiplexing (WDM)
* Time division multiplexing (TDM)

## Frequency division multiplexing (FDM)

FDM is a multiplexing technique which allows multiple signals to be combined (but are separated using different carrier wave frequency) and transferred through a common link.

Each channel are separated by a strip of unused bandwidth (called guard band) to prevent the signals from overlapping.

<img loading="lazy" src="/images/fdm_2.webp" alt="frequency division multiplexing">

FDM is used with analogue signals only. But this does not mean that digital signals can be multiplexed using FDM because a digital signal can be converted to an analog signal using shift keying method.

Here’s a conceptualization of how FDM works

**Multiplexing Process**
<br>

At first, different message signals undergo modulation or modulates different carrier wave and are combined into a single composite signal which is sent out over a link that has huge bandwidth to accommodate it.

<img loading="lazy" src="/images/fdm_3.webp" alt="multiplexing">

**Demultiplexing Process**
<br>

After the composite signal is transferred through the link, on reaching the DEMUX, the DEMUX accepts the signal and uses a series of filters to decompose the multiplexed signal into its constituent component signal.

<img loading="lazy" src="/images/fdm_7.webp" alt="demultiplexing">

The individual signals are then passed to a demodulator, which helps in retrieving the original signal by removing the carrier wave that is added earlier.

**Application of FDM**
<br>

* FDM is used in AM and FM radio broadcasting.

    In AM, ranges of frequencies are assigned to AM so that all station works within this boundary so as not to cause interference of signal.

    The range of frequencies for AM are 530KHz to 1700KHz, and each AM station is given 10Khz of bandwidth. The signals that go to the space are the combinations of many signals and these signal are received by our radio (e.g. home radio).

    In the radio, there is a filter that helps filter the received signal, so you can listen to your desired station.

    So without multiplexing only a single AM signal can be sent to the space and results in wasteful of bandwidth.

    The same goes for FM, but the only difference is that FM has a very high range of frequencies in the Megahertz range.

## Wavelength division multiplexing (WDM)

WDM is also an analog multiplexing technique which allows multiple optical (light) signals to be combined and transferred through a common link (fiber).

<img loading="lazy" src="/images/fdm_6.webp" alt="wavelength division multiplexing">

Nb that optical fiber has a high data rate capability than normal coaxial cable, hence has enormous bandwidth in the range of Terahertz.

Though WDM is complex to achieve, but the idea can be conceptualized just as in FDM. The light rays or input signals can be said to be multiplexed using a prism (which bends beams or ray of light based on the angle of incidence and the frequency).

<img loading="lazy" src="/images/fdm_4.webp" alt="wavelength division multiplexing using prism">

Another technique which is better than WDM is DWDM (dense WDM) and their difference is explained <a href="/networking/difference-between-wdm-and-dwdm-multiplexing-technique/" class="links-to-article">here</a>.

## Time division multiplexing (WDM)

TDM is a technique that allows multiple digital signals to share a common link in time.

In essence, instead of sending the signal all at once, each digital signal is assigned a time slot. Each moving one after the other.

<img loading="lazy" src="/images/fdm_1.webp" alt="time division multiplexing">

## Summary

1. **Multiplexing** is a way of combining multiple signal in order to effectively utilize link bandwidth.</li>
2. **Demultiplexing** is a way of recovering the original signal from the multiplexed signal in conjunction with the use of filters and demodulators.</li>
3. **FDM** is an analogue multiplexing technique that combine multiple analog signals into a single signal and then is transmitted through a common link.</li>
4. **WDM** is an analogue multiplexing technique that combine multiple optical or light signals into a single signal and then is transmitted through a common link.</li>
5. **TDM** is a digital multiplexing technique that allows digital signals to share a common link in time.</li>

<br>
