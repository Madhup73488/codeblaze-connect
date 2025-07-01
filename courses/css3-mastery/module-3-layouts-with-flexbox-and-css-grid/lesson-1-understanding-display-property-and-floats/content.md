### The display Property
`display` is one of the most fundamental CSS properties, controlling how an element is rendered on the page.

*   **block:** Elements take up the full width available and start on a new line (`<div>`, `<h1>`, `<p>`).
*   **inline:** Elements only take up as much width as needed and do not start on a new line (`<span>`, `<a>`, `<strong>`).
*   **inline-block:** A hybrid. Elements behave like inline but can have their width and height set, like block elements.

### Floats (The Old Way of Layout)
Before Flexbox and Grid, the `float` property was a common (and often frustrating) way to create multi-column layouts.

`float: left;` or `float: right;` removes an element from the normal document flow and moves it to the side, allowing other content to wrap around it.

**The `clear` Property:** Used to stop wrapping and ensure an element appears below floated elements. `clear: both;` is most common.

**The Clearfix Hack:** A technique to force a parent element to contain its floated children, preventing layout issues.

**Example:**
```html
<div class="container clearfix">
  <div class="column-left">...</div>
  <div class="column-right">...</div>
</div>
```
```css
.column-left { float: left; width: 50%; }
.column-right { float: right; width: 50%; }
/* The clearfix hack to contain the floats */
.clearfix::after {
  content: "";
  display: table;
  clear: both;
}
```
**Why Learn This?** It's important to understand this history to work with older codebases and appreciate the power of modern layout methods.

### Exercise:
1.  Create a simple HTML page with two `div` elements, each containing some text.
2.  Use `float: left;` on both divs to make them sit side-by-side.
3.  Add a third `div` below them and observe how it wraps around the floated elements.
4.  Apply the clearfix hack to the parent container and see how the layout fixes itself.

### Helpful Links:
*   [CSS-Tricks: All About Floats](https://css-tricks.com/all-about-floats/)
*   [MDN Web Docs: display](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
