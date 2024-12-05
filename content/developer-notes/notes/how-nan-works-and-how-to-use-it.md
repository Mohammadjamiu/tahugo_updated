---
title: To check if a value is NaN, you should use the isNaN() function
slug: how nan works and how to use it
postdate: September 10, 2024
description: "`NaN` is not equal to anything, even itself."
categorylabel: Developer Notes
categories: '["Developer Notes"]'
image: /images/imgph.webp
weight: 3
categorylink: /developernotes
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
I have this code showing some error, and what I intended is to make the code do something when `totalDaysFromPicker` is equal to `NaN` , but ended up learning something.

```javascript
  if (totalDaysFromPicker === 0 || totalDaysFromPicker === NaN) {
      setMessage("Please select a duration and date");
      setMessageType("error"); // Set message type to error
      setCalcBtnActive(true);
      return;
    }
```

**What I learned:**

In JavaScript, `NaN` is a special value that stands for "Not-a-Number." However, comparing `totalDaysFromPicker` to `NaN` using `==` or `===` will not work as expected because `NaN` is not equal to anything, even itself. 

To check if a value is `NaN`, you should use the `isNaN()` function. Also, the condition to check if the value is `0` can be included in the same check. Here's how you can modify your condition:

```javascript
if (totalDaysFromPicker === 0 || isNaN(totalDaysFromPicker)) {
  setMessage("Please select a duration and date");
  setMessageType("error"); // Set message type to error
  setCalcBtnActive(true);
  return;
}
```

### Explanation:

* `isNaN(totalDaysFromPicker)` checks if `totalDaysFromPicker` is `NaN`.
* The condition will trigger the error message if `totalDaysFromPicker` is either `0` or `NaN`.