---
title: How to Check if a Variable is a Number in Python?
slug: how to check if a variable is a number in python
postdate: August 19, 2023
description: Discover how to check if a variable is a number in Python. By using
  the type() function and the isinstance() function.
tags:
  - nodejs
  - programming and coding
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/how-to-check-if-a-variable-is-number-in-python.webp
weight: 354
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
In Python, variables can hold various types of data, including integers (int) and floating-point numbers (float). 

When dealing with dynamic data, it's crucial to ascertain whether a variable contains a numeric value before performing mathematical operations. 

We will discuss two methods that help you achieve this goal: the type() function and the isinstance() function.

## **1. Making Use of the type() Function**

### **— Defining the Function**

```python
def is_number(variable):
    """
    This function checks if a variable is a number.

    Args:
        variable: The variable to check.

    Returns:
        True if the variable is a number, False otherwise.
    """
    return type(variable) in (int, float)
```

### **How it Works**

The `type()` function returns the type of the given variable. If the type is either int or float, the function returns True, indicating that the variable is a number. 

Otherwise, it returns False.

**Example Code:**

```python
def is_number(variable):
    """
    This function checks if a variable is a number.

    Args:
        variable: The variable to check.

    Returns:
        True if the variable is a number, False otherwise.
    """
    return type(variable) in (int, float)

# Examples
number = 10
result_number = is_number(number)

string = "Hello"
result_string = is_number(string)

print(f"Is {number} a number? {result_number}")
print(f"Is {string} a number? {result_string}")

```

```


Is 10 a number? True
Is Hello a number? False
```

## **2. Making Use of the isinstance() Function**

### **— Defining the Function**

```python
def is_number(variable):
    """
    This function checks if a variable is a number.

    Args:
        variable: The variable to check.

    Returns:
        True if the variable is a number, False otherwise.
    """
    return isinstance(variable, (int, float))
```

### **How it Works**

The `isinstance()` function verifies if the variable is an instance of either the int or float class. 

If the variable is indeed an instance of either of these classes, the function returns True; otherwise, it returns False.

**Example Code:**

```python
def is_number(variable):
    """
    This function checks if a variable is a number.

    Args:
        variable: The variable to check.

    Returns:
        True if the variable is a number, False otherwise.
    """
    return isinstance(variable, (int, float))

# Examples
number = 20
result_number = is_number(number)

string = "Good Bye"
result_string = is_number(string)

print(f"Is {number} a number? {result_number}")
print(f"Is {string} a number? {result_string}")

```

```


Is 20 a number? True
Is Good Bye a number? False
```

## **Which One to Use?**

The choice between the `type()` and `isinstance()` methods depends on your coding style and specific requirements. 

The `type()` function offers a concise approach, while the `isinstance()` function provides more explicit validation.



## **Frequently Asked Questions (FAQs)**

1. **Can these methods distinguish between integer and floating-point numbers?**
   Yes, both methods can distinguish between integers and floating-point numbers.
2. **What happens if I use the type() function on a non-numeric variable?**
   The type() function will return the type of the variable, which might not be int or float.
3. **Are there any performance differences between these two methods?**
   Generally, the type() function is slightly faster than the isinstance() function due to its simplicity.
4. **Can I use these functions to check for complex numbers as well?**
   No, these methods are designed to check for int and float types only. To check for complex numbers, you would need a different approach.
5. **Can I create a custom function to check for other numeric types, such as decimals?**
   Yes, you can create custom functions using similar logic to check for other numeric types like decimals or fractions.