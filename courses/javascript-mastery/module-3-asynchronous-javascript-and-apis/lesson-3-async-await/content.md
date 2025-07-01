### Introduction to `async/await`
*   `async/await` is modern JavaScript syntax (ES2017) built on top of Promises, designed to make asynchronous code look and behave more like synchronous code, making it much easier to read and write.
*   It simplifies chaining Promises and handling errors.

### `async` Keyword
*   Used before a function declaration or expression to make it an asynchronous function.
*   An `async` function always returns a `Promise`. If it returns a non-Promise value, JavaScript automatically wraps it in a resolved `Promise`.
    ```javascript
    async function myFunction() {
      return "Hello"; // Returns Promise.resolve("Hello")
    }
    myFunction().then(data => console.log(data)); // "Hello"

    async function errorFunction() {
      throw new Error("Something went wrong!"); // Returns Promise.reject(Error)
    }
    errorFunction().catch(err => console.error(err.message)); // "Something went wrong!"
    ```

### `await` Keyword
*   Can only be used inside an `async` function.
*   Pauses the execution of the `async` function until the `Promise` it's waiting for settles (either fulfills or rejects).
*   If the `Promise` fulfills, `await` returns the resolved value.
*   If the `Promise` rejects, `await` throws an error, which can be caught with `try...catch`.
    ```javascript
    function resolveAfter2Seconds() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve("Data from server!");
        }, 2000);
      });
    }

    async function fetchDataAndLog() {
      console.log("Fetching data...");
      const data = await resolveAfter2Seconds(); // Pause here for 2 seconds
      console.log(data); // "Data from server!"
      console.log("Data fetched and processed.");
    }

    fetchDataAndLog();
    // Output:
    // Fetching data...
    // (2 second delay)
    // Data from server!
    // Data fetched and processed.
    ```

### Error Handling with `try...catch`
*   Since `await` throws an error if the `Promise` rejects, you can use a standard `try...catch` block to handle asynchronous errors gracefully, just like synchronous errors.
    ```javascript
    function rejectAfter1Second() {
      return new Promise((_, reject) => {
        setTimeout(() => {
          reject("Network error!");
        }, 1000);
      });
    }

    async function getDataSafely() {
      try {
        console.log("Attempting to get data...");
        const data = await rejectAfter1Second();
        console.log("Received:", data); // This line won't run if promise rejects
      } catch (error) {
        console.error("Caught an error:", error); // "Caught an error: Network error!"
      } finally {
        console.log("Cleanup complete.");
      }
    }

    getDataSafely();
    ```

### Parallel Execution with `async/await` and `Promise.all()`
*   While `await` makes code look sequential, you can run multiple asynchronous operations in parallel by calling them without `await` and then awaiting `Promise.all()` to get all results.
    ```javascript
    function getProduct(id) {
      return new Promise(resolve => {
        setTimeout(() => resolve(`Product ${id}`), 1000 + id * 100);
      });
    }

    async function fetchMultipleProducts() {
      console.log("Starting parallel fetches...");
      const p1 = getProduct(1); // Starts immediately
      const p2 = getProduct(2); // Starts immediately
      const p3 = getProduct(3); // Starts immediately

      const results = await Promise.all([p1, p2, p3]); // Wait for all to finish
      console.log("All products fetched:", results); // ["Product 1", "Product 2", "Product 3"]
      console.log("All done!");
    }

    fetchMultipleProducts();
    // This will take approx. 1300ms (max of individual promises) not 1000+1100+1200ms
    ```

### Exercise: User Dashboard Data Loading
1.  Create two mock asynchronous functions using `Promises` and `setTimeout`:
    *   `fetchUserDetails()`: Resolves with an object `{ name: 'John Doe', id: 123 }` after 1 second.
    *   `fetchUserPosts(userId)`: Resolves with an array of mock post titles (e.g., `['Post 1', 'Post 2']`) after 1.5 seconds.
2.  Create an `async` function `loadDashboardData()`.
3.  Inside `loadDashboardData()`:
    *   Use `try...catch` for error handling.
    *   `await fetchUserDetails()`.
    *   Once user details are loaded, `await fetchUserPosts()` using the `userId`.
    *   Log both the user details and posts to the console.
    *   Simulate an error by making one of the mock functions reject (e.g., if `userId` is invalid in `fetchUserPosts`). Observe the error handling.

### Helpful Links:
*   [MDN Web Docs: async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
*   [MDN Web Docs: await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)
*   [Async/Await Explained (JavaScript.info)](https://javascript.info/async-await)
