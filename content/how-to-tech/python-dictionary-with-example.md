---
title: "Python Dictionary: A Beginner's Guide with Examples"
slug: python dictionary with example
postdate: May 29, 2023
description: Learn the ins and outs of Python dictionaries in this comprehensive
  guide for beginners. Discover how to create, manipulate, and utilize
  dictionaries efficiently in your Python programming projects. Get started now!
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/python-dictionary.webp
weight: 195
categorylink: /categories/how-to-tech
type: posts
author: Mohammad Jamiu
Affliate_Links: false
draft: false
mathjax: false
Google_Ads: true
---
Are you a beginner looking to understand Python dictionaries? In this comprehensive guide, we will walk you through the concept of dictionaries in Python, providing clear explanations and practical examples along the way. 

By the end of this article, you will have a solid understanding of Python dictionaries and how to utilize them effectively in your coding journey.

{{< table-of-contents >}}

## **What is a Python Dictionary?**

A Python dictionary is a fundamental data structure that allows you to store and retrieve data in key-value pairs. 

It provides a powerful and efficient way to manage and organize data, making it an essential tool in Python programming. 

Unlike other data structures like lists or tuples, dictionaries are unordered, and their elements are accessed using unique keys.

## **Creating a Python Dictionary**

Creating a dictionary in Python is straightforward. You use curly braces `{}` and separate the key-value pairs with colons. 

Each key must be unique within the dictionary, and it is associated with a corresponding value. Let's take a look at an example:

```python
ages = {"John": 25, "Emily": 32, "Michael": 41}
print(ages)
```

```
{"John": 25, "Emily": 32, "Michael": 41}
```

In this example, “John,” “Emily,” and “Michael” are the keys, and their respective ages (25, 32, and 41) are the corresponding values. 

Python dictionaries can have keys of any immutable data type and values of any data type.

## **Accessing Dictionary Values**

Accessing values in a dictionary is an important operation. You can retrieve a value by using its corresponding key.

By providing the key within square brackets, you can access the associated value. Let's see an example:

```python
john_age = ages["John"]
print(john_age)
```

```
25
```

In this case, the variable `john_age` will contain the value 25. Similarly, you can access the ages of other individuals by using their respective keys.

## **Modifying Dictionary Values**

Python dictionaries are mutable, which means you can modify the values associated with keys. 

To update a value in a dictionary, you can assign a new value to its key. For instance, let's say John celebrated his birthday, and you want to update his age:

```python
ages["John"] = 26
print(ages)
```

```
{"John": 26, "Emily": 32, "Michael": 41}
```

After executing this line of code, the age of John in the `ages` dictionary will be updated to 26.

## **Adding and Removing Items**

Dictionaries provide flexibility in adding and removing key-value pairs. To add a new pair, you can assign a value to a new key. 

For example, let's add Sarah and her age to the `ages` dictionary:

```python
ages["Sarah"] = 29
print(ages)
```

```
{"John": 26, "Emily": 32, "Michael": 41, "Sarah": 29}
```

Now, the `ages` dictionary includes Sarah and her corresponding age. Conversely, to remove a key-value pair, you can use the `del` keyword followed by the key you wish to remove. 

Let's remove the entry for Michael:

```python
del ages["Michael"]
print(ages)
```

```
{"John": 26, "Emily": 32, "Sarah": 29}
```

After executing these lines of code, the `ages` dictionary will no longer include Michael's age.

## **Dictionary Methods**

Python provides several built-in methods that facilitate working with

 dictionaries. Some commonly used methods include:

* `keys()`: Returns a list of all the keys in the dictionary.
* `values()`: Returns a list of all the values in the dictionary.
* `items()`: Returns a list of tuples, where each tuple contains a key-value pair.

These methods are useful for retrieving information about the dictionary's keys, values, or items.

Let's see these methods in action:

**1. keys():** This method returns a list of all the keys present in the dictionary. It provides a convenient way to access and iterate over the keys. Here's an example:

```python
ages = {"John": 25, "Emily": 32, "Michael": 41}
key_list = ages.keys()
print(key_list)
```

```
dict_keys(['John', 'Emily', 'Michael'])
```

In this example, the `keys()` method returns a list-like object containing all the keys in the `ages` dictionary.

**2. values():** The `values()` method retrieves a list of all the values in the dictionary. This is useful when you want to access or manipulate the values independently. Here's an example:

```python
ages = {"John": 25, "Emily": 32, "Michael": 41}
value_list = ages.values()
print(value_list)
```

```
dict_values([25, 32, 41])
```

The `values()` method returns a list-like object containing all the values from the `ages` dictionary.

**3. items():** The `items()` method is particularly useful as it returns a list of tuples, where each tuple contains a key-value pair from the dictionary. This method enables you to access both the keys and values simultaneously. Let's see an example:

```python
ages = {"John": 25, "Emily": 32, "Michael": 41}
item_list = ages.items()
print(item_list)
```

```
dict_items([('John', 25), ('Emily', 32), ('Michael', 41)])
```

In this example, the `items()` method returns a list-like object containing tuples, each representing a key-value pair from the `ages` dictionary.

## **Iterating Over a Dictionary**

Iterating over a dictionary allows you to perform operations on each key-value pair. Python provides a convenient way to loop through a dictionary using a `for` loop. 

Here's an example that prints the names and ages of each person in the `ages` dictionary:

```python
for name, age in ages.items():
    print(name + " is " + str(age) + " years old.")
```

```log
John is 26 years old.
Emily is 32 years old.
Sarah is 29 years old.
```

This loop iterates over each key-value pair in the `ages` dictionary and prints a formatted string containing the name and age of each person.

## **Dictionary Operations**

There are common operations you can perform on dictionaries, such as checking if a key exists in a dictionary and finding the length of a dictionary. 

You can use the `in` keyword to check if a key exists:

```python
if "John" in ages:
    print("John's age is known.")
```

```
John's age is known.
```

This code snippet checks if the key “John” exists in the `ages` dictionary. If it does, it prints a message indicating that John's age is known. 

In addition, you can use the `len()` function to determine the number of key-value pairs in a dictionary:

```python
dictionary_length = len(ages)
print(dictionary_length)
```

Output:

```
3
```

The variable `dictionary_length` will store the number of key-value pairs in the `ages` dictionary.

## **Nested Dictionaries**

Python dictionaries can be nested, allowing you to create more complex data structures. You can have dictionaries within dictionaries, which is especially useful for representing hierarchical data. 

Let's see an example:

```python
contacts = {
    "John": {"email": "john@example.com", "phone": "123-456-7890"},
    "Emily": {"email": "emily@example.com", "phone": "987-654-3210"}
}

emily_email = contacts["Emily"]["email"]
print(emily_email)
```

```
emily@example.com
```

In this example, the `contacts` dictionary contains two nested dictionaries, each representing contact information for John and Emily. 

To access Emily's email address, we provide the outer key (“Emily”) followed by the inner key (“email”). The variable `emily_email` will store Emily's email address.

## **Final Thought**

In this article, we covered the fundamentals of Python dictionaries. We discussed creating dictionaries, accessing and modifying their values, adding and removing items, and using various methods. 

In addition, we explored iterating over dictionaries, performing common operations, and using nested dictionaries.

Python dictionaries are a powerful tool that allows for efficient data management and organization. They are essential for any Python programmer, and mastering their usage will enhance your coding skills significantly.