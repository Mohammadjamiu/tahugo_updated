---
title: How to Remove Items from a List While Iterating in Python?
slug: how to remove items from a list while iterating in python
postdate: December 23, 2023
keywords:
  - How to Remove Items from a List While Iterating in Python
description: Learn the ways that can be used to remove items from a list while
  iterating in Python
tags:
  - how to
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/remove-item-from-list-python.webp
weight: 401
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
Python, with its flexibility and power, provides various methods to manipulate lists. 

However, removing items from a list while iterating can be a tricky task. In this article, we will look at several methods that will allow you to remove elements from a list while iterating through it.

{{< table-of-contents >}}

## **How to Remove Items from a List While Iterating in Python?**

### 1. Creating a New List with List Comprehension:

List comprehension is a concise and elegant way to filter elements based on a condition. 

Here's how you can create a new list while removing specific items:

```python
my_list = [1, 2, 3, 4, 5]
new_list = [x for x in my_list if x > 3]
print(new_list)  
```

```
   [4, 5]
```

This Python code snippet initializes a list, `my_list`, with values 1, 2, 3, 4, and 5. 

It then creates a new list, `new_list`, using a list comprehension to filter elements from `my_list` that are greater than 3. 

Finally, the code prints the resulting `new_list`, which, in this case, contains the values \[4, 5].

### 2. Assigning to a Slice:

Another approach is to assign the filtered list directly to the original list using slicing. 

This method is efficient and modifies the existing list:

```python
my_list = [1, 2, 3, 4, 5]
my_list[:] = [x for x in my_list if x != 2]  
print(my_list) 
```

```
   [1, 3, 4, 5]
```

### 3. Filtering with itertools:

The itertools module provides a powerful `filterfalse` function that allows you to filter elements based on a condition. 

Here's how you can use it:

```python
import itertools

my_list = [1, 2, 3, 4, 5]
filtered_list = list(itertools.filterfalse(lambda x: x < 4, my_list))
print(filtered_list)  # Output: [4, 5]
```

```
  [4, 5]
```

This code snippet employs the `itertools` module to filter elements from a list. After initializing the list called `my_list` with values 1, 2, 3, 4, and 5, the `filterfalse` function from `itertools` is used. 

It creates a new list, `filtered_list`, by excluding elements from `my_list` that are less than 4. 

The lambda function within the `filterfalse` specifies the condition for exclusion. Finally, the code prints the contents of the newly created `filtered_list`. 

In this example, the output of the printed list would be `[4, 5]`.

### 4. Copying and Iterating:

Copying the list and then iterating over the copy can be a safe way to remove elements. 

```python
my_list = [1, 2, 3, 4, 5]
for item in my_list.copy():  
    if item < 3:
        my_list.remove(item)
print(my_list) 
```

```
  [3, 4, 5]
```

This code aims to selectively remove elements from a list named `my_list` based on a given condition. 

It begins by initializing `my_list` with values 1, 2, 3, 4, and 5. The subsequent `for` loop iterates over a copy of `my_list` to avoid modifying the list directly during iteration. 

Inside the loop, elements less than 3 are identified using the condition `if item < 3`, and these elements are removed from the original list using `my_list.remove(item)`. 

Finally, the modified `my_list` is printed, showing the output `[3, 4, 5]`, indicating the removal of elements meeting the specified condition.

## **Wrap Up**

There you have it on how to remove items from a list while iterating in python :tada:.