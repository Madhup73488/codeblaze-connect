### Introduction to Responsive Web Design (RWD)
RWD is about building websites that adapt to any screen size, from tiny mobile phones to huge desktop monitors. It's no longer a nice-to-have; it's a necessity.

### The `@media` Rule
This is the core of RWD in CSS. It lets you apply a block of CSS only when certain conditions are met.

**Syntax and Common Features:**
*   **Breakpoints:** You define breakpoints (e.g., 768px for tablets, 1024px for desktops) where the layout changes.
*   **`min-width` and `max-width`:**
    *   `min-width`: Applies styles from a certain width upwards (Mobile-First approach).
    *   `max-width`: Applies styles from a certain width downwards (Desktop-First approach).
*   **Orientation:** `(orientation: landscape)` or `(orientation: portrait)`.

### The Mobile-First Approach (Recommended)
Start by styling for the smallest screen size first (the default CSS).
Use `min-width` media queries to add styles for larger screens. This ensures your base styles are lightweight for mobile users.

**Detailed Example: Responsive Card Layout**
**HTML:** (Same as the Flexbox exercise card layout)
```html
<div class="card-container">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
  <div class="card">Card 4</div>
</div>
```
**CSS (Mobile-First approach):**
```css
/* --- Default styles (for mobile screens, < 768px) --- */
.card-container {
  display: flex;
  flex-direction: column; /* Stack cards vertically by default */
  align-items: center;
  padding: 10px;
}
.card {
  width: 90%; /* Take up most of the screen width */
  margin-bottom: 15px;
  background-color: #ecf0f1;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* --- Tablet breakpoint (from 768px upwards) --- */
@media screen and (min-width: 768px) {
  .card-container {
    flex-direction: row; /* Change to a row layout */
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .card {
    width: calc(50% - 15px); /* Two columns with a gap */
    margin-bottom: 20px;
  }
}

/* --- Desktop breakpoint (from 1024px upwards) --- */
@media screen and (min-width: 1024px) {
  .card {
    width: calc(33.33% - 20px); /* Three columns with a gap */
  }
}
```
**Explanation:** We start with a single-column layout for mobile. Then, at 768px, we use Flexbox to create a two-column layout. At 1024px, we create a three-column layout.

### The `<meta name="viewport">` tag
This is essential for RWD. Add this line to the `<head>` of all your HTML files.
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
**Explanation:** It tells the browser to set the viewport width to the device's width and set the initial zoom level. Without it, mobile browsers will render the page at a desktop width and then scale it down.

### Exercise: Create a Responsive Navigation Bar
1.  Build a navigation bar with a logo and a set of links.
2.  By default (mobile-first), make the links stack vertically and fill the full width.
3.  At a breakpoint of 768px (using `min-width`), use Flexbox to make the links align horizontally in a row.

### Helpful Links:
*   [MDN Web Docs: Using media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)
*   [CSS-Tricks: A Guide to the viewport meta tag](https://css-tricks.com/probably-use-initial-scale1/)
