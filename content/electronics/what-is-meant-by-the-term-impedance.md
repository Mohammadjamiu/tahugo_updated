---
title: What Is Meant by the Term Impedance?
slug: What is meant by the term impedance?
postdate: April 17, 2023
description: Impedance can be thought of as the electrical equivalent of
  resistance in a DC circuit. However, in an AC circuit, the voltage and current
  can change direction and magnitude over time, so impedance takes into account
  the effects of capacitance and inductance in addition to resistance.
categorylabel: Electronics
categories: '["Electronics"]'
image: /images/pexels-pixabay-163100.webp
weight: 142
categorylink: /categories/electronics
type: posts
author: Mohammad Jamiu
Affliate_Links: false
draft: false
mathjax: false
Google_Ads: true
---
![What is meant by the term impedance?](/images/pexels-pixabay-163100.webp "What is meant by the term impedance?")

**Impedance** is a term used in electrical engineering to describes the opposition of a circuit or device to the flow of electrical current. 

It is a measure of the combined effects of resistance, capacitance, and inductance on the behavior of the circuit.

**In a DC system**, the impedance of a component is equivalent to its resistance and is defined as the ratio of the voltage across the component to the current flowing through it. The unit of impedance is ohms (Ω), and it is represented by the symbol Z. 

> Hence, impedance (Z) in a DC circuit is the equal to R (resistance) as there is no change in frequency.
>
> **NB: frequency of a DC source is zero.**
>
> **Z** = **R** = **V** / **I** (Ω) 

**In an AC system**, the opposition to current flow is not due to only resistance, but also due to the effects of capacitance and inductance. These effects are frequency-dependent and are represented by reactance, which is measured in ohms (Ω) as well.

> **Reactance** is a measure of the opposition that an electrical component such as a capacitor or an inductor presents to alternating current (AC) due to its ability to store or release energy in an electric or magnetic field. Reactance is measured in ohms (Ω)  and is represented by the symbol X.

The total impedance of an AC circuit is the combination of resistance and reactance and is also measured in ohms. It is represented by the equation Z = V/I, where V is the voltage across the circuit and I is the current flowing through it. 

However, unlike in a DC system, V and I are frequency-dependent in an AC system, so impedance is also a frequency-dependent quantity.

> Hence, **impedance** (Z) in an AC circuit is the combination of R (resistance) and X (reactance). 
>
> **Reactance** = Resistance due to capacitor and inductor.

## **Impedance Formula for RLC, RC, RL, and LC Circuit**

### **1/ For a circuit with a resistor R, an inductor L and a capacitor C.**

The impedance formula for an RLC circuit in series is given by:

**Z = √(R^2 + (Xl - Xc)^2)**

where R is the resistance of the circuit, Xl is the inductive reactance of the circuit, and Xc is the capacitive reactance of the circuit.

The impedance formula for an RLC circuit in parallel is given by:

**1/Z = 1/R + 1/jXc - 1/jXl**

### **2/ For a circuit with a resistor R and a capacitor C.**

The impedance formula for an RC circuit in series is given by:

**Z = √(R^2 + Xc^2)**

The impedance formula for an RC circuit in parallel is given by:

**1/Z = 1/R + 1/jXc**

### **3/ For a circuit with a resistor R and an inductor L.**

The impedance formula for an RL circuit in series is given by:

**Z = √(R^2 + Xl^2)**

The impedance formula for an RL circuit in parallel is given by:

**1/Z = 1/R + 1/jXl**

### **4/ For a circuit with a capacitor C and an inductor L.**

The impedance formula for an LC circuit in series is given by:

**Z = √(R^2 + (Xl - Xc)^2)**

The impedance formula for an LC circuit in parallel is given by:

**1/Z = 1/R + j(Xc - Xl)**