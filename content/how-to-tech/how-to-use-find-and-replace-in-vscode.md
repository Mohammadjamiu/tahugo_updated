---
title: How to Use Find and Replace in VSCode?
slug: how to use find and replace in vscode
postdate: September 13, 2023
description: To use Find and Replace in VSCode, start by opening your file. On
  Windows/Linux, press Ctrl+F, and on macOS, use ⌘+F. These keyboard shortcuts
  will open the Find and Replace dialog box.
tags:
  - how to
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/find-and-replace-dialog-box.webp
weight: 366
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
One of the powerful features that can save you time and effort while working with text or code in VSCode is the “Find and Replace” feature. 

In this article, we will look at how to use the Find and Replace feature in VSCode.

## **Steps on How to Use Find and Replace in VSCode**

1. **Open Your File**: Begin by opening the file where you want to find and replace text.
2. **Shortcut for Find/Replace Dialog Box**: Press `Ctrl+F` (Windows/Linux). For macOS users, it's `⌘+F`.

   ![find and replace dialog box](/images/find-and-replace-dialog-box.webp "find and replace dialog box")

    \
   This keyboard shortcut will open the Find and Replace dialog box.

### **Finding Text**

Now that you've opened the Find and Replace dialog box, let's learn how to find text:

3. **Type Your Query**: In the “Find” field, enter the text you want to locate within the document.

   ![find and replace typed in queries](/images/find-and-replace-one.webp "find and replace typed in queries")
4. **Navigation**: To locate the next or previous occurrence of the text, use the keyboard shortcuts `Enter` or `↑/↓` respectively.

   ![find and replace up and down arrow](/images/using-the-down-arow-two.webp "find and replace up and down arrow")
5. **Match Case (Optional)**: If you need to find text that matches the capitalization of your query, enable the “Match case” option.\
   \
   As you can see in this image below, “lorem ipsum” is the query that is being typed in, but only the last occurrence is highlighted.

   ![match case enabled in find and replace dialog box](/images/matched-case.webp "match case enabled in find and replace dialog box")

   This is because the query, typed in, is in lowercase. But if you disable the “match case” option, it will highlight every line with “lorem ipsum” irrespective of the case.

   ![match case disabled](/images/matched-case-disabled.webp "match case disabled")
6. **Whole Words (Optional)**: To find only whole words, not parts of words, enable the “Whole words” option.

   ![match whole word in vscode](/images/match-whole-word-vscode.webp "match whole word in vscode")
7. **Regular Expressions (Advanced)**: For complex pattern matching, VSCode allows you to use regular expressions in your queries.

   ![regex in vscode find and replace box](/images/regex-vscode.webp "regex in vscode find and replace box")

   At first, to use regular expression to find specific text, you need to enable the “Regular Expression” option.\
   \
   As you can see in the image above, there are four email addresses but only two with “@gmail” are highlighted.\
   \
   This is because the regex pattern “`\b[A-Za-z0-9._%+-]+@gmail.com\b`” used in the find dialog box will only look for emails with “@gmail” in it.
8. **Find in Selection (Optional)**: If you have a specific selection within the file, you can choose to find text only within that selection.

   ![text selection option](/images/text-selection-in-find-vscode.webp "text selection option")

   As you can see in the image above, there are two sections of sentences with same text.\
   \
   The first section which is highlighted is the section we want to search for words in, regardless of if there are same words in other places in the document.

   ![grey selection color](/images/grey-selection-enabled.webp "grey selection color")

   \
   After highlighting the section, you need to enable the “selection” option and as you can see, it turns the selected section color gray.

   ![selection option enabled](/images/highlight-only-selection.webp "selection option enabled")

   The query typed in is “read” but it only selects the word “read” in the first section while ignoring the word “read” in the other section.
9. **Find in Files (Advanced)**: VSCode also offers the capability to find and replace text in all open files or within a specified folder.

   ![find in files](/images/find-in-file.webp "find in files")

   In order to search for files in the folder, you need to tap on any files or folder (so as to make sure that your cursor is not in the document area).\
   \
   And then, hold “Ctrl+F” or `⌘+F` to launch the dialog box.

### **Replacing Text**

Now, let's look at how to replace text using the Find and Replace feature:

10. **Replace Text**: In the “Replace” field, input the text you want to use as a replacement for the found text.

    ![replace in vscode](/images/replace-in-vscode.webp "replace in vscode")

    ![replace in vscode with typed query](/images/replace-first-occurence.webp "replace in vscode with typed query")
11. **Replace All Occurrences**: To replace all occurrences of the text at once, click the “Replace All” button.

    ![replace all in vscode](/images/replace-occurence-part-two.webp "replace all in vscode")
12. **Replace Next Occurrence**: To replace only the next occurrence of the text, use the “Arrow” button and then “Replace”.

## **FAQs**

1. **Can I undo a replacement if I make a mistake?** Yes, VSCode allows you to undo replacements. Simply press `Ctrl+Z` (Windows/Linux) or `⌘+Z` (macOS) to revert your changes.
2. **Is there a way to find and replace text using regular expressions?** Yes, By enabling the “Regular expressions” option, you can use regex patterns for more advanced text manipulation.
3. **Can I limit the search and replace to a specific section of my code?** Yes, you can utilize the “Find in Selection” option to restrict the operation to the current selection within your code.
4. **What should I do if I want to replace text with different variations of capitalization?** To handle variations in capitalization, enable the “Match case” option to ensure precise replacements.