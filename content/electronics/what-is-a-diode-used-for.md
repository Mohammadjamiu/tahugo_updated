---
title: "What is diode used for? All you need to know to start designing simple circuits"
postdate: October 09, 2021
image: "/images/schottky.webp"
description: "Basically diode is an electronic device or component that every circuits that we might think of has. it is defined to be a device that allows current to flow only in one direction and has alot of use case in electronics."
alt: "diode explanation"
weight: "5"
author: Mohammad Abdul
categorylabel: Electronics
categorylink: /categories/electronics
categories:  '["Electronics"]'
type: posts
Google_Ads: true
draft: false
wordcount: true
---

Basically diode is an electronic device or component that every circuits that we might think of has, be it the circuit inside a radio, a lamp, or your smartphone etc.

So knowing what it is or what it is used for and the different types of diode is vital for an electronics hobbyist, or even electrical engineering students trying to design their own circuit.

## What is a diode?

A diode is an electronic component that has two terminals positive (+ve) and negative (-ve) (also referred to as PN junction diode) which allows current to flow only in one direction.

The basic use of a diode is primarily to allow current flow through the positive terminal of the diode and deny the flow of current through the negative terminal which can be seen from the sketch below.

<img loading="lazy" src="/images/diodey_2.webp" alt="a diode or pn junction diode">

<blockquote class="blockquote">
<p class="little-nugget">Note</p>
<p class="quote-text">
 - Diodes are connected in forward biased direction before it can allow current to flow and not in the reversed bias direction.

</p>
<p class="quote-text">
 - There are some special diodes that have more features than to just allow current flow in one direction.
</p>
</blockquote>
<br>

<img loading="lazy" src="/images/diodebias.webp" alt="forward and reverse biasing of a diode">

## Types of diode and their uses

<br>

1.  **Normal diode or PN junction diode** -
    is the simplest form of diode that we have. It has a forward voltage (V<sub>f</sub>) of about 0.6v – 0.7v.

    <img loading="lazy" src="/images/diodecurve.webp" alt="curve showing the forward voltage of a diode">

    The forward voltage simply means that before the diode will allow current to flow through it, there must be a voltage source greater than 0.7v across it terminals.

     <blockquote class="blockquote">
    <p class="little-nugget">Use of a diode</p>
    <p class="quote-text">
    1. Normal diode or diode is use for allowing current to flow in one direction and does not allow current in the other direction as we have discussed earlier.</p>
    </blockquote>

    This is very important when we are trying to design a simple or complex circuit.

    Looking at the simple circuit shown below, we can understand better the use case of a diode.

    <img loading="lazy" src="/images/ledcircuit.webp" alt="example showing how to use a diode">

    This circuit is a simple emergency light that can be used at home. It consists of a battery, some bulbs and the input source for charging the battery.

    If there is no diode present, the energy from the battery source will also reflect back in the input side which certainly will turn on the indicator bulb even if no input source connected.

    <img loading="lazy" src="/images/ledcktnodiode.webp" alt="another example showing no diode in the circuit">

    But by putting a diode in between the input source and the battery, the energy from the battery will only go to the bulbs which is what we want.

    Another use case of diode in the circuit above is that, since our input energy is 5v (by using your smartphone charger).

    But the battery we used in storing the energy can only withstand around 3.7 – 4v at max for a very long time.

    So using a diode with a 0.7v forward voltage tend to reduce the input voltage from 5v to 4.3v and adding more diodes can even reduce the input voltage down to approximately 3.7v.

    <img loading="lazy" src="/images/addupdiodes.webp" alt="adding uo diodes to reduce voltages">

      <blockquote class="blockquote">
    <p class="little-nugget">Use of a diode</p>
    <p class="quote-text">
    2. Diodes are used for rectification purpose and are sometimes referred to as rectifying diodes.</p>
    </blockquote>

    In the case of an alternating current (a.c) that we can get from our sockets at home in which the current flows back and forth (i.e. from +ve to –ve and vice versa).

    So in that case, using a diode tend to rectify the back and forth flowing of an alternating current to just direct current D.C.

    This is one of the major component used in a charger because our smartphones can only withstand direct current as oppose to alternating current.

    Inside the box, there is a diode and some other <a href="/learnca/electronics-circuit-components-explained/" class="links-to-article">basic component</a> which are merged together to form a big circuit that convert an alternating current to direct current.

    The point here is that without the diode, there will be no rectification.

2.  **Light emitting diodes or L.E.D for short** -
    is a type of diode where by allows current to flow through one direction (from +ve to –ve).

    <img loading="lazy" src="/images/ledy_2.webp" alt="an LED and how it looks">

    And as current flows through it, the energy is converted to light.

    As an experimentalist, you can take any L.E.D bulb and apply voltage in the other direction and see if it works – certainly it will not, except for another special type of diode used for indication when our P.C or computer is turned on. </p>

> **Use of an L.E.D**
>
> Is for indication purpose which is mostly found in our electronics device like radio, computer, touches etc.
>
> For lightening.

3.  **Schottky diode** - is another type of diode similar to the normal diode but has a forward voltage (V<sub>f</sub>) less than 0.5v which is why this type of diode is used when designing circuit like voltage regulator and boost converter because we need a less amount of voltage loss.

    <img loading="lazy" src="/images/schottky.webp" alt="image of a schottky diode">
    Schottky diode has a shape also similar to the normal diode but instead of a straight bar in the normal diode, we replace it with a shape similar to S for Schottky

4.  **Zener diode** -  
     it is considered to be a multi-useful diode since its primary use case is for regulation but also can be used as a normal diode.

    In a circuit whereby we need only 12v but then the only voltage we can get is 19v which means we can use a Zener diode rated at 12v combine with a resistor which will consume the excess 7v (i.e 19 -12) here is a simple diagram for that.

     <img loading="lazy" src="/images/zenerdiode.webp" alt="zener diode for regulation and normal diode">

    As you can see from the diagram, a Zener diode also has a shape similar to the normal diode but instead of the straight bar, it is replaced with a z-like shape.

    Another important thing to note again is that a Zener diode is connected reversed biased i.e. instead of the normal +ve to –ve convention, it is connected –ve to +ve.

    **But what happens if we connect it from +ve to –ve** – the answer here is that, it will act as a normal diode with a forward voltage of about 0.6 - 0.7v.

> **Use case of Zener diode**
>
> For regulation or to keep a voltage to a constant value i.e. to reduce or eliminate ripples in energy flow\*
>
> Can be used as a normal diode also

## Another thing to note about diodes

Another thing to note about diodes is that, all diodes including Zener and Schottky has some characteristics that must be put to account when we are to design a circuit

1.**The power rating of the diode** – this refers to the amount of current or power a diode can withstand before it can be destroyed. And as a rule of thumb, get a diode with doubled the rating you are interested in, to be on a safer side.

2.**The PIV (peak inverse voltage) rating** – since we say that a diode mostly allows current through one direction and denies current in the other direction, we need to put into account the amount of voltage that it can withstand in the opposite direction that’s why it is called peak inverse voltage rating.

Which can have a rating for normal diode 50v, 100v and so on. For Schottky diode, it has a PIV rating less than the normal diode.

Here comes the end to the basics of diodes. I'll love to here from you what circuit do you build using a diode or what else do you know that is special about diodes. Cheers tooabstracter :tada:
