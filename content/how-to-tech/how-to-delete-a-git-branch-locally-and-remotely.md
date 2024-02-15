---
title: How to Delete a Git Branch Locally and Remotely?
slug: how to delete a git branch locally and remotely
postdate: February 14, 2024
keywords:
  - how to delete a git branch locally and remotely
description: Learn how to delete a git branch locally and remotely by running
  'git branch -d <branch_name>' and 'git push <remote> --delete <branch_name>'.
tags:
  - how to
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/branch-deleted-successfully.webp
weight: 422
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
Branches in a Git repo are an amazing way to add new features to a project or fix bugs while still maintaining the main codebase.

Over time, the branches you create may become too many, so you'll want to delete some that are no longer needed. 

This could be because you just created them locally, or because they've already been merged with the main codebase.

{{< table-of-contents >}}

## **How to delete a Git branch?**

There are two main ways to delete a Git branch: deleting it locally and deleting it remotely.

### **Deleting a local Git branch:**

#### 1. Open a terminal or command prompt. 

Inside your project folder where you have Git in, open terminal or command prompt.

:bulb: Make sure you are in the root directory of your Git repository.

#### 2. List your branches. 

Use the command `git branch -a` to see all your local and remote branches. You can also use just `git branch`, but the difference is:

* `git branch -a` lists all branches, including both local and remote-tracking branches. \
  \
  Remote-tracking branches are local branches that track remote branches on other repositories. They have names that usually start with `origin/`. \
  \
  It also shows which branch is currently checked out using an asterisk (*).
* `git branch` only lists local branches, not remote-tracking branches. It also shows which branch is currently checked out using an asterisk (*).

![git branch and branch a ](/images/git-branch-and-branch-a.webp "git branch and branch a ")

#### 3. Identify the branch you want to delete. 

Write down the exact name of the branch you want to remove.

#### 4. Run the delete command. 

You have two options:

* **Safe delete:** Use `git branch -d <branch_name>`. This will only delete the branch if it has been merged into your main branch (usually named `master` or `main`).
* **Force delete:** Use `git branch -D <branch_name>`. This will delete the branch even if it hasn't been merged, but use it with caution as it cannot be undone.


![branch deleted successfully](/images/branch-deleted-successfully.webp "branch deleted successfully")

> :bulb:
>
> **Note:** If you encounter an error like "error: Cannot delete branch '<branch_name>' checked out", it means you are currently inside the branch. 

![branch cannot be deleted](/images/branch-cannot-be-deleted.webp "branch cannot be deleted")

> Switch to another branch or the main branch before deleting.

#### 5. Verify the deletion. 

Use `git branch -a` again to confirm that the branch has been deleted.

### **Deleting a remote Git branch:**

> **:warning:**
>
> Deleting a remote branch is usually not recommended unless you are certain you no longer need it and nobody else is working on it.

#### 1. Make sure you are on the branch you want to keep. 

You cannot delete the branch you are currently on.

#### 2. Run the delete command. 

Use the following command, replacing `<remote>` with the remote name (usually `origin`) and `<branch_name>` with the exact name of the branch:

```json
git push <remote> --delete <branch_name>
```



> **:bulb:**
>
> **If you get an error message saying the branch cannot be deleted,** it might not be fully merged or someone else might have already deleted it.

You can synchronize your branch list using `git fetch -p` to resolve any discrepancies.



## **FAQs**

### *1. Can I delete a Git branch if it hasn't been merged?*

Yes, you can force delete a branch using `git branch -D <branch_name>`. However, exercise caution as this action cannot be undone.

### *2. What should I do if I encounter an error while deleting a remote branch?*

If you encounter an error, such as the branch not being fully merged, try synchronizing your branch list using `git fetch -p`. 

This command helps resolve discrepancies between local and remote branches.

### *3. Is it possible to recover a deleted branch?*

Once a branch is deleted, it cannot be recovered unless you have a backup or the commits are still accessible through other means.

### *4. Why is it important to delete unnecessary branches?*

Deleting unnecessary branches helps maintain a clean and organized repository, improving collaboration and workflow efficiency.