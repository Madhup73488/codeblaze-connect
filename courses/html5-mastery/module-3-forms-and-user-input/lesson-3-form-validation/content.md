### Client-Side Validation (HTML5 Built-in)

HTML5 provides built-in validation features that run in the browser before the form is submitted to the server. This provides immediate feedback to the user and reduces server load.

*   **`required` attribute:** Makes a field mandatory. The form cannot be submitted if this field is empty.
*   **`minlength`, `maxlength` attributes:** Specify the minimum and maximum number of characters allowed for text-based inputs.
*   **`min`, `max` attributes:** Specify the minimum and maximum values for numerical or date inputs.
*   **`pattern` attribute:** Takes a regular expression (RegEx) that the input's value must match. If it doesn't match, the input is invalid.
*   **`type` attribute (for `email`, `url`, `number`):** Browsers automatically apply basic validation rules for these types.
*   **`title` attribute (for custom validation messages):** Can be used with `pattern` to provide a helpful hint to the user when the input is invalid.
*   **`novalidate` attribute (on `<form>`):** Disables all client-side validation for the form.

**Detailed Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HTML5 Form Validation</title>
    <style>
        form { margin: 20px; padding: 20px; border: 1px solid #ccc; border-radius: 8px; max-width: 500px; }
        div { margin-bottom: 15px; }
        label { display: block; margin-bottom: 5px; font-weight: bold; }
        input:not([type="submit"]) {
            width: calc(100% - 12px); padding: 8px; border: 1px solid #ddd; border-radius: 4px;
        }
        input:invalid {
            border-color: red; /* Highlight invalid fields */
        }
        input:valid {
            border-color: green; /* Highlight valid fields */
        }
        .error-message {
            color: red;
            font-size: 0.9em;
            margin-top: 5px;
        }
    </style>
</head>
<body>
    <h1>Sign Up</h1>
    <form action="/signup" method="POST">
        <div>
            <label for="username">Username (min 5 chars):</label>
            <input type="text" id="username" name="username" required minlength="5" title="Username must be at least 5 characters long.">
        </div>
        <div>
            <label for="user-email">Email:</label>
            <input type="email" id="user-email" name="user_email" required>
        </div>
        <div>
            <label for="phone-num">Phone (XXX-XXX-XXXX):</label>
            <input type="tel" id="phone-num" name="phone_number" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" title="Format: 123-456-7890">
        </div>
        <div>
            <label for="age">Age (18-65):</label>
            <input type="number" id="age" name="user_age" required min="18" max="65">
        </div>
        <input type="submit" value="Submit Registration">
    </form>
</body>
</html>
```
**Explanation:** The browser will prevent submission and show an error if `required` fields are empty, `minlength` is not met, `type="email"` has an invalid format, or `pattern` isn't matched. The `title` attribute provides a custom message that browsers often use in their validation popups.

### User Feedback for Validation:

*   **Browser Default Messages:** Browsers provide built-in validation messages (e.g., "Please fill out this field.").
*   **CSS Pseudo-classes:** Use `:valid`, `:invalid`, `:required`, `:optional`, `:focus` to style form fields based on their validation state. (Demonstrated in the example above with `border-color`).
*   **JavaScript (Brief mention):** For more complex or customized validation feedback, you'll need JavaScript. HTML5 validation is a first line of defense.

### Server-Side Validation (Concept only):

Emphasize that client-side validation is for user experience only. **Server-side validation is always necessary** because client-side validation can be bypassed. This will be covered in later modules (Node.js/Express.js).

### Exercise: Enhance Your Registration Form with Validation

1.  Take your `register.html` file from Lesson 3.1.
2.  Add validation attributes to its fields:
    *   **Full Name:** `required`, `minlength="3"`.
    *   **Email Address:** `required`.
    *   **Password:** `required`, `minlength="8"`, `pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"` (at least one number, one lowercase, one uppercase letter, and at least 8 characters). Add a `title` attribute for the password pattern.
    *   **Confirm Password:** `required` (will need JavaScript for actual matching).
    *   **Age:** `required`, `min="18"`.
3.  Add basic CSS styles for `:valid` and `:invalid` states to visually indicate field status.
4.  Try submitting the form with invalid data to see the browser's built-in validation messages.

### Helpful Links:

*   [MDN Web Docs: Client-side form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
*   [HTML Form `pattern` attribute](https://www.w3schools.com/tags/att_input_pattern.asp)
*   [RegExr (Regular Expression Tester)](https://regexr.com/)
