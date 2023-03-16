---
title: How to Use Google Sheets as Database for Storing Emails From a Newsletter
slug: How to Use Google Sheets as Database for Storing Emails From a Newsletter
postdate: March 14, 2023
description: How to Use Google Sheets as Database for Storing Emails From a Newsletter
categorylabel: Tech Stuff
categories: '["How-to-tech"]'
image: /images/imgph.webp
weight: 106
categorylink: /categories/how-to-tech
type: posts
author: Mohammad Jamiu
draft: true
mathjax: false
Google_Ads: true
---
In this post we are going to explore how to get or build an email list from a website email newletter and then automatically store the emails on a google sheet.

It's great because it cost less and all the emails are store on a sheet which can be exported to other platforms like mailchimp.

Here are the steps to take.

Here is an already made design you can copy to test it out and then modify to suit your need.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Its Abstractive</title>
    <script type="module" src="js/script.js"></script>

    <style> <!-- Styles applied to the design -->
      body {
        margin: 2rem;
     }
      form {
        background-color: dodgerblue;
        width: 400px;
        height: 200px;
        border-radius: 5px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

      form input {
        width: 100%;
        height: 50px;
        outline: 0;
        border: 0;
        border-radius: 5px;
        padding: 5px;
        margin-bottom: 8px;
        font-size: 16px;
      }

      form button {
        background-color: dodgerblue;
        width: 100%;
        border: 2px solid #fff;
        outline: 0;
        border-radius: 5px;
        padding: 10px;
        font-size: 16px;
        cursor: pointer;
        color: #fff;
      }
    </style>
  </head>
  <body>
    <h1>Connect Your Newsletter to Google Sheet</h1>

    <!-- Here is the form -->
    <form>
      <input
        type="email"
        name="Email"
        placeholder="Enter Your Email...."
        required
      />
      <button type="button">Submit</button>
    </form>
  </body>
</html>

```

From the code above, there is an HTML form which is used to create the input field and the button for the email.

```html
<!-- Here is the form -->
    <form>
      <input
        type="email"
        name="Email"
        placeholder="Enter Your Email...."
        required
      />
      <button type="button">Submit</button>
    </form>
```

As you can see, the form tag is used to wrap the input element and the button element

The input element also has some attributes. The `type` attribute to define what type of input it is.

The `name` attribute, which is one of the most important attribute that will be used when activating the form with Google sheet, is used to give the input a name.

Lastly, the `placeholder` (for telling the user what to type in) and the `required` attribute (for making it mandatory for the user to type in the email if they want to send. 

Here's also the styling for the form tag

```css
body {
        margin: 2rem;
     }
      form {
        background-color: dodgerblue;
        width: 400px;
        height: 200px;
        border-radius: 5px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

      form input {
        width: 100%;
        height: 50px;
        outline: 0;
        border: 0;
        border-radius: 5px;
        padding: 5px;
        margin-bottom: 8px;
        font-size: 16px;
      }

      form button {
        background-color: dodgerblue;
        width: 100%;
        border: 2px solid #fff;
        outline: 0;
        border-radius: 5px;
        padding: 10px;
        font-size: 16px;
        cursor: pointer;
        color: #fff;
      }
```

You need to go to google sheet and create a new sheet

If you have not login - make sure to login







After deleting the function in the appscript, patse the code into it

```javascript
var sheetName = 'Sheet1'
var scriptProp = PropertiesService.getScriptProperties()

function intialSetup () {
  var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  scriptProp.setProperty('key', activeSpreadsheet.getId())
}

function doPost (e) {
  var lock = LockService.getScriptLock()
  lock.tryLock(10000)

  try {
    var doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
    var sheet = doc.getSheetByName(sheetName)

    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
    var nextRow = sheet.getLastRow() + 1

    var newRow = headers.map(function(header) {
      return header === 'timestamp' ? new Date() : e.parameter[header]
    })

    sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  catch (e) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
      .setMimeType(ContentService.MimeType.JSON)
  }

  finally {
    lock.releaseLock()
  }
}
```









```html
<script>
  const scriptURL = '<SCRIPT URL>'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
</script>
```

Set `'<SCRIPT URL>'` to be the security code `'https://script.google.com/macros/s/AKfycbwIwzHXJIRkYcjrU17LxrR0JdGbU-Zxf8kcaK_i2mIoRIviLDycU8HBTgEPWHp4HmtH/exec'`

```html
<script>
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwIwzHXJIRkYcjrU17LxrR0JdGbU-Zxf8kcaK_i2mIoRIviLDycU8HBTgEPWHp4HmtH/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })
</script>
```

From the code above, you will see `const form = document.forms['submit-to-google-sheet']` copy `submit-to-google-sheet`, this will be the name of the form i.e., `<form name="submit-to-google-sheet"> ..... </form>` now the form looks like this -

```html
   <form name="submit-to-google-sheet">
      <input
        type="email"
        name="Email"
        placeholder="Enter Your Email...."
        required
      />
      <button type="button">Submit</button>
    </form>
```