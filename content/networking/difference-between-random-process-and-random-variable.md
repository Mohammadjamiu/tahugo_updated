---
draft: false
wordcount: false
alt: ""
title: Difference Between Random Process and Random Variable
postdate: January 18, 2022
description: Random variable is a variable whose value is the outcome of a
  random event and a random process is the collections of random variables.
categorylabel: Networking and Communication
categories: '["Networking and Communication"]'
image: /images/probability_1.webp
weight: "35"
categorylink: /categories/networking-and-communication
type: posts
author: Mohammad Abdul
mathjax: false
Google_Ads: true
---
Probability theory is a branch of mathematics that deals with the study of random events and the likelihood of their occurrence.

**When any experiment or scenario involves probability or the need for a probabilistic model, then a random process and random variable must be considered.**

These are two key concepts that are often used interchangeably but are actually distinct from one another.

## What Is a Random Process?

**Random process** can be thought of as the collection of random variables.
It can also be defined as a time varying function that assign the outcome of a random event or experiment to each time instant. e.g., a signal.

In other words, a random process is a sequence of random variables that evolve over time. 

For example, the temperature at a given location over a period of time can be modeled as a random process, with the temperature at each moment in time being a random variable.

Random processes can be stationary or non-stationary.

**A stationary random process** has statistical properties that do not change over time, while **a non-stationary random process** has statistical properties that vary over time. 

For example, the temperature at a given location may be a stationary random process if it fluctuates around a fixed mean temperature, but it may be a non-stationary random process if it exhibits a trend over time.

## What Is a Random Variable?

**A random variable** is a variable whose value is the outcome of a random process. In order words, when there is a random event or experiment, then the outcome at any instant of time is assigned to a variable termed as *random variable*.

It is also defined as a mathematical function that assigns a numerical value to each possible outcome of a random event or experiment

For example, tossing a coin will either yield a head or tail. The tossing of the coin is the random experiment because you don’t know whether it will turn out to be head or tail. 

After tossing, when an outcome is gotten either head or tail, then it can be assigned to a variable.

> **S = {H, T}** 
>
> where: 
>
> **S** is the sample space holding all the possible outcome.
> **P(X=head)** – this is the probability that a head will be gotten, where **X** is the random variable.

In a mathematical sense, if we flip a coin, we can define a random variable X that takes on the value 1 if the coin lands **heads** up and 0 if the coin lands **tails** up. 

The values of the random variable are determined by the outcomes of the random event, but the random variable itself is a fixed function.

Random variables can be discrete or continuous. 

A **discrete random variable** takes on only a finite or countably infinite set of values, while a **continuous random variable** takes on any value in a specified range. 

For example, the number of heads in 10 coin flips is a discrete random variable, while the height of a randomly chosen person is a continuous random variable.

## Difference Between Random Process and Random Variable

### Random Process

1. A **random process** is a sequence of random variables that evolve over time or some other parameter.
2. It is denoted with a capital **X(t)**.
3. It is associated with time.
4. A random process, is the collection of several random variables.
5. It is also called **stochastic process**.
6. A **random process** can be **stationary** or **non-stationary**.
7. A **random process** is typically represented by a probability distribution function, a probability density function, or a statistical model.
8. It is used to denoted random signal such as noise in communication.

### Random Variable

1. **A random variable** is a fixed function that assigns a numerical value to each possible outcome of a random event.
2. It is denoted with a capital X without the t. and it consists of small x's which serves as the random values.
   For instance, the value of apple in a basket store in a random variable called valueOfApple
3. it is not associated with time, rather with values.
4. A random variable is the collection of several random values.
5. A **random variable** is always stationary, meaning that its statistical properties do not change over time.
6. A **random variable** can be represented by a probability distribution or a probability density function. 

## Summary

**A random variable** is a single value that represents the outcome of a random event, while **a random process** is a collection of random variables that evolve over time or some other parameter. 

Understanding the differences between these two concepts is important in probability theory and can help us model and analyze complex systems in a variety of fields, including engineering, finance, and physics.