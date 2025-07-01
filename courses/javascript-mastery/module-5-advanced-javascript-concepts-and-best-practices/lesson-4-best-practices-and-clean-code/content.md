### Readability and Maintainability
*   **Consistent Naming Conventions:** Use meaningful variable/function names (e.g., `getUserData`, `isLoggedIn`). Follow conventions (`camelCase` for variables/functions, `PascalCase` for classes).
*   **Comments:** Explain **why** code is doing something, not just **what** it's doing. Keep comments up-to-date.
*   **Whitespace and Formatting:** Use consistent indentation, spacing, and line breaks. (Automate with Prettier/ESLint).
*   **Small Functions:** Keep functions focused on a single responsibility.
*   **DRY (Don't Repeat Yourself):** Refactor duplicated code into reusable functions or modules.
*   **Avoid Global Variables:** Minimize variables in the global scope to prevent conflicts. Use modules and local scoping.

### Performance Considerations
*   **Minimize DOM Manipulations:** Batch changes or use techniques like `document.createDocumentFragment` for multiple DOM updates.
*   **Optimize Loops:** Avoid heavy operations inside loops.
*   **Event Listener Cleanup:** Remove event listeners when elements are removed from the DOM or components are unmounted (especially important in SPAs).
*   **Avoid Blocking the Main Thread:** Use `async/await` and `Promises` for long-running operations. Avoid synchronous `XHR`.
*   **Debouncing and Throttling:** For frequently firing events (e.g., `resize`, `scroll`, `input`), limit how often the event handler executes to improve performance.

### Error Prevention and Robustness
*   **Validate Input:** Always validate user input on both client-side (for UX) and server-side (for security and data integrity).
*   **Graceful Degradation:** Ensure your application still works (perhaps with reduced functionality) if a feature fails or is not supported.
*   **Use `try...catch`:** For potentially error-prone code blocks.
*   **Check for `null`/`undefined`:** Before accessing properties of objects that might be `null` or `undefined` (e.g., optional chaining `?.` introduced in ES2020).
    ```javascript
    // Before optional chaining
    if (user && user.address && user.address.street) {
      console.log(user.address.street);
    }
    // With optional chaining
    console.log(user?.address?.street); // Logs undefined if any property in the chain is null/undefined
    ```

### Security Best Practices (Brief)
*   **Never trust user input:** Always sanitize and validate all input, especially on the server-side, to prevent XSS (Cross-Site Scripting), SQL injection, etc.
*   **Avoid `innerHTML` with untrusted data:** Prefer `textContent` or `createElement` for user-generated content.
*   **CORS:** Understand Cross-Origin Resource Sharing when making API requests from different domains.

### Continuous Learning
*   JavaScript is constantly evolving. Encourage staying updated with new ES features, browser APIs, and community best practices (e.g., by following blogs, attending conferences, contributing to open source).

### Exercise: Code Review and Refactoring
1.  Pick one of your larger JavaScript exercises (e.g., the To-Do List or Blog Post Fetcher).
2.  Perform a "code review" on your own code based on the best practices discussed:
    *   Are variable/function names clear and descriptive?
    *   Is there any duplicated code that could be refactored into a function?
    *   Are there enough comments explaining complex logic?
    *   Are you handling potential errors (e.g., API failures, invalid input)?
    *   Are DOM manipulations efficient (e.g., not updating the DOM inside a loop too many times)?
3.  Refactor your code to improve its readability, maintainability, and robustness.

### Helpful Links:
*   [Google Developers: JavaScript Best Practices](https://developers.google.com/web/fundamentals/getting-started/primers/javascript)
*   [Clean Code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript)
*   [Optional Chaining (MDN)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
*   [Web Security Basics (Google Developers)](https://developers.google.com/web/fundamentals/security)
