### The Document Object Model (DOM)
*   The DOM is a programming interface for web documents. It represents the page so that programs (like JavaScript) can change the document structure, style, and content.
*   When a web page is loaded, the browser creates a Document Object Model of the page. It's a tree-like structure of nodes, where each HTML element is a node.

### Accessing Elements
*   **`document.getElementById()`**: Selects a single element by its unique `id` attribute. Returns the element object or `null` if not found.
    ```javascript
    const myDiv = document.getElementById('my-div');
    if (myDiv) {
      console.log("Found element with ID 'my-div'");
    }
    ```
*   **`document.getElementsByClassName()`**: Selects all elements with a specific class name. Returns an `HTMLCollection` (live collection, similar to an array, but not a true array).
    ```javascript
    const cards = document.getElementsByClassName('card');
    console.log(cards[0]); // Access first element
    // for (let i = 0; i < cards.length; i++) { ... } // Iterate using for loop
    ```
*   **`document.getElementsByTagName()`**: Selects all elements of a specific HTML tag name. Returns an `HTMLCollection`.
    ```javascript
    const paragraphs = document.getElementsByTagName('p');
    console.log(`There are ${paragraphs.length} paragraphs.`);
    ```
*   **`document.querySelector()`**: The most powerful and flexible method. Selects the **first** element that matches a specified CSS selector.
    *   Uses standard CSS selectors (`.class`, `#id`, `tag`, `tag.class`, `tag#id`, `[attribute]`, etc.).
    ```javascript
    const firstListItem = document.querySelector('li');          // First <li>
    const specificCard = document.querySelector('.product-card'); // First element with class 'product-card'
    const mainTitle = document.querySelector('#main-heading');   // Element with ID 'main-heading'
    const inputWithTypeEmail = document.querySelector('input[type="email"]');
    ```
*   **`document.querySelectorAll()`**: Selects **all** elements that match a specified CSS selector. Returns a `NodeList` (non-live collection, similar to an array).
    ```javascript
    const allListItems = document.querySelectorAll('li'); // All <li> elements
    allListItems.forEach(item => { // NodeList can be iterated with forEach
      console.log(item.textContent);
    });

    const allButtons = document.querySelectorAll('button.action-btn'); // Buttons with specific class
    ```

### Navigating the DOM (Parent, Child, Siblings)
*   `parentNode`: Returns the parent node of an element.
*   `children`: Returns a live `HTMLCollection` of all child **elements** (excluding text nodes, comments).
*   `childNodes`: Returns a live `NodeList` of all child **nodes** (including text nodes, comments).
*   `firstElementChild`, `lastElementChild`: Returns the first/last child element.
*   `nextElementSibling`, `previousElementSibling`: Returns the next/previous sibling element.
    ```html
    <div id="parent">
      <p id="first-child">First child</p>
      <!-- a comment -->
      <span id="second-child">Second child</span>
    </div>
    ```
    ```javascript
    const firstChild = document.getElementById('first-child');
    console.log(firstChild.parentNode.id);           // "parent"
    console.log(firstChild.nextElementSibling.id);   // "second-child"

    const parentDiv = document.getElementById('parent');
    console.log(parentDiv.children.length);          // 2 (p, span)
    console.log(parentDiv.childNodes.length);        // 5 (text, p, text, comment, text, span, text) - browser dependent
    console.log(parentDiv.firstElementChild.id);     // "first-child"
    ```

### Exercise: Highlight List Items
1.  Create an HTML unordered list (`<ul>`) with at least 5 list items (`<li>`). Give some of them a class (e.g., `highlight`).
2.  Using `document.querySelectorAll()`, select all `<li>` elements.
3.  Iterate through the `NodeList`. For each `<li>`:
    *   If it has the class `highlight`, change its background color to yellow directly using `element.style.backgroundColor`.
    *   For all other `<li>` elements, log their `textContent` to the console.
4.  Using `document.getElementById()`, select the parent `<ul>` and log how many direct child elements it has.

### Helpful Links:
*   [MDN Web Docs: Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
*   [W3Schools: HTML DOM Elements](https://www.w3schools.com/js/js_htmldom_elements.asp)
*   [DOM Traversing (JavaScript.info)](https://javascript.info/dom-navigation)
