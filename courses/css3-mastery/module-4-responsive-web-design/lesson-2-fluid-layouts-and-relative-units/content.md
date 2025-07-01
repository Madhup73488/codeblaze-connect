### Why Fluid Layouts?
Fluid layouts use relative units (percentages, em, rem, vw) that adapt to the user's screen size or font settings. This is much more flexible than using fixed pixel values.

### Relative Units in Detail
*   **% (Percentage):** Relative to the parent element's size.
*   **em:** Relative to the font-size of the parent element.
*   **rem:** Relative to the font-size of the root (`<html>`) element. This is fantastic for consistent and accessible scaling.
*   **vw (Viewport Width):** 1vw is 1% of the viewport's width.
*   **vh (Viewport Height):** 1vh is 1% of the viewport's height.

### Detailed Examples
#### Fluid Image
```css
/* The image will never be wider than its parent container */
img {
  max-width: 100%;
  height: auto; /* This maintains the aspect ratio */
  display: block;
}
```
#### Font Size with rem
```css
/* In your root element */
html {
  font-size: 16px; /* 1rem = 16px */
}
/* Now, all rem units are based on this value. */
h1 { font-size: 3rem; }   /* 3 * 16 = 48px */
p { font-size: 1.125rem; } /* 1.125 * 16 = 18px */
.button { padding: 0.5rem 1rem; } /* Scales padding with font size */
```
#### Scaling Text with vw
```css
/* Font size scales with the width of the viewport */
h1 {
  font-size: 5vw;
  /* You MUST use a media query to set a min/max size for readability */
  min-font-size: 2rem;
  max-font-size: 6rem;
}
```
### Exercise: Build a Fluid Hero Section
1.  Create a `div` with a class `hero`. Set its `height` to `100vh` to make it fill the viewport height.
2.  Add a heading (`<h1>`) inside the hero. Use `font-size: 8vw;` to make its size scale with the screen width.
3.  Add a button with `padding` and `border-radius` defined in `rem` units.
4.  Add a `max-width` media query to your CSS to ensure the font size doesn't become too small on tiny screens.

### Helpful Links:
*   [CSS-Tricks: CSS Units](https://css-tricks.com/the-lengths-of-css/)
*   [MDN Web Docs: Relative Length Units](https://developer.mozilla.org/en-US/docs/Web/CSS/length#relative_length_units)
