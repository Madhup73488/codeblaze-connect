### Conditional Statements (`if`, `else if`, `else`)
*   Execute different blocks of code based on whether a condition is true or false.
*   **`if` statement:** Executes code if a condition is true.
    ```javascript
    let temperature = 25;
    if (temperature > 20) {
      console.log("It's a warm day!");
    }
    ```
*   **`if-else` statement:** Executes one block if true, another if false.
    ```javascript
    let isRaining = false;
    if (isRaining) {
      console.log("Take an umbrella.");
    } else {
      console.log("Enjoy the sunshine!");
    }
    ```
*   **`if-else if-else` statement:** Handles multiple conditions.
    ```javascript
    let score = 85;
    if (score >= 90) {
      console.log("Grade: A");
    } else if (score >= 80) {
      console.log("Grade: B");
    } else if (score >= 70) {
      console.log("Grade: C");
    } else {
      console.log("Grade: F");
    }
    ```

### `switch` Statement
*   A more concise way to handle multiple `if-else if` conditions when checking a single value against several possible cases.
*   Uses `case`, `break`, and `default`.
    ```javascript
    let day = "Wednesday";
    switch (day) {
      case "Monday":
        console.log("Start of the week.");
        break;
      case "Friday":
        console.log("Almost weekend!");
        break;
      case "Sunday":
        console.log("Relax day.");
        break;
      default:
        console.log("Just a regular day.");
    }
    ```

### Loops (`for`, `while`, `do...while`, `for...of`, `for...in`)
*   Repeat a block of code multiple times.
*   **`for` loop:** Most common loop, used when you know the number of iterations or want to iterate a specific range.
    ```javascript
    for (let i = 0; i < 5; i++) {
      console.log("Iteration: " + i);
    }
    // Output:
    // Iteration: 0
    // Iteration: 1
    // Iteration: 2
    // Iteration: 3
    // Iteration: 4
    ```
*   **`while` loop:** Continues as long as a condition is true. Be careful of infinite loops.
    ```javascript
    let count = 0;
    while (count < 3) {
      console.log("Count: " + count);
      count++;
    }
    // Output:
    // Count: 0
    // Count: 1
    // Count: 2
    ```
*   **`do...while` loop:** Executes the block at least once, then checks the condition.
    ```javascript
    let i = 0;
    do {
      console.log("Do-while count: " + i);
      i++;
    } while (i < 0); // Condition is false, but runs once
    // Output: Do-while count: 0
    ```
*   **`for...of` loop (ES6):** Iterates over iterable objects (arrays, strings, maps, sets, etc.). Provides values directly. Preferred for iterating arrays.
    ```javascript
    const fruits = ["apple", "banana", "cherry"];
    for (const fruit of fruits) {
      console.log(fruit);
    }
    // Output:
    // apple
    // banana
    // cherry
    ```
*   **`for...in` loop:** Iterates over enumerable properties of an object. Provides keys (property names).
    ```javascript
    const person = { name: "Alice", age: 30 };
    for (const key in person) {
      console.log(`${key}: ${person[key]}`);
    }
    // Output:
    // name: Alice
    // age: 30
    ```
*   **`break` and `continue` statements:**
    *   `break`: Exits the loop entirely.
    *   `continue`: Skips the current iteration and moves to the next.
    ```javascript
    for (let i = 0; i < 10; i++) {
      if (i === 3) {
        continue; // Skip 3
      }
      if (i === 7) {
        break; // Exit loop at 7
      }
      console.log(i);
    }
    // Output: 0, 1, 2, 4, 5, 6
    ```

### Exercise: FizzBuzz with a Twist
1.  Write a `for` loop that iterates from 1 to 100.
2.  For each number:
    *   If the number is divisible by both 3 and 5, print "FizzBuzz".
    *   If the number is divisible by 3 (but not 5), print "Fizz".
    *   If the number is divisible by 5 (but not 3), print "Buzz".
    *   Otherwise, print the number itself.
3.  **Bonus:** Create an array of strings (e.g., names of students). Use a `for...of` loop to print each name.
4.  **Bonus:** Create an object with properties like `title`, `author`, `year`. Use a `for...in` loop to print each property name and its value.

### Helpful Links:
*   [MDN Web Docs: Control flow and error handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
*   [W3Schools: JavaScript If Else](https://www.w3schools.com/js/js_if_else.asp)
*   [W3Schools: JavaScript Loops](https://www.w3schools.com/js/js_loop_for.asp)
*   [JavaScript for...of vs for...in](https://www.freecodecamp.org/news/javascript-for-in-vs-for-of/)
