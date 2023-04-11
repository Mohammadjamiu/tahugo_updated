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

**In optical fibers**, there are lots of factors that contribute to degradation of transmitted optical power which includes attenuation, dispersion, and scattering.

So in this post I would be discussing what the scattering losses are in optical fiber.

## What is Scattering?

**Scattering** is a phenomenon that occurs when a wave (such as light or sound) comes into contact with an object or a material. The wave is then redirected or scattered in different directions. This can cause the wave to spread out, change direction, or change the way it vibrates.

For example, imagine shining a flashlight beam onto a surface with tiny particles, such as dust or smoke. The light waves will interact with the particles and scatter in different directions, causing the beam to appear hazy or diffused. Similarly, when sound waves hit a wall, they are scattered and bounce back, which is why we can hear echoes.

**Scattering** can also change the characteristics of the wave. For instance, the scattered wave might have a different direction, polarization, or intensity than the original wave.

This concept is important in many fields, including optics, acoustics, and radar. For instance, in optics, scattering can cause light to be absorbed or scattered in optical fibers, which can affect the transmission of information. 

In acoustics, scattering can be used to create echoes and reverberation in concert halls. And in radar, scattering can be used to detect objects, such as airplanes or ships, by bouncing radio waves off of them and analyzing the scattered waves.

## Types of Scattering Losses in Optical Fiber

Scattering losses in optical fiber are categorized into:

1. Linear scattering (elastic scattering)
2. Nonlinear scattering (inelastic scattering)

 Linear scattering is further categorized into:

* Rayleigh scattering, and 
* Mie scattering

while, Nonlinear scattering is further categorized into:

* Raman scattering, 
* Brillouin scattering, 
* Four-wave mixing,
* Self-phase modulation (SPM), and
* Cross-phase modulation (XPM)

## 1/ Linear Scattering

**Linear scattering** is a type of elastic scattering where the scattered wave has the same wavelength, frequency, and phase as the incident wave. The energy and momentum of the scattered wave are conserved in linear scattering. 

Linear scattering can cause the transfer of optical power from one propagating mode to another, resulting in attenuation of the transmitted light. 

In order words, linear scattering is a type of scattering that happens when a wave (like light) hits an object and is scattered in different directions, but the scattered wave has the same wavelength, frequency (number of waves per second) and phase (position of the wave) as the original wave.

There are two types of linear scattering – Rayleigh scattering and Mie scattering. 

### **a) Rayleigh scattering**

**Rayleigh scattering** is a form of an elastic scattering that occurs when light interacts with small particles or objects that are much smaller than the wavelength of the incident light. This type of scattering is named after Lord Rayleigh, who first described it in the late 19th century.

Rayleigh scattering is responsible for the blue color of the sky and the white color of clouds. The scattering of sunlight by the Earth's atmosphere causes the shorter blue wavelengths of light to scatter more than the longer red wavelengths, making the sky appear blue. Similarly, clouds appear white because the water droplets that make up clouds scatter all wavelengths of light equally.

In optical fibers, Rayleigh scattering is the dominant intrinsic loss mechanism in the low-absorption window between the ultraviolet and infrared absorption tails. This occurs due to random inhomogeneities in the glass lattice that lead to refractive index fluctuations. These fluctuations cause the light to scatter as it propagates through the fiber, resulting in attenuation of the transmitted light.

## b) Mie scattering

**Mie scattering** is a type of scattering that occurs when light interacts with particles or objects that are comparable in size to the wavelength of the incident light. This type of scattering is named after Gustav Mie, who first described it in the early 20th century.

In optical fibers, Mie scattering occurs when light interacts with particles or inhomogeneities in the fiber core or cladding that are larger than the wavelength of the incident light. Unlike Rayleigh scattering, which is caused by random inhomogeneities in the glass lattice, Mie scattering is caused by intentional or unintentional inclusions in the fiber core or cladding.

**Mie scattering** is responsible for modal noise in multimode fibers, which is a form of signal degradation that occurs when light propagates through multiple modes in a fiber. The presence of inclusions in the fiber core or cladding can cause light to scatter between modes, leading to variations in the optical power distribution among the different modes.

</br>

## 2./ Nonlinear scattering

**Non-linear scattering** is a type of inelastic scattering that occurs when light interacts with a material in a non-linear manner. Non-linear scattering can occur when the intensity of the incident light is high enough to cause changes in the material's refractive index or when the light interacts with molecules or particles that have non-linear optical properties. 

In non-linear scattering, the intensity of the scattered light is not proportional to the intensity of the incident light, and the scattered light can be polarized in different planes than the incident light.

In order words, non-linear scattering results in a scattered wave with different wavelength, frequency, or phase than the incident wave. The energy and momentum of the scattered wave are not conserved, hence, the scattered wave has different characteristics than the incident wave. 

Non-linear scattering includes Raman scattering, Brillouin scattering, four-wave mixing, self-phase modulation (SPM), and cross-phase modulation (XPM).

### a) Raman Scattering

**Raman scattering,** is a type of inelastic scattering that occurs when light interacts with the vibrational modes of molecules in a material. In this process, the incident photon interacts with a molecule and excites it to a virtual state before being re-emitted in a different direction with a different frequency and energy.

The frequency shift of the scattered light is directly related to the vibrational energy of the molecule, which is a characteristic property of the material. 

This makes Raman scattering a powerful tool for chemical and material analysis, as it provides information about the molecular structure and composition of a sample.

**Stimulated Raman scattering (SRS)** is a nonlinear optical process that can enhance Raman scattering by stimulating the vibrational modes of the molecules in a material. In SRS, a high-intensity pump beam is used to amplify the Raman signal, leading to a stronger and more easily detectable output signal.

Raman scattering has many applications in science and engineering, including materials science, chemistry, and biology. It can be used to identify and characterize materials, monitor chemical reactions, and analyze biological samples, among other things.

### b) Brillouin Scattering

**Brillouin scattering** is a type of inelastic scattering that occurs when light interacts with a material, usually a solid or a liquid, causing the material to vibrate.

It can also be said to be a scattering that occurs due to the interaction of an incident light with the acoustic wave in a material. 

The vibrating material then scatters the light, shifting its frequency by an amount proportional to the frequency of the vibration.

The scattering of the light by the vibrating material is known as Brillouin scattering, named after the French physicist Léon Brillouin who first observed it in 1922. Brillouin scattering can be either stimulated or spontaneous, depending on whether the material is excited by an external stimulus or if it oscillates on its own.

**Stimulated Brillouin scattering (SBS)** is used in optical fibers and other waveguides to control and manipulate light signals. By tuning the frequency of the incident light to match the frequency of the vibrational modes of the fiber, the scattered light can be shifted to a new frequency, which allows for amplification or attenuation of the light signal.

Brillouin scattering also has applications in materials science, where it can be used to study the mechanical properties of materials and to detect stress and strain in solid materials.

Read On: [Difference Between Raman and Brillouin Scattering](/networking/difference-between-raman-and-brillouin-scattering/)

### c) Self-phase modulation (SPM)

**Self-phase modulation (SPM)** is a non-linear effect that occurs when a high-intensity optical signal travels through an optical fiber. The intensity of the signal causes a change in the refractive index of the fiber, which in turn causes a phase shift in the signal. 

This phase shift can cause the signal to spread out in time and frequency, leading to distortion of the transmitted signal.

In other words, it is a nonlinear effect which is as a result of the interaction of light-matter (molecules). The light pulses change its spectrum due to its own intensity from an induced varying refractive index of the medium.

Pulse spectrum is the frequency distribution of the sine component of a pulse.

### d) Cross-phase modulation (XPM)

**Cross-phase modulation (XPM)** is a non-linear effect that occurs when two optical signals, typically from two different channels, interact with each other in an optical fiber.

The interaction between the signals causes a change in the refractive index of the fiber, which in turn causes a phase shift in one of the signals. 

This phase shift can cause distortion of the signal and can lead to crosstalk between different channels in a fiber optic communication system.

In other words, it is a nonlinear optical effect which is as a result of the wavelength of one light affecting the phase of another wavelength of light.

It does so using the Kerr effect (an effect which is the change of refractive index of a material in response to an electric field applied to the material).

In this case, one wavelength results in refractive index change and this new refractive index change has an effect on another wavelength.

### e) Four-wave mixing (FWM)

**Four-wave mixing** is a non-linear effect that occurs when two or more incident waves interact with each other in a non-linear medium and produce a new wave with a different frequency and phase. 

Four-wave mixing can be used for wavelength conversion and signal processing in optical fibers.

In other words, FWM involves the interaction of two or three wavelength which results in a new two or one wavelength.