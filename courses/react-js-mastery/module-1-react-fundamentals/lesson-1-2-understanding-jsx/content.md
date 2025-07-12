# Lesson 1.2: Understanding JSX (JavaScript XML)

*   **What is JSX?**
    *   JSX is a syntax extension for JavaScript. It allows you to write HTML-like code directly within your JavaScript files.
    *   React uses JSX to describe what the UI should look like.
    *   **Not HTML in JS, but a "syntactic sugar":** JSX is transformed by a transpiler (like Babel, which CRA includes) into regular JavaScript function calls (e.g., `React.createElement()`) that React can understand. Browsers don't understand JSX directly.
*   **Why Use JSX?**
    *   **Declarative UI:** It makes your UI code more intuitive and easier to visualize.
    *   **Readability:** Blending UI logic with markup makes components more self-contained.
    *   **Expressiveness:** You can embed JavaScript expressions directly within your markup using curly braces `{}`.
*   **Basic JSX Rules and Syntax**
    *   **Return a Single Root Element:** JSX expressions must have a single parent element. If you need to return multiple elements, wrap them in a `<div>`, a `<React.Fragment>` (or `<>...</>`), or return an array.
        ```jsx
        // Good
        return (
          <div>
            <h1>Hello</h1>
            <p>World</p>
          </div>
        );

        // Also good (Fragment syntax)
        return (
          <>
            <h1>Hello</h1>
            <p>World</p>
          </>
        );

        // Not good (Syntax Error)
        // return (
        //   <h1>Hello</h1>
        //   <p>World</p>
        // );
        ```
    *   **camelCase for HTML Attributes:** HTML attributes like `class` become `className`, `for` becomes `htmlFor`, and event handlers are camelCase (`onclick` becomes `onClick`).
        ```jsx
        <div className="container">
          <label htmlFor="name">Name:</label>
          <input type="text" onClick={handleClick} />
        </div>
        ```
    *   **Self-Closing Tags:** HTML elements that don't have children must be self-closing with a trailing slash (e.g., `<img>`, `<input>`, `<br>`, `<hr>`).
        ```jsx
        <img src="logo.png" alt="Logo" />
        <br />
        ```
    *   **Embedding JavaScript Expressions with `{}`:** You can put any valid JavaScript expression inside curly braces.
        ```jsx
        const name = "React User";
        const year = 2025;

        return (
          <div>
            <h1>Hello, {name}!</h1>
            <p>Current year: {year}</p>
            <p>Sum: {10 + 5}</p>
            <p>Is user logged in? {isLoggedIn ? 'Yes' : 'No'}</p>
          </div>
        );
        ```
    *   **Conditional Rendering (if/else in JSX):**
        *   **Ternary Operator:** Best for simple conditions.
            ```jsx
            return (
              <div>
                {isLoggedIn ? <p>Welcome back!</p> : <button>Login</button>}
              </div>
            );
            ```
        *   **Logical `&&` Operator:** For rendering something if a condition is true, and nothing if false.
            ```jsx
            return (
              <div>
                {isLoading && <p>Loading data...</p>}
              </div>
            );
            ```
        *   **IIFE (Immediately Invoked Function Expression) or helper function:** For more complex if/else logic.
            ```jsx
            return (
              <div>
                {(() => {
                  if (isAdmin) return <p>Admin Dashboard</p>;
                  else if (isLoggedIn) return <p>User Dashboard</p>;
                  else return <p>Please Log In</p>;
                })()}
              </div>
            );
            ```
    *   **Styling in JSX:**
        *   **External CSS (Recommended):** Import `.css` files.
            ```jsx
            import './App.css'; // Standard way
            // ... then use className in JSX
            <div className="my-class">...</div>
            ```
        *   **Inline Styles (Object):** Pass a JavaScript object where CSS properties are camelCased.
            ```jsx
            <p style={{ color: 'blue', fontSize: '16px' }}>Styled text</p>
            ```
            **Note:** Inline styles are generally discouraged for complex styling due to lack of pseudo-classes, media queries, and performance.
*   **Exercise: Create a Dynamic Welcome Component**
    1.  Inside your `my-first-react-app` project, open `src/App.js`.
    2.  Clear the existing content inside the `return (...)` statement.
    3.  Create a variable `userName` (e.g., "Alex") and a boolean `isLoggedIn` (e.g., `true`).
    4.  Use JSX to display:
        *   An `<h1>` greeting that uses the `userName` variable.
        *   Conditionally display a paragraph: if `isLoggedIn` is true, show "Welcome back to your dashboard!"; otherwise, show a `<button>` that says "Please Log In".
        *   Add a simple image (`<img>`) with a placeholder `src` and `alt`, ensuring it's self-closing.
        *   Style the `<h1>` with an inline style to make its color red.
        *   Add a div around all elements and give it a `className` (e.g., `app-container`). Define a simple style for `app-container` in `src/App.css`.

### Helpful Links:

*   [React Official Docs: Writing Markup with JSX](https://reactjs.org/docs/writing-markup-with-jsx.html)
*   [W3Schools: React JSX](https://www.w3schools.com/react/react_jsx.asp)
*   [Conditional Rendering in React (React Docs)](https://reactjs.org/docs/conditional-rendering.html)
