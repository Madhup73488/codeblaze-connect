### What is CSS? The Separation of Concerns
CSS, or Cascading Style Sheets, is the language we use to describe the presentation of a web page written in a markup language like HTML.

Think of it as the "makeup" or "styling" of your website. HTML provides the structure (e.g., this is a heading, this is a paragraph), and CSS adds the visual flair (e.g., the heading is blue, centered, and has a shadow).

This separation of concerns—structure (HTML) from presentation (CSS)—is a core principle of modern web development, making your code easier to manage, update, and maintain.

### How to Add CSS to a Website (The Three Methods)
#### Inline CSS (Using the style attribute)
This method involves adding CSS properties directly to an HTML tag using the style attribute.

**Use case:** It's useful for quick tests or applying a single style, but it mixes presentation with structure and is not scalable. Avoid it for production code.

**Detailed Example:**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Inline CSS Example</title>
</head>
<body>
  <h1 style="color: #FF5733; font-size: 3em; text-align: center;">
    Hello, Inline World!
  </h1>
  <p style="background-color: #33FF57; padding: 15px; border: 2px solid darkgreen;">
    This paragraph has a background, padding, and a border.
  </p>
</body>
</html>
```
**Explanation:** Each HTML element has a `style` attribute with a list of `property: value;` pairs.

#### Internal CSS (Using the `<style>` tag)
This method places a `<style>` tag inside the `<head>` section of your HTML document. All CSS rules for that page are written within this tag.

**Use case:** Good for single-page websites or for applying page-specific styles without creating an extra file.

**Detailed Example:**
```html
<!DOCTYPE html>
<html>
<head>
  <title>Internal CSS Example</title>
  <style>
    /* This is a CSS comment */
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background-color: #f4f4f9;
      line-height: 1.6;
    }
    h1 {
      color: #2c3e50;
      text-decoration: underline wavy #3498db;
    }
    p {
      color: #34495e;
      margin-bottom: 20px;
    }
    .highlight {
      background-color: #f1c40f;
      padding: 5px;
      border-radius: 5px;
    }
  </style>
</head>
<body>
  <h1>My Awesome Blog Post</h1>
  <p>This is the first paragraph with some content. It follows the styles in the `head` section.</p>
  <p class="highlight">This paragraph is specifically highlighted because it has the `highlight` class.</p>
</body>
</html>
```
**Explanation:** We use selectors like `body`, `h1`, `p`, and `.highlight` to target elements and apply styles to them.

#### External CSS (Using a .css file - The Professional Standard)
This is the most common and recommended method. You create a separate file with a `.css` extension and link it to your HTML document using the `<link>` tag in the `<head>`.

**Use case:** Excellent for large projects, as it allows you to reuse the same stylesheet across multiple HTML pages. Changes to the stylesheet are reflected everywhere.

**Detailed Example:**
**File Structure:**
```
/project-folder
├── index.html
└── style.css
```
**index.html:**
```html
<!DOCTYPE html>
<html>
<head>
  <title>External CSS Example</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <header>
    <nav>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </nav>
  </header>
  <main>
    <h1>Welcome to My Website!</h1>
    <p>This content is styled by our external stylesheet.</p>
  </main>
</body>
</html>
```
**style.css:**
```css
/* style.css */
body {
  font-family: Georgia, 'Times New Roman', Times, serif;
  margin: 0;
  background-color: #fafafa;
}
header {
  background-color: #2980b9;
  padding: 20px;
}
nav a {
  color: white;
  text-decoration: none;
  margin: 0 15px;
  font-weight: bold;
}
main {
  padding: 20px;
}
h1 {
  color: #c0392b;
}
```
**Explanation:** The `<link>` tag creates a connection. The browser reads `style.css` and applies the rules to the HTML document.

### The CSS Ruleset: Anatomy of a Rule
A CSS ruleset consists of a selector and a declaration block.

*   **Selector:** Targets the HTML element(s) you want to style.
*   **Declaration Block:** Contains one or more declarations, each with a property and a value.
*   **Property:** The aspect you want to change (e.g., `color`, `font-size`, `width`).
*   **Value:** The setting for that property (e.g., `blue`, `16px`, `50%`).

Each declaration ends with a semicolon (`;`).

**Syntax Breakdown:**
```css
selector {
  property: value;
  property2: value2;
}

p {
  /* property: value; */
  color: red;
  font-size: 16px;
  line-height: 1.5;
}
```

### Common Selectors:
*   **Element Selector:** Styles all instances of an HTML element.
    `h2 { color: purple; } /* Styles all <h2> elements */`
*   **Class Selector:** Styles all elements with a specific class attribute. A class can be used on multiple elements.
    `.card { border: 1px solid #ccc; padding: 20px; } /* Styles all elements with class="card" */`
*   **ID Selector:** Styles a single element with a unique ID. An ID must be unique on the page.
    `#main-logo { width: 150px; } /* Styles the single element with id="main-logo" */`

### Exercise: Build Your First Styled Page
1.  Create a new folder named `my-styled-website`.
2.  Inside, create an `index.html` file and a `styles.css` file.
3.  In `index.html`, add a heading (`<h1>`), a paragraph (`<p>`), an unordered list (`<ul>`), and a button (`<button>`). Give the paragraph a class of `intro-text` and the list an ID of `main-nav`.
4.  Link your `styles.css` file to `index.html`.
5.  In `styles.css`, write rules to:
    *   Style the `<body>` with a background color and font family.
    *   Style the `<h1>` with a different color, a larger font size, and centered text.
    *   Use the `.intro-text` class to give the paragraph a border and padding.
    *   Use the `#main-nav` ID to remove the list bullets (`list-style: none;`).
    *   Style the button with a background color, padding, and rounded corners.

### Helpful Links:
*   [MDN Web Docs: CSS Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)
*   [W3Schools CSS Tutorial](https://www.w3schools.com/css/)
*   [Learn to Code HTML & CSS: The CSS Ruleset](https://learn.shayhowe.com/html-css/css-ruleset/)
