---
title: C Program to Calculate the Average of N Numbers
slug: c program to calculate the average of n numbers
postdate: October 23, 2023
keywords:
  - c program
  - c code
  - calculate average number
  - array
description: A step by step simple c program to calculate the average of n numbers.
tags: null
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/c-code-for-average.webp
weight: 375
categorylink: /categories/how-to-tech
type: posts
author: Mohammad Jamiu
author_credit: false
author_credit_name: ""
author_credit_info: ""
author_credit_image: ""
Affliate_Links: false
draft: false
mathjax: false
Google_Ads: true
---
![c code to calculate the average of n numbers](/images/c-code-for-average.webp "c code to calculate the average of n numbers")

In this article, we are going to look at a C program that can be used to calculate the average of “N” numbers. 

We will be using an array to store the numbers.

{{< table-of-contents >}}

## **The C Program to Calculate the Average of N Numbers:**

```c
#include <stdio.h>

int main() {
    int n;

    printf("Enter number of elements: ");
    scanf("%d", &n);

    int avgArr[n];

    printf("Enter each number:\n");
    
    for (int i = 0; i < n; i++) {
        scanf("%d", &avgArr[i]);
    }

    int sum = 0;
    
    for (int i = 0; i < n; i++) {
        sum += avgArr[i];
    }

    double result = (double)sum / n;

    printf("Resultant is: %.2lf", result);

    return 0;
}
```

## **Explanation of the code step by step:**

1. `#include <stdio.h>`: This line includes the standard input-output library, which is necessary for using functions like `printf` and `scanf`.
2. `int main() {`: This is the main function of the program, where the execution begins.
3. `int n;`: Declares an integer variable 'n' to store the number of elements for which you want to calculate the average.
4. `printf("Enter number of elements: ");`: This line displays a message on the screen, prompting the user to enter the number of elements.
5. `scanf("%d", &n);`: This line reads an integer from the user's input and stores it in the variable 'n'.
6. `int avgArr[n];`: This declares an integer array 'avgArr' with a size of 'n'. This array will be used to store the 'n' numbers for which you want to calculate the average.
7. `printf("Enter each number: \n");`: This line displays a message, prompting the user to enter each of the 'n' numbers.
8. `for(int i = 0; i < n; i++) {`: This is a loop that iterates 'n' times. It starts with 'i' equal to 0 and goes up to 'n-1'.
9. `scanf("%d", &avgArr[i]);`: Inside the loop, this line reads an integer from the user's input and stores it in the 'i'-th position of the 'avgArr' array.\
   \
   i.e., It takes an integer input from the user and puts it into the 'avgArr' array at the position specified by 'i', which be at **0, 1 …** depending on 'n' and the iterarion it is at.
10. `int sum = 0;`: This line initializes an integer variable 'sum' to 0. 'sum' will be used to calculate the sum of all the 'n' numbers.
11. `for(int i = 0; i < n; i++) {`: Another loop is used to iterate through the 'avgArr' array.
12. `sum += avgArr[i];`: Inside the loop, it adds the 'i'-th element of 'avgArr' to the 'sum' variable, effectively accumulating the sum of all the numbers.
13. `double result = (double)sum / n;`: After calculating the sum, it computes the average by dividing the 'sum' by 'n'. \
    \
    The `(double)` typecast is used to ensure that the division is done in floating-point arithmetic to preserve the decimal portion.
14. `printf("Resultant is: %.2lf", result);`: This line prints the average (stored in the 'result' variable) to two decimal places using the format specifier `%.2lf`.
15. `return 0;`: Finally, the program returns 0 to indicate successful execution of the program and terminates.

## **Wrap Up**

The program prompts the user for the number of elements, reads those elements, calculates their sum, and then divides the sum by 'n' to find the average, which is displayed to the user.

For example, if the user what to find the average of 4 numbers (1, 2, 3, 4). The output will be:

![c code to calculate the average of n numbers](/images/c-code-for-average.webp "c code to calculate the average of n numbers")

```
  2.50  // Output is (1 + 2 + 3 + 4) / 4
```