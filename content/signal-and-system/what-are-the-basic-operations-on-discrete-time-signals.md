---
title: "What Are the Basic Operations on Discrete Time Signals?"
postdate: December 19, 2021
image: "/images/dts_4 (1).webp"
description: "The following are the basic operations that can be done on discrete time signal addition, subtraction, multiplication, amplitude scaling, time shifting, time reversal, time scaling"
alt: "operation on discrete time signals"
weight: "20"
author: Mohammad Abdul
categorylabel: Signal and System
categorylink: /categories/signals-and-system
categories: ["Signals and System"]
type: posts
Google_Ads: true
mathjax: true
wordcount: false
draft: false
---

The following are the basic operations that can be done on discrete time signal

1. Addition
2. Subtraction
3. Multiplication
4. Amplitude scaling
5. Time shifting
6. Time reversal
7. Time scaling

The first 4 operations are performed along the y or value axis while the last 3 are performed along the x or time axis.

but before solving problems on it, let’s discuss briefly on what discrete-time signal mean.

## what is discrete-time signals or DTS?

**Discrete-time signals**refers to signals that are defined only at discrete or finite time.

Discrete time simply means that it exists at whole numbers or digits but not on fraction e.g. 1,2, 3,6 but not 0.5, 3.5.

<img loading="lazy" src="/images/dts_4 (1).webp" alt="discrete time signal sketches">

Time is denoted in discrete time signal as $(n)$ as oppose to continuous time signal $(t)$.

## Addition of discrete time signals

For the discrete time signal below, you need to add the amplitude following the intervals on time axis.

For example, the two signals $x_{1}(n)$ and $x_{2}(n)$, in order to add them you need to locate a point on the time axis that is same for both and add the amplitude.

let's look at the example below, as you can see both signals starts from $-2$ to $2$ so all you need to do is to locate $-2$ on $x_{1}(n)$ and identify it's value which is 1 and then locate $-2$ on the time axis of the second signal $x_{2}(n)$ and then identify it's amplitude which is 3 so adding 1 + 3 = 4 will result in a new signal with amplitude of 4 and also located at $-2$ on the time axis.

The same process goes for the rest.

<img loading="lazy" src="/images/dts_6 (1).webp" alt="addition of discrete time signal">

## Subtraction of discrete time signal

Just as it is done for the addition of DTS, you just subtract either the first signal with the other or vice versa depending on the signal with the negative sign. E.g. if you are given A – B, you subtract B from A but if you are given –A + B, you subtract A from B since (-A + B = B – A).

Using the $x_{1}(n)$ and $x_{2}(n)$ signal above, in order to subtract $x_{2}(n)$ from $x_{1}(n)$ i.e. $x_{2}(n)$ - $x_{1}(n)$.

So at $-2$, $3 - 1 = 2$;
<img loading="lazy" src="/images/dts_7 (1).webp" alt="subtraction of discrete time signal">

## Multiplication of discrete time signal

Same as the preceding operations, just multiply the amplitudes together making sure each time interval for both signals are corresponded to each other.

<img loading="lazy" src="/images/dts_1 (1).webp" alt="multiplication of discrete time signal">

>Note:
>
>On the signals below, there are signal present at the origin that's why it is slightly more dark.

 <br>

## Amplitude scaling of discrete time signal

Amplitude scaling is done on a single signal or waveform which takes the form $aX(n)$. The $a$ is the scaling factor i.e. if the amplitude is one and the scaling factor a = 2 hence just multiply $1 * 2 = 2$.

<img loading="lazy" src="/images/dts_5 (1).webp" alt="amplitude scaling on discrete time signal">

## Time shifting of discrete time signal

Time shifting as the name implies is an operation done along the time axis. It is splited into two;

<ul class="ul-in-post"> 
<li>One has to do with shifting forward (or to the right) called **delay**</li>
<li>The other has to do with shifting backward (or to the left) called **advance**</li>
</ul>

shifting to the right by a factor of $a$ is denoted as $x(n – a)$ while shifting to the left by a factor of $a$ is denoted as $x(n + a)$.

But you might be wondering why is moving forward has the sign negative while moving backward has a sign of positive which does not seem okay with the way we think.

Yeah it is because in signals and system the way things are, are different to the way we think.
But if you look at the $(n – a)$ and equating to zero, $(n – a = 0) = (n = a)$ this means that the signal is shifted forward to $a$. For $(n + a), (n + a = 0) = (n = - a)$ which means signal is shifted backward to $a$.

For example

<img loading="lazy" src="/images/dts_10 (1).webp" alt="time shifting (forward) of discrete time signal">

<img loading="lazy" src="/images/dts_3 (1).webp" alt="time shifting (backward) of discrete time signal">

## Time Scaling of discrete time signal

Time scaling refers to scaling expansion or compression of signals.

When a signal is defined as $x(an)$ (as you can see the scaling factor $a$ is affecting the time axis that’s why it is inside the bracket as oppose to amplitude scaling that is outside). The $a$ scaling factor is considered to be compression in time signal while in $x(n/a)$ the $a$ is considered to be an expansion factor in time signal which seems contradicting but there is a way to think of it better.

Remember if you fast forward song 2.0x, it plays very fast but the period it takes in playing is short likewise if you play a song 0.5x, it plays slowly and the time it takes in playing will be much. So the 2.0x is the $a$ in the $x(an)$ while the 0.5x is the $1/a$ in $x(n/a)$ where $a$ is 2 which gives $\frac{1}{2} = 0.5$.

<img loading="lazy" src="/images/dts_2 (1).webp" alt="time scaling (compresion) of discrete time signal">

<img loading="lazy" src="/images/dts_9 (1).webp" alt="time scaling (expansion) of discrete time signal">

## Time reversal of discrete time signals

In time reversal, you just need to flip the signal or waveform about the y axis, denoted as $x(-n)$.

<img loading="lazy" src="/images/dts_8 (1).webp" alt="time reversal of discrete time signal">

Recall, as you are reversing the signal, whatever operation you know of will also change i.e. as $(n – a)$ means moving forward, if the n is reversed, $(-n – a)$ means you are moving backward.
