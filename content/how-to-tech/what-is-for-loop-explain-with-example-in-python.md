---
title: "For Loop in Python: An Easy Explanation with Examples"
slug: what is for loop explain with example in python
postdate: June 3, 2023
description: Learn the concept of a "for loop" in Python through a simplified
  explanation and practical examples that will help you understand its usage and
  potential applications in programming.
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/for-loop-in-python.webp
weight: 212
categorylink: /categories/how-to-tech
type: posts
author: Mohammad Jamiu
Affliate_Links: false
draft: false
mathjax: false
Google_Ads: true
---
In the sphere of programming, understanding control structures is vital, and one such structure in Python is the “for loop.” It allows developers to iterate over a sequence of elements effortlessly. 

![for loop in python](/images/for-loop-in-python.webp "for loop in python")

This article aims to provide a straightforward explanation of the for loop in Python, accompanied by illustrative examples.

{{< table-of-contents >}}

## **What is a For Loop?**

A `for` loop is a powerful construct that enables you to execute a block of code repeatedly for each item in a sequence. 

It eliminates the need for manual iteration and offers a concise and organized way to handle collections of data. 

By leveraging the for loop, developers can automate repetitive tasks and efficiently manipulate data.

## **Syntax of a For Loop**

In Python, the syntax for a for loop follows a simple structure:

```python
for item in sequence:
    # code block to be executed
```

The keyword “for” initiates the loop, and “item” represents the iteration variable that takes on the value of each element in the sequence. 

The keyword “in” separates the iteration variable from the sequence. The colon “:” indicates the beginning of the indented code block, which is executed for each item in the sequence.

## **Code Examples Explaining For Loop in Python**

### **Example 1: Basic For Loop**

Let's start with a basic example to illustrate the fundamental usage of a for loop. Consider a list of numbers:

```python
numbers = [1, 2, 3, 4, 5]
for num in numbers:
    print(num)
```

In this example, the for loop iterates over each number in the “numbers” list. 

The iteration variable “num” takes on the value of each number in the list, and the “print()” function displays the number. 

As a result, each number is printed on a new line.

```
1
2
3
4
5
```

### **Example 2: For Loop with Range**

The range() function in Python generates a sequence of numbers. By combining it with a for loop, we can perform a specific task a certain number of times. 

Let's print the numbers from 1 to 10 using a for loop and the range() function:

```python
for num in range(1, 11):
    print(num)
```

In this example, the for loop iterates over the numbers generated by the range() function, which includes numbers from 1 to 10. 

The “print()” function displays each number on a new line.

```
1
2
3
4
5
6
7
8
9
10
```

### **Example 3: For Loop with Strings**

Python allows you to iterate over characters in a string using a for loop. Let's consider the following example:

```python
message = "Hello, world!"
for char in message:
    print(char)
```

Here, the for loop iterates over each character in the string “message.” The iteration variable “char” represents each character, and the “print()” function displays each character on a new line. 

As a result, each character in the string is printed individually.

```
H
e
l
l
o
,
 
w
o
r
l
d
!
```

### **Example 4: Nested For Loop**

A nested for loop consists of a loop within another loop. It enables complex iterations, especially when dealing with multidimensional data structures. 

Let's visualize a simple example of a multiplication table using nested for loops:

```python
for i in range(1, 6):
    for j in range(1, 6):
        print(i * j, end='\t')
    print()
```

In this example, the outer for loop iterates over the numbers 1 to 5, and the inner for loop also iterates over the numbers 1 to 5. 

The “print()” function displays the product of the current values of “i” and “j,” separated by a tab (“\t”), without moving to a new line. 

After each iteration of the inner loop, the “print()” function without any arguments moves to a new line. 

This pattern creates a multiplication table from 1 to 5.

```
1	2	3	4	5	
2	4	6	8	10	
3	6	9	12	15	
4	8	12	16	20	
5	10	15	20	25
```

### **Example 5: For Loop with Break**

There might be cases when you need to prematurely exit a for loop based on specific conditions. 

The “break” statement allows you to achieve this. Let's consider an example where we want to find the first even number in a list and stop the loop execution:

```python
numbers = [1, 3, 4, 5, 6, 7, 8]
for num in numbers:
    if num % 2 == 0:
        print("First even number:", num)
        break
```

In this example, the for loop iterates over each number in the list. Inside the loop, the condition “num % 2 == 0" checks if the current number is even. 

If it is, the “print()” function displays the message “First even number” along with the even number, and the “break” statement is executed. 

The “break” statement terminates the loop immediately, even if there are more numbers in the list. Consequently, only the first even number encountered in the list is printed.

```
First even number: 4
```

### **Example 6: For Loop with Continue**

The “continue” statement in Python allows you to skip the remaining code block for the current iteration and move to the next iteration. 

Let's see an example where we print all odd numbers in a list using the continue statement:

```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for num in numbers:
    if num % 2 == 0:
        continue
    print(num)
```

In this example, the for loop iterates over each number in the list. Inside the loop, the condition “num % 2 == 0" checks if the current number is even. 

If it is, the “continue” statement skips the remaining code block for that iteration and moves to the next iteration. 

As a result, only the odd numbers are printed using the “print()” function.

```
1
3
5
7
9
```

### **Example 7: For Loop with Else**

A for loop in Python can also have an optional “else” block. The code within the “else” block is executed when the loop completes all iterations without encountering a “break” statement. 

Let's consider an example where we check if a number is prime using a for loop with an else block:

```python
num = 11
for i in range(2, num):
    if num % i == 0:
        print(num, "is not prime.")
        break
else:
    print(num, "is prime.")
```

In this example, the for loop iterates over the range from 2 to “num” (exclusive). Inside the loop, the condition “num % i == 0" checks if the current number is divisible by “i” without any remainder. 

If it is, the “print()” function displays that the number is not prime, and the “break” statement is executed to terminate the loop. 

However, if the loop completes all iterations without encountering a “break” statement, the else block is executed, and the message “11 is prime” is printed.

```
11 is prime.
```

## **Final Thought**

In conclusion, a for loop is a fundamental control structure in Python that allows you to iterate over sequences of elements efficiently. 

It eliminates manual repetition and provides a concise way to handle collections of data. By understanding the syntax and exploring various examples, you can leverage the power of for loops to simplify your programming tasks and enhance your code's readability.

## **FAQs**

1. **Q: Can I use a for loop with other data structures like dictionaries?** Absolutely! You can iterate over the keys, values, or items of a dictionary using a for loop.
2. **Q: Is it possible to nest multiple for loops within each other?** Yes, you can nest for loops to handle multidimensional data structures or perform complex iterations.
3. **Q: What happens if I modify the sequence during a for loop iteration?** Modifying the sequence while iterating over it can lead to unexpected results or errors. It's generally recommended to avoid modifying the sequence during iteration.
4. **Q: Are there any alternatives to a for loop in Python?** Yes, Python offers other looping constructs like the “while” loop, which repeatedly executes a block of code as long as a condition is true.
5. **Q: Can I use a for loop to iterate over a string's characters in reverse order?** Yes, you can achieve that by using the “reversed()” function in conjunction with a for loop.