### Scope (Revisited and Deepened)
*   **Lexical Scoping:** JavaScript uses lexical (or static) scoping, meaning the scope of a variable is determined by its position in the code when it is defined, not when it is called.
*   **Scope Chain:** When looking for a variable, JavaScript first checks the current scope, then its immediate outer scope, and so on, up to the global scope.
    ```javascript
    const globalMsg = "Global";

    function outerFunction() {
      const outerMsg = "Outer";

      function innerFunction() {
        const innerMsg = "Inner";
        console.log(globalMsg); // Accessible
        console.log(outerMsg);  // Accessible
        console.log(innerMsg);  // Accessible
      }
      innerFunction();
      // console.log(innerMsg); // ReferenceError
    }
    outerFunction();
    // console.log(outerMsg); // ReferenceError
    ```

### Closures
*   A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
*   In simpler terms, a function "remembers" the variables from where it was created, even if that outer function has already finished executing.
*   **Use Cases:** Data privacy/encapsulation, creating factory functions, currying.
    ```javascript
    function createCounter() {
      let count = 0; // 'count' is in the outer function's scope
      return function() { // Inner function (the closure)
        count++;
        console.log(count);
      };
    }

    const counter1 = createCounter(); // counter1 is a closure over count = 0
    const counter2 = createCounter(); // counter2 is a separate closure over its own count = 0

    counter1(); // 1
    counter1(); // 2
    counter2(); // 1 (starts its own count)
    counter1(); // 3
    ```
    **Explanation:** `counter1` and `counter2` each "remember" their own `count` variable from their respective calls to `createCounter()`.

### The `this` Keyword
*   `this` is a special keyword in JavaScript whose value refers to the "context" in which a function is executed. Its value is determined dynamically, based on how the function is called.
*   **Common `this` Bindings:**
    1.  **Global Context (outside any function):** `this` refers to the global object (`window` in browsers, `global` in Node.js).
    2.  **Method Call (`object.method()`):** `this` refers to the object the method is called on.
        ```javascript
        const person = {
          name: "Alice",
          greet: function() {
            console.log(`Hello, my name is ${this.name}.`);
          }
        };
        person.greet(); // `this` is `person` -> "Hello, my name is Alice."
        ```
    3.  **Simple Function Call (`functionName()`):** In non-strict mode, `this` refers to the global object. In strict mode, `this` is `undefined`. Always use strict mode (`"use strict";`) or arrow functions to avoid this unpredictable behavior.
        ```javascript
        function showThis() {
          console.log(this);
        }
        showThis(); // `window` object (non-strict mode), `undefined` (strict mode)
        ```
    4.  **Constructor Call (`new ClassName()`):** `this` refers to the newly created instance of the class.
        ```javascript
        class Car {
          constructor(make) {
            this.make = make; // `this` is the new Car instance
          }
        }
        const myCar = new Car("Honda");
        console.log(myCar.make); // "Honda"
        ```
    5.  **Event Handler Call:** `this` typically refers to the element on which the event listener is attached (but `event.target` is often more reliable).
        ```javascript
        // button.addEventListener('click', function() { console.log(this); }); // `this` is the button element
        ```
    6.  **Arrow Functions:** Arrow functions do not have their own `this` binding. They lexically inherit `this` from their enclosing scope (the scope where they were defined). This makes them predictable and often easier to use with `this`.
        ```javascript
        const person = {
          name: "Bob",
          regularGreet: function() {
            setTimeout(function() {
              console.log(`Regular: ${this.name}`); // `this` is `window` (or `undefined` in strict mode)
            }, 100);
          },
          arrowGreet: function() {
            setTimeout(() => { // Arrow function
              console.log(`Arrow: ${this.name}`); // `this` is `person` (inherited from `arrowGreet`'s scope)
            }, 100);
          }
        };
        person.regularGreet(); // Regular: undefined (or empty string)
        person.arrowGreet();   // Arrow: Bob
        ```

### `call()`, `apply()`, `bind()` (Explicit `this` Binding)
*   These methods allow you to explicitly set the value of `this` for a function.
*   `call(thisArg, arg1, arg2, ...)`: Calls the function immediately with `this` set to `thisArg` and arguments passed individually.
*   `apply(thisArg, [argsArray])`: Calls the function immediately with `this` set to `thisArg` and arguments passed as an array.
*   `bind(thisArg)`: Returns a new function with `this` permanently bound to `thisArg`. Does not call the function immediately.
    ```javascript
    const owner = { name: "John" };
    function showName() {
      console.log(this.name);
    }
    showName.call(owner);   // "John"
    showName.apply(owner);  // "John"

    const boundedShowName = showName.bind(owner);
    boundedShowName();      // "John" (can call later)
    ```

### Exercise: `this` Keyword Exploration
1.  Create an object `calculator` with properties `value1` and `value2` (numbers).
2.  Add a method `add()` to `calculator` that returns `this.value1 + this.value2`.
3.  Create a standalone function `multiply(a, b)` that returns `a * b`.
4.  Create another object `anotherContext` with properties `value1` and `value2` that are different from `calculator`.
5.  Call `calculator.add()` and log the result.
6.  Call `calculator.add()` but explicitly set `this` to `anotherContext` using `call()`. Log the result.
7.  Create a `const` variable `boundAdd = calculator.add.bind(anotherContext)`. Call `boundAdd()` and log the result.
8.  Explain the difference in `this` binding for `calculator.add()` vs. `calculator.add.call(anotherContext)` vs. `boundAdd()`.

### Helpful Links:
*   [MDN Web Docs: Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
*   [MDN Web Docs: this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
*   [JavaScript.info: this](https://javascript.info/object-methods)
*   [Master the JavaScript this Keyword](https://www.freecodecamp.org/news/the-this-keyword-in-javascript/)
