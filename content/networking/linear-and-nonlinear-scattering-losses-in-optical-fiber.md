---
draft: false
wordcount: false
alt: Scattering losses in optical fiber
title: Linear and Nonlinear Scattering Losses in Optical Fiber Explained Simply
postdate: January 08, 2022
description: Linear scattering (Rayleigh and Mie scattering) and nonlinear
  scattering (SBS, SRS, XPM, SPM and FWM) are types of scattering losses which
  mostly results in signal power degradation
categorylabel: Networking and Communication
categories: '["Networking and Communication"]'
image: /images/lightp.webp
weight: "32"
categorylink: /categories/networking-and-communication
type: posts
author: Mohammad Abdul
mathjax: false
Google_Ads: true
---
<!-- Start of Unsplash Image Embed Code - Float Left (Embed code by @BirdyOz)-->

<img src="https://images.unsplash.com/photo-1607723619497-98a79f01ba90?crop=faces,edges&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwxMjA3fDB8MXxzZWFyY2h8MTh8fG9wdGljYWwlMjBmaWJlcnN8fDB8fHx8MTY0MTY4NDQ4MA&amp;ixlib=rb-1.2.1&amp;q=60&amp;w=1200&amp;auto=format&amp;h=630&amp;mark-w=64&amp;mark-align=top,left&amp;mark-pad=50&amp;blend-mode=normal&amp;blend-alpha=10&amp;blend-w=1&amp;mark=https://images.unsplash.com/opengraph/logo.png&amp;blend=000000" class="img-responsive img-fluid img-sml" alt="red and blue light bokeh " title="red and blue light bokeh " loading="lazy">
<div  style="opacity: 0.5; display:flex; justify-content: center; align-items: center;" >
<small><a href="https://unsplash.com/photos/8xnaQKWjDrM" target="_blank">Photo</a> by <a href="https://unsplash.com/@comparefibre" target="_blank">@comparefibre</a> on <a href="https://unsplash.com" target="_blank">Unsplash</a>, accessed 08/01/2022</small>
</div>
<br>
<!-- End of Unsplash Image Embed Code -->

In optical fibers, there are lots of factors that contribute to degradation of transmitted optical power which includes attenuation, dispersion and scattering.

So in this post I would be discussing what the scattering losses are in optical fiber.

Scattering losses in optical fiber are categorized into;

Linear and non-linear scattering loss, which are further categorized as below.

1. Linear scattering
2. Nonlinear scattering

## 1. Linear scattering

Linear scattering results in the transfer of some or all of the optical (light) power contained within one propagating mode to a different mode linearly.

Thus leads to attenuation of power because some of the transferred power may escape to a radiation mode which will absorb the power without reflecting it back.

## Rayleigh scattering

**Rayleigh scattering** is a form of an elastic scattering in which the photon (tiny particles) energy or frequency of the scattered light remains unchanged.

You can think of this in terms of an elastic band where if you expand the band it can return to its original band whereas in an inelastic band the band is fixed so a scattering that exhibit inelastic will yield a fixed energy i.e. if particles collide, it just magnet itself to the other.

## Mie scattering

**Mie scattering** is as a result of the non-perfect cylindrical structure of an optical fiber and the irregularities at the core-cladding interface (or refractive index).
<br>

## 2. Nonlinear scattering

The response of any dielectric material to intense light yields a nonlinear effect. As optical fibers are made up of glass which is a dielectric, hence there is nonlinear scattering.

It is said that nonlinear scattering results in gain but with a shift in frequency.

## Stimulated Brillouin Scattering (SBS)

**SBS** is as a result of the modulation of light through thermal (heat) molecular vibrations within an optical fiber.
Or it can be said to be a scattering of light which is caused by acoustic waves (waves due to vibration).

## Stimulated Raman Scattering (SRS)

**SRS** involves the scattering of light from vibrating silica molecules within an optical fiber.

SBS and SRS are quite similar with an exception that in SBS acoustic phonons (sound particles) are generated whereas in SRS, high-frequency optical phonons are generated.

**Advantage of SRS**


SRS can act as an amplifier if the pump (laser) wavelength is chosen suitably.

**Disadvantages of SRS**


It results in inter-channel crosstalk in WDM system.

## Self-phase modulation (SPM)

**SPM** is a nonlinear effect which is as a result of the interaction of light-matter (molecules). The light pulses change its spectrum due to its own intensity from an induced varying refractive index of the medium.

Pulse spectrum is the frequency distribution of the sine component of a pulse.

## Cross-phase modulation (XPM)

**XPM** is a nonlinear optical effect which is as a result of the wavelength of one light affecting the phase of another wavelength of light.

It does so using the Kerr effect (an effect which is the change of refractive index of a material in response to an electric field applied to the material).

In this case, one wavelength results in refractive index change and this new refractive index change has an effect on another wavelength.

**Advantage of XPM**
<br>

XPM results in the compression of ultrashort pulses.

**Disadvantages of XPM**
<br>

It results in inter-channel crosstalk in WDM system.

## Four-wave mixing (FWM)

**FWM** involves the interaction of two or three wavelength which results in a new two or one wavelength.