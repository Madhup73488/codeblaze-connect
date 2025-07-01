### Changing Text Content
*   `textContent`: Gets or sets the text content of an element and all its descendants. It returns all text, including hidden script and style elements.
*   `innerText`: Gets or sets the text content as rendered. Accounts for CSS styling.
*   `innerHTML`: Gets or sets the HTML content (including tags) inside an element. Be cautious with `innerHTML` when using untrusted input, as it can lead to XSS vulnerabilities.
    ```html
    <div id="my-div">
      <p>Original <strong>Text</strong></p>
      <!-- hidden comment -->
    </div>
    ```
    ```javascript
    const myDiv = document.getElementById('my-div');

    console.log(myDiv.textContent); // "Original Text" (includes text from p tag)
    console.log(myDiv.innerText);   // "Original Text" (similar, but aware of layout)
    console.log(myDiv.innerHTML);   // "<p>Original <strong>Text</strong></p>\n      <!-- hidden comment -->"

    myDiv.textContent = "New text content."; // Replaces everything inside
    // <div id="my-div">New text content.</div>

    myDiv.innerHTML = "<h2>New Heading</h2><p>And a new paragraph.</p>"; // Replaces with new HTML
    // <div id="my-div"><h2>New Heading</h2><p>And a new paragraph.</p></div>
    ```

### Changing Attributes
*   `element.attributeName` (Direct access): Best for common attributes like `id`, `class`, `href`, `src`.
    ```javascript
    const myImage = document.getElementById('my-image');
    myImage.src = "new-image.jpg";
    myImage.alt = "New alt text";
    myImage.id = "updated-image";
    ```
*   `setAttribute(name, value)`: Sets the value of any attribute.
*   `getAttribute(name)`: Gets the value of an attribute.
*   `removeAttribute(name)`: Removes an attribute.
    ```javascript
    const myLink = document.getElementById('my-link');
    myLink.setAttribute('target', '_blank'); // Set target attribute
    console.log(myLink.getAttribute('href')); // Get href attribute
    myLink.removeAttribute('title'); // Remove title attribute
    ```

### Modifying Classes (`classList`)
*   The `classList` property provides a convenient way to manage an element's classes.
*   `add()`: Adds one or more classes.
*   `remove()`: Removes one or more classes.
*   `toggle()`: Adds the class if it doesn't exist, removes it if it does.
*   `contains()`: Checks if an element has a specific class.
    ```javascript
    const myButton = document.getElementById('my-button');
    myButton.classList.add('active', 'highlight');
    myButton.classList.remove('default');
    myButton.classList.toggle('hidden'); // Adds if not present, removes if present
    if (myButton.classList.contains('active')) {
      console.log("Button is active!");
    }
    ```

### Changing Styles (`element.style`)
*   Directly manipulates an element's inline CSS styles.
*   CSS property names use camelCase in JavaScript (e.g., `background-color` becomes `backgroundColor`).
*   **Note:** This adds inline styles, which have high specificity. For more maintainable styling, it's often better to toggle classes and define styles in your CSS file.
    ```javascript
    const box = document.getElementById('my-box');
    box.style.backgroundColor = 'lightblue';
    box.style.border = '2px solid blue';
    box.style.padding = '10px';
    ```

### Creating and Appending Elements
*   `document.createElement(tagName)`: Creates a new HTML element node.
*   `appendChild(childElement)`: Adds a node as the last child of a parent node.
*   `prepend(childElement)`: Adds a node as the first child of a parent node.
*   `insertBefore(newNode, referenceNode)`: Inserts `newNode` before `referenceNode`.
*   `remove()`: Removes the element from the DOM.
    ```html
    <ul id="my-list">
      <li>Existing Item</li>
    </ul>
    ```
    ```javascript
    const myList = document.getElementById('my-list');

    // Create a new list item
    const newItem = document.createElement('li');
    newItem.textContent = "New Item Added";
    myList.appendChild(newItem); // Adds to the end

    const firstItem = myList.firstElementChild;
    const anotherItem = document.createElement('li');
    anotherItem.textContent = "Another Item (at beginning)";
    myList.prepend(anotherItem); // Adds to the beginning

    const thirdItem = document.createElement('li');
    thirdItem.textContent = "Inserted before existing";
    myList.insertBefore(thirdItem, firstItem); // Inserts before 'Existing Item'

    // To remove an element
    // newItem.remove();
    ```

### Exercise: Dynamic Content Update
1.  Create an HTML page with:
    *   A `div` with `id="content-area"`.
    *   An `h2` with `id="dynamic-heading"`.
    *   A `p` with `id="dynamic-paragraph"`.
    *   An `img` with `id="dynamic-image"` and a placeholder `src`.
    *   A `button` with `id="update-button"`.
2.  When the `update-button` is clicked (you'll add the event listener in the next lesson, but for now, just simulate by running the JS):
    *   Change the `textContent` of `dynamic-heading` to "Updated Section Title".
    *   Change the `innerHTML` of `dynamic-paragraph` to include some `<strong>` bold text.
    *   Change the `src` and `alt` attributes of `dynamic-image` to a different placeholder image URL.
    *   Add a new class `highlight-section` to `content-area`.
    *   Append a new `p` element with some text to `content-area`.

### Helpful Links:
*   [MDN Web Docs: Manipulating documents](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
*   [W3Schools: HTML DOM Change HTML](https://www.w3schools.com/js/js_htmldom_html.asp)
*   [W3Schools: HTML DOM Styles](https://www.w3schools.com/js/js_htmldom_css.asp)
*   [HTML DOM addEventListener](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)
