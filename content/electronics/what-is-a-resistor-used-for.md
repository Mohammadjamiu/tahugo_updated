---
title: "What Is a Resistor Used For? All You Need To know About Resistors Explained Simply"
postdate: November 02, 2021
image: "/images/resistoruse_10.webp"
description: "A resistor is an electronics component that limits (or reduce) the flow of current in a circuit, as well as cause voltage to be dropped across it."
alt: "resistor explained"
weight: "15"
author: Mohammad Abdul
categorylabel: Electronics
categorylink: /categories/electronics
categories: ["Electronics"]
type: posts
Google_Ads: true
wordcount: false
draft: false
---

Before going in depth of what a resistor is used for and the other things you need to know about it, you need to know what it is.

## What is a resistor?

A resistor is an electronics component that limits (or reduce) the flow of current in a circuit, as well as cause voltage to be dropped across it.

In other words, it main purpose or function in a circuit is to control current flow.
Here is how a resistor looks like, With it schematic symbol in circuit as

<img loading="lazy" src="/images/resistorucolor_6.webp" alt="">

In electronics, the resistance value of a resistor is quantified with the unit ohms
And it is one of the reason we have ohm’s law because the current that flows through a resistor and the voltage across it can all be determined and analyzed using this formula. More on <a class="links-to-article" href="/learnca/what-is-ohms-law">ohm’s law</a> and <a class="links-to-article" href="/learnca/electronics-circuit-components-explained">electronics component</a>.

here are more things you need to know about a resistor

## Does a resistor have polarity?

One thing to note about resistor is that, it doesn’t have polarity since it acts as a hole (or pipe) that limits the flow of current. So just connect it anyway you like.

But you might see a +ve and -ve sign written across it in circuit, this symbol doesn't denote the polarity of the resistor rather, it denotes the polarity of voltage across it or the direction of current flow.

<img loading="lazy" src="/images/resistorucolor_4.webp" alt="">

## How do you know the value of a resistor?

1.**From it color code**
As it is seen that a resistor has some stripe of colors on it, this colors are used to know the value of the resistor by using the resistor <a href="https://electronics-tutorials.ws/resistor/res_2.html" class="links-to-others" target="_blank">color code chart</a>.

2.**Or using a multimeter**
Another way of knowing the value of a resistor is by using a multimeter which is the most easy and efficient way of knowing the value of a resistor.

<ul class="ul-in-post">
<li>Read on: <a href="/electronics/a-beginners-guide-to-using-a-multimeter/" class="links-to-article">A beginners guide to using a digital multimeter at home.</a> </li>
</ul>

## How do you identify the power rating of a resistor?

Before knowing how to identify the power rating of a resistor, you need to understand why power rating is important.

Resistor as we say limit current flow. But do you know that the current it is impeding (or resisting) is stored within it and it is converted into heat and if it goes beyond what it can handle, it releases more energy as heat and will be destroyed.

That’s why for every circuit design, resistor's power rating must be considered. And it is done using one of these formulas for power calculation.**P = I<sup>2</sup>R**,**P = IV** or**P = V/R**

<img loading="lazy" src="/images/resistoruse_11.webp" alt="">

The power rating of a resistor can be seen or deduced from the size of the resistor or sometimes it will written on it.

<img loading="lazy" src="/images/resistor-wattage.webp" alt="">
<p class="img-desc ">image source: Resistors Power rating_electronicshub</p>

Another way of knowing the power rating of a resistor is by conducting an experiment, by passing some amount of current through the resistor and take note at what current value and voltage does it blow off.

If the voltage or current value is known, you can use the power formula to calculate the power rating.

And lastly if you can find the datasheet for the component then go check it out because the power rating is always written on them.

Here are the images of different resistors with their respective power rating

Beyond limiting or controlling of current, a resistor has many applications or purpose in circuit so let see some.

## Other applications of resistors in circuits

1.**As a voltage divider** – earlier from the definition of resistor, that it limits current and cause voltage to be dropped across it, it simply means that adding more resistors in series, you can create a voltage divider circuit.

This idea is useful because sometimes you might have some device laying around but you desire to power them up but the voltage or battery you have at hand is greater than the voltage the device can withstand so designing a voltage divider circuit is a simple way to go.

Here is an example and a basic formula to help you calculate the desired voltage.

<img loading="lazy" src="/images/resistoruse_13.webp" alt="">

<img loading="lazy" src="/images/resistoruse_12.webp" alt="">

2. **Use to light up LEDs** – most LEDs can withstand around 2 -3v. which means applying any voltage source (e.g. battery) greater than 3v with destroy the LED bulb.

   But by using a resistor in series with the LED, you can use any voltage source to power up your LED but putting in mind or account of the resistance value of the resistor and the power rating.

   <blockquote class="blockquote">
   <p class="little-nugget">Note</p>
   <p class="quote-text">As a recommendation, when designing circuit, go for a power rating more than the calculated power rating.
   </p>
   </blockquote>

   For example, if you have 9v battery at hand, here's how you can use a resistor to limit the current as well as voltage.

<img loading="lazy" src="/images/voltagetodrop.webp" alt="using resistor to limit current and cause voltage drop">

3.**Use with a transistor** – every transistor has the amount of base current it can take, around the micro to milliamps range. That’s why resistors are used in series with the base of a transistor in order not to over saturate and destroy the transistor.

<img loading="lazy" src="/images/resistoruse_14.webp" alt="">

4.**Resistors can be used as a fuse** - because if you overload it with excess current, it will be destroyed and be disconnected. That's why when a resistor is used as a fuse, it is called a fusible resistor and you can find such implementation inside the converter circuit of our charger.

5.**Used in timer circuit** – in blinking an LED bulb or making some buzzing alarm with a 555 timer IC, the main component that is used to determine the length or duration at which the LED bulb or alarm will be on or off is a resistor combined with a capacitor to form what is called time constant (&tau;).

<p>For example, If you desire to turn on an LED bulb for a millisecond, using a resistor with a resistance value of 1K&ohm; and a capacitor of 1&microf you will get a time constant of 1ms.</p>

<img loading="lazy" src="/images/resistoruse_15.webp" alt="">

6.**Used as a current sensing device** – in a case that you are designing a circuit and you intended to test what the output current is, using a power or current sensing resistor with high power rating and maybe a resistance value of 1&ohm; then the amount of current in the circuit will be equal to the voltage value. i.e. a 10V source with a 1&ohm; resistor will yield 10A of current according to ohm’s law.

<img loading="lazy" src="/images/resistoruse_10.webp" alt="">

Now this bring us to the section where the different types of resistors are discussed.

## Types of resistors used in electrical circuits

**Carbon film and metal film resistors**
<br>
These type of resistors have similar structure but one of the difference between them is the material used in manufacturing them.
And they are mostly available in the following wattage. e.g. ¼W (quarter watt), ½W (half watt) and 1W (one watt).

<img loading="lazy" src="/images/carbonfilmr.jpeg" alt="">
<p class="img-desc ">image source: Carbon Film_HB Labs</p>

<img loading="lazy" src="/images/metalfilmr.jpeg" alt="">
<p class="img-desc ">image source: Metal Film_IndiaMART</p>

**Wire wound resistor** - this type of resistor has a higher power rating or wattage. And it is made of metal alloys wounded to create the resistance and because of that, it is used in designing circuits that needs high amount of current.

<img loading="lazy" src="/images/wire-wound.webp" alt="">
<p class="img-desc ">image source: Wire wound_IndiaMART</p>

**Potentiometer (or pot)** – this type of resistor is pretty much popular and it is used mostly with microcontrollers like Arduino Uno. It is referred to as a variable resistor because it has a knob that allows you to change the value of resistance up to the maximum resistance rating of the potentiometer.

<img loading="lazy" src="/images/pot.jpeg" alt="">
<p class="img-desc ">image source: Potentiometer_westerfertility</p>

**Trimmer** – it’s kind of a small potentiometer (that why it is sometimes called trimpot) because it also has a knob but it is used for precise resistance value because it seems compact and stable.

<img loading="lazy" src="/images/trimpot.jpeg" alt="">
<p class="img-desc ">image source: Trimpot_probots</p>

**LDR (light dependent resistor) or photo-resistors** - this type of resistor is use in circuits to detects light or dark. i.e. the resistance value decreases with increase in light intensity and increases with decrease in light intensity.

<img loading="lazy" src="/images/ldr.jpeg" alt="">
<p class="img-desc ">image source: LDR_PotentialLabs</p>

**Thermistor** – is a type of resistor that has it resistance value changed as the temperature changes. This type or resistor is used in electric irons to detect if the iron is very hot or cold.

<img loading="lazy" src="/images/ntcthermistor.jpeg" alt="">
<p class="img-desc ">image source: Thermistor_IndiaMART</p>

Here comes the end to some of the things you need to know about resistors. Hope it helps.
