### The Cascade: Where Rules Come From
The "C" in CSS stands for Cascade, which is the process of combining different stylesheets and resolving conflicts between rules.

When multiple rules apply to the same element, the cascade determines which one wins. The order of precedence is:
1.  **Inline styles** (highest priority)
2.  **Internal/External styles** (last-declared rule wins if specificity is equal)
3.  **Browser default styles** (lowest priority)

**Example of the Cascade:**
**style.css**
```css
/* Rule from external file */
p {
  color: blue; /* This is applied first */
}
```
**index.html**
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="style.css">
  <style>
    /* Rule from internal stylesheet (overrides external if specificity is equal) */
    p {
      color: green; /* This will override 'blue' */
    }
  </style>
</head>
<body>
  <p>This paragraph will be green.</p>
  <p style="color: red;">This paragraph will be red.</p>
</body>
</html>
```
**Explanation:** The first paragraph is green because the internal style is declared after the external one in the cascade. The second paragraph is red because inline styles have the highest priority.

### Specificity: The Tie-Breaker
Specificity is a score that determines which CSS rule is more relevant and should be applied when two or more rules with different selectors target the same element.

**Specificity Hierarchy (from highest to lowest):**
1.  Inline Styles (always win, except with `!important`)
2.  IDs (`#my-id`)
3.  Classes, Attributes, Pseudo-classes (`.my-class`, `[type="text"]`, `:hover`)
4.  Elements, Pseudo-elements (`p`, `h1`, `::before`)

**Calculating Specificity:**
Think of it as a three-column number: (ID, Class, Element).
*   Inline styles get a score of (1,0,0,0).
*   `#main-header` -> (1, 0, 0) -> Score: 100
*   `.nav-item.active` -> (0, 2, 0) -> Score: 20
*   `div.card p` -> (0, 1, 2) -> Score: 12
*   `p` -> (0, 0, 1) -> Score: 1

**Detailed Example of Specificity:**
```html
<ul id="main-nav">
  <li class="nav-item">
    <a href="#" class="nav-link">Home</a>
  </li>
</ul>
```
```css
/* Rule 1: Specificity (0, 0, 1) -> 1 */
a {
  color: red;
}

/* Rule 2: Specificity (0, 1, 0) -> 10 */
.nav-link {
  color: blue; /* This wins over Rule 1 */
}

/* Rule 3: Specificity (1, 0, 0) -> 100 */
#main-nav a {
  color: green; /* This wins over Rule 2 */
}

/* Rule 4: Specificity (0, 2, 0) -> 20 */
.nav-item .nav-link {
  color: orange; /* This has a specificity of 20, but Rule 3 has 100. Rule 3 wins. */
}
```
**Final Color:** The link text will be green because Rule 3 has the highest specificity (100).

**The `!important` keyword:** This powerful (and often dangerous) keyword overrides all other specificity. Use it sparingly, as it makes debugging difficult.
```css
.my-element {
  color: black !important; /* This will always be black, unless another !important rule is more specific. */
}
```

### Inheritance: Passing Styles Down
Some CSS properties are automatically inherited by child elements from their parent.

**Inherited Properties (e.g., `font-family`, `color`, `text-align`, `line-height`):**
```css
body {
  font-family: Arial, sans-serif;
  color: #333;
}
/* All child elements (h1, p, etc.) will inherit this font and color unless specified otherwise. */
```
**Non-Inherited Properties (e.g., `border`, `margin`, `padding`, `width`, `height`, `background-color`):**
```css
.parent-box {
  border: 2px solid red; /* Children will NOT inherit this border */
  padding: 20px; /* Children will NOT inherit this padding */
}
```

### Exercise: The Specificity Challenge
1.  Create an HTML file with the following structure:
    ```html
    <div id="container">
      <p class="text-style" style="font-size: 18px;">
        This is a <span class="emphasis">styled</span> paragraph.
      </p>
    </div>
    ```
2.  Write a CSS file and try to change the color of the `<span>` to purple.
3.  Add the following conflicting rules and predict the final color of the `<span>` for each one.
    *   `p .emphasis { color: red; }`
    *   `.emphasis { color: blue; }`
    *   `#container .emphasis { color: green; }`
    *   `span { color: orange; }`
    *   `p span { color: yellow; }`
    *   `#container p .emphasis { color: purple; }`
4.  Use your browser's developer tools to inspect the element and see which rule is applied and why.

### Helpful Links:
*   [MDN Web Docs: Specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
*   [CSS-Tricks: Specificity Calculator](https://specificity.keegan.st/) (Use this tool to check your answers!)
*   [MDN Web Docs: Inheritance](https://developer.mozilla.org/en-US/docs/Web/CSS/inheritance)
