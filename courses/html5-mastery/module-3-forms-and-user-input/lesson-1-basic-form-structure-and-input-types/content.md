### Introduction to Forms (`<form>`)

HTML forms are used to collect user input. This input can then be sent to a server for processing (e.g., login details, search queries, contact messages).

The `<form>` element acts as a container for all form elements.

**Key attributes of `<form>`:**
*   `action`: Specifies the URL where the form data will be sent when submitted.
*   `method`: Specifies the HTTP method to use when sending data.
    *   `GET` (default): Appends form data to the URL as query parameters (visible in URL, good for non-sensitive data like search).
    *   `POST`: Sends form data as part of the HTTP request body (not visible in URL, good for sensitive data like passwords, or large amounts of data).

**Detailed Example: Simple Contact Form Structure**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Basic Form</title>
    <style>
        form { margin: 20px; padding: 20px; border: 1px solid #ccc; border-radius: 8px; max-width: 500px; }
        label { display: block; margin-bottom: 5px; font-weight: bold; }
        input[type="text"], input[type="email"], textarea {
            width: calc(100% - 12px); /* Account for padding */
            padding: 8px;
            margin-bottom: 15px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
        input[type="submit"] {
            background-color: #4CAF50;
            color: white;
            padding: 10px 15px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 1em;
        }
        input[type="submit"]:hover { background-color: #45a049; }
    </style>
</head>
<body>
    <h1>Contact Us</h1>
    <form action="/submit-contact" method="POST">
        <label for="name">Your Name:</label>
        <input type="text" id="name" name="user_name" required>

        <label for="email">Your Email:</label>
        <input type="email" id="email" name="user_email" required>

        <label for="message">Message:</label>
        <textarea id="message" name="user_message" rows="5"></textarea>

        <input type="submit" value="Send Message">
    </form>
</body>
</html>
```
**Explanation:** The `<form>` tag defines the area. `label` tags improve accessibility by linking text to inputs using `for` and `id` attributes. `name` attributes are crucial as they are used to identify the data when it's sent to the server.

### Input Types (`<input type="...">`)

The `<input>` element is the most versatile form element, with different behaviors based on its `type` attribute.

*   `text`: Single-line text input (default).
*   `password`: Text input, but characters are masked.
*   `email`: For email addresses. Browsers can validate format.
*   `number`: For numerical input. Browsers may provide spin buttons.
*   `date`: Date picker.
*   `checkbox`: Allows multiple selections.
*   `radio`: Allows only one selection from a group (use same `name` attribute for group).
*   `submit`: A button that submits the form.
*   `reset`: A button that resets the form fields to their initial values.
*   `button`: A generic button (requires JavaScript for functionality).
*   `hidden`: An input not visible to the user, used to send data programmatically.

**Detailed Example: Various Input Types**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Input Types</title>
    <style>
        form { margin: 20px; padding: 20px; border: 1px solid #ccc; border-radius: 8px; max-width: 500px; }
        div { margin-bottom: 15px; }
        label { display: block; margin-bottom: 5px; font-weight: bold; }
        input[type="text"], input[type="password"], input[type="email"], input[type="number"], input[type="date"] {
            width: calc(100% - 12px); padding: 8px; border: 1px solid #ddd; border-radius: 4px;
        }
        .radio-group label, .checkbox-group label {
            display: inline-block; margin-right: 15px; font-weight: normal;
        }
    </style>
</head>
<body>
    <form action="#" method="get">
        <div>
            <label for="username">Username:</label>
            <input type="text" id="username" name="username">
        </div>
        <div>
            <label for="pwd">Password:</label>
            <input type="password" id="pwd" name="password">
        </div>
        <div>
            <label for="age">Age:</label>
            <input type="number" id="age" name="age" min="18" max="99">
        </div>
        <div>
            <label for="event-date">Event Date:</label>
            <input type="date" id="event-date" name="event_date">
        </div>
        <div class="radio-group">
            <p>Select your gender:</p>
            <input type="radio" id="male" name="gender" value="male">
            <label for="male">Male</label>
            <input type="radio" id="female" name="gender" value="female">
            <label for="female">Female</label>
        </div>
        <div class="checkbox-group">
            <p>Select your interests:</p>
            <input type="checkbox" id="coding" name="interest" value="coding">
            <label for="coding">Coding</label>
            <input type="checkbox" id="reading" name="interest" value="reading">
            <label for="reading">Reading</label>
        </div>
        <input type="submit" value="Register">
        <input type="reset" value="Clear Form">
    </form>
</body>
</html>
```

### Text Areas (`<textarea>`)

Used for multi-line text input.

**Attributes:** `rows`, `cols` (for initial size hints).

**Detailed Example:** (Included in the first form example)

### Labels (`<label>`)

The `<label>` element defines a label for an `<input>` element.

**Accessibility:** Clicking on the label text will focus the associated input field, improving usability for users with motor difficulties and for screen reader users.

**Linking:** The `for` attribute of the `<label>` must match the `id` attribute of the `<input>` for the association to work.

**Detailed Example:** (Included in previous form examples)

### Exercise: Create a User Registration Form

1.  Create an HTML file `register.html`.
2.  Create a `<form>` with appropriate `action` and `method` attributes (e.g., `#` and `POST`).
3.  Include fields for:
    *   Full Name (text input)
    *   Email Address (email input, `required`)
    *   Password (password input, `required`)
    *   Confirm Password (password input, `required`)
    *   Age (number input, `min="18"`)
    *   Date of Birth (date input)
    *   Gender (radio buttons for "Male", "Female", "Other")
    *   Newsletter Subscription (checkbox)
    *   A "Submit" button.
4.  Ensure all inputs have associated `<label>` tags with `for` attributes.

### Helpful Links:

*   [MDN Web Docs: HTML Forms Guide](https://developer.mozilla.org/en-US/docs/Learn/Forms)
*   [W3Schools HTML Forms](https://www.w3schools.com/html/html_forms.asp)
