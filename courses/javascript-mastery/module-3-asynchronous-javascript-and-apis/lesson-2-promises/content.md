### Introduction to Promises
*   Promises are a modern way to handle asynchronous operations. They represent the eventual completion (or failure) of an asynchronous operation and its resulting value.
*   Promises provide a cleaner, more manageable alternative to nested callbacks, helping to avoid "callback hell."
*   A Promise can be in one of three states:
    *   `pending`: Initial state, neither fulfilled nor rejected.
    *   `fulfilled` (or `resolved`): The operation completed successfully.
    *   `rejected`: The operation failed.

### Creating a Promise
*   Use the `new Promise()` constructor, which takes an executor function with `resolve` and `reject` as arguments.
    ```javascript
    const myPromise = new Promise((resolve, reject) => {
      const success = true; // Simulate success or failure
      setTimeout(() => {
        if (success) {
          resolve("Data fetched successfully!"); // Call resolve on success
        } else {
          reject("Error: Failed to fetch data."); // Call reject on failure
        }
      }, 1000);
    });
    ```

### Consuming a Promise (`.then()`, `.catch()`, `.finally()`)
*   `.then()`: Handles the successful resolution of a Promise. Can be chained.
    *   Takes two optional arguments: a `onFulfilled` callback and an `onRejected` callback (though `.catch()` is usually preferred for errors).
*   `.catch()`: Handles errors (rejection) from a Promise.
*   `.finally()`: Executes a callback regardless of whether the Promise was fulfilled or rejected. Useful for cleanup (e.g., hiding a loading spinner).
    ```javascript
    myPromise
      .then((data) => {
        console.log("Success:", data); // "Success: Data fetched successfully!"
        return data + " - Processed."; // Chaining: returns a new promise
      })
      .then((processedData) => {
        console.log("Chained success:", processedData); // "Chained success: Data fetched successfully! - Processed."
      })
      .catch((error) => {
        console.error("Error occurred:", error); // "Error occurred: Failed to fetch data." (if success was false)
      })
      .finally(() => {
        console.log("Promise settled (either fulfilled or rejected).");
      });
    ```

### Chaining Promises
*   A `.then()` handler can return another Promise, allowing you to chain asynchronous operations sequentially.
    ```javascript
    function fetchData(url) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (url === "data.json") {
            resolve({ id: 1, name: "Product A" });
          } else {
            reject("Invalid URL");
          }
        }, 500);
      });
    }

    function processData(data) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(`Processed: ${data.name} with ID ${data.id}`);
        }, 300);
      });
    }

    fetchData("data.json")
      .then(data => processData(data)) // Returns a new promise
      .then(result => console.log(result)) // Logs the result of processData
      .catch(error => console.error(error));
    ```

### `Promise.all()`, `Promise.race()` (Brief Introduction)
*   `Promise.all(iterable)`: Waits for all promises in an iterable to settle (all fulfilled or one rejected). If all succeed, returns an array of their results. If any reject, it immediately rejects with the first error.
*   `Promise.race(iterable)`: Returns a promise that fulfills or rejects as soon as one of the promises in the iterable fulfills or rejects.
    ```javascript
    const p1 = new Promise(resolve => setTimeout(() => resolve("One"), 1000));
    const p2 = new Promise(resolve => setTimeout(() => resolve("Two"), 500));
    const p3 = new Promise((resolve, reject) => setTimeout(() => reject("Three Error"), 1500));

    Promise.all([p1, p2])
      .then(results => console.log("All results:", results)) // All results: ["One", "Two"] after 1 second
      .catch(error => console.error("All error:", error));

    Promise.all([p1, p3]) // p3 rejects
      .then(results => console.log("All results:", results))
      .catch(error => console.error("All error with reject:", error)); // All error with reject: Three Error

    Promise.race([p1, p2])
      .then(result => console.log("Race winner:", result)) // Race winner: Two (after 0.5 seconds)
      .catch(error => console.error("Race error:", error));
    ```

### Exercise: Simulate Data Fetching with Promises
1.  Create a function `simulateApiCall(isSuccess)` that returns a new `Promise`.
2.  Inside the promise, use `setTimeout` (e.g., 1.5 seconds delay).
3.  If `isSuccess` is `true`, `resolve` with a message like "User data loaded!".
4.  If `isSuccess` is `false`, `reject` with a message like "Failed to load user data!".
5.  Call `simulateApiCall(true)` and use `.then()` and `.finally()` to log success and completion messages.
6.  Call `simulateApiCall(false)` and use `.catch()` and `.finally()` to log the error and completion messages.

### Helpful Links:
*   [MDN Web Docs: Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
*   [JavaScript.info: Promises](https://javascript.info/promise-basics)
*   [Promises, Async/Await (freeCodeCamp)](https://www.freecodecamp.org/news/javascript-promises-async-await/)
