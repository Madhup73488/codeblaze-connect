### Introduction to Asynchronous JavaScript
*   JavaScript is single-threaded, meaning it executes one command at a time. However, many web operations (like fetching data from a server, setting timers, or listening for user events) can take time.
*   Synchronous code would block the main thread, making the UI unresponsive. Asynchronous code allows these long-running operations to happen in the background without freezing the application.

### Callbacks
*   A function passed as an argument to another function, which is then executed when the first function completes its operation (often an asynchronous one).
*   **Common Use Case:** Event listeners, timers.
    ```javascript
    // Synchronous callback
    function processArray(arr, callback) {
      const newArr = [];
      for (let i = 0; i < arr.length; i++) {
        newArr.push(callback(arr[i]));
      }
      return newArr;
    }
    const numbers = [1, 2, 3];
    const squaredNumbers = processArray(numbers, num => num * num);
    console.log(squaredNumbers); // [1, 4, 9]

    // Asynchronous callback (setTimeout)
    console.log("Start");
    setTimeout(function() {
      console.log("This message appears after 2 seconds.");
    }, 2000); // 2000 milliseconds = 2 seconds
    console.log("End");
    // Output order: Start -> End -> "This message appears after 2 seconds."
    ```
*   **Callback Hell (Pyramid of Doom):** When you have many nested callbacks for sequential asynchronous operations, leading to unreadable and hard-to-maintain code.
    ```javascript
    // Hypothetical callback hell example
    loadUser(userId, function(user) {
      getPosts(user.id, function(posts) {
        getComments(posts[0].id, function(comments) {
          displayData(user, posts, comments);
        });
      });
    });
    ```

### The JavaScript Event Loop (Conceptual Overview)
*   Explains how JavaScript handles asynchronous operations despite being single-threaded.
*   **Call Stack:** Where synchronous code is executed. Functions are pushed onto the stack and popped off when they complete.
*   **Web APIs (Browser APIs):** Provided by the browser environment (e.g., `setTimeout`, `fetch`, DOM events). When an async function is called, it's offloaded to a Web API.
*   **Callback Queue (or Task Queue):** When a Web API finishes its task, its associated callback function is placed in this queue.
*   **Event Loop:** Constantly monitors the Call Stack and the Callback Queue. If the Call Stack is empty, it pushes the first callback from the Callback Queue onto the Call Stack for execution.
*   **Visual Representation:** (You can provide a link to a diagram of the Event Loop: `https://placehold.co/600x300/F0F0F0/000000?text=JavaScript+Event+Loop+Diagram`)
*   **Detailed Example (Illustrating Event Loop):**
    ```javascript
    console.log('1. Script start');

    setTimeout(function() {
      console.log('3. setTimeout callback (Macrotask)');
    }, 0); // Even with 0ms delay, it goes to Web API and Callback Queue

    Promise.resolve().then(function() {
      console.log('2. Promise callback (Microtask)');
    });

    console.log('4. Script end');
    // Expected Output (due to Microtask Queue having higher priority than Macrotask Queue):
    // 1. Script start
    // 4. Script end
    // 2. Promise callback (Microtask)
    // 3. setTimeout callback (Macrotask)
    ```

### Exercise: Simulate Async Operations
1.  Create an HTML file and a JavaScript file.
2.  Write a function `performTask(taskName, delay, callback)` that logs `taskName + " started"`, then uses `setTimeout` to simulate an asynchronous operation. After the delay, it should log `taskName + " finished"` and then call the `callback` function.
3.  Call `performTask` three times in sequence, with different delays, nesting the calls to create a "callback hell" scenario. (e.g., Task A calls Task B, Task B calls Task C).
4.  Observe the output order in the console and explain how the Event Loop makes this possible.

### Helpful Links:
*   [MDN Web Docs: Asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)
*   [Philip Roberts: What the heck is the event loop anyway? (Video - Highly Recommended)](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
*   [JavaScript Event Loop Explained (freeCodeCamp)](https://www.freecodecamp.org/news/javascript-event-loop-explained/)
