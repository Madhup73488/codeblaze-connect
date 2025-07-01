### What is HTML? The Language of the Web

HTML, or HyperText Markup Language, is the standard markup language for documents designed to be displayed in a web browser. It uses a system of "tags" to define the structure and content of a webpage.

Think of HTML as the skeleton of your website. It tells the browser what content is present (e.g., this is a heading, this is a paragraph, this is an image).

HTML5 is the latest version of HTML, bringing new elements, attributes, and APIs for more robust web development.

### HTML Document Structure (Boilerplate)

Every HTML document starts with a `<!DOCTYPE html>` declaration, which tells the browser which HTML version to use (HTML5).

The entire document is wrapped in an `<html>` tag.

The `<html>` tag contains two main sections:

*   `<head>`: Contains meta-information about the page (not visible on the page itself), like the page title, links to stylesheets, and scripts.
*   `<body>`: Contains all the visible content of the webpage.

**Detailed Example: Basic HTML5 Structure**
```html
<!DOCTYPE html>
<html lang="en"> <!-- 'lang="en"' specifies the primary language of the document -->
<head>
  <meta charset="UTF-8"> <!-- Specifies the character encoding for the document -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- Essential for responsive design -->
  <title>My First HTML5 Page</title> <!-- Appears in the browser tab/window title bar -->
</head>
<body>
  <!-- All visible content goes here -->
  <h1>Welcome to HTML5!</h1>
  <p>This is a paragraph.</p>
</body>
</html>
```
**Explanation:** This is the minimal, standard structure for an HTML5 document. The `<meta>` tags are crucial for proper rendering and responsiveness.

### HTML Elements, Tags, and Attributes

*   **Elements:** An HTML element is defined by a start tag, some content, and an end tag. For example, `<p>This is a paragraph</p>`.
*   **Tags:** The start (`<p>`) and end (`</p>`) markers that define an element.
*   **Content:** The text or other elements placed between the start and end tags.
*   **Empty (Void) Elements:** Some elements do not have an end tag and cannot contain content (e.g., `<br>`, `<img>`, `<hr>`).
*   **Attributes:** Provide additional information about an HTML element. They are always specified in the start tag and come in `name="value"` pairs.

**Common attributes:** `id`, `class`, `src`, `href`, `alt`, `title`.

**Detailed Example: Elements and Attributes**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Elements & Attributes</title>
</head>
<body>
    <!-- Heading Element with 'id' attribute -->
    <h1 id="main-heading">Understanding HTML</h1>

    <!-- Paragraph Element with 'class' attribute -->
    <p class="introduction-text">
        HTML elements form the building blocks of web pages.
        They are defined by tags and can have attributes.
    </p>

    <!-- Line Break (Empty Element) -->
    <p>This is a line.<br>This is a new line.</p>

    <!-- Horizontal Rule (Empty Element) -->
    <hr>

    <!-- Image Element with 'src' and 'alt' attributes -->
    <img src="https://placehold.co/150x100?text=Placeholder" alt="A simple placeholder image.">
</body>
</html>
```
**Explanation:** Notice how `<h1>` and `<p>` have both start and end tags with content, while `<br>`, `<hr>`, and `<img>` are self-closing. Attributes like `id`, `class`, `src`, and `alt` provide additional metadata or functionality.

### Block-level vs. Inline Elements

*   **Block-level Elements:** Start on a new line and take up the full width available (unless specified otherwise). Examples: `<div>`, `<p>`, `<h1>` to `<h6>`, `<ul>`, `<li>`.
*   **Inline Elements:** Do not start on a new line and only take up as much width as necessary for their content. Examples: `<span>`, `<a>`, `<strong>`, `<em>`, `<img>`.

**Detailed Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Block vs Inline</title>
    <style>
        /* Simple CSS for visual distinction */
        .block-element { border: 1px solid blue; margin: 5px; padding: 5px; }
        .inline-element { border: 1px solid green; margin: 2px; padding: 2px; }
    </style>
</head>
<body>
    <div class="block-element">This is a block-level div.</div>
    <p class="block-element">This is a block-level paragraph.</p>

    <span class="inline-element">This is an inline span.</span>
    <a href="#" class="inline-element">This is an inline link.</a>
    <strong class="inline-element">This is strong text.</strong>
</body>
</html>
```
**Explanation:** Observe how the `div` and `p` elements stack, while `span`, `a`, and `strong` flow on the same line. The borders help visualize their occupied space.

### Exercise: Build a Basic Webpage

1.  Create a new HTML file named `my_profile.html`.
2.  Set up the basic HTML5 boilerplate structure.
3.  In the `<body>`:
    *   Add a main heading (`<h1>`) with your name.
    *   Add a paragraph (`<p>`) introducing yourself.
    *   Include an image (`<img>`) of yourself (or a placeholder) with `src` and `alt` attributes.
    *   Add a section about your hobbies using a sub-heading (`<h2>`).
    *   Add another paragraph about your hobbies.
4.  Open the file in your web browser to see the structured content.

### Helpful Links:

*   [MDN Web Docs: Introduction to HTML](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML)
*   [W3Schools HTML Tutorial](https://www.w3schools.com/html/)
*   [HTML Tag Reference (MDN)](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
