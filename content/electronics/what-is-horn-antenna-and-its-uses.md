---
title: "What Is Horn Antenna? Its uses, Types, Design parameters and Applications."
postdate: July 24, 2022
image: "/images/hornantenna_1.webp"
description: "Horn antenna is an antenna which is constructed by flaring (or opening) of a waveguide (a metallic material) in order to direct electromagnetic waves in one direction. it is used to increase directivity and for long distance communication"
alt: "horn antenna cross section"
weight: "52"
author: Mohammad Jamiu
categorylabel: Electronics
categorylink: /categories/electronics
categories: ["Electronics"]
type: posts
Google_Ads: true
wordcount: false
mathjax: false
draft: false
---

**Horn antenna** is an antenna which is constructed by flaring (or opening) of a waveguide (a metallic material) in order to direct electromagnetic waves in one direction.

## What is a horn antenna used for?

It is a directional antenna which is used to increase directivity
It helps in improving impedance matching because the waveguide mostly has impedance of about 50Ω while the impedance of the free space is 377Ω. In order to match out the impedance so as to reduce power loss, a flaring is used to kind of concentrate the electromagnetic waves.
It is used for long distance communication due to its directivity

## Structure of horn antenna

<img loading="lazy" src="/images/hornantenna_5.webp" alt="horn antenna structure">

## Analysis and design parameter of horn antenna

<img loading="lazy" src="/images/hornantenna_1.webp" alt="horn antenna cross section">

The figure above shows a cross section diagram of horn antenna along the E-plane which can be used to analyze its parameters such as the flaring angle theta, the axial length L, the height of flaring or aperture H.

<img loading="lazy" src="/images/hornantenna.webp" alt="horn antenna cross section plus">

### To find the axial length, we use Pythagoras theorem on the triangle ∠XOY

(L + δ)2 = L2 + (1/2h)2 </br> </br>
L2 + 2Lδ +δ2 = L2 + (1/2h)2 ; expanding the bracket </br> </br>
As δ is very small compared to L, we neglect δ2 as it will be even smaller </br> </br>
L2 + 2Lδ = L2 + (1/2h)2 </br> </br>
L2 - L2+ 2Lδ = + (1/2h)2 </br> </br>
2Lδ = h2/4 </br> </br>
L = h/8 δ

### To find the flare angle, we can use either tanθ or cosθ depending on the known variable

Tanθ = opp/adj = (1/2h)/L = h/2L or </br> </br>
Cosθ = adj/hyp = L/(L + δ) </br> </br>
Hence θ has it expression in terms of L and δ if cosine of the angle is used or in terms of h and L if tangent of the angle is used.

<blockquote class="blockquote">

<p class="quote-text">
If the flare angle is small, there is uniform phase distribution as the beamwidth is small which also result in increase directivity.
</p>
</blockquote>
<br>

<img loading="lazy" src="/images/hornantenna7.webp" alt="flare angle ">

#### Directivity ∝ 1/beamwidth or Directivity ∝ 1/aperture area

</br>
<blockquote class="blockquote">

<p class="quote-text">
If the flare angle is doubled, the directivity is reduced due to high beamwidth which then result in non-uniform phase distribution.
</p>
</blockquote>
<br>

### Design of horn antenna

- HPBW E – plane = 56°λ/A  
   where, A is area of aperture ( h x w(width) )
  HPBW is Half Power BeamWidth and

- FNBW is First Null BeamWidth
- HPBW H – plane = 67°λ/A
- FNBW E – plane = 115°λ/A
- FNBW H – plane = 115°λ/A

#### Directivity D, = 7.5A/ λ2

#### Gain, G = (4πA/ λ2) x η where η is characteristic impedance

</br>

## Types of horn antenna

It be categorized as

1. Sectoral horn antenna
2. Pyramidal horn antenna
3. Conical horn antenna and Bi-conical horn antenna

### Sectoral horn antenna

This type of antenna has its flaring in one direction. It is of two types

a) sectoral E-plane horn antenna <br>
b) sectoral H-plane horn antenna

<img loading="lazy" src="/images/hornantenna_4.webp" alt="sectoral horn antenna ">

#### Sectoral E-plane horn antenna

It has it flaring in the E (Electric field) direction i.e. the flaring is parallel to the E -plane.

#### Sectoral H-plane horn antenna

It has it flaring in the H (Magnetic field) direction i.e. the flaring is parallel to the H -plane.

### Pyramidal horn antenna

It has the flaring in both directions (i.e. both in the E-plane and H-plane direction)

<img loading="lazy" src="/images/hornantenna_3.webp" alt="pyramidal horn antenna ">

### Conical horn antenna

It has cone like shape as its flaring and the waveguide is in a cylinder shape.

### Bi-conical antenna

It consists of two conical antennas merged together.

<img loading="lazy" src="/images/hornantenna_2.webp" alt="conical and biconical horn antenna ">

## Applications of horn antenna

In addition to the uses of horn antenna discussed above, here are some of its other applications

1. It is used for microwave application
1. It is used in satellite communication
1. It is used as the active element (feed horn) in a dish antenna to receive the reflected wave.
1. Horn antenna works in the Ultra High Frequency (UHF) 300Mhz and Super High Frequency (SHF) 30Ghz range.
1. It is used for short range RADAR
