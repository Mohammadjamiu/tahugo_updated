---
title: "Convolution Sum: How to Find the Convolution of a Discrete Time Signals with Solved Example"
postdate: January 14, 2022
image: ""
description: ""
alt: ""
weight: ""
author: Mohammad Abdul
categorylabel: Signal and System
categorylink: /categories/signals-and-system
categories: ["Signals and System"]
type: posts
Google_Ads: true
mathjax: true
wordcount: false
draft: true
---

Convolution of two discrete time signal can be achieved using the convolution sum.

**Convolution sum** is a mathematical tool that is used for combining two discrete signals to form a new (or third) signal.

It is defined as:

$ Y(n) = x*{1}(n) \circledast x*{2}(n) $ which can be calculated using

$ Y(n) = \sum*{k=0} x*{1}(k)x\_{2}(n-k) $

In essence one of the signal maybe $ x\_{1}(n)$ is kept the way it is while the other is shifted and the sum of their products results in the convolution sum of two signals.

Notice that instead of $ x*{1}(n)$ and $ x*{2}(n) $, $x_{1}(k)$ and $x_{2}(n-k)$ is used. The $‘n‘$ in the discrete time signal is changed to $k$, in the convolution domain while the n that is still appearing in $x(n-k)$ is used for the shifting of $ x*{2}(n) $, also the $(-k)$ simply means that the $ x*{2}(n) $ is folded or reversed.

Hence $ x*{1}(n) $ is $x*{1}(k)$ and $ x*{2}(n) $ is $x*{2}(-k + n)$. don’t worry we will solve some problems so you can understand it better.

## Types (and method) of convolution sum

<br>

1.  **Linear convolution**

    <ul class="ul-in-post">
    <li>Graphical method</li>
    <li>Tabular method</li>
    <li>Matrix method</li>
    </ul>

2.  **Circular convolution**
    <br>

But in this tutorial, linear graphical method convolution sum will be treated and in the subsequent tutorials tabular method and circular convolution will be treated.

## Properties of convolution sum

The properties entail the operation that can be done on a signal that needs to be convoluted.

**Commutative**
<br>

If two signals $ x*{1}(n) $ and $ x*{2}(n) $ are convoluted, then it can be said that $ x*{2}(n) $ is convoluted with $ x*{1}(n) $. Just like 2 _ 3 = 3 _ 2;

**Associative**
<br>

Signals can be grouped and convoluted just as (2 _ 3) _ 2 can be rewritten as (2 _ 2) _ 3;

**Distributive**
<br>

It says if we have two signals added together and are then convoluted with a third signal, it is same as taking the convolution of each signal with the third signal. $ [x_{1}(n) + x_{2}(n)] \circledast x*{3}(n) $ = $ [x*{1}(n) \circledast x*{3}(n)] + [x*{2}(n) \circledast x\_{3}(n)] $

## How to solve the convolution sum of two sequences (or discrete signals)?

Given that $x(n) = [ 0, 0(origin), 1, 1, 1 ] $ and

$h(n) = [ 0, 1, 2(origin), 3, 0 ]$

find $ y(n) = x(n) \circledast h(n)$

**Step 1:**
<br>

Draw the signal; noting that the values in the { } are the amplitude of the signal while the arrow below it signifies the origin of the signal and anything before the origin goes to negative time axis while anything after the origin goes to the positive side of the time axis.

Also, $n$ will be now $k$ so we have $x(k)$ and $h(k)$
After drawing the signal as shown above, note the point on the time axis for each signal at which a tangible value exists other than one.

As in the case of our example, the tangible value for $x(n)$ starts at one on time axis with value of one while for $h(n)$ the tangible value starts at -1 on the time axis because it has a value of 1.

Then as it is known that for x(n), tangible value starts at 1 and for h(n) it starts at -1 on the time axis. So in order to know where the third signal will start from, you just need to add the values together i.e. 1 + (-1) = 0.

So the third signal will be starting at 0.

**Step 2:**
<br>

Count the length of x(n) and h(n).

The length for $x(n)$ is 3 (i.e. 1,1,1) as 0,0 is not a tangible value also the length for h(n) is also 3 (i.e. 1,2,3) as the beginning and ending zero are useless.

Note that had it been that x(n) is {0,0,1,1,0,1} then its length will be 4 (i.e. 1,1,0,1) but you might be wondering that why do we count the zero also. It needs to be counted as it is surrounded by tangible values but for the rest they are just left alone at the beginning or the end.
Now after getting the length, just add them together hence we have L = 3 + 3 = 6.

Then one needs to be subtracted from L to get the length of the third signal. Therefore, M = L – 1 = 6 -1 = 5; which will be the length of the new signal.

If length of the new signal needs to be 5 and it also need to start at 0 then the interval has to be [0,1,2,3,4].

**Step 3:**
<br>

h(k) needs to be reversed as h(-k) then after that, you start utilizing the intervals you set up earlier [0,1,2,3,4] i.e. you need to find h(-k + n) at n = 0, n = 1, n = 2, n = 3, n = 4 by shifting the signals forward and multiplying the resulting signal with x(n) in order yield y(n) = y(0) at n = 0 as well as y(1), y(2), y(3) and y(4) for the remaining intervals.

For n = 0, h(-k + n) = h(-k + 0) = h(-k)
So you need not to shift h(-k) as it is same as what we have already drawn so just multiply amplitude of x(n) \_ h(-k) and add them. Make sure that each time on axis matches
So y(0) = x(k) \_ h(-k) = (0)(3) + (0)(2) + (1)(1) = 1

For n = 1, h(-k + n) = h(-k + 1); so you need to shift h(-k) forward once.
then y(1) = x(k) \* h(-k + 1) = (0)(3) + (1)(2) + (1)(1) + (1)(0) = 2 + 1 = 3

For n = 2, h(-k + n) = h(-k + 2); so you need to shift h(-k) forward twice.
then y(2) = x(k) \* h(-k + 2) = (0)(0) + (1)(3) + (1)(2) + (1)(1) = 3 + 2 + 1 = 6

For n = 3, h(-k + n) = h(-k + 3); so you need to shift h(-k) forward thrice.
then y(3) = x(k) \* h(-k + 3) = (1)(0) + (1)(3) + (1)(2) + … = 3 + 2 = 5

For n = 4, h(-k + n) = h(-k + 3); so you need to shift h(-k) forward thrice.
then y(4) = x(k) \* h(-k + 4) = (1)(0) + (1)(0) + (1)(3) + … = 3

therefore, y(n) = {1, 3, 6, 5, 3}
