---
title: "Thevenin's Theorem Explained With Solved Examples"
postdate: May 16, 2022
image: "/images/thev_1.webp"
description: "Thevenin theorem is a theorem used to model complex circuits into a simple circuit with an equivalent voltage source and resistance."
alt: ""
weight: "8"
author: Mohammad Jamiu
categorylabel: Circuit Analysis
categories: ["Circuit analysis"]
categorylink: /categories/circuit-analysis
type: posts
Google_Ads: true
mathjax: true
wordcount: false
draft: false
---

**Thevenin theorem** is a theorem used to model complex circuits into a simple circuit with an equivalent voltage source and resistance.

As the theorem states that;

> ‘any two terminals of a network can be replaced by an equivalent voltage source and an equivalent series resistance.

<img loading="lazy" src="/images/thev_1.webp" alt="thevenin equivalent circuit">

The voltage source is the voltage across the two terminals with load, if any, removed.

The series resistance is the resistance of the network measured between two terminals with load removed and constant voltage source being replaced by its internal resistance (or if it is not given with zero resistance, i.e., short circuit) and constant current source replaced by infinite resistance, i.e., open circuit.’

### But why do we need this theorem

Because it is not like mesh analysis or nodal analysis which we use to analyze circuit but rather it is a technique that makes engineers unique (to my opinion). Here’s is what I mean, if two engineers are tasked to design a circuit each with an output of (5V and 1A).

The first engineer let’s say _MR X_ decided to design his own circuit with 2 resistors and a 20V battery as shown below while _MR Y_ decided to design his own circuit with just one resistor and a 9V battery as shown below also.

<img loading="lazy" src="/images/thev_8.webp" alt="thevenin equivalent circuit">

As you can see, both circuit gives the required output but what both circuits contain are different and this is what makes the thevenin theorem helpful as it lets us to approximately guess what another engineer has designed even if one does not know what is inside the box containing the circuit just as our home charger.

There are different variations but at the end of the day, the output of those charger are quite same.

### Steps to solve circuit problem using thevenin theorem

1. If there is a load resistor R<sub>L</sub> then you need to remove it.
2. Find the thevenin voltage V<sub>th</sub> across the terminal of interest. The V<sub>th</sub> can be found by finding the open circuit voltage across the terminal
3. Find the short circuit current I<sub>sc</sub> between terminal a &#8594; b
4. With the short circuit current known, the thevenin resistance can be found by dividing V<sub>th</sub> by I<sub>sc</sub>

   To solve for V<sub>th</sub>, you can use whatever technique you are most comfortable with or that suit the problem at hand maybe mesh analysis, nodal analysis or source transform.

   After finding the V<sub>th</sub> and R<sub>th</sub> then you need to sketch your circuit as shown below.

   <img loading="lazy" src="/images/thev_9.webp" alt="thevenin equivalent open circuit">

   Also if there is R<sub>L</sub> then, you need to replace the open terminal a &#8594; b with R<sub>L</sub> as shown below and lastly find the current that flow through R<sub>L</sub> as the current that flows through it is not I<sub>sc</sub>.

<img loading="lazy" src="/images/thev_10.webp" alt="thevenin equivalent short circuit">

Lets solve some examples to understand the concept better.

### Example problem on thevenin's theorem

**Ex.1** – find the current through the 2&#8486; resistor using thevenin theorem?

<img loading="lazy" src="/images/thev_7.webp" alt="thevenin example problem">

#### Step 1:

Remove the 2&#8486; resistor and leave the terminal open.

<img loading="lazy" src="/images/thev_4.webp" alt="thevenin example problem">
 
#### Step 2:

Using mesh analysis, lets analyse the circuit.
Since there is only one loop as the terminal a &#8594; b has made the second loop to no longer be a loop.

The equation gotten is :

40-5i-20-10i = 0

20-15i = 0

15i=20

I=20/15 = 1.33A.

Now to find the open terminal voltage V<sub>th</sub>, we need to add the voltage across the 10&#8486; resistor and the 10V battery.

Thus, the voltage across the 10&#8486; is V<sub>10&#8486;</sub> = 10 \* 1.33 = 13.3v

Hence, V<sub>th</sub> = 13.3 + 10 = 23.3v

<img loading="lazy" src="/images/thev_6 (1)_1.webp" alt="vth voltage">

#### Step 3:

To find I<sub>sc</sub> we need to short circuit the a &#8594; b terminal.

<img loading="lazy" src="/images/thev_5 (1)_1.webp" alt="short circuit current">

Now since short circuiting of the circuit has cause the loop to be two as oppose to one that we previously did.

So equation for **loop I**:

40- 51<sub>1</sub>-20-10(1<sub>1</sub>-1<sub>2</sub>) =0;

40-51<sub>1</sub>-20-101<sub>1</sub>+101<sub>2</sub> =0; _by expanding the bracket_

20-151<sub>1</sub>+101<sub>2</sub> = 0;

151<sub>1</sub>-101<sub>2</sub>=20 ………(1)

**Loop II**

-10(1<sub>2</sub>-1<sub>1</sub>)+10 =0;

-101<sub>2</sub>+101<sub>1</sub>+10 =0;

101<sub>1</sub>-101<sub>2</sub>=-10……………..(2)

By solving the simultaneous equation, we get

1<sub>1</sub> = 6A;

1<sub>2</sub> = 7A;

But I<sub>sc</sub> = 1<sub>2</sub> = 7A

hence, R<sub>th</sub> = V<sub>th</sub>/I<sub>sc</sub> = 23.3/7 = 3.33&#8486;

now replacing the 2&#8486; resistor we removed earlier then the circuit becomes this;

<img loading="lazy" src="/images/thev_3.webp" alt="replacing load resistor">

but we need to calculate for the current that flows through the load resistor (2&#8486;),

I<sub>L</sub> = V<sub>th</sub> / (R<sub>th</sub> + R<sub>L</sub>) = 23.3/(3.33 +2) =23.3/(5.33) = 4.37A
