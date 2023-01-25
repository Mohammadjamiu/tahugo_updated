---
title: "Kirchhoff’s current and voltage law explained with steps to solving any circuit problems easily"
postdate: October 22, 2021
image: "/images/kclnode.webp"
description: "Kirchhoff's law is an optimized ohm's law which has two laws within it. The kirchhoff's current law (KCL) which deals with node or junction-point and the kirchhoff's voltage law (KVL) which deals with branches."
alt: "kvl and kcl"
weight: "7"
author: Mohammad Abdul
categorylabel: Circuit Analysis
categories: '["Circuit analysis"]'
categorylink: /categories/circuit-analysis
type: posts
Google_Ads: true
wordcount: false
draft: false
---

Before diving into what the Kirchhoff’s law is, can you solve this circuit using ohm's law to find all the currents flowing in each branch of the circuit.

<img loading="lazy" src="/images/kcanusolve.webp" alt="kirchhoff's law example problem">

I probably know it will be frustrating to solve this circuit using ohm's law because there are more than one connection of resistors and also more than one loop which means ohm's law won’t be a perfect technique to use

Rather, we need an optimized technique which still is based on ohm's law (as ohm's law is the base that relates voltage, current and resistance) but it is a little bit easier to work with.

This optimized technique is called **Kirchhoff’s law**.

Kirchhoff's law has two laws within it which are called Kirchhoff’s current law or KCL and Kirchhoff’s voltage law or KVL.

## What is Kirchhoff’s current law or KCL

Kirchhoff’s current law states that the algebraic sum of currents at a node is equal to zero.

In other words, the total amount of current entering a node is equal to the total amount of current leaving the node.

<img loading="lazy" src="/images/kcljunction.webp" alt="kcl junction rule">

And if we algebraically sum the current entering (which is considered positive) and the current leaving (which is considered negative) as shown above, we get zero as the equivalent result.

<blockquote class="blockquote">
<p class="little-nugget">Remember</p>
<p class="quote-text">
Kirchhoff's Current Law is applied at nodes or junction point.
</blockquote>

<br>
<blockquote class="blockquote">
<p class="little-nugget">Terminology</p>
<p class="quote-text">
**Node** - A node is a junction where two or more network elements are connected together. </p>
</blockquote>

<img loading="lazy" src="/images/kclnode.webp" alt="kirchhoff's current law kcL node">

## What is Kirchhoff’s voltage law or KVL

Kirchhoff’s voltage law states that the algebraic sum of all the voltages in any closed circuit is zero.

In other words, if we start to move round any closed path or loop, the total sum of all the voltages across each element in the circuit is zero.

<img loading="lazy" src="/images/kvlloop.webp" alt="KVL loop rule">

<img loading="lazy" src="/images/kvlloopeqn.webp" alt="KVL loop equation">

<blockquote class="blockquote">
<p class="little-nugget">Remember</p>
<p class="quote-text">
Kirchhoff's Voltage Law is applied around a closed loop hence, it deals with branches.
</p>
</blockquote>
<br>

> Terminology
> **Branch** - An element or number of elements connected between two nodes constitute a branch.
> **Loop** - A loop is any closed part of the circuit.</p>

<img loading="lazy" src="/images/loopandbranch.webp" alt="kirchhoff's voltage law">

## How to solve circuit problems using kirchhoff's law

Let’s solve some example to see how this laws are implemented.

**Example 1.**
<br>

<img loading="lazy" src="/images/kexone.webp" alt="kirchhoff's example problem with one loop">

<p>The question asks us to use Kirchhoff’s law to find the current flowing in the loop as well as the voltage drops across each resistor, 1&#8486, 3&#8486 and 2&#8486.</p>

Here are the simple steps to help solve this circuit problem and even other circuit problems.

**Step 1**
<br>

Check how many loop is present. Because this is one of the mistakes students make while solving circuit problems using Kirchhoff’s law.

After finding how many loop is present then, the current you are to find will be based on the number of the loops.

<img loading="lazy" src="/images/kexloopone.webp" alt=" how many loop">

i.e. if there is one loop as in the case of our circuit problem, we just need to define one current. Which means if there are more loops let say two loops, then we need to define two currents.

**Step 2.**
<br>

We need to distribute the currents using KCL principle but since this example consist of only one loop then we need only one current and we define it to be I or I<sub>1</sub>.

The reason why there is only one loop is that the resistors are connected in series and as you know for <a href="/learnca/series-and-parallel-resistor-and-how-to-identify-them/" class="links-to-article">series connected resistor</a>, the same current flow through them.

**Step 3.**
<br>

Distribute sign of voltage across the resistors.
If you don’t know how, I will guide you through but still I recommend you to read on the article <a href="/learnca/what-is-ohms-law/" class="links-to-article">ohm's law</a>.

<p>To distribute the voltage-sign across, we need to follow the direction of current in the circuit. since current is flowing from the positive side of the battery, it first sees the resistor R<sub>1&#8486</sub> and mark it input as positive, and after flowing through the resistor R<sub>1&#8486</sub> it marked negative at the outside or other end since energy is reduced or is consumed by R<sub>1&#8486</sub>.</p>

<img loading="lazy" src="/images/signexone.webp" alt="kirchhoff sign distribution">

<p>The next resistor R<sub>3&#8486</sub> sees a current coming out of R<sub>1&#8486</sub> but since this is the first time R<sub>3&#8486</sub> will be seeing the current, it marked its input as positive and as it flows through the R<sub>3&#8486</sub>, energy is reduced again and the end part is marked as negative and the same goes for the last resistor R<sub>2&#8486</sub>.</p>

<blockquote class="blockquote">
<p class="little-nugget">Note</p>
<p class="quote-text">
If there are more resistors, the same pattern go for each.
 </p>
</blockquote>

<br>

** Step 4**
<br>
We need to start writing loop equation using ** V = IR** and then summing things up according to KVL.

<blockquote class="blockquote">
<p class="little-nugget">Note I</p>
<p class="quote-text">
Looping is done in clockwise direction but still can be done in anti-clockwise but just stick to one.
</p>
</blockquote> 
<br>
<blockquote class="blockquote">
<p class="little-nugget">Note II</p>
<p class="quote-text">
When looping through, whatever sign you encounter first is what write you down to make things easier.
 </p>
</blockquote> 
<br>

The loop equation is shown below and it consist of all the voltages in the loop including the energy source or battery since it is supplying the circuit an energy.

<img loading="lazy" src="/images/exomeloopeqn.webp" alt="">

<p>-12 + V<sub>1&#8486</sub> + V<sub>3&#8486</sub> + V<sub>2&#8486</sub> = 0</p>

Now we need to move -12 to the other side to make it positive.

<p>V<sub>1&#8486</sub> + V<sub>3&#8486</sub> + V<sub>2&#8486</sub> = 12 …. (1)</p>

But V = IR and we only know what the resistance are and the current which we are looking for is the unknown.

<img loading="lazy" src="/images/solnexone.webp" alt="">

<p>So, I x (1&#8486) + I x (3&#8486) + I x (2&#8486) = 12 …. (2) or rewritten as 1I + 3I + 2I.</p>

By applying basic algebra to adding 1I + 3I + 2I you will get 6I.

Therefore, 6I = 12; dividing both side by 6 to find I, I = 12/6 = 2A.

Meaning two amps of current is flowing through the circuit where by

<p>V<sub>1&#8486</sub> = IR = (2)(1) = 2V</p>

<p>V<sub>3&#8486</sub> = IR = (2)(3) = 6V</p>

<p>V<sub>2&#8486</sub> = IR = (2)(2) = 4V</p>

<p>Adding V<sub>1&#8486</sub> + V<sub>3&#8486</sub> + V<sub>2&#8486</sub> you will get 2 + 6 + 4 = 12V same as the voltage of the battery.</p>

Let’s see another problem and how you can approach solving it.

**Example 2.**
<br>
