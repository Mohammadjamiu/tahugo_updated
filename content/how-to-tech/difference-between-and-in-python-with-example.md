---
title: Difference Between / and // in Python with Examples
slug: difference between / and // in python with example
postdate: July 21, 2023
keywords:
  - Python division operators
  - Difference between / and //
  - Python floating-point division
  - Python floor division
  - Division in Python examples
description: The forward slash ("/") yields a floating-point result, while the
  double forward slash ("//") yields an integer result in Python's division
  operations.
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/normal-and-floor-division-in-python.webp
weight: 340
categorylink: /categories/how-to-tech
type: posts
author: Mohammad Jamiu
author_credit: false
author_credit_name: ""
author_credit_info: ""
author_credit_image: /images/imgph.webp
Affliate_Links: false
draft: false
mathjax: false
Google_Ads: true
---
If you are new to Python, you might have come across the symbols “/“ and “//“ in mathematical operations, particularly in division. 

**The forward slash “/“ serves as a normal division, while the double forward slash “//“ serves as a floor division.** 

{{< table-of-contents >}}

## **The “/“ Operator: Normal Division**

The forward slash “/“ is the standard division operator in Python. When you use this operator, Python will perform a normal division, resulting in a floating-point number as the output. 

Let's consider an example:

### **Example:**

```python
5 / 2
```

```
 2.5
```

In this example, when we divide 5 by 2 using “/“, Python returns the result 2.5 as a floating-point number.

## **The “//“ Operator: Floor Division**

The double forward slash “//“ is the floor division operator in Python. When you use this operator, Python will perform a floor division, which means the result is the quotient of the division truncated to the nearest integer towards negative infinity. 

Let's consider an example also:

### **Example:**

```python
5 // 2
```

```
 2
```

In this example, when we divide 5 by 2 using “//“, Python returns the result 2, which is the truncated integer value of the division.

## **Wrap Up**

As a wrap up, the key difference between “/“ and “//“ in Python lies in their division behavior. 

The “/“ operator performs normal division, providing a floating-point result, while the “//“ operator executes floor division, producing an integer result.