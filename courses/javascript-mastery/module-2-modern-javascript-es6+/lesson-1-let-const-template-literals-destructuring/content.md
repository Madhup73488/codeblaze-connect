### `let` and `const` (Revisited for ES6 Context)
*   Already covered in Lesson 1.1, but emphasize their role as foundational improvements in ES6 for managing variables and avoiding common `var` pitfalls (hoisting, accidental re-declaration).
*   **Block Scoping:** Highlight how `let` and `const` confine variables to the nearest curly braces `{}`.

### Template Literals (Template Strings)
*   A much easier way to create multi-line strings and embed expressions (variables or calculations) within strings. Uses backticks (`` ` ``) instead of single or double quotes.
*   **Syntax:** `` `text ${expression} more text` ``
    ```javascript
    const name = "Alice";
    const age = 30;

    // Traditional way (string concatenation)
    const oldGreeting = "Hello, " + name + "! You are " + age + " years old.";
    console.log(oldGreeting);

    // Modern way (template literal)
    const newGreeting = `Hello, ${name}! You are ${age} years old.`;
    console.log(newGreeting);

    // Multi-line strings
    const multiLine = `
      This is a string
      that spans
      multiple lines.
      It's very convenient!
    `;
    console.log(multiLine);

    // Expressions inside
    const product = "Laptop";
    const price = 1200;
    const taxRate = 0.08;
    const finalPrice = `The ${product} costs $${price} and with tax (${taxRate * 100}%), the total is $${price * (1 + taxRate)}.`;
    console.log(finalPrice);
    ```

### Destructuring Assignment (Array & Object)
*   A powerful feature that allows you to "unpack" values from arrays or properties from objects into distinct variables. Makes code more readable and concise.
*   **Array Destructuring:**
    *   Assign elements of an array to variables based on their position.
        ```javascript
        const colors = ["red", "green", "blue"];
        const [firstColor, secondColor, thirdColor] = colors; // Unpack by position
        console.log(firstColor);  // "red"
        console.log(secondColor); // "green"

        // Skipping elements
        const [,, skipColor] = colors;
        console.log(skipColor); // "blue"

        // Rest element
        const [c1, ...restColors] = colors;
        console.log(c1);        // "red"
        console.log(restColors); // ["green", "blue"]
        ```
*   **Object Destructuring:**
    *   Assign properties of an object to variables using the property names.
        ```javascript
        const person = {
          firstName: "John",
          lastName: "Doe",
          age: 30,
          city: "New York"
        };

        // Unpack by property name
        const { firstName, age } = person;
        console.log(firstName); // "John"
        console.log(age);       // 30

        // Renaming variables during destructuring
        const { firstName: fName, lastName: lName } = person;
        console.log(fName); // "John"
        console.log(lName); // "Doe"

        // Default values
        const { job = "Unemployed" } = person; // 'job' property doesn't exist
        console.log(job); // "Unemployed" (default value)

        // Nested destructuring
        const user = {
          id: 1,
          info: { email: "user@example.com", phone: "123-456-7890" }
        };
        const { id, info: { email } } = user;
        console.log(id);    // 1
        console.log(email); // "user@example.com"
        ```

### Exercise: User Profile Display
1.  Create an object named `userProfile` with properties: `name`, `email`, `age`, `city`, and `interests` (an array of strings).
2.  Use object destructuring to extract `name` and `email` into separate variables.
3.  Use array destructuring to get the first two interests from the `interests` array.
4.  Create a multi-line string using a template literal that displays the user's name, email, age, and their first two interests.
5.  Log the resulting string to the console.

### Helpful Links:
*   [MDN Web Docs: Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
*   [MDN Web Docs: Destructuring assignment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
*   [ES6 Features (freeCodeCamp)](https://www.freecodecamp.org/news/es6-javascript-features-you-should-know/)
