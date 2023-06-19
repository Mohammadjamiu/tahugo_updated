---
title: How Do You Check Whether a System Is LTI or Not?
slug: how do you check whether a system is LTI or not
postdate: June 19, 2023
description: To determine if a system is LTI or not, perform linearity and time
  invariance tests. If the system passes both, it's LTI; if it fails either,
  it's not LTI.
categorylabel: Signals and Systems
categories: '["Signals and Systems"]'
image: /images/how-to-check-lti-system.webp
weight: 250
categorylink: /categories/signals-and-systems
type: posts
author: Mohammad Jamiu
Affliate_Links: false
draft: false
mathjax: true
Google_Ads: true
---
To analyze the response and stability of a system, it is important to determine whether it is LTI or not. 

The LTI property helps us understand how a system behaves when subjected to different inputs. 

By performing specific tests, we can determine whether a system exhibits the desired LTI characteristics.

{{< table-of-contents >}}

## **Linearity Test**

The linearity test is the first step for evaluating whether a system is LTI. It examines whether the system's output can be expressed as a linear combination of its inputs. 

Let's consider an input signal denoted as $x(t)$ and an output signal denoted as $y(t)$. 

If the output of a system satisfies the equation $y(t) = ax(t) + by(t)$, where $a$ and $b$ are constants, then the system is linear.

## **Time Invariance Test**

The time invariance test assesses whether a system's output remains consistent for inputs of the same shape, regardless of when the input is applied. 

In other words, if a system is time-invariant, the output will be identical for the same input, regardless of the time at which the input is applied. 

This property is important in analyzing the stability and behavior of systems over time.

## **Examples of LTI Systems**

Now let's explore some examples of systems that exhibit LTI characteristics.

### **1. RC Filter**

An RC filter is a commonly used linear time-invariant system employed to eliminate noise from input signals. 

It consists of a resistor (R) and a capacitor (C) that work together to filter out unwanted frequencies while allowing desired frequencies to pass through.

### **2. RLC Filter**

An RLC filter, similar to the RC filter, is a linear time-invariant system. It comprises a resistor (R), an inductor (L), and a capacitor (C). 

RLC filters are versatile and can amplify or attenuate specific frequencies of an input signal, depending on their configuration.

### **3. PID Controller**

A PID (Proportional-Integral-Derivative) controller is a linear time-invariant system utilized in control systems. 

It plays a crucial role in maintaining desired output values by adjusting the control signal based on the error between the desired setpoint and the actual output.

## **Examples of Non-LTI Systems**

Now let's see some examples of systems that do not exhibit LTI characteristics.

### **1. Nonlinear System**

A nonlinear system is one that fails to satisfy the linearity test. It means the output of the system is not a linear combination of the inputs. 

For example, a system that amplifies the input signal by a factor of 2 for positive values of the input signal and by a factor of 3 for negative values of the input signal is a nonlinear system.

### **2. Time-Varying System**

A time-varying system is one that fails to satisfy the time invariance test. It means the output of the system changes with time, even for inputs of the same shape. 

For example, a system that amplifies the input signal by a factor of 2 at time t=0 and by a factor of 3 at time t=1 is a time-varying system.

## **Wrap Up**

Determining whether a system is LTI or not is important in understanding its behavior and characteristics. 

The linearity test and time invariance test are two essential tests used to check or evaluate a system's LTI properties. 

By applying these tests, we can gain valuable insights into how a system responds to different inputs and ensure its stability and reliability.