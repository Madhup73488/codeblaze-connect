### Code Organization & Naming Conventions
#### BEM (Block Element Modifier)
A popular naming convention for CSS classes to improve readability and maintainability.

*   **Block:** Independent component (`.card`).
*   **Element:** Part of the block (`.card__image`, `.card__title`).
*   **Modifier:** A variation of the block or element (`.card--dark`, `.card__button--small`).

**Example (BEM):**
```html
<div class="product-card product-card--featured">
  <img class="product-card__image" src="..." alt="">
  <h2 class="product-card__title">Product Title</h2>
  <button class="product-card__button">Add to Cart</button>
</div>
```
### Performance Optimization
*   **Minification:** Removing all unnecessary characters (whitespace, comments) from your CSS file to reduce its size.
*   **Code Splitting:** Only loading the CSS needed for the current page.
*   **Optimizing Selectors:** Prefer simpler selectors (e.g., `.class-name`) over complex ones (e.g., `div > ul > li:nth-child(2) > a`).
*   **Hardware Acceleration:** Using `transform` and `opacity` for animations triggers GPU rendering, which is smoother than animating properties like `width` or `margin`. Use `transform: translateZ(0);` to force hardware acceleration.

### Accessibility (A11y) in CSS
*   **Color Contrast:** Use tools to ensure your text color has enough contrast against the background for readability.
*   **`outline`:** Don't remove the outline on focused elements (`:focus`), as it's crucial for keyboard navigation.
*   **`rem` for fonts:** Allows users to scale the font size for their needs.

### Debugging CSS
*   Become a master of your browser's Developer Tools.
*   Use the "Elements" panel to inspect, modify, and disable styles.
*   Use the "Computed" tab to see the final computed values of properties and which rules are applied.
*   Use the "Layout" tab to visualize the Box Model, Flexbox, and Grid.

### Exercise: Organize and Debug
1.  Take the stylesheet from a previous project.
2.  Refactor all your class names to follow the BEM methodology.
3.  Check your webpage with a color contrast checker to ensure it meets accessibility standards.
4.  Use the browser's developer tools to inspect an element, change its properties live, and understand the cascade and specificity.

### Helpful Links:
*   [Get BEM](http://getbem.com/)
*   [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
*   [Google Developers: Optimize CSS](https://developer.chrome.com/docs/lighthouse/performance/unminified-css)
*   [The State of CSS Survey](https://stateofcss.com/) (To see what's new and trending in CSS)
