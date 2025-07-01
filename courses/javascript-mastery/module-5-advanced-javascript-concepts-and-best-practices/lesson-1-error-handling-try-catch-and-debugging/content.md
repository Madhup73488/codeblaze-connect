### Introduction to Error Handling
*   Errors are inevitable in programming. Effective error handling makes your applications more robust, prevents crashes, and provides better user experience.
*   JavaScript uses exceptions to signal errors.

### `try...catch` Statement
*   Allows you to "try" a block of code and "catch" any errors that occur within it.
*   `try` block: Contains the code that might throw an error.
*   `catch` block: Contains code to execute if an error occurs in the `try` block. It receives the `Error` object as an argument.
*   `finally` block (optional): Contains code that will always execute, regardless of whether an error occurred or was caught. Useful for cleanup.
    ```javascript
    function divide(a, b) {
      if (b === 0) {
        throw new Error("Cannot divide by zero!"); // Throw a custom error
      }
      return a / b;
    }

    try {
      console.log(divide(10, 2));   // Output: 5
      console.log(divide(10, 0));   // This will throw an error
      console.log("This line will not run if an error occurs above.");
    } catch (error) {
      console.error("An error occurred:", error.message); // Output: An error occurred: Cannot divide by zero!
    } finally {
      console.log("Division attempt finished.");
    }

    console.log("Program continues after try...catch block.");

    // Handling non-existent variables (ReferenceError)
    try {
      console.log(nonExistentVar);
    } catch (error) {
      console.error("Caught a ReferenceError:", error.name); // Caught a ReferenceError: ReferenceError
    }
    ```

### The Error Object
*   When an error occurs, JavaScript creates an `Error` object.
*   `error.name`: The type of error (e.g., `ReferenceError`, `TypeError`, `SyntaxError`, `RangeError`).
*   `error.message`: A human-readable description of the error.
*   `error.stack`: (Browser-specific) A stack trace, showing where the error occurred in the code.

### `throw` Statement
*   Allows you to create and throw your own custom errors or exceptions.
*   You can throw any value (string, number, object), but it's best practice to throw an `Error` object or a custom error class.
    ```javascript
    function validateAge(age) {
      if (age < 0 || age > 120) {
        throw new RangeError("Age must be between 0 and 120.");
      }
      console.log("Age is valid.");
    }

    try {
      validateAge(150);
    } catch (error) {
      console.error("Validation error:", error.name, error.message);
    }
    ```

### Debugging with Browser Developer Tools
*   **Console (`console.log`, `warn`, `error`, `table`):** Your first line of defense for logging variable values and messages.
*   **Sources Panel:**
    *   **Breakpoints:** Pause code execution at specific lines.
    *   **Step Over, Step Into, Step Out:** Control execution flow line-by-line.
    *   **Watch:** Monitor variable values in real-time.
    *   **Scope:** Inspect variables in current and parent scopes.
    *   **Call Stack:** See the sequence of function calls that led to the current point.
*   **Network Panel:** Inspect HTTP requests and responses (useful for Fetch API debugging).
*   **Elements Panel:** Inspect and modify HTML/CSS (useful for DOM manipulation debugging).
*   **Tips:**
    *   Use `debugger;` statement in your code to automatically pause execution at that point if dev tools are open.
    *   Comment out suspicious code blocks to isolate issues.
    *   Simplify the problem: remove non-essential parts until the error source is clear.

### Exercise: Robust Data Processing
1.  Create a function `processUserData(dataString)` that attempts to parse `dataString` as JSON.
2.  Use a `try...catch` block around `JSON.parse(dataString)`.
3.  If parsing is successful, log the parsed object.
4.  If `JSON.parse()` throws an error (e.g., if `dataString` is not valid JSON), catch the error and log a user-friendly message like "Invalid data format provided."
5.  Add a `finally` block that always logs "Data processing attempt complete."
6.  Test `processUserData()` with:
    *   `'{"name": "Alice", "age": 30}'` (valid JSON)
    *   `'{"name": "Bob", age: 25}'` (invalid JSON - missing quotes around age)
    *   `'Hello World'` (not JSON)
7.  **Bonus:** Open your developer tools, set a breakpoint in the `catch` block, and observe the `Error` object when invalid data is provided.

### Helpful Links:
*   [MDN Web Docs: try...catch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
*   [Google Chrome DevTools Documentation](https://developer.chrome.com/docs/devtools/)
*   [Debugging JavaScript (MDN)](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Debugging_JavaScript)
