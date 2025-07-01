### What are Events?
*   Events are actions or occurrences that happen in the browser, such as a user clicking a button, hovering over an element, typing in an input field, or the page finishing loading.
*   JavaScript allows you to "listen" for these events and execute code in response.

### Event Listeners (`addEventListener`)
*   The most common and recommended way to handle events. It allows you to attach multiple event handlers to a single element without overwriting existing ones.
*   **Syntax:** `element.addEventListener('event_type', callback_function);`
*   `event_type`: A string representing the type of event (e.g., `'click'`, `'mouseover'`, `'keydown'`, `'submit'`, `'load'`).
*   `callback_function`: The function to execute when the event occurs. It receives an `Event` object as its argument.
    ```html
    <button id="myBtn">Click Me!</button>
    <input type="text" id="myInput">
    <div id="myDiv" style="width:100px; height:100px; background-color:lightblue;"></div>
    ```
    ```javascript
    const button = document.getElementById('myBtn');
    const input = document.getElementById('myInput');
    const div = document.getElementById('myDiv');

    // Click event
    button.addEventListener('click', function(event) {
      console.log('Button was clicked!');
      console.log('Event type:', event.type);
      console.log('Target element:', event.target);
    });

    // Input event (fires when input value changes)
    input.addEventListener('input', function(event) {
      console.log('Input value:', event.target.value);
    });

    // Mouseover and mouseout events
    div.addEventListener('mouseover', function() {
      div.style.backgroundColor = 'lightcoral';
    });
    div.addEventListener('mouseout', function() {
      div.style.backgroundColor = 'lightblue';
    });

    // Load event (fires when the entire page has loaded)
    window.addEventListener('load', function() {
        console.log('Page has fully loaded!');
    });
    ```

### The Event Object
*   The `callback_function` receives an `Event` object as its first argument (often named `e` or `event`).
*   Contains useful information about the event:
    *   `event.type`: Type of event ('click', 'keydown').
    *   `event.target`: The element that triggered the event.
    *   `event.currentTarget`: The element the event listener is attached to.
    *   `event.preventDefault()`: Prevents the browser's default action for an event (e.g., preventing a form from submitting, preventing a link from navigating).
    *   `event.stopPropagation()`: Stops the event from "bubbling up" to parent elements (advanced).

### Event Delegation
*   Attaching a single event listener to a parent element instead of multiple listeners to individual child elements.
*   Useful for dynamically added elements or when dealing with many similar elements.
*   **Concept:** The event "bubbles up" from the target element to its ancestors. The parent listener checks `event.target` to see if the event originated from a specific child.
    ```html
    <ul id="parent-list">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </ul>
    ```
    ```javascript
    const parentList = document.getElementById('parent-list');
    parentList.addEventListener('click', function(event) {
      // Check if the clicked element (event.target) is an <li>
      if (event.target.tagName === 'LI') {
        console.log('Clicked on:', event.target.textContent);
        event.target.style.backgroundColor = 'yellow';
      }
    });

    // Dynamically add a new item
    const newItem = document.createElement('li');
    newItem.textContent = 'New Item (dynamically added)';
    parentList.appendChild(newItem);
    // Clicking the new item will also trigger the parent listener
    ```

### Removing Event Listeners (`removeEventListener`)
*   Important for cleanup, especially in single-page applications, to prevent memory leaks.
*   You must pass the same function reference that was used to add the listener.
    ```javascript
    function handleClick() {
      console.log("Button clicked!");
    }
    button.addEventListener('click', handleClick);
    // ... later ...
    // button.removeEventListener('click', handleClick);
    ```

### Common Events:
*   **Mouse Events:** `click`, `dblclick`, `mousedown`, `mouseup`, `mousemove`, `mouseover`, `mouseout`.
*   **Keyboard Events:** `keydown`, `keyup`, `keypress`.
*   **Form Events:** `submit`, `input`, `change`, `focus`, `blur`.
*   **Document/Window Events:** `load`, `DOMContentLoaded`, `resize`, `scroll`.

### Exercise: Interactive To-Do List
1.  Create an HTML page with:
    *   An input field with `id="new-task-input"`.
    *   A button with `id="add-task-btn"`.
    *   An empty `ul` with `id="task-list"`.
2.  Add an event listener to the `add-task-btn`:
    *   On `click`, get the value from `new-task-input`.
    *   If the input is not empty, create a new `li` element, set its `textContent` to the input value, and append it to `task-list`.
    *   Clear the input field.
3.  Implement event delegation on the `task-list` (`ul`):
    *   Add a `click` listener to `task-list`.
    *   When an `li` inside `task-list` is clicked, toggle a `completed` class on that `li`. (You'll need to define a `.completed` class in CSS, e.g., `text-decoration: line-through; opacity: 0.7;`).
4.  **Bonus:** Add a "Remove" button next to each task when it's created. Use event delegation on the `task-list` to handle clicks on these "Remove" buttons, removing the parent `li` when clicked.

### Helpful Links:
*   [MDN Web Docs: Introduction to events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
*   [W3Schools: JavaScript HTML DOM Events](https://www.w3schools.com/js/js_htmldom_events.asp)
*   [Event Delegation Explained (freeCodeCamp)](https://www.freecodecamp.org/news/event-delegation-javascript/)
