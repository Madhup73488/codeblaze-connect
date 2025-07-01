### Hyperlinks (`<a>`)

The `<a>` (anchor) element is used to create hyperlinks, which connect one web page to another, or to different parts within the same page.

*   **`href` attribute:** Specifies the URL the link goes to.
*   **`target` attribute:**
    *   `_self` (default): Opens the linked document in the same window/tab.
    *   `_blank`: Opens the linked document in a new window/tab.
    *   `_parent`: Opens the linked document in the parent frame.
    *   `_top`: Opens the linked document in the full body of the window.
*   **Absolute vs. Relative Paths:**
    *   **Absolute URL:** Full address including protocol (e.g., `https://www.example.com/page.html`).
    *   **Relative URL:** Path relative to the current file (e.g., `about.html`, `images/pic.jpg`, `../index.html`).
*   **Internal Links (Anchors):** Link to a specific section within the same page using `id` attributes.

**Detailed Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Links</title>
</head>
<body>
    <h1>Navigating the Web</h1>
    <p>Visit the <a href="https://www.google.com" target="_blank">Google Search Engine</a> in a new tab.</p>
    <p>Go to our <a href="about.html">About Us</a> page.</p>

    <h2>Table of Contents</h2>
    <ul>
        <li><a href="#section1">Go to Section 1</a></li>
        <li><a href="#section2">Go to Section 2</a></li>
    </ul>

    <h3 id="section1">Section 1: Introduction</h3>
    <p>This is the first section of content.</p>
    <!-- Long content here to enable scrolling -->
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
    <h3 id="section2">Section 2: Details</h3>
    <p>This is the second section with more details.</p>
</body>
</html>
```
**Explanation:** `href="about.html"` is a relative link. `href="#section1"` jumps to the element with `id="section1"`.

### Images (`<img>`)

The `<img>` element is used to embed an image into the document. It's an empty (void) element.

*   **`src` attribute (Source):** Specifies the path to the image file.
*   **`alt` attribute (Alternative Text):** Provides a text description of the image. This is crucial for:
    *   Accessibility (screen readers for visually impaired users).
    *   SEO (search engines).
    *   When the image fails to load.
*   **`width` and `height` attributes:** Can be used to set the dimensions of the image. It's often better to control image sizing with CSS for responsiveness.
*   **`title` attribute:** Provides extra information about the image, displayed as a tooltip on hover.
*   **Responsive Images (Brief Introduction):** Mention `max-width: 100%; height: auto;` in CSS.

**Detailed Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Images</title>
    <style>
        img {
            border: 2px solid #333;
            margin: 10px;
            border-radius: 8px;
            /* Basic responsiveness using CSS */
            max-width: 100%;
            height: auto;
        }
    </style>
</head>
<body>
    <h1>My Photo Gallery</h1>
    <img src="https://placehold.co/300x200?text=Landscape" alt="A generic landscape placeholder" title="Beautiful mountains">
    <img src="https://placehold.co/200x200?text=Portrait" alt="A generic portrait placeholder" title="Person looking forward">
    <p>If the image above fails to load, you will see the descriptive alt text.</p>
</body>
</html>
```
**Explanation:** The `alt` text is vital. The CSS styles ensure the images look good and are somewhat responsive.

### Image Maps (`<map>`, `<area>`) (Optional/Advanced)

Create clickable areas within a single image.

**Detailed Example (Conceptual):**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Image Map</title>
</head>
<body>
    <img src="https://placehold.co/400x300?text=Clickable+Map" alt="Clickable map of regions" usemap="#world-map">

    <map name="world-map">
      <area shape="rect" coords="0,0,200,150" href="north.html" alt="North Region">
      <area shape="circle" coords="300,75,50" href="south.html" alt="South Region">
    </map>
    <p>Click on different parts of the image to go to different pages.</p>
</body>
</html>
```
**Explanation:** The `usemap` attribute links the image to the `<map>` element. `<area>` defines clickable regions.

### Figures and Captions (`<figure>`, `<figcaption>`) (HTML5 Semantic)

*   `<figure>`: Used to encapsulate self-contained content (like images, diagrams, code snippets, or videos) that is referenced from the main flow of the document.
*   `<figcaption>`: Provides a caption for the content within a `<figure>`.

**Detailed Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Figures</title>
    <style>
        figure {
            border: 1px solid #ccc;
            padding: 10px;
            margin: 20px;
            display: inline-block; /* To show border around content */
        }
        figcaption {
            font-style: italic;
            text-align: center;
            margin-top: 5px;
        }
    </style>
</head>
<body>
    <figure>
        <img src="https://placehold.co/250x180?text=My+Sketch" alt="A simple sketch of a house">
        <figcaption>Figure 1: My first digital sketch.</figcaption>
    </figure>

    <figure>
        <pre><code>
function greet(name) {
  console.log(`Hello, ${name}!`);
}
        </code></pre>
        <figcaption>Code Snippet 1: A simple JavaScript greeting function.</figcaption>
    </figure>
</body>
</html>
```
**Explanation:** `figure` groups the image/code with its caption, giving it semantic meaning as a distinct unit.

### Exercise: Create a Simple Portfolio Page

1.  Create an `index.html` file.
2.  Add a main heading with "My Portfolio".
3.  Create a navigation section with links to "Home", "Projects", and "Contact" (these can be dummy links for now, e.g., `#`). Ensure "Projects" opens in a new tab.
4.  Create a section for "Projects". For each project:
    *   Use a `<h2>` for the project title.
    *   Include a `figure` element. Inside the `figure`, add an `<img>` (placeholder image) and a `<figcaption>` describing the project.
    *   Add a paragraph describing the project briefly.
    *   Include a link to "View Project" (dummy link).

### Helpful Links:

*   [MDN Web Docs: HTML Links](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
*   [MDN Web Docs: HTML Images](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)
*   [Understanding Alt Text](https://www.a11yproject.com/posts/alt-text/)
