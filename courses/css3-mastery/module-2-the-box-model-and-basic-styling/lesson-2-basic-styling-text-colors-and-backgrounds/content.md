### Text and Font Properties
#### font-family
```css
/* Multiple font names as fallbacks */
body { font-family: 'Helvetica Neue', Arial, sans-serif; }
h1 { font-family: Georgia, serif; }
```
#### font-size
```css
/* Pixels (absolute, not scalable) */
p { font-size: 16px; }

/* REM (relative to root font size, ideal for accessibility) */
/* If html { font-size: 16px; } then 1rem = 16px. */
h1 { font-size: 3rem; } /* 48px */
p { font-size: 1rem; }  /* 16px */

/* EM (relative to parent element's font size) */
.container { font-size: 20px; }
.container p { font-size: 1.2em; } /* 1.2 * 20px = 24px */
```
#### font-weight
`bold`, `normal`, or a number from 100-900.
```css
h1 { font-weight: 700; } /* Same as bold */
.light-text { font-weight: 300; }
```
#### line-height
Adjusts the space between lines of text.
```css
p { line-height: 1.5; } /* 1.5 times the font size (recommended unitless value) */
```
#### text-align
```css
.centered-text { text-align: center; }
.justified-paragraph { text-align: justify; }
```
#### text-shadow
```css
h1 {
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  /* horizontal-offset vertical-offset blur-radius color */
}
```
### Color Values
*   **Named Colors:** `color: red;`
*   **Hexadecimal (#rrggbb):** `#FF5733`, `#2ecc71`
*   **RGB (rgb(r, g, b)):** `rgb(255, 0, 0)`
*   **RGBA (rgba(r, g, b, a)):** `rgba(0, 0, 0, 0.5)` (alpha `a` is for transparency, from 0 to 1).
*   **HSL (hsl(h, s, l)):** `hsl(300, 100%, 50%)` (Hue, Saturation, Lightness).

**Example:**
```css
.opaque-box { background-color: rgb(52, 152, 219); }
.semi-transparent-box { background-color: rgba(52, 152, 219, 0.7); }
```
### Background Properties
#### background-color
`background-color: #f1f1f1;`
#### background-image
```css
body {
  background-image: url('path/to/image.jpg');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover; /* Resize to cover the entire container */
}
```
#### background-size
*   **cover:** Scales the image to cover the entire container, potentially cropping parts.
*   **contain:** Scales the image to fit inside the container, without cropping.

#### Shorthand background
```css
.hero-section {
  background: #f4f4f9 url('hero.jpg') no-repeat center center / cover;
  /* color image repeat position / size */
}
```
### Exercise: Create a Styled Profile Card
1.  Create an HTML `div` with a class `profile-card`. Inside, add an `<img>`, a heading (`<h2>`), and a paragraph (`<p>`).
2.  In your CSS, style the `profile-card` with a `background-color`, a `border-radius`, and `box-shadow` (e.g., `0 4px 8px rgba(0, 0, 0, 0.1)`).
3.  Style the `<h2>` and `<p>` using different `font-family`, `font-size` (using rem), `color`, and `line-height` properties.
4.  Give the image a `width` of 100% and `height: auto;` to make it responsive.
5.  Add a semi-transparent `rgba` background color to the card to make it pop.

### Helpful Links:
*   [MDN Web Docs: Text and Font Styling](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Fonts)
*   [MDN Web Docs: Backgrounds and Borders](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Backgrounds_and_Borders)
*   [CSS Tricks: A Guide to CSS Color](https://css-tricks.com/almanac/properties/c/color/)
