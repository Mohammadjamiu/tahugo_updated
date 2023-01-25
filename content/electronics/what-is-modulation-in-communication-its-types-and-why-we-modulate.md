---
title: "What Is Modulation In Communication? Why Do We Modulate And The Types of Modulation Techniques"
postdate: December 04, 2021
image: "/images/modulation_3.webp"
description: "Modulation is the process of using a carrier wave (which is of a high frequency in the range of Mhz and above) to carry a baseband signal over a long distance."
alt: "modulation explanation"
weight: "18"
author: Mohammad Abdul
categorylabel: Electronics
categorylink: /categories/electronics
categories:  '["Electronics"]'
type: posts
Google_Ads: true
mathjax: true
wordcount: false
draft: false
---

Without **modulation**, it might seem impossible for human to communicate over a long distance. Because when we speak, it get propagated into space and dies out and the information can only be gotten if the person we want to communicate with is close.

Know that the frequency of human voice is around the range of 20hz to 20Khz which is low and can't travel far. With this in mind, a third party is needed to carry the information over a long distance just as if you throw a piece of paper on the ground, it takes longer to go down because air makes it to float but if you tie a stone to the paper, it goes down quickly.

Now let's see what modulation means.

## What is modulation?

Modulation is the process of using a carrier wave (which is of a high frequency in the range of Mhz and above) to carry a baseband signal over a long distance.

**Some key terms to note;**
<br>

<ul class="ul-in-post">
<li>The third party that help you to carry your information over a long distance is referred to as the **carrier wave**.</li>

<li>The information you want to pass is called the **baseband signal** and sometimes referred to as message signal or modulating signal.</li>
</ul>

## Why do we need to modulate?

When we speak, our voice has a frequency within the range of 20 – 20kHz which is in the low frequency spectrum or range and if the signal (i.e. our voice) is transmitted directly over a long distance, some vital information will be lost due to attenuation or obstacles.

That’s why we modulate so as to use a frequency that is greater than the frequency of our voice to carry our signal over a long distance with little to no attenuation. But there are more to why we modulate and it is discussed below;

1. **To reduce the height of an antenna**

   Most baseband signal which is in the low frequency is transmitted through or radiated into the space by using an antenna.

   But you might be wondering is there an antenna in my phone since information can only be transmitted using an antenna? Yes there is, but it is called a micro-strip antenna because it has small size and there are a lot more antennas shapes and size. Also some that we can find on the police phone, has a helix antenna.

   <blockquote class="blockquote">
   <p class="little-nugget">Terminology</p>
   <p class="quote-text">Know that there are a lot of antennas with different size, shapes and use cases. Just as the police phone uses a helix antenna.
   </p>
    <p class="quote-text">**An antenna** is a transducer that serves as an interface for the transmission or reception of information that is in form of electromagnetic wave.
   </p>
   </blockquote>

   So in order to reduce the height of an antenna, we need to know that the height of an antenna is a function of frequency and wavelength. By standard, the minimum height of an antenna is given by wavelength $\frac{\lambda}{4}$.

   i.e. if you can calculate for the lambda $\lambda$ using the frequency the wave will be generated or transmitted at then by dividing it by 4 give us the height that our antenna needs to be.

   For example;

   What will be the height of an antenna if a signal is to be transmitted using a frequency of 15khz.

   As $\lambda = c/f$

   Where c is the speed of light and it is a constant value of $3 * 10^8m/s$

   $$ \therefore \lambda = \frac{3 \* 10^8 m/s}{15khz} = 20000m$$

   Hence height of antenna will be $\lambda/4 = 20000/4 = 5000m = 5km$ which is large and it is unthinkable to exist.

   But what if the frequency is $1Mhz$, the height of the antenna will be $\frac{\lambda}{4} =  \frac{3 * 10^8 m/s}{1Mhz} * \frac{1}{4} = 75m$ which is reasonable and can be designed.

   So making the frequency high yield lesser height of an antenna.

2. **To avoid mixing of signals**

   As we know that human voice is within the range of 20 – 20khz so if more people speak at the same time, their frequency will definitely fall within this range which will cause signals to be mixed and will be difficult to decode or separated at the receiver end.

   So by using a carrier wave at different frequencies to carry each individuals voice, it will be easier to be decoded and separated since the frequencies are different and can be filtered using a filter.

3. **Allowing the multiplexing of signals**

   Modulation allows multiplexing of signals in that two or more signals can simultaneously transmitted over the same channel.

   For example, the different radio stations operating simultaneously, each station that you are interested in listening to can be tuned to and what happen when you tuned to a specific channel, you are just filtering some unwanted frequencies and allowing the wanted one.

4. **Reduces interference or noise along transmission.**

   Most form of noise or interference along the transmission channel are in low frequencies hence, if a signal is modulated with high frequency then using a filter, low frequencies can be filtered off.

5. **Improve quality of reception.**

   As noise is a disturbing factor, modulation which can help suppress noise will also leads to improved quality of reception (i.e. at the receiver end, the information transmitted will be received with good to satisfactory quality).

6. **To overcome equipment limitation.**

   The performance of signal processing devices such as amplifiers and filters can be eased by modulation.

<br>

## Types of modulations

As carrier frequency is the heart of modulation, the types of modulations are classified as

1. **Continuous-Wave Modulation (CWM)**

   - Amplitude Modulation

   - Angle Modulation

       <ul class="ul-in-post">
       <li>Frequency Modulation (FM)</li>

       <li> Phase Modulation (PM) </li>

       </ul>

   <br>

2. **Pulse Modulation**

   - Analog Pulse Modulation

       <ul class="ul-in-post">
       <li>Pulse Amplitude Modulation (PAM)</li>

       <li> Pulse Duration Modulation (PDM)</li>

       <li> Pulse Position Modulation (PPM)</li>

       </ul>

   - Digital Pulse Modulation

       <ul class="ul-in-post">
       <li>Pulse Code Modulation (PCM)</li>
       </ul>

   <br>

## Continous Wave Modulation

In the continuous wave modulation, sinusoidal wave or sine wave is the carrier frequency and it is subdivided into amplitude modulation and angle modulation.

**Amplitude Modulation**
<br>

The amplitude modulation AM simply means the amplitude of the carrier wave is varied in accordance to the value of the baseband signal while keeping other parameter like frequency or phase constant.

<img loading="lazy" src="/images/modulation_3.webp" alt="Amplitude modulation">

**Angle Modulation**
<br>

Angle modulation is further subdivided into frequency modulation FM and phase modulation.

In **Frequency Modulation**, the frequency of the carrier is varied in accordance to the frequency of the baseband signal while keeping it amplitude and phase constant.

<img loading="lazy" src="/images/modulation_4.webp" alt="Frequency modulation">

Also, In **Phase Modulation** the phase of the carrier is varied in accordance to the phase of the baseband signal while keeping the amplitude and frequency constant.

The other type of modulation apart from continuous wave modulation is pulse modulation.

## Pulse Modulation

In Pulse modulation, the carrier wave is a periodic sequence of pulses. It is divided into analog and digital pulse modulation.

**Analog pulse modulation**
<br>

In analog pulse modulation, the amplitude, duration and position is varied in accordance to the sampled value of the baseband signal.

The term sampled value of the baseband signal simply means that before pulse modulation can be done on a baseband signal, it has to be a sampled signal (i.e. discretized).

1. When the amplitude is varied in accordance to the amplitude of the sampled value of the baseband signal, it is term to as **pulse amplitude modulation (PAM)**.

2. When the duration is varied in accordance to the duration of the sampled value of the baseband signal, it is term to as **pulse duration modulation (PDM)**.

3. When the position is varied in accordance to the position of the sampled value of the baseband signal, it is term to as **pulse position modulation (PPM)**.

**Digital pulse modulation**
<br>

Under the digital pulse modulation, there is pulse code modulation (PCM).

PCM is used in most modern digital audio systems (e.g. computers, compact disc etc.) to represent sound signal. It is a digital scheme for transmitting analog data.

**In conclusion**, Modulation is needed in all aspect of both communication and electronics as informations are transmitted wirelessly and the need for good and efficent transmision and reception is required in this modern day.
