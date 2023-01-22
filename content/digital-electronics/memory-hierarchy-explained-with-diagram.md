---
title: "Memory Hierarchy Explained With Diagram"
postdate: April 17, 2022
image: "/images/memoryh_1.webp"
description: "Memory hierarchy is said to be the arrangement of several memory elements within the computer architecture with the sole purpose of maximizing processing speed and minimizing cost"
alt: "memory hierarchy"
weight: "50"
author: Mohammad Jamiu
categorylabel: Digital Electronics
categorylink: /categories/digital-electronics/
categories: ["Digital Electronics"]
type: posts
Google_Ads: true
wordcount: false
mathjax: false
draft: false
---

Data storage in a computer is possible with the help of a memory system. The memory system helps in holding data for a short period of time during processing and also to store data and programs for long period of time.

A memory system consists of several types of memory, such as registers (which is used for storing bits), cache (which is used for storing data for easy access), hard disk (which is used for storing data mostly on a permanent basis) etc.

As the memory system is essential for storing data, it is also necessary to minimize the time or duration it takes for processing data called access time and the cost of the memory.

That’s why a hierarchy is established to manage the series of stages for processing data efficiently hence memory hierarchy and system processor is used to determine the processing speed of a computer.

Another thing to note about memory is that there are three features of memory which are cost, capacity and processing time.

The cost of a memory is usually in cost per bit, the capacity of a memory is measured based on the amount of data it can store or i.e. the number of bits or bytes it can store while the access time is the time required to access a specified unit of data from the memory.

A higher capacity yields a smaller memory cost and a greater access time while a smaller access time yields a high memory cost.

## What is memory hierarchy?

Memory hierarchy is said to be the arrangement of several memory elements within the computer architecture with the sole purpose of maximizing processing speed and minimizing cost.

The memory in a computer is classified according to its distance (the distance is measured in terms of time and not in terms of physical location) from the processor based on the number of machine cycles or the access time required to get data for processing.

Memory that are faster are closer to the processor while memory that are slower are far from the processor
A typical hierarchy of memory elements is shown below and it consists of 3 storage elements which are classified as primary storage, secondary storage and tertiary storage.

<img loading="lazy" src="/images/memoryh_1.webp" alt="memory hierarchy">

The primary storage consists of registers, caches, and the main memory while the secondary storage entails the hard disk and lastly, the tertiary storage entails auxiliary storage.

0. Processor
1. Register - Level 0
2. Cache - Level 1
3. Main memory - Level 2
4. Hard disk - Level 3
5. Auxillary storage - Level 4

<br>

### Registers

Registers are on the first level and are located within the processor . The access time or latency for data to be retrieved from the register is small or low as it is closed to the processor and also the number of bits it can store is low hence it has low capacity but fast in terms of access time.

It is also used to store frequently used data. The number of register in a processor do vary from tens to hundred and can hold data in the range of Kilobytes.

Registers can be implemented using a bistable device called flip-flop.

### Cache

The memory cache is the next level below the register and it is a storage element that provides temporary storage. There are several types of caches but most often we have, the L1 cache and the L2 cache. The L1 cache is located within the processor while the L2 cache is located outside the processor.

Just as the register, it is used to store data that are frequently accessed by the processor. it also store data is small size in the range of Megabytes.

Cache can be implemented using static RAM.

### Main memory

The main memory typically consists of two types of memory, the RAM (Random Access Memory) and ROM (Read Only Memory).

The RAM is a temporary storage element that is volatile as it only retains data while power is available while the ROM is non-volatile i.e. it can retain its data even after a power source is removed.

The main memory stores data in the range of Gigabytes.

### Hard disk

Hard disk is considered a secondary data storage element which has a high latency or access time. It is used for permanently storing of huge data and programs. Hard disk can also be used as a virtual memory to compensate for the primary storage when it is filled up.

The hard disk stores data in the range of Terabytes.

### Auxiliary storage

Auxiliary storage is considered a tertiary storage element that is used for storing huge data in the range of petabytes and more. It consists of magnetic tape libraries and optical jukeboxes.
