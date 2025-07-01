### Introduction to Flexbox
A powerful layout model for arranging items in a single direction—either a row or a column. It's perfect for components like navigation bars, card grids, and forms.

**Key Concept:** You work with a Flex Container (the parent) and Flex Items (the children).

### Flex Container Properties (Applied to the parent)
*   **`display: flex;`**: This is the magic line. It turns the element into a flex container.
*   **`flex-direction`**: Sets the main axis.
    *   `row` (default): Horizontal, left to right.
    *   `column`: Vertical, top to bottom.
    *   `row-reverse`, `column-reverse`: Reverses the order.
*   **`justify-content`**: Aligns items along the main axis.
    *   `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`.
*   **`align-items`**: Aligns items along the cross axis (perpendicular to the main axis).
    *   `flex-start`, `flex-end`, `center`, `stretch`, `baseline`.
*   **`flex-wrap`**: Controls wrapping.
    *   `nowrap` (default), `wrap`, `wrap-reverse`.

### Flex Item Properties (Applied to the children)
*   **`flex-grow`**: Defines how much an item should grow relative to others.
*   **`flex-shrink`**: Defines how much an item should shrink.
*   **`flex-basis`**: The initial size of the item before `flex-grow`/`shrink`.
*   **`flex`**: Shorthand for `flex-grow` `flex-shrink` `flex-basis`.
*   **`order`**: Changes the visual order of items.

### Detailed Example: Building a Centered Card
```html
<div class="flex-container">
  <div class="flex-item">
    <p>This box is perfectly centered.</p>
  </div>
</div>
```
```css
.flex-container {
  display: flex;
  justify-content: center; /* Horizontally centers the item on the main axis (row) */
  align-items: center;    /* Vertically centers the item on the cross axis */
  height: 100vh; /* Set a height for the container to see the centering */
  border: 2px dashed #3498db;
}
.flex-item {
  width: 250px;
  padding: 20px;
  background-color: #2ecc71;
  color: white;
  text-align: center;
  border-radius: 10px;
}
```
### Exercise: Responsive Card Grid
1.  Create a parent `div` with the class `card-container`.
2.  Inside, create four `divs` with the class `card`.
3.  Apply `display: flex;` to the `card-container`.
4.  Use `flex-wrap: wrap;` so the cards wrap to a new line if they don't fit.
5.  Style each card with a fixed `flex-basis` and a `flex-grow` of 1. Experiment with `flex-grow` to see how the items stretch.
6.  Use `justify-content: space-around;` to distribute space between the cards.
7.  **Bonus:** On hover, use `transform: scale(1.05);` to add a zoom effect.

### Helpful Links:
*   [CSS-Tricks: A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) (An essential resource!)
*   [Flexbox Froggy](https://flexboxfroggy.com/) (A fun, interactive game to practice Flexbox)
