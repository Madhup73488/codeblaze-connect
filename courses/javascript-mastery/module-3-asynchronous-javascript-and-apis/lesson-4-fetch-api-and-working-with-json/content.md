### Introduction to Fetch API
*   The Fetch API is a modern, Promise-based interface for making HTTP requests (e.g., getting data from a server, sending data). It replaces older methods like `XMLHttpRequest`.
*   It's built into modern browsers.

### Making a GET Request
*   `fetch(url)` returns a `Promise` that resolves to a `Response` object.
*   The `Response` object itself is a stream. To get the actual JSON data, you need to call `response.json()` (which also returns a `Promise`).
    ```javascript
    async function getUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users'); // Example public API
        if (!response.ok) { // Check for HTTP errors (e.g., 404, 500)
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json(); // Parse the response as JSON
        console.log("Fetched users:", data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
    getUsers();
    ```

### Making a POST Request
*   You need to specify the `method` and include a `body` (data to send) and `headers` (especially `Content-Type: application/json`).
*   The `body` must be a stringified JSON object (`JSON.stringify()`).
    ```javascript
    async function createUser(userData) {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
          method: 'POST', // HTTP method
          headers: {
            'Content-Type': 'application/json', // Tell the server we're sending JSON
          },
          body: JSON.stringify(userData), // Convert JavaScript object to JSON string
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const newUser = await response.json(); // Server often returns the created resource
        console.log("New user created:", newUser);
      } catch (error) {
        console.error("Error creating user:", error);
      }
    }

    const newUser = {
      name: "Test User",
      username: "testuser",
      email: "test@example.com"
    };
    createUser(newUser);
    ```

### Working with JSON (JavaScript Object Notation)
*   JSON is a lightweight data-interchange format, very commonly used for API communication. It's human-readable and easy for machines to parse.
*   Looks like JavaScript objects and arrays but with strict rules (e.g., property names must be double-quoted).
*   `JSON.parse()`: Converts a JSON string into a JavaScript object.
*   `JSON.stringify()`: Converts a JavaScript object into a JSON string.
    ```javascript
    const jsonString = '{"name": "Alice", "age": 30, "isStudent": true}';
    const jsObject = JSON.parse(jsonString);
    console.log(jsObject.name); // "Alice"

    const anotherJsObject = { city: "London", population: 9000000 };
    const anotherJsonString = JSON.stringify(anotherJsObject);
    console.log(anotherJsonString); // '{"city":"London","population":9000000}'
    ```

### Exercise: Build a Simple Blog Post Fetcher
1.  Create an HTML file with a `div` element with `id="posts-container"`.
2.  Write an `async` function `fetchAndDisplayPosts()`.
3.  Inside this function, use `fetch` to get data from a public API, e.g., `https://jsonplaceholder.typicode.com/posts`.
4.  Use `await response.json()` to parse the data.
5.  Iterate over the first 5 posts received. For each post, create a new `div` element.
6.  Inside each post `div`, add an `<h3>` for the post title and a `<p>` for the post body.
7.  Append these new post `divs` to the `posts-container` in your HTML.
8.  Implement basic error handling with `try...catch` for network errors and `response.ok` check for HTTP errors.

### Helpful Links:
*   [MDN Web Docs: Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
*   [JSON.org](https://www.json.org/json-en.html)
*   [JSONPlaceholder (Free Fake API for Testing)](https://jsonplaceholder.typicode.com/)
*   [MDN Web Docs: JSON.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)
*   [MDN Web Docs: JSON.stringify()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
