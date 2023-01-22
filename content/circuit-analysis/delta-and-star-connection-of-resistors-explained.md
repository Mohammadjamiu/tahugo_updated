---
title: "Star - Delta Transformation Explained With Tips On How To Recall The Formulas"
postdate: October 07, 2021
image: "/images/deltastarillustration.webp"
description: "The star and delta transformation involves converting from star to delta or delta to star and we do this when our resistors are not connected in parallel or series."
alt: "Star Delta Transformation"
weight: "6"
author: Mohammad Abdul
categorylabel: Circuit Analysis
categories: ["Circuit analysis"]
categorylink: /categories/circuit-analysis
type: posts
Google_Ads: true
draft: false
wordcount: false
---

<div class="content-summary">
<h3>Content Summary</h3>
<ul>
<li>The star and delta transformation involves converting from star to delta or delta to star and we do this when our resistors are not connected in parallel or series.</li>
<li>
The <span class="text-emphasis">delta</span> can be structured in two ways as having a triangle
shape or pie shape. </li>
<li>
The <span class="text-emphasis">star</span> has a
wye or T shape.
</li>

</ul>
</div>
<br>
<div class="content">
<h2>Why and how do we do star to delta or delta to star transformation</h2>
<p>
The star and delta transformation involves converting from star to delta or delta to star and we do
this when our resistors are not connected in parallel or series.
</p>

<p>
This technique is quite useful but most time student do forget the formula to be used quickly but,
in
this section I will give you a visual tip to never forget this so let’s start.</p>

<p>
The way delta and star are connected is illustrated below with a comparison with that of series and
parallel connection of resistors.
</p>
<img loading="lazy" src="/images/deltastarillustration.webp" alt="Star - Delta Transformation Explained With Tips On How To Recall The Formulas">
<p>
The <span class="text-emphasis">delta</span> can be structured in two ways as having a triangle
shape or pie shape while the <span class="text-emphasis">star</span> has a
wye or T shape so make sure to note that. </p>
<blockquote class="blockquote">
<p class="little-nugget">Small nugget</p>
<p class="quote-text">
The star is sometimes referred to as wye while delta is referred to as pi.</p>
</blockquote>
<br>
<h2>The transformation or conversion from delta to star</h2>
<p>
While we will be solving circuits, sometimes we would encounter resistors connected in a form that’s
not easier to work with except that we transform it to another form and then solve, so that’s why we
perform this conversion. </p>
<img loading="lazy" src="/images/dtoyxform.webp" alt="how to convert from delta to star or wye">

<p>
So to convert delta to star, it is done as follows, though the formula is stated as -

</p>
<h2>The formula for delta to star conversion</h2>
<img loading="lazy" src="/images/formuladtoy.webp" alt="formula to convert from delta to star">
<h2>How to remember the formula for delta to star conversion</h2>
<p>
So let’s recall this formula by starting with R<sub>1</sub>. </p>

<p>
<p> Looking at R<sub>1</sub>, we can see that the node at the top of R<sub>1</sub> has two resistors
from the delta network,
connected or tied to it. So in that case, we say that there are 2 legs affecting R<sub>1</sub> which
are R<sub>a</sub> and
R<sub>b</sub>.</p>
<img loading="lazy" src="/images/recalr1.webp" alt="how to recall the formula for r1">
<p>
Then, since the delta is our source of conversion and also are connected in series (remember in
series connected resistors, the values are added and the same current flows through them) therefore,
we sum up (R<sub>a</sub> + R<sub>b</sub> + R<sub>c</sub>) and then divide it by our first result
which is R<sub>a</sub> and R<sub>b</sub> (remember we need
to multiply R<sub>a</sub> and R<sub>b</sub> since they are affecting R<sub>1</sub>). </p>

<p>Thus the transformation yields R<sub>1</sub> = (R<sub>a</sub>R<sub>b</sub>) / (R<sub>a</sub> +
R<sub>b</sub> + R<sub>c</sub>).</p>

<p>
Doing same for R<sub>2</sub>, we get
R<sub>2</sub> = (R<sub>a</sub>R<sub>c</sub>) / (R<sub>a</sub> + R<sub>b</sub> + R<sub>c</sub>)
and for R<sub>3</sub> what will it be by doing it yourself without looking at the answer.

</p>
<img loading="lazy" src="/images/rarcforr2.webp" alt="how to recall the formula r2">
<p>If you got the answer
right, that’s good and in essence you can see, it's only the leg tied to our resistor in focus that
matters since the bottom part (R<sub>a</sub> + R<sub>b</sub> + R<sub>c</sub>) is same for
R<sub>1</sub>, R<sub>2</sub> and R<sub>3</sub>.</p>
<img loading="lazy" src="/images/rbrcforr3.webp" alt="how to recall the formula for r3">
<h2>The transformation or conversion from star to delta</h2>
<p>
Firstly, in this transformation, we are to find R<sub>a</sub>, R<sub>b</sub> and R<sub>c</sub> as
oppose to the last section where we are to find R<sub>1</sub>, R<sub>2</sub> and R<sub>3</sub>. </p>
<img loading="lazy" src="/images/startoy.webp" alt="how to convert from star to delta">
<p class="has-list">

The formula is stated as

<span class="text-emphasis">R<sub>a</sub></span> = (R<sub>1</sub>R<sub>2</sub> + R<sub>2</sub>R<sub>3</sub> +
R<sub>3</sub>R<sub>1</sub>) / R<sub>3</sub>,
<span class="text-emphasis">R<sub>b</sub></span> = (R<sub>1</sub>R<sub>2</sub> + R<sub>2</sub>R<sub>3</sub> +
R<sub>3</sub>R<sub>1</sub>) / R<sub>2</sub> and
<span class="text-emphasis">R<sub>c</sub></span> = (R<sub>1</sub>R<sub>2</sub> + R<sub>2</sub>R<sub>3</sub> +
R<sub>3</sub>R<sub>1</sub>) / R<sub>1</sub>

</p>
<h2>The formula for star to delta conversion</h2>
<img loading="lazy" src="/images/formulaytod.webp" alt="The formula for star to delta conversion">
<h2>How to remember the formula for star to delta conversion</h2>
<p>
Now let’s recall the formula using our tip. First of all, you can see that R<sub>a</sub> is affected
by R<sub>1</sub> and R<sub>2</sub>. And this R<sub>1</sub> and R<sub>2</sub> are also joined at a
middle point to each other with R<sub>3</sub> so in that case we can’t just apply same rule as the
previous one we did for converting from delta to star.
</p>
<img loading="lazy" src="/images/complexnode.webp" alt="complex node for star and delta">

<p>
But what we need to do is, since R<sub>1</sub> and R<sub>2</sub> are tied to R<sub>a</sub> and also
R<sub>1</sub> and R<sub>2</sub> are connected at a node with R<sub>3</sub> then we just multiply
R<sub>1</sub>R<sub>2</sub> and then add R<sub>2</sub>R<sub>3</sub> and lastly add
R<sub>3</sub>R<sub>1</sub> which yields this.
</p>
<img loading="lazy" src="/images/ravalue.webp" alt="the value for ra">

<p>
This step might look confusing a little bit but just go through it once more until you get the heck
of it.
</p>
<blockquote class="blockquote">
<p class="little-nugget">Tip</p>
<p class="quote-text">
If you look at the previous two images, you will find where a pattern is shown - this can help in recalling the formula also.
</p>

</blockquote>

<p>Then after that we divide our first result which is (R<sub>1</sub>R<sub>2</sub> + R<sub>2</sub>R<sub>3</sub> + R<sub>3</sub>R<sub>1</sub>) by the leg opposite to our R<sub>a</sub>
which is R<sub>3</sub> or we can say the leg not connected directly to R<sub>a</sub>.</p>
<p>
Likewise, R<sub>b</sub> = (R<sub>1</sub>R<sub>2</sub> + R<sub>2</sub>R<sub>3</sub> + R<sub>3</sub>R<sub>1</sub>) / R<sub>2</sub>.</p>

<blockquote class="blockquote">
<p class="little-nugget">Note</p>
<p class="quote-text">

Since the top side is equal for all case and only the bottom changes, recall the bottom as the leg
opposite to the resistor we are looking for. And in this case R<sub>b</sub> and the leg opposite is R<sub>2</sub>. </p>

</blockquote>

<p>Now it’s your turn to do R<sub>c</sub> and later check your answer.</p>
<button class="see-answer">See answer &darr;</button>
<img loading="lazy" class="hide-show-image" src="/images/rcvalue.webp" alt="the value for rc">

<p>Finally, let's try to recap all what we've just discussed by solving some examples.</p>
<h2>Example on delta to star conversion</h2>
<p><span class="text-emphasis">Ex.1</span> convert the delta network below to it star equivalent.</p>
<img loading="lazy" src="/images/ex1and2_1.webp" alt="Example on delta to star conversion">
<p>Firstly, we need to put the star network into the delta network and apply the corresponding formula

<img loading="lazy" src="/images/ex1and2_2.webp" alt="solution on delta to star conversion"></p>

<h2>Example on star to delta conversion</h2>
<p><span class="text-emphasis">Ex.2</span>  let’s convert the star network gotten from Ex.1 back to the delta equivalent.</p>
<img loading="lazy" src="/images/ex1and2_3.webp" alt="Example on star to delta conversion">
<p>As always, we need to put the star network into the delta network and apply the corresponding formula
</p>
<img loading="lazy" src="/images/ex1more_2 (1).webp" alt="solution on star to delta conversion">
<p>Here comes the end on this section and now it's your turn to tell us if this article does help or there is any
feedback you need to give. Cheers tooabstracter. :tada: </p>
</div>
