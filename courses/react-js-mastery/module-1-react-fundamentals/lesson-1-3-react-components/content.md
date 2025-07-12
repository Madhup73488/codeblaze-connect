# Lesson 1.3: React Components (Functional vs. Class-Based)

*   **What are Components?**
    *   Components are the building blocks of any React application. They are independent, reusable pieces of UI.
    *   Each component is responsible for rendering a specific part of the UI.
    *   Think of them like custom HTML elements.
*   **Functional Components (Recommended in Modern React)**
    *   Defined as JavaScript functions.
    *   Receive data as `props` (arguments).
    *   Can use React Hooks to manage state and lifecycle (covered in Module 2).
    *   Simpler, more concise, and generally preferred for new development.
    *   **Detailed Example:**
        ```jsx
        // src/components/Greeting.js
        import React from 'react'; // React is implicitly imported when using JSX

        // Functional component definition
        function Greeting(props) { // 'props' is an object containing all attributes passed to it
          return (
            <div className="greeting-card">
              <h2>Hello, {props.name}!</h2>
              <p>Welcome to our application. Age: {props.age}</p>
            </div>
          );
        }

        export default Greeting; // Export the component so it can be used elsewhere
        ```
        *   **Usage in App.js:**
            ```jsx
            // src/App.js
            import React from 'react';
            import Greeting from './components/Greeting'; // Import the component
            import './App.css'; // For styles

            function App() {
              return (
                <div className="App">
                  <h1>My React App</h1>
                  {/* Using the Greeting component, passing 'name' and 'age' as props */}
                  <Greeting name="Alice" age={30} />
                  <Greeting name="Bob" age={25} /> {/* Reusable */}
                  <Greeting name="Charlie" /> {/* age will be undefined if not passed */}
                </div>
              );
            }

            export default App;
            ```
*   **Class-Based Components (Legacy, but good to know)**
    *   Defined as ES6 classes that extend `React.Component`.
    *   Have a `render()` method that returns JSX.
    *   Manage state using `this.state` and update with `this.setState()`.
    *   Have lifecycle methods (e.g., `componentDidMount`, `componentDidUpdate`).
    *   More verbose, less common in new React development, but prevalent in older codebases.
    *   **Detailed Example:**
        ```jsx
        // src/components/ClassCounter.js
        import React, { Component } from 'react';

        class ClassCounter extends Component {
          constructor(props) {
            super(props); // Must call super(props)
            this.state = { // Initialize state as an object
              count: 0
            };
          }

          // Method to update state
          incrementCount() {
            this.setState({ count: this.state.count + 1 });
            // this.setState is asynchronous!
            // this.setState((prevState, props) => ({ count: prevState.count + 1 })); // Safer for updates based on previous state
          }

          render() { // Must have a render method
            return (
              <div className="counter-card">
                <h3>Class Counter</h3>
                <p>Count: {this.state.count}</p>
                <button onClick={() => this.incrementCount()}>Increment</button>
              </div>
            );
          }
        }

        export default ClassCounter;
        ```
        *   **Usage in App.js:**
            ```jsx
            // src/App.js
            import React from 'react';
            import ClassCounter from './components/ClassCounter';
            // ... other imports
            function App() {
              return (
                <div className="App">
                  <h1>My React App</h1>
                  <ClassCounter />
                </div>
              );
            }
            export default App;
            ```
*   **Props (Properties): Passing Data Down**
    *   Props are how components receive data from their parent components.
    *   They are **read-only (immutable):** A component should never modify its own props.
    *   Passed as attributes in JSX, accessed as an object (`props.propertyName`).
    *   **`children` Prop:** A special prop that allows you to pass content (JSX elements) directly between the opening and closing tags of a component.
        ```jsx
        // src/components/Card.js
        function Card(props) {
          return (
            <div className="card">
              {props.children} {/* Renders whatever is passed between <Card> tags */}
            </div>
          );
        }
        export default Card;

        // Usage in App.js
        <Card>
          <h2>This is the Card Title</h2>
          <p>And some content inside the card.</p>
          <button>Click Here</button>
        </Card>
        ```
*   **State: Managing Component-Specific Data (Brief Intro)**
    *   State is data that a component "owns" and can manage over time. When state changes, React re-renders the component.
    *   In functional components, state is managed using the `useState` Hook (covered in Module 2).
    *   In class components, state is an object managed with `this.state` and updated with `this.setState()`.
    *   **Key difference:** Props are passed down from parent to child; state is managed internally by a component.
*   **Exercise: Build a User List with Components**
    1.  Inside your React project, create a new folder `src/components`.
    2.  Create `src/components/UserItem.js`. This will be a functional component that accepts props like `name`, `email`, and `age`. It should render a `div` displaying these details.
    3.  Create `src/components/UserList.js`. This will also be a functional component. It should accept a `users` prop (an array of user objects).
    4.  Inside `UserList.js`, use the `map()` method on the `users` array to render multiple `UserItem` components, passing the relevant user data as props to each.
    5.  In `src/App.js`:
        *   Import `UserList`.
        *   Define an array of user objects (e.g., `const users = [{ id: 1, name: 'Alice', email: 'a@example.com', age: 28 }, ...];`).
        *   Render the `UserList` component, passing the `users` array as a prop.
    6.  Add some basic CSS in `App.css` for `user-item` and `user-list` classes to make them look presentable.

### Helpful Links:

*   [React Official Docs: Your First Component](https://reactjs.org/docs/components-and-props.html)
*   [React Official Docs: Passing Props to a Component](https://reactjs.org/docs/components-and-props.html#props-are-read-only)
*   [React Props vs State (tutorial)](https://www.freecodecamp.org/news/props-vs-state-in-react/)
