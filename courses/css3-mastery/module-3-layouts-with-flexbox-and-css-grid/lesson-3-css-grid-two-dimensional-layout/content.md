### Introduction to CSS Grid
A two-dimensional layout system that allows you to control the placement of elements in both rows and columns simultaneously. It's ideal for overall page layouts and complex section arrangements.

**Key Concept:** You define a grid on the Grid Container (parent) and place Grid Items (children) into the defined cells.

### Grid Container Properties (Applied to the parent)
*   **`display: grid;`**: The new magic line.
*   **`grid-template-columns`**: Defines the column tracks.
    *   `grid-template-columns: 1fr 1fr 1fr;` (three equal columns). `fr` stands for "fractional unit".
    *   `grid-template-columns: 200px auto 1fr;` (fixed, auto-sized, and fractional columns).
*   **`grid-template-rows`**: Defines the row tracks.
*   **`gap`, `row-gap`, `column-gap`**: Sets spacing between grid cells.
*   **`grid-template-areas`**: A powerful way to name grid areas for semantic layout.

### Grid Item Properties (Applied to the children)
*   **`grid-column: start / end;`**: Place an item by line numbers.
*   **`grid-row: start / end;`**: Place an item by line numbers.
*   **`grid-area: area-name;`**: Place an item in a named area.

### Detailed Example: Building a Page Layout with `grid-template-areas`
**HTML:**
```html
<div class="grid-container">
  <header class="header">Header</header>
  <nav class="sidebar">Sidebar</nav>
  <main class="main-content">Main Content</main>
  <footer class="footer">Footer</footer>
</div>
```
**CSS:**
```css
.grid-container {
  display: grid;
  /* Define the layout using named areas */
  grid-template-areas:
    "header  header  header"
    "sidebar main    main"
    "footer  footer  footer";
  /* Define the sizes of the columns and rows */
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 15px;
  min-height: 100vh;
}

.header { grid-area: header; background: #34495e; }
.sidebar { grid-area: sidebar; background: #95a5a6; }
.main-content { grid-area: main; background: #ecf0f1; }
.footer { grid-area: footer; background: #2c3e50; }

/* Add padding and text styles for visibility */
.grid-container > * { padding: 20px; color: white; }
.main-content { color: #333; }
```
**Explanation:** The `grid-template-areas` property allows you to create a visual map of your layout right in the CSS, making it incredibly readable.

### Exercise: Build a Photo Gallery Grid
1.  Create a `div` with the class `gallery-grid`. Inside, add 8 `img` elements.
2.  Use `display: grid;` and `grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));` to create a responsive, flexible grid that automatically adjusts the number of columns based on screen size.
3.  Add a `gap` to the grid.
4.  Give some images a class (e.g., `wide-image`) and use `grid-column: span 2;` to make them span two columns.

### Helpful Links:
*   [CSS-Tricks: A Complete Guide to CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) (Another essential guide!)
*   [Grid Garden](https://cssgridgarden.com/) (An interactive game to learn Grid)
*   [MDN Web Docs: CSS Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
