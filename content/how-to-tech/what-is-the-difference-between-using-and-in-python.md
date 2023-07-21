---
title: What is the Difference Between Using [] and {} in Python?
slug: what is the difference between using square bracket and curly braces in python
postdate: July 20, 2023
keywords:
  - Python
  - square brackets
  - curly braces
  - lists
  - dictionaries
description: "Square brackets [] in Python define lists, while curly braces {}
  represent dictionaries. Lists are ordered with numerical indexing, while
  dictionaries use keys for direct value access. "
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/square-brackets-and-curly-braces-python.webp
weight: 339
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
The square brackets `[]` in Python are used to denote a list, while the curly braces `{}` are used to denote a dictionary. 

These symbols play a significant role in Python's data structures, and understanding their differences is essential for efficient programming.

{{< table-of-contents >}}

## **What Are Lists in Python?**

In Python, a list is a versatile data structure that can store a collection of elements. These elements can be of any data type, allowing for the creation of heterogeneous lists. 

Lists maintain the order of elements, and Python follows zero-based indexing, where the first element has an index of 0, the second element has an index of 1, and so on.

Lists offer flexibility and efficiency, making them suitable for various applications. 

They are commonly used to manage lists of items, track user inputs, and store data sets that require sequential processing.

## **Creating Lists in Python**

To create a list in Python, you simply enclose the elements within square brackets `[]` and separate them with commas. 

Here's an example code:

```python
my_list = [1, 'hello', 3.14, True]
```

## **Accessing Elements in a List**

Elements in a list can be accessed using their index values. For example, to access the second element in the above list, you would use:

```python
print(my_list[1])  
```

```
 hello
```

## **Modifying Lists**

Lists are mutable, which means you can modify their elements after creation. You can add elements, remove elements, or modify existing ones as needed during the course of your program.

**Read more on:** [What is a List in Python with Example?](/how-to-tech/what-is-a-list-in-python-with-example/)

## **What Are Dictionaries in Python?**

In Python, a dictionary is another essential data structure that stores a collection of key-value pairs. 

Unlike lists, dictionaries do not rely on numerical indexing. Instead, they use keys to access corresponding values.

Dictionaries are valuable when dealing with data that requires quick lookups and searching based on specific identifiers. 

They provide a direct mapping between keys and their associated values.

## **Creating Dictionaries in Python**

To create a dictionary in Python, you enclose the key-value pairs within curly braces `{}` and separate them using colons `:`. 

Each key-value pair is separated by a comma. 

Here's also an example code:

```python
my_dict = {'name': 'John', 'age': 30, 'city': 'New York'}
```

## **Accessing Values in a Dictionary**

To access values in a dictionary, you use the corresponding key. For example:

```python
print(my_dict['name']) 
```

```
 John
```

## **Modifying Dictionaries**

Like lists, dictionaries are mutable. You can modify existing key-value pairs, add new ones, or remove entries as needed during program execution.

**Read more on:** [Python Dictionaries: A Beginner's Guide with Example](/how-to-tech/python-dictionary-with-example/)

## **Wrap Up**

As a wrap up, the difference between using square brackets `[]` and curly braces `{}` in Python is that, square brackets `[]` are used for creating lists while curly braces `{}` are used to create dictionaries.

Lists are ordered collections that use numerical indexing, while dictionaries are associative collections that rely on keys for direct access to values.

## **FAQs**

1. **Can a List Contain Different Data Types?** Yes, lists in Python can contain elements of different data types. This flexibility allows you to create heterogeneous lists, making them useful for a wide range of applications.
2. **How Do I Add Elements to a List?** You can add elements to a list using the `append()` method to add an element at the end or the `insert()` method to insert an element at a specific index.
3. **What Happens if I Use Duplicate Keys in a Dictionary?** In Python dictionaries, each key must be unique. If you attempt to use a duplicate key, it will overwrite the existing value associated with that key.
4. **Can I Modify the Elements Inside a List or Dictionary?** Yes, both lists and dictionaries are mutable data structures, allowing you to modify their elements after creation.
5. **Which Data Structure Should I Use for Fast Lookups?** Dictionaries are ideal for fast lookups based on specific keys. If you need to quickly retrieve data using identifiers, dictionaries provide superior performance compared to lists.
6. **How Do Lists and Dictionaries Compare in Memory Usage?** In general, dictionaries may consume more memory than lists due to the overhead of storing key-value pairs. However, the difference is usually negligible unless working with extremely large datasets.