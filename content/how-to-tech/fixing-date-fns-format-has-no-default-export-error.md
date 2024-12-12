---
title: How to Fix the date-fns format() Has No Default Export Error
slug: fixing-date-fns-format-has-no-default-export-error
postdate: December 12, 2024
description: Fix the 'date-fns format() has no default export' error by using
  import { format } from date-fns instead of import format from date-fns
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/date-fns-does-have-default-export.png
weight: 452
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

I was setting up the blog page for a website and needed to format the article's `date` and `updatedAt` fields. I used this logic to determine whether to display the published or updated date:

```jsx
{
  blog.updatedAt === blog.date
    ? `Published on ${format(new Date(blog.date), "MMM dd, yyyy")}`
    : `Updated on ${format(new Date(blog.updatedAt), "MMM dd, yyyy")}`;
}
```

However, I noticed a squiggly line under the `import` statement for `format`. I had written:

```javascript
import format from "date-fns";
```

When I hovered over the error, it said:  
_`Module '".../node_modules/date-fns/index"' has no default export.ts(1192)`_

I realized the issue was because `date-fns` doesn't have a default export. Each function, including `format`, needs to be imported as a named export.

#### The Solution

I followed these steps to fix the issue:

1. **Checked the `import` Statement**  
   I updated the `import` statement to:

   ```javascript
   import { format } from "date-fns";
   ```

2. **Tested the Code**  
   After updating the import, the error disappeared, and the formatting worked as expected.

3. **Verified the Output**  
   The dates were displayed correctly on the blog page, formatted as `"MMM dd, yyyy"`.

#### Final Code

Here’s the corrected code:

```jsx
import { format } from "date-fns";

{
  blog.updatedAt === blog.date
    ? `Published on ${format(new Date(blog.date), "MMM dd, yyyy")}`
    : `Updated on ${format(new Date(blog.updatedAt), "MMM dd, yyyy")}`;
}
```

By importing `format` as a named export, I resolved the error and successfully formatted the dates.
