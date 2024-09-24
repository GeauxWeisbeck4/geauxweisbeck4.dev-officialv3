---
title: "Forms"
description: "Creating forms, tools for collecting data, and new HTML5 form controls."
pubDate: 2024-09-15
category: "Web Development/HTML"
tags: ["html", "web development", "accessibility", "forms"]
---

## Why Forms?

- The best known example of a form is the search box that sits right in the middle of Google's homepage

Forms allow users to:
- Search keywords, terms, etc.
- Register members to a website
- Signup users for email newsletter lists

## Form Controls

There are several form controls that you can use to collect information from visitors to your site.

### Adding Text

- **Text input (single line):** Used for a single line of text such as email addresses and names.
- **Password input:** Like a single line text box but it masks the characters entered
- **Text Area:** For longer areas of text, such as messages and comments

### Making Choices

- **Radio buttons:** For use when a user must select one of a number of options
- **Checkboxes:** When a use rcan select and unselect one or more options
- **Drop-down boxes:** When a user must pick one of a number of options from a list

### Submitting Forms

- **Submit buttons:** Submit data from your form to another web page.
- ** Image buttons:** Similar to submit buttons but they allow you to use an image

### Uploading Files

- **File upload:** ALlows uers to upload files (e.g. images) to a website

## How Forms Work

1. User fills in a form and then presses a button to submit the info to the server.

2. Name of each form control is sent to the server along with the value the user enters or selects

3. Server processes the info using a programming language such as PHP, C#, VB.net, or Java. It may also store the info in a database.

4. Server creates a new page to send back to the browser based on the info. received.

## Form Structure

### <form>

- Form controls live inside a <form> element. THis element should always carry the action attribute and will usualy have a method and id attribute too.

### action

- Every <form> element requires an action attribute. Its value is the URL for the page on the server that will redeive the information in the form when it is submitte

### method

- Forms can be sent using one of two methods: get or post

1. **get** - values from the form are added to the end of the URL specified in the action attribute
    - short forms (such as search boxes)
    - when you are just retrieving data from the web server (not sending information that should be added to or deleted from a database)

2. With the post method the values are sent in what are known as HTTP headers. As rule of thumb you should use th epost method in your form:

    - allows users to upload a file
    - is very long
    - contains sensitive data (e.g. passwords)
    - adds info to, or deletes info from, a database

- if no method attribute is used, the form data will be sent using the get method

### id

- The value is used to identify the form distinctly from other elements on the page (often used by scripts - such as those that check you have entered info into fields that require values)

### size

- Attribute should not be used on new forms. It was use din older forms to indicate the width of the text input

## <input>

- The <input> element is used to create several different form controls. The alue of the type attribute determines what kind of input they will be creating.

### type="text"

- When the type attribute has a value of text, it creates a single-line text input

### name

- when users enter info into a form, the server needs to know which form control each piece of data was entered into. (For example, in a login form, the serve rneeds to know what has been entered as the username and what has been given as the password). Each form control requires a name attribute. The value of this attribute identifies the form control and is sent along with the info they enter to the server.

### maxlength

- Use the maxlength attribute to limit th enumber of characters a user may enter into the text field.
