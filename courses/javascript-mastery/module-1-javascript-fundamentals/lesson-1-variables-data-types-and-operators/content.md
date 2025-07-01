### What is JavaScript?
*   JavaScript is a versatile, high-level, interpreted programming language primarily used to make web pages interactive. It runs directly in the browser (client-side) and also on servers (Node.js).
*   It's the "brain" of your website, enabling dynamic content, interactive forms, animations, and much more.

### How to Include JavaScript in HTML
*   **Inline JavaScript (using `<script>` tag in body or head):** For small snippets or quick tests. Not recommended for larger scripts.
    ```html
    <!DOCTYPE html>
    <html>
    <head>
      <title>Inline JS</title>
    </head>
    <body>
      <button onclick="alert('Hello from inline JS!');">Click Me</button>

      <script>
        console.log("This is inline JavaScript in the body.");
      </script>
    </body>
    </html>
    ```
*   **External JavaScript (recommended):** Linking a separate `.js` file to your HTML using the `<script>` tag's `src` attribute. This keeps your HTML clean and allows caching of the script file.
    *   **index.html:**
        ```html
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>External JS</title>
        </head>
        <body>
          <h1>External JavaScript Demo</h1>
          <button id="myButton">Click Me</button>

          <!-- Link to external JS file -->
          <script src="script.js"></script>
          <!-- It's generally a best practice to place script tags at the end of the body
               or use 'defer'/'async' to avoid blocking HTML parsing. -->
        </body>
        </html>
        ```
    *   **script.js:**
        ```javascript
        // script.js
        console.log("Hello from external JavaScript!");

        document.getElementById('myButton').addEventListener('click', function() {
          alert('Button clicked from external JS!');
        });
        ```
*   **`defer` and `async` attributes:**
    *   `defer`: Script is downloaded in parallel to HTML parsing, and executed after HTML parsing is complete. Ensures the DOM is ready.
    *   `async`: Script is downloaded in parallel to HTML parsing, and executed as soon as it's downloaded, potentially before HTML parsing is complete. Use for independent scripts.
    ```html
    <script src="script-defer.js" defer></script>
    <script src="script-async.js" async></script>
    ```

### Variables (`var`, `let`, `const`)
*   **`var` (Legacy):** Function-scoped, can be re-declared and re-assigned. Has hoisting issues.
    ```javascript
    var oldVar = "I am old style";
    var oldVar = "I can be re-declared"; // No error
    oldVar = "I can be re-assigned";
    console.log(oldVar); // "I can be re-assigned"
    ```
*   **`let` (Modern):** Block-scoped, can be re-assigned but not re-declared in the same scope. Preferred for variables that might change.
    ```javascript
    let modernVar = "I am modern";
    // let modernVar = "Cannot re-declare"; // SyntaxError: 'modernVar' has already been declared
    modernVar = "I can be re-assigned";
    console.log(modernVar); // "I can be re-assigned"
    ```
*   **`const` (Modern):** Block-scoped, cannot be re-assigned or re-declared. Must be initialized upon declaration. Preferred for variables whose value should not change.
    ```javascript
    const fixedVar = "I am fixed";
    // fixedVar = "Cannot re-assign"; // TypeError: Assignment to constant variable.
    // const fixedVar = "Cannot re-declare"; // SyntaxError: 'fixedVar' has already been declared
    console.log(fixedVar); // "I am fixed"

    // Important: const for objects/arrays means the *reference* is constant, not the content.
    const myObject = { name: "Alice" };
    myObject.name = "Bob"; // This is allowed!
    console.log(myObject); // { name: "Bob" }
    // myObject = { age: 30 }; // This is NOT allowed
    ```

### Data Types
*   **Primitive Data Types (Value types):** Hold a single value.
    *   `string`: Textual data (e.g., `"Hello World"`, `'JS Course'`).
    *   `number`: Integers and floating-point numbers (e.g., `10`, `3.14`).
    *   `boolean`: Logical value (`true` or `false`).
    *   `undefined`: A variable that has been declared but not yet assigned a value.
    *   `null`: Intentional absence of any object value.
    *   `symbol` (ES6): Unique and immutable values (advanced).
    *   `bigint` (ES2020): For very large integer numbers (advanced).
*   **Non-Primitive (Reference type):** Can hold collections of values or more complex entities.
    *   `object`: A collection of key-value pairs (e.g., `{ name: "John", age: 30 }`).
    *   `array`: An ordered list of values (e.g., `[1, 2, 3]`, `["apple", "banana"]`).
    *   `function`: Executable blocks of code.
    ```javascript
    // Primitives
    let message = "Hello";        // string
    let age = 30;                 // number
    let isStudent = true;         // boolean
    let score;                    // undefined
    let emptyValue = null;        // null

    // Non-primitives
    let person = {                // object
      firstName: "Jane",
      lastName: "Doe"
    };
    let fruits = ["apple", "banana", "cherry"]; // array

    console.log(typeof message);    // "string"
    console.log(typeof age);        // "number"
    console.log(typeof person);     // "object"
    console.log(typeof fruits);     // "object" (arrays are a type of object in JS)
    ```

### Operators
*   **Arithmetic Operators:** `+`, `-`, `*`, `/`, `%` (modulo), `**` (exponentiation).
*   **Assignment Operators:** `=`, `+=`, `-=`, `*=`, `/=`.
*   **Comparison Operators:** `==` (loose equality), `===` (strict equality - preferred), `!=`, `!==`, `>`, `<`, `>=`, `<=`.
    *   **Loose vs. Strict Equality:**
        *   `==` performs type coercion (tries to convert types before comparing). `5 == '5'` is `true`.
        *   `===` compares both value and type without coercion. `5 === '5'` is `false`.
*   **Logical Operators:** `&&` (AND), `||` (OR), `!` (NOT).
*   **Unary Operators:** `++` (increment), `--` (decrement), `typeof`.
*   **Ternary Operator:** `condition ? valueIfTrue : valueIfFalse;` (Shorthand for if-else).
    ```javascript
    let a = 10, b = 5;
    console.log(a + b);      // 15
    console.log(a === '10'); // false (strict comparison)
    console.log(a == '10');  // true (loose comparison)
    console.log(a > 0 && b < 10); // true (AND)

    let isAdult = (age >= 18) ? "Yes" : "No"; // Ternary
    ```

### Console Logging (`console.log()`)
*   The primary way to output information for debugging in the browser's developer console.
*   `console.warn()`, `console.error()`, `console.info()`, `console.table()`.
    ```javascript
    console.log("This is a log message.");
    console.warn("This is a warning!");
    console.error("This is an error!");
    console.table([{name: "Alice", age: 30}, {name: "Bob", age: 25}]);
    ```

### Exercise: Basic Calculations and Variable Play
1.  Create an HTML file and link an external `app.js` file.
2.  In `app.js`, declare two `const` variables, `price1` and `price2`, with numerical values.
3.  Declare a `let` variable `totalCost`.
4.  Calculate `totalCost` by adding `price1` and `price2`.
5.  Declare a `const` variable `discountPercentage` (e.g., `0.15` for 15%).
6.  Calculate `finalPrice` by applying the discount to `totalCost`.
7.  Use `console.log()` to display `totalCost` and `finalPrice`.
8.  Use a ternary operator to create a `message` variable: if `finalPrice` is less than 50, set `message` to "Great deal!", otherwise "Consider your budget.". Log the `message`.
9.  Open your HTML file in the browser and check the console.

### Helpful Links:
*   [MDN Web Docs: JavaScript Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics)
*   [W3Schools: JavaScript Variables](https://www.w3schools.com/js/js_variables.asp)
*   [JavaScript Data Types (tutorialspoint)](https://www.tutorialspoint.com/javascript/javascript_data_types.htm)
*   [JavaScript Operators (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)
