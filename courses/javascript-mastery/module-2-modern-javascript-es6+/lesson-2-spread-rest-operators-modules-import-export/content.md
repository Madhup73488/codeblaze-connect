### Spread Operator (`...`)
*   Expands an iterable (like an array or string) into individual elements.
*   Expands an object into key-value pairs.
*   **Use cases:**
    *   **Copying arrays/objects (shallow copy):**
        ```javascript
        const originalArray = [1, 2, 3];
        const copyArray = [...originalArray]; // Creates a new array
        console.log(copyArray); // [1, 2, 3]

        const originalObject = { a: 1, b: 2 };
        const copyObject = { ...originalObject }; // Creates a new object
        console.log(copyObject); // { a: 1, b: 2 }
        ```
    *   **Concatenating arrays/merging objects:**
        ```javascript
        const arr1 = [1, 2];
        const arr2 = [3, 4];
        const combinedArray = [...arr1, ...arr2]; // [1, 2, 3, 4]

        const obj1 = { a: 1, b: 2 };
        const obj2 = { c: 3, d: 4 };
        const mergedObject = { ...obj1, ...obj2 }; // { a: 1, b: 2, c: 3, d: 4 }
        const overwrittenObject = { ...obj1, b: 5 }; // { a: 1, b: 5 }
        ```
    *   **Passing array elements as function arguments:**
        ```javascript
        function sum(a, b, c) {
          return a + b + c;
        }
        const numbers = [10, 20, 30];
        console.log(sum(...numbers)); // 60
        ```

### Rest Parameters (`...`)
*   Gathers an indefinite number of arguments into an array. (Looks the same as spread, but its context is different: it "gathers" elements into an array, while spread "expands" elements.)
*   Must be the last parameter in a function definition.
    ```javascript
    function logArguments(firstArg, ...restArgs) {
      console.log("First argument:", firstArg);
      console.log("Rest of arguments:", restArgs); // An array
    }

    logArguments(1, 2, 3, 4, 5);
    // Output:
    // First argument: 1
    // Rest of arguments: [2, 3, 4, 5]
    ```

### JavaScript Modules (`import`, `export`)
*   ES Modules (ESM) provide a standardized way to organize JavaScript code into separate files (modules) and then share functionality between them. This improves maintainability, reusability, and avoids global variable conflicts.
*   **`export`**: Makes variables, functions, classes, etc., available for use in other modules.
    *   **Named Exports:** Export multiple items.
        ```javascript
        // utils.js
        export const PI = 3.14159;
        export function add(a, b) {
          return a + b;
        }
        export class Calculator { // Can also export classes
          // ...
        }
        ```
    *   **Default Export:** Export only one main item per module.
        ```javascript
        // greeter.js
        const greeting = (name) => `Hello, ${name}!`;
        export default greeting; // Only one default export per file
        ```
*   **`import`**: Brings exported items from other modules into the current module.
    *   **Importing Named Exports:**
        ```javascript
        // app.js
        import { PI, add } from './utils.js'; // Note the .js extension!
        console.log(PI);
        console.log(add(5, 7));
        ```
    *   **Importing Default Exports:**
        ```javascript
        // app.js
        import greet from './greeter.js'; // No curly braces, can rename
        console.log(greet("World"));
        ```
    *   **Importing all named exports as an object:**
        ```javascript
        // app.js
        import * as Utils from './utils.js';
        console.log(Utils.PI);
        console.log(Utils.add(10, 20));
        ```
*   **Using Modules in HTML:** You must add `type="module"` to your `<script>` tag.
    ```html
    <script src="app.js" type="module"></script>
    ```
*   **Note on Local Development:** Due to security restrictions (CORS), you usually need to serve HTML files using a local server (like Live Server VS Code extension) to use modules, rather than opening directly with `file://` protocol.

### Exercise: Building a Utility Module
1.  Create a folder named `js-modules-demo`.
2.  Inside, create an `index.html` file, a `mathUtils.js` file, and an `app.js` file.
3.  In `index.html`, link `app.js` with `type="module"`.
4.  In `mathUtils.js`:
    *   `export` a `const` variable `TAX_RATE = 0.05`.
    *   `export` a function named `calculateTotal` that takes `price` and `quantity` as arguments, and returns `(price * quantity) * (1 + TAX_RATE)`.
    *   `export default` a function named `greetUser` that takes `name` and returns a greeting string using a template literal.
5.  In `app.js`:
    *   `import` `TAX_RATE` and `calculateTotal` (named exports) from `mathUtils.js`.
    *   `import` `greetUser` (default export) from `mathUtils.js`.
    *   Use these imported functions and variables to:
        *   Calculate the total for a product (e.g., `itemPrice = 100`, `itemQuantity = 2`).
        *   Log the calculated total and `TAX_RATE` to the console.
        *   Log a greeting using `greetUser`.
6.  Open `index.html` using a local development server to see the results in the console.

### Helpful Links:
*   [MDN Web Docs: Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
*   [MDN Web Docs: Rest parameters](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
*   [MDN Web Docs: JavaScript Modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
*   [JavaScript.info: Modules](https://javascript.info/modules)
