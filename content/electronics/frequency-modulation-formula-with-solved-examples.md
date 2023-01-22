---
title: "What Is Frequency Modulation (FM)? Formula, Frequency Deviation, Modulation Index with Solved Examples"
postdate: January 07, 2022
image: ""
description: ""
alt: ""
weight: "29"
author: Mohammad Abdul
categorylabel: Electronics
categorylink: /categories/electronics
categories: ["Electronics"]
type: posts
Google_Ads: true
wordcount: false
mathjax: true
draft: true
---

<br>

## Definition of Frequency modulation (FM)

**Frequency modulation (FM)** is a type of angle <a href="/electronics/what-is-modulation-in-communication-its-types-and-why-we-modulate" class="links-to-article">modulation</a> in which the frequency of the carrier wave (mostly sine wave) is varied in accordance to the frequency of the modulating or message signal while keeping amplitude and phase constant.

## Derivation of frequency modulation (FM) formula

In general, angle modulated signal $S(t)$ is represented as $S(t) = A_{c}cos[\theta_{i}(t)]$ and the instantaneous frequency (i.e. the frequency at each instance) is defined as $f_{i}(t) = f_{c} + k_{f}m(t)$.

Also, $m(t) = A_{m}\cos\omega(t)$ is the message or original signal.

From this, here are few things to understand;

The instantaneous frequency has the combination of the frequency of the carrier wave itself, the message signal $m(t)$ and frequency sensitivity kf. But as the angle modulated wave is a function of theta, we need to express frequency in terms of theta.

Recall that angular frequency is equal to the derivative of theta $\omega = \frac{\text{d}\theta}{\text{d}t}$, so to get theta we need to integrate bothside. Also recall that $\omega(t) = 2\pi f$ and substitute.

=2\pi[f_{c}(t) + \frac{k_{f}A_{m}\sin \omega_{m}(t)}{\omega_{m}(t)}]
