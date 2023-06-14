---
title: What is a List in Python with Example?
slug: what is a list in python with example
postdate: June 5, 2023
description: A list in Python is a flexible data structure used to store a
  collection of elements. It allows you to store different types of data
  together.
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/list-in-python.webp
weight: 215
categorylink: /categories/how-to-tech
type: posts
author: Mohammad Jamiu
Affliate_Links: false
draft: false
mathjax: false
Google_Ads: true
---
A list in Python is a mutable, ordered collection of elements enclosed in square brackets (`[]`). It can store elements of different data types, such as integers, strings, or even other lists. 

![list in python](/images/list-in-python.webp "list in python")

Lists are dynamic, meaning they can grow or shrink in size as needed. This flexibility makes lists a powerful tool for various data manipulation tasks.

With the ability to store multiple items, lists provide an efficient way to organize and access data. 

Whether you need to manage a list of names, track inventory, or store coordinates in a 2D grid, lists are up to the task.

In the following sections, we will look deeper into the mechanics of lists and explore their many features and capabilities.

{{< table-of-contents >}}

## **Defining a List**

To create a list in Python, you simply enclose comma-separated values within square brackets. Let's consider an example where we define a list of favorite fruits:

```python
fruits = ["apple", "banana", "orange", "mango"]
```

In this code example, the variable `fruits` holds a list of four elements: `"apple"`, `"banana"`, `"orange"`, and `"mango"`. 

The elements in the list can be of any data type, but in this case, they are strings.

## **Accessing List Elements**

To access individual elements within a list, Python provides a convenient indexing system. 

Each element in a list has a corresponding index, starting from `0` for the first element, `1` for the second, and so on.

To retrieve a specific element, you can use square brackets along with the index number.

Let's suppose we want to access the second element, `"banana"`, from the `fruits` list:

```python
second_fruit = fruits[1]
```

In this code example, `fruits[1]` retrieves the element at index `1`, which corresponds to `"banana"`. 

The variable `second_fruit` will hold the value `"banana"`.

## **Modifying List Elements**

One of the advantages of lists is their mutability. This means that you can modify individual elements within a list. 

To change the value of an element, you can directly assign a new value to the desired index.

Let's say we want to update the third element, `"orange"`, to `"grapefruit"`:

```python
fruits[2] = "grapefruit"
```

After executing this line of code, the `fruits` list will be `["apple", "banana", "grapefruit", "mango"]`, with `"grapefruit"` replacing `"orange"`.

```
['apple', 'banana', 'grapefruit', 'mango']
```

## **List Operations**

Python provides several operations that can be performed on lists. Here are a few commonly used ones:

* **Concatenation**: You can concatenate two lists using the `+` operator. This operation combines the elements of both lists, resulting in a new list.

    Example:

  ```python
  list1 = [1, 2, 3]
  list2 = [4, 5, 6]
  result = list1 + list2  # [1, 2, 3, 4, 5, 6]
  ```

  **Output:** `[1, 2, 3, 4, 5, 6]`
* **Repetition**: The repetition operator `*` allows you to create a new list by repeating the elements of an existing list.

    Example:

  ```python
  list1 = [1, 2, 3]
  result = list1 * 3  # [1, 2, 3, 1, 2, 3, 1, 2, 3]
  ```

  **Output:** `[1, 2, 3, 1, 2, 3, 1, 2, 3]`
* **Membership**: You can check if an element exists in a list using the `in` keyword. \
  \
  It returns `True` if the element is found, and `False` otherwise.

    Example:

  ```python
  list1 = [1, 2, 3]
  result = 2 in list1  # True
  ```

  **Output:** `True`
* **Length**: The `len()` function allows you to determine the number of elements in a list.

    Example:

  ```python
  list1 = [1, 2, 3]
  length = len(list1)  # 3
  ```

  **Output:** `3`

## **List Slicing**

Python provides a powerful feature called **slicing**, which allows you to extract a portion of a list by specifying the start and end indices. 

The result is a new list containing the selected elements.

The syntax for list slicing is as follows: `list[start : end : step]`.

* `start`: The index at which the slice starts (inclusive).
* `end`: The index at which the slice ends (exclusive).
* `step`: The step size between elements.

Let's consider an example where we have a list of numbers from 1 to 10:

```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
```

To extract a slice that includes the elements from index 2 to index 5 (excluding index 5), we can use the following code:

```python
slice1 = numbers[2:5]  # [3, 4, 5]
```

In this code example, `numbers[2:5]` retrieves the elements from index 2 to index 5 and stores them in the `slice1` list.

```
[3, 4, 5]
```

## **Appending and Extending Lists**

To add elements to the end of a list, Python provides two methods: `append()` and `extend()`.

* **`append()`**: This method allows you to append a single element to the end of a list.

    Example:

  ```python
  fruits = ["apple", "banana", "orange"]
  fruits.append("mango")
  ```

    After executing this code, the `fruits` list will be `["apple", "banana", "orange", "mango"]`.

  **Output:** `['apple', 'banana', 'orange', 'mango']`
* **`extend()`**: This method is used to append multiple elements, such as another list, to the end of an existing list.

    Example:

  ```python
  fruits = ["apple", "banana", "orange"]
  more_fruits = ["mango", "grapefruit"]
  fruits.extend(more_fruits)
  ```

    After executing this code, the `fruits` list will be `["apple", "banana", "orange", "mango", "grapefruit"]`.

  **Output:** `['apple', 'banana', 'orange', 'mango', 'grapefruit']`

## **Removing Elements from a List**

Python also provides us several methods to remove elements from a list. Here are a few commonly used ones:

* **`remove()`**: This method allows you to remove the first occurrence of a specified element from a list.

    Example:

  ```python
  fruits = ["apple", "banana", "orange", "banana"]
  fruits.remove("banana")
  ```

    After executing this code, the `fruits` list will be `["apple", "orange", "banana"]`, with the first occurrence of `"banana"` removed.

  **Output:** `['apple', 'orange', 'banana']`
* **`pop()`**: The `pop()` method removes an element from a list at a specified index. \
  \
  If no index is provided, it removes the last element.

    Example: When no index is provided

  ```python
  fruits = ["apple", "banana", "orange"]
  removed_fruit = fruits.pop()
  ```

   In this code example, `fruits.pop()` removes the last element (“orange”) and returns the removed value. \
  \
  The variable `removed_fruit` will hold the value `"orange"`, and the `fruits` list will be `["apple", "banana"]`.\
  \
    Example: When an index is provided

  ```python
  fruits = ["apple", "banana", "orange"]
  removed_fruit = fruits.pop(1)
  ```

  \
  In this example, `fruits.pop(1)` removes the element at index `1` (“banana”) and returns the removed value. \
  \
  The variable `removed_fruit` will hold the value `"banana"`, and the `fruits` list will be `["apple", "orange"]`.
* **`del` statement**: The `del` statement allows you to remove elements from a list using their indices.

    Example:

  ```python
  fruits = ["apple", "banana", "orange"]
  del fruits[0]
  ```

   After executing this code, the `fruits` list will be `["banana", "orange"]`, with the element at index `0` (“apple”) removed.\
  \
  **Output:** `['banana', 'orange']`

## **List Methods**

Python provides us a variety of built-in methods that can be used to perform common operations on lists. 

These methods make it easier to manipulate and analyze list data. Here are some frequently used list methods:

* **`count()`**: This method returns the number of occurrences of a specified element in a list.

    Example:

  ```python
  numbers = [1, 2, 3, 2, 4, 2]
  count = numbers.count(2)  # 3
  ```

  **Output:** `3`
* **`index()`**: The `index()` method returns the index of the first occurrence of a specified element in a list.

    Example:

  ```python
  numbers = [1, 2, 3, 2, 4, 2]
  index = numbers.index(2)  # 1
  ```

  **Output:** `1`
* **`sort()`**: This method sorts the elements of a list in ascending order.

    Example:

  ```python
  numbers = [4, 2, 1, 3]
  numbers.sort()
  ```

  After executing this code, the `numbers` list will be `[1, 2, 3, 4]`.
* **`reverse()`**: The `reverse()` method reverses the order of elements in a list.

    Example:

  ```python
  numbers = [1, 2, 3, 4]
  numbers.reverse()
  ```

   After running this code, the `numbers` list will be `[4, 3, 2, 1]`.

For a comprehensive list of list methods, refer to the official [Python documentation](https://docs.python.org/3/tutorial/datastructures.html).

## **Sorting Lists**

Sorting a list is a common operation when working with data. Python provides us with multiple approaches to sort lists based on different criteria. 

Here, we will discuss two commonly used methods: the `sort()` method which has already been discussed previously and the `sorted()` function.

* **`sort()` Method**: The `sort()` method is used to sort a list in-place, meaning it modifies the original list directly.

    Example:

  ```python
  numbers = [3, 1, 4, 2]
  numbers.sort()
  ```

    After executing this code, the `numbers` list will be `[1, 2, 3, 4]`.
* **`sorted()` Function**: The `sorted()` function returns a new sorted list, leaving the original list unchanged.

    Example:

  ```python
  numbers = [3, 1, 4, 2]
  sorted_numbers = sorted(numbers)
  ```

    In this example, `sorted(numbers)` returns a new list `[1, 2, 3, 4]`, while the original `numbers` list remains `[3, 1, 4, 2]`.

Both the `sort()` method and the `sorted()` function can accept optional arguments to customize the sorting behavior. 

For example, you can specify a custom sorting key or define the sorting order (ascending or descending).

```python
# Define a list of items
items = [5, 2, 8, 1, 9, 3]

# Sort the list in descending order using a custom key
sorted_items = sorted(items, key=lambda x: -x)

# Print the sorted list
print(sorted_items) #[9, 8, 5, 3, 2, 1]
```

In this code example, we have a list of numbers `items`. By using the `sorted()` function, we can sort the list in descending order by specifying a custom key. 

The custom key is defined using a lambda function, where we multiply each element by -1 to reverse the order. 

The resulting sorted list, `sorted_items`, is then printed to the console which is `[9, 8, 5, 3, 2, 1]`.

## **List Comprehensions**

List comprehensions are a concise and powerful way to create lists in Python. They allow you to define a list and apply transformations or filters to elements in a single line of code. 

List comprehensions are often used when you need to perform a repetitive task or generate a new list based on existing data.

The general syntax of a list comprehension is as follows:

```python
new_list = [expression for item in iterable if condition]
```

* `expression`: Specifies the transformation or operation to be applied to each item.
* `item`: Represents an element from the iterable.
* `iterable`: Refers to the data source, such as a list or a range of numbers.
* `condition` (optional): Allows you to filter elements based on a specific condition.

Let's consider an example where we use a list comprehension to generate a new list of squared numbers:

```python
numbers = [1, 2, 3, 4, 5]
squared_numbers = [x**2 for x in numbers]
```

After executing this code, the `squared_numberslist` will be`[1, 4, 9, 16, 25]`, with each number squared.

List comprehensions are a concise and readable way to create lists and can often simplify your code by eliminating the need for explicit loops.

## **Wrap Up**

List, in Python, is a versatile and powerful data structure that allows you to store and manipulate collections of items. 

It provides us with various methods to access, modify, and manipulate elements within a list. 

With the knowledge gained from this article, you should now have a solid understanding of what a list is in Python and how to work with it effectively.

Remember to experiment with lists and explore their capabilities to become proficient in using them. 

The more you practice, the more confident you will become in leveraging lists to solve real-world problems in Python.

## **Frequently Asked Questions**

**1. Q: What is a list in Python, with an example?** A list in Python is a built-in data structure that allows you to store a collection of items. It is ordered, mutable, and can contain elements of different data types. Here's an example of a list:

```python
fruits = ["apple", "banana", "orange"]
```

In this example, `fruits` is a list that contains three elements: `"apple"`, `"banana"`, and `"orange"`. Lists are enclosed in square brackets and the elements are separated by commas.

**2. Q: How do I access elements in a list in Python?** You can access elements in a list by using their indices. Python uses zero-based indexing, so the first element has an index of 0, the second element has an index of 1, and so on. 

To retrieve a specific element, you can use square brackets along with the index number.

Example:

```python
second_fruit = fruits[1] #banana
```

In this example, `fruits[1]` retrieves the element at index 1, which corresponds to `"banana"`. The variable `second_fruit` will hold the value `"banana"`.

**3. Q: Can I modify elements in a list?** Yes, lists in Python are mutable, which means you can modify individual elements within a list. 

To change the value of an element, you can directly assign a new value to the desired index.

Example:

```python
fruits[2] = "grapefruit"
```

After executing this line of code, the `fruits` list will be `["apple", "banana", "grapefruit"]`, with `"grapefruit"` replacing `"orange"`.

**4. Q: How can I add elements to a list in Python?** You can add elements to a list in Python using the `append()` and `extend()` methods. 

The `append()` method allows you to append a single element to the end of a list, while the `extend()` method is used to append multiple elements, such as another list, to the end of an existing list.

Example:

```python
fruits.append("mango")  # ["apple", "banana", "orange", "mango"]

more_fruits = ["mango", "grapefruit"]
fruits.extend(more_fruits)  # ["apple", "banana", "orange", "mango", "grapefruit"]
```

**5. Q: How do I remove elements from a list in Python?** Python provides several methods to remove elements from a list. The `remove()` method allows you to remove the first occurrence of a specified element. 

The `pop()` method removes an element at a specified index (or the last element if no index is provided). The `del` statement can also be used to remove elements by their indices.

Example:

```python
fruits.remove("banana")  # ["apple", "orange"]

removed_fruit = fruits.pop(1)  # "orange"
# fruits = ["apple"]

del fruits[0]  # []
```

**6. Q: How do I sort a list in Python?** Python provides multiple approaches to sort lists. The `sort()` method can be used to sort a list in-place, modifying the original list. 

The `sorted()` function returns a new sorted list, leaving the original list unchanged.

Example:

```python
numbers = [3, 1, 4, 2]
numbers.sort()  # [1, 2, 3, 4]

sorted_numbers = sorted(numbers)  # [1, 2, 3, 4]
```