### The Need for Semantics
Before HTML5, developers often used generic `<div>` elements with `id` or `class` attributes (e.g., `<div id="header">`, `<div class="footer">`) to structure a page. HTML5 introduced new semantic elements that provide inherent meaning to different parts of a webpage, making code more readable, improving accessibility, and aiding SEO.

### Structural Semantic Elements:

*   `<header>`: Represents introductory content, usually a group of navigational aids or a logo and headings.
*   `<nav>`: Contains navigation links to other pages or parts within the same page.
*   `<main>`: Represents the dominant content of the `<body>`. A document should have only one `<main>` element.
*   `<article>`: Represents a self-contained composition in a document, page, application, or site, which is intended to be independently distributable or reusable (e.g., a blog post, a news article).
*   `<section>`: Represents a standalone section of HTML content. It's a grouping of content, typically with a heading. It's less specific than `<article>`.
*   `<aside>`: Represents a portion of a document whose content is only indirectly related to the document's main content (e.g., sidebars, pull quotes, advertising blocks).
*   `<footer>`: Represents a footer for its nearest sectioning content or sectioning root element. Typically contains authorship information, copyright data, or links to related documents.

**Detailed Example: Semantic Page Layout**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Semantic HTML5 Layout</title>
    <style>
        body { font-family: sans-serif; margin: 0; background-color: #f8f8f8; }
        header, nav, main, article, aside, footer, section {
            border: 1px dashed #999;
            padding: 15px;
            margin: 10px;
            background-color: #fff;
        }
        header { background-color: #3498db; color: white; text-align: center; }
        nav a { margin-right: 15px; text-decoration: none; color: #2c3e50; font-weight: bold; }
        nav { background-color: #ecf0f1; text-align: center; }
        main { display: flex; flex-wrap: wrap; }
        article { flex: 2; margin-right: 10px; background-color: #fefefe; }
        aside { flex: 1; min-width: 200px; background-color: #f5f5f5; }
        footer { background-color: #34495e; color: white; text-align: center; }
    </style>
</head>
<body>
    <header>
        <h1>My Awesome Blog</h1>
        <p>Exploring the world of web development</p>
    </header>

    <nav>
        <a href="#home">Home</a>
        <a href="#articles">Articles</a>
        <a href="#contact">Contact</a>
    </nav>

    <main>
        <article id="first-article">
            <h2>The Power of Semantic HTML</h2>
            <p>Semantic HTML elements introduce meaning to your web content. Instead of just using generic `div`s, you can describe the purpose of each section.</p>
            <section>
                <h3>Benefits for Developers</h3>
                <p>It makes code more readable and easier to understand for other developers.</p>
            </section>
            <section>
                <h3>Benefits for Search Engines & Accessibility</h3>
                <p>Search engines can better understand the structure of your page, improving SEO. Screen readers can also navigate content more effectively.</p>
            </section>
        </article>

        <aside>
            <h3>Related Links</h3>
            <ul>
                <li><a href="#">Latest CSS Tips</a></li>
                <li><a href="#">JavaScript Fundamentals</a></li>
            </ul>
        </aside>
    </main>

    <footer>
        <p>&copy; 2025 My Awesome Blog. All rights reserved.</p>
    </footer>
</body>
</html>
```
**Explanation:** This example shows a common blog layout using semantic HTML5 tags. Notice how `main` wraps the primary content and `article` contains a self-contained blog post. The `aside` is for supplementary content.

### Other Semantic Elements (Brief mention)

*   `<details>`, `<summary>`: Creates a disclosure widget from which the user can retrieve additional information.
*   `<mark>`, `<time>`, `<figure>`, `<figcaption>`: (Covered in Lesson 1.2 and 1.3) these also enhance semantics.

### Exercise: Recreate Your Portfolio Page Semantically

1.  Take your `portfolio.html` file from Lesson 1.3.
2.  Refactor it to use HTML5 semantic elements:
    *   Wrap the entire page content (excluding `head`) in `<body>`.
    *   Use `<header>` for your main title and intro.
    *   Use `<nav>` for your navigation links.
    *   Wrap your main portfolio content (e.g., project listings) in a `<main>` element.
    *   For each project, use an `<article>` or `<section>` tag.
    *   Add a `<footer>` with copyright information.
3.  Add some basic CSS to visually distinguish these new semantic sections (e.g., different background colors or borders) to help you see their boundaries.

### Helpful Links:

*   [MDN Web Docs: HTML5 Semantic Elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#content_sectioning)
*   [W3Schools HTML Semantic Elements](https://www.w3schools.com/html/html5_semantic_elements.asp)
