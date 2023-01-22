---
title: "Digital to Analog Signal Conversion Explained"
postdate: January 04, 2022
image: "/images/pskask_4.webp"
description: "Digital to analog signal conversion involves the process of changing or modifying one of the characteristics of an analog signal in accordance to the information in the digital data."
alt: "digital to analog conversion"
weight: "27"
author: Mohammad Abdul
categorylabel: Electronics
categorylink: /categories/electronics
categories: ["Electronics"]
type: posts
Google_Ads: true
wordcount: false
mathjax: false
draft: false
---

**Digital to analog signal conversion** involves the process of changing or modifying one of the characteristics of an analog signal in accordance to the information in the digital data.

<img loading="lazy" src="/images/pskask_4.webp" alt="digital to analog signal conversion">

But before discussing on what the techniques used for converting a digital signal to analog signal lets first discuss on what digital and analog signals are.

**Digital signals**are signals that carries information (data) in form of sequence of pulses with discrete value. Thus it occurs at discrete time. While

**Analog signals** are signals that carries information (data) which is continuous and have value at any instant of time.

## Techniques for digital to analog conversion of signals

In a digital to analog conversion a carrier wave (sine wave) is modulated or modified based on the data of the digital signal.

As we all know that a sine wave is defined by amplitude, frequency and phase, this yield the following types of digital to analog conversion techniques.

<ul class="ul-in-post">
<li>Amplitude shift keying (ASK)</li>
<li>Frequency shift keying (FSK)</li>
<li>Phase shift keying (PSK)</li>
<li>Quadrature amplitude shift keying (QAM)</li>
</ul>

Note if you are familiar with modulation, shift keying is same but used in the digital world as oppose to modulation used in the analog world.

## amplitude shift keying (ASK)

In amplitude shift keying, the amplitude of the carrier waves or signal is varied based on the digital signal while other parameters (frequency and phase) are kept constant.

<img loading="lazy" src="/images/pskask_1.webp" alt="amplitude shift keying">

**Advantages of amplitude shift keying (ASK)**
<br>

As only one carrier wave is used,

1. The design is simple and inexpensive

2. The bandwidth is lesser compare to FSK which uses two carrier wave.

**Disadvantage(s) of amplitude shift keying (ASK)**
<br>

1.  It is more susceptible to noise as noise which is an interference has a low frequency and also affect amplitudes hence it will be difficult to differentiate between the real information and the noise.

<br>

## frequency shift keying (FSK)

In frequency shift keying, the frequency of the carrier waves or signal is varied based on the digital signal while other parameters (amplitude and phase) are kept constant.

As oppose to ASK where a single carrier wave is modulated or shift keyed, two carrier waves with different frequencies are used. Where one is denoted as f1 which is of a high frequency that the second carrier denoted as f2.
F1 is used when there is a one in the digital signal due to its high frequency while F2 is used for a 0 or low in the digital signal as f2 is a low frequency carrier.

<img loading="lazy" src="/images/pskask_2.webp" alt="frequency shift keying">

The device used to sense if there is low or high in the digital signal and send the corresponding carrier is a voltage controlled oscillator (VCO).

**Advantages of frequency shift keying (FSK)**
<br>

1. It is less susceptible to noise as noise occurs on the amplitude but the information in FSK is on the frequency.

2. There is the presence of high signal to noise ratio (SNR)

**Disadvantage(s) of frequency shift keying (FSK)**
<br>

1. Due to two frequencies (carrier waves) used there is larger bandwidth consumption than ASK.

<br>

## phase shift keying (PSK)

In phase shift keying, the phase of the carrier waves or signal is varied based on the digital signal while other parameters (frequency and amplitude) are kept constant.

Just as two frequencies are used in FSK, two phases are use in PSK one is starting at 0⁰ if there is a one or high in the data signal (i.e. 1 bit) and 180⁰ if there is a zero or low (i.e. 0 bit) in the data signal.

Also, the digital signal used is a polar NRZ signal meaning instead of having it values on one side of the time axis as in ASK and FSK, it has its value lying on both the up and down side of the time axis as shown.

<img loading="lazy" src="/images/pskask_3.webp" alt="phase shift keying">

Same as in PSK, the device used to sense if there is low or high in the digital signal and send the corresponding carrier with different phase angle is a voltage controlled oscillator (VCO).

**Advantage(s) of frequency shift keying (PSK)**
<br>

1. It is quite better than ASK and FSK due to its high efficiency.

**Disadvantage(s) of frequency shift keying (PSK)**
<br>

1. The efficiency of its bandwidth is low.

<br>

## quadrature amplitude modulation (QAM)

A quadrature amplitude modulation or shift keying, involves the combination of both ASK and PSK.

**Advantage(s) of quadrature amplitude modulation (QAM)**
<br>

1. As it entails that QAM consist of ASK and PSK, it has the same advantages as ASK and PSK.

**Disadvantage(s) of quadrature amplitude modulation (QAM)**
<br>

1. It can be said to be complex and expensive due to the combination of ASK and PSK.

**Some asked questions**
<br>

**How are digital signals converted to analog?**
<br>
A digital signal can be converted to an analog signal by modifying or shift keying one of the parameter of the carrier wave.

**Why do we need to convert digital data to analog?**
<br>
Digital signals need to be converted to analog because most modern technologies or devices understand digital data or signal but as the signals needs to be transmitted or radiated into space by an antenna, it needs to be converted to analog as free space understands analog data’s or signals.

<br>

**Recommended for more exlanation:**
<br>
:book: <a class="links-to-others" href="https://amzn.to/3zgwhJB" target="_blank">Data Communications
and Networking </a>by Behrouz A. Forouzan

<br>
