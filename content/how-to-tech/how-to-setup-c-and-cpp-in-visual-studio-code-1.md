---
title: How to setup C/C++ in Visual Studio Code?
slug: how to setup c and cpp in visual studio code
postdate: September 25, 2023
description: Learn how to set up MinGW compiler and run C/C++ programs step-by-step.
tags:
  - how to
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/c-code-working-in-vscode.webp
weight: 372
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
Are you trying to learn C and C++ programming using Visual Studio Code, or are you experiencing issues during the installation process? 

In this guide, we will walk you through the step-by-step process of installing the MinGW compiler and running C and C++ programs in Visual Studio Code.

{{< table-of-contents >}}

## **Here are the steps on how to set up C/C++ in Visual Studio Code:**

### **1/ Download MinGW**

The first step in setting up your C/C++ development environment is to download the MinGW (Minimalist GNU for Windows) compiler. 

MinGW is a collection of free and open-source compilers for C and C++ languages.

1. Go to the MinGW download page at <https://sourceforge.net/projects/mingw/>.
2. Download the MinGW installation executable.

![download mingw form sourceforge site](/images/mingw-download-from-site.webp "download mingw form sourceforge site")

### **2/ Install MinGW**

After downloading the MinGW installer, follow these steps to install it:

1. Run the MinGW installer executable.
2. The setup screen will appear. Click on the “Install” button.
   ![mingw setup screen ](/images/mingw-install-one.webp "mingw setup screen ")
3. On the next setup screen, select the path (e.g., C:\MinGW) where you want to install MinGW, and then click “Continue.”
   ![mingw setup screen path and continue](/images/mingw-install-click-continue-two.webp "mingw setup screen path and continue")
4. The installation process will begin. Wait for it to complete, and then click “Continue.”

![mingw installation process](/images/installation-process-complete-three.webp "mingw installation process")

### **3/ Configure MinGW Installation**

Now that MinGW is installed, let's configure it for C/C++ development:

1. The MinGW Installation Manager will appear. Mark the checkboxes for “mingw32-base” and “mingw32-gcc-g++” for installation.

   ![mingw installation manager one](/images/mark-for-install-base-and-gcc.webp "mingw installation manager one")

   ![mark mingw32 base and gcc](/images/mark-for-install-mingw-six.webp "mark mingw32 base and gcc")
2. Click on the “Install” option in the menu and then select “Apply Changes.”

   ![click on install and apply changes](/images/click-on-install-and-apply-changes.webp "click on install and apply changes")

   ![click apply again to proceed](/images/click-apply-after-install-apply.webp "click apply again to proceed")
3. The installation process for the selected compilers will begin.

   ![installation process for the selected compilers](/images/installation-process-for-selected-compiler-seven.webp "installation process for the selected compilers")

### **4/ Complete the Installation**

After the installation of the selected packages is finished, follow these steps:

1. Click “Close” to exit the MinGW Installation Manager.

   ![close after installation](/images/close-install-eight.webp "close after installation")

   ![click on close button again](/images/click-on-close-nine.webp "click on close button again")
2. Open the folder where MinGW is installed and locate the “bin” folder.

   ![open the mingw folder in windows](/images/open-mingw-folder-in-c-drive-five.webp "open the mingw folder in windows")

   ![open the bin folder in the mingw folder](/images/open-bin-folder-ten.webp "open the bin folder in the mingw folder")

   ![copy file path for bin](/images/click-on-path-and-copy-bin.webp "copy file path for bin")
3. Copy the file path for the “bin” folder.

### **5/ Configure Environment Variables**

To ensure that Visual Studio Code can access MinGW, you need to add the MinGW “bin” folder to your system's PATH environment variable:

1. In the Windows search bar, type “environment” and then click on “Edit the system environment variables.”

   ![click on environment variable](/images/type-environment-eleven-plus.webp "click on environment variable")

   ![click on edit environment variable](/images/click-on-edit-system-environment-variables-eleven.webp "click on edit environment variable")
2. In the System Properties window, click on the “Environment Variables” button.

   ![click on environment variable button on the system properties](/images/click-on-env-variable-twelve.webp "click on environment variable button on the system properties")
3. In the Environment Variables window, locate the “Path” section, and click “Edit.”
   ![click on path](/images/click-on-path-on-environ-var-13.webp "click on path")
4. Click on “New” to add a new entry, and paste the file path for the “bin” folder you copied earlier.

   ![click on new and add the file path](/images/add-bin-path-14.webp "click on new and add the file path")
5. Click “OK” to save the changes.
   ![click ok after adding the file path](/images/click-on-ok-after-bin-path-add.webp "click ok after adding the file path")

### **6/ Verify MinGW Installation**

To verify that MinGW is correctly installed and configured, follow these steps:

1. Open PowerShell or Command Prompt.
2. Type the following command and press Enter:

   ```powershell
   gcc --version
   ```

      This command will display the installed GCC version.
   ![type gcc version to check if mingw is installed correctly](/images/type-gcc-version-in-cmd-15.webp "type gcc version to check if mingw is installed correctly")

### **7/ Create a C/C++ File in Visual Studio Code**

Now that you have set up MinGW and configured your environment, it's time to create your first C/C++ program in Visual Studio Code:

1. Open Visual Studio Code.
2. Create a new “C” file and add a simple “Hello, World!” code.

   ![create c file and install code runner extension](/images/code-runner-extension.webp "create c file and install code runner extension")

### **8/ Install the Code Runner Extension**

For an even smoother coding experience, consider installing the “Code Runner” extension in Visual Studio Code:

1. Go to the Visual Studio Code extensions marketplace.
2. Search for “Code Runner” and click “Install.”
3. After successful installation, open your C file and click on the “Run” button above it.

![code runner installed](/images/code-runner-installed-.webp "code runner installed")

![run the code](/images/c-code-working-in-vscode.webp "run the code")

### **Troubleshooting :warning:**

If you encounter any issues while running your code and the output is not as expected, you can use the terminal within Visual Studio Code:

1. In the terminal, type the following command, replacing `<file-name-with-extension>` and `<file-name-without-extension>` with your file names:

   ```powershell
   gcc <file-name-with-extension> -o <file-name-without-extension>
   ```
2. Click enter then, type this and then click enter again:

   ```powershell
   ./<file-name-without-extension>
   ```

**Here's an example:**

```powershell
gcc app.c -o app
./app
```

![if the ouput keeps running with no output](/images/gcc-file-name-if-code-runner-not-work.webp "if the ouput keeps running with no output")

### Here is an Installation Video for More Guide:

{{< youtube 77v-Poud_io C and cpp setup with vscode >}}