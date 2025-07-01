### Attribute Selectors
Target elements based on the presence or value of their HTML attributes.

*   `[attribute]`: Selects elements with the specified attribute.
    ```css
    /* Styles all elements with a 'data-modal' attribute */
    [data-modal] { cursor: pointer; }
    ```
*   `[attribute="value"]`: Selects elements where the attribute has an exact value.
    ```css
    /* Styles all input elements with type="text" */
    input[type="text"] { border: 1px solid blue; }
    ```
*   `[attribute^="value"]`: Selects elements where the attribute value starts with a string.
    ```css
    /* Styles all links whose href starts with 'https://' */
    a[href^="https://"] { color: green; }
    ```
*   `[attribute$="value"]`: Selects elements where the attribute value ends with a string.
    ```css
    /* Styles all links to PDF files */
    a[href$=".pdf"] { background-image: url('pdf-icon.png'); }
    ```
*   `[attribute*="value"]`: Selects elements where the attribute value contains a string.
    ```css
    /* Styles elements with a class that contains 'button' anywhere (e.g., 'primary-button') */
    [class*="button"] { font-weight: bold; }
    ```

### Combinators
Combine selectors to select elements based on their position in the HTML tree.

*   **Descendant Selector (space):** `selector1 selector2` - Selects all `selector2` elements that are anywhere inside `selector1`.
    ```css
    /* Styles ALL paragraphs inside a div */
    div p {
      margin-top: 10px;
    }
    ```
*   **Child Selector (>):** `selector1 > selector2` - Selects only direct children.
    ```css
    /* Styles ONLY the direct li children of a ul, not nested lists */
    ul > li {
      list-style-type: square;
    }
    ```
*   **Adjacent Sibling Selector (+):** `selector1 + selector2` - Selects the first `selector2` that immediately follows `selector1` and is at the same level.
    ```css
    /* Styles the paragraph immediately after an h2 */
    h2 + p {
      font-style: italic;
    }
    ```
*   **General Sibling Selector (~):** `selector1 ~ selector2` - Selects all `selector2` elements that are siblings of `selector1` and appear after it.
    ```css
    /* Styles ALL paragraphs that are siblings of an h1 and appear after it */
    h1 ~ p {
      color: gray;
    }
    ```

### Pseudo-classes and Pseudo-elements
#### Pseudo-classes (`:`)
Target elements based on their state or position.

*   `:hover`: When the mouse is over the element.
*   `:focus`: When an input element is selected.
*   `:active`: When an element is clicked.
*   `:first-child`, `:last-child`: Target the first/last element in a group of siblings.
*   `:nth-child(n)`: Target a specific child element (e.g., `3`, `2n` for every second child, `odd`, `even`).
*   `:not(selector)`: Excludes elements that match the selector.

**Example:**
```css
a:hover { text-decoration: underline; } /* On hover */
input:focus { border-color: blue; } /* On focus */
li:nth-child(2n) { background-color: #eee; } /* Zebra stripes on list items */
```
#### Pseudo-elements (`::`)
Style specific parts of an element.

*   `::before`, `::after`: Creates a virtual child element before/after the content. Used with the `content` property.
*   `::first-line`, `::first-letter`: Styles the first line/letter of a block-level element.

**Example:**
```css
h2::after {
  content: " - New!"; /* Add text after the h2 */
  color: red;
  font-size: 0.8em;
}

p::first-letter {
  font-size: 2em;
  font-weight: bold;
  float: left; /* Creates a drop cap effect */
  margin-right: 5px;
}
```
### Exercise: Build a Custom To-Do List
1.  Create an HTML list (`<ul>` with `<li>` items).
2.  Use a pseudo-class (`:nth-child(odd)`) to give every other list item a different background color (zebra stripes).
3.  Use attribute selectors to style a link in the list that has a `target="_blank"` attribute with an icon or special color.
4.  Use combinators to style only the `<li>` elements that are direct children of the `<ul>`.
5.  Use a pseudo-element (`::before`) to add a custom checkmark or bullet point image to each list item.

### Helpful Links:
*   [MDN Web Docs: CSS Selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
*   [CSS-Tricks: CSS-Specific Selectors](https://css-tricks.com/how-css-selectors-work/)
*   [A Complete Guide to Pseudo-Elements](https://css-tricks.com/a-guide-to-css-pseudo-elements/)
