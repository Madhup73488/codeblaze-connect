### What are Functions?
*   Functions are reusable blocks of code that perform a specific task. They allow you to organize your code, make it more modular, and avoid repetition (DRY principle: Don't Repeat Yourself).
*   Functions can take input (arguments/parameters) and can return output.

### Function Declaration (Named Function)
*   The most common way to define a function. Functions defined this way are "hoisted" (can be called before they are defined in the code).
*   **Syntax:** `function name(parameters) { code block }`
    ```javascript
    // Function declaration
    function greet(name) {
      return "Hello, " + name + "!";
    }

    console.log(greet("Alice")); // "Hello, Alice!"
    console.log(greet("Bob"));   // "Hello, Bob!"
    ```

### Function Expression (Anonymous Function)
*   Defining a function and assigning it to a variable. These are not hoisted, so you must define them before calling.
*   Often used as callback functions.
*   **Syntax:** `const name = function(parameters) { code block }`
    ```javascript
    // Function expression
    const addNumbers = function(num1, num2) {
      return num1 + num2;
    };

    console.log(addNumbers(5, 3)); // 8
    ```

### Arrow Functions (ES6)
*   A more concise syntax for writing function expressions, especially useful for short, single-line functions.
*   Do not bind their own `this` (more on this later).
*   **Syntax:** `const name = (parameters) => { code block }`
    *   Parentheses optional for single parameter.
    *   Curly braces and `return` optional for single-line return.
    ```javascript
    // Arrow function with multiple parameters and curly braces
    const multiply = (a, b) => {
      return a * b;
    };
    console.log(multiply(4, 2)); // 8

    // Arrow function with single parameter (parentheses optional) and implicit return
    const square = num => num * num;
    console.log(square(5)); // 25

    // Arrow function with no parameters
    const sayHi = () => console.log("Hi!");
    sayHi(); // Hi!
    ```

### Parameters and Arguments
*   **Parameters:** The named variables listed in the function definition (e.g., `name`, `num1`, `num2` in the examples above).
*   **Arguments:** The actual values passed to the function when it is called (e.g., "Alice", 5, 3).

### Return Values
*   The `return` statement specifies the value a function sends back to the caller.
*   If no `return` statement (or an empty `return;`) is used, the function implicitly returns `undefined`.

### Scope (Global vs. Local)
*   **Global Scope:** Variables declared outside any function or block are accessible from anywhere in the code.
*   **Local Scope (Function Scope):** Variables declared inside a function are only accessible within that function.
*   **Block Scope (with `let`/`const`):** Variables declared inside `{}` blocks (like `if` statements or `for` loops) are only accessible within that block.
    ```javascript
    let globalVar = "I am global";

    function showScope() {
      let localVar = "I am local";
      console.log(globalVar); // Accessible
      console.log(localVar);  // Accessible
      if (true) {
        let blockVar = "I am block scoped";
        console.log(blockVar); // Accessible
      }
      // console.log(blockVar); // ReferenceError: blockVar is not defined (outside block scope)
    }

    showScope();
    console.log(globalVar); // Accessible
    // console.log(localVar); // ReferenceError: localVar is not defined (outside function scope)
    ```

### Exercise: Calculator Functions
1.  Create a JavaScript file.
2.  Write a function declaration named `add` that takes two parameters, `a` and `b`, and returns their sum.
3.  Write a function expression named `subtract` that takes two parameters, `a` and `b`, and returns their difference.
4.  Write an arrow function named `divide` that takes two parameters, `a` and `b`, and returns their division. Handle the case where `b` is 0 (return an error message or `null`).
5.  Write another arrow function named `isEven` that takes one parameter `num` and returns `true` if the number is even, `false` otherwise. (Use the modulo operator `%`).
6.  Call each function with sample arguments and log their results to the console.

### Helpful Links:
*   [MDN Web Docs: Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
*   [W3Schools: JavaScript Functions](https://www.w3schools.com/js/js_functions.asp)
*   [Arrow Functions (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
*   [JavaScript Scope (freeCodeCamp)](https://www.freecodecamp.org/news/javascript-scope-tutorial/)
