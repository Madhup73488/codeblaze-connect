### Headings (`<h1>` to `<h6>`)

Used to define headings for sections of your content. `<h1>` is the most important (main heading), and `<h6>` is the least important.

**Importance of Hierarchy:** Use headings logically to structure your document. Don't skip levels (e.g., from `<h1>` directly to `<h3>`) for styling purposes; use CSS for visual adjustments.

**Detailed Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HTML Headings</title>
</head>
<body>
    <h1>Main Page Title</h1>
    <p>This is an introductory paragraph.</p>

    <h2>Section One</h2>
    <p>Content for section one.</p>

    <h3>Subsection A</h3>
    <p>More detailed content for subsection A.</p>

    <h4>Sub-subsection A.1</h4>
    <p>Even more specific content here.</p>
</body>
</html>
```

### Paragraphs (`<p>`)

Used to define blocks of text. Browsers automatically add some space before and after paragraphs.

**Detailed Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HTML Paragraphs</title>
</head>
<body>
    <p>This is the first paragraph of text on our webpage. It contains general information about the topic.</p>
    <p>Here is the second paragraph. Each paragraph starts on a new line and browsers automatically add some margin around them.</p>
</body>
</html>
```

### Line Breaks (`<br>`) and Horizontal Rules (`<hr>`)

*   `<br>`: Inserts a single line break. Useful for breaking lines within a paragraph without creating a new paragraph.
*   `<hr>`: Inserts a thematic break (horizontal rule) across the page, often displayed as a horizontal line.

**Detailed Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Breaks and Rules</title>
</head>
<body>
    <p>This is a paragraph with a line break.<br>The text after the break will appear on a new line within the same paragraph.</p>
    <hr>
    <p>This paragraph is separated from the one above by a horizontal rule, indicating a thematic change.</p>
</body>
</html>
```

### Emphasis and Strong Importance (`<em>`, `<strong>`)

*   `<em>` (Emphasis): Renders as italic by default. Indicates emphasis (like a spoken emphasis).
*   `<strong>` (Strong Importance): Renders as bold by default. Indicates strong importance (e.g., critical warnings, key words).

**Semantic Meaning:** These tags have semantic meaning beyond just visual styling. Use them to convey importance to screen readers and search engines. For purely visual bold/italic, use CSS.

**Detailed Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Emphasis & Strong</title>
</head>
<body>
    <p>I <em>really</em> love HTML!</p>
    <p><strong>Warning:</strong> Do not proceed without reading the instructions.</p>
</body>
</html>
```

### Superscript and Subscript (`<sup>`, `<sub>`)

*   `<sup>`: Renders text as superscript (raised above the baseline).
*   `<sub>`: Renders text as subscript (lowered below the baseline).

**Use cases:** Mathematical formulas, chemical formulas, footnotes.

**Detailed Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Superscript & Subscript</title>
</head>
<body>
    <p>The chemical formula for water is H<sub>2</sub>O.</p>
    <p>In mathematics, E = mc<sup>2</sup>.</p>
    <p>This is a footnote reference.<sup>[1]</sup></p>
</body>
</html>
```

### Quotation Elements (`<blockquote>`, `<q>`, `<cite>`)

*   `<blockquote>`: For long, block-level quotations (often indented by default).
*   `cite` attribute (on `<blockquote>` or `<q>`): Provides the URL of the source.
*   `<q>`: For shorter, inline quotations.
*   `<cite>`: For the title of a creative work (e.g., book, movie, song).

**Detailed Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Quotations</title>
</head>
<body>
    <p>As Shakespeare famously wrote in <cite>Hamlet</cite>:</p>
    <blockquote cite="https://www.folger.edu/explore/shakespeares-works/hamlet/read/">
      <p>To be, or not to be, that is the question:</p>
      <p>Whether 'tis nobler in the mind to suffer</p>
      <p>The slings and arrows of outrageous fortune,</p>
      <p>Or to take Arms against a Sea of troubles,</p>
      <p>And by opposing end them: to die, to sleep;</p>
    </blockquote>
    <p>My friend often says <q cite="https://example.com/friend-quote">"Always code with a smile."</q> and I find it inspiring.</p>
</body>
</html>
```

### Semantic Text Elements (HTML5 additions/improvements)

HTML5 introduced many elements to give more meaning (semantics) to your content, improving accessibility and SEO.

*   `<mark>`: Represents text highlighted for reference or notation purposes.
*   `<time>`: Represents a specific period in time (with optional `datetime` attribute for machine-readable format).
*   `<abbr>`: Represents an abbreviation or acronym (with optional `title` attribute for the full form).

**Detailed Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Semantic Text</title>
</head>
<body>
    <p>Please <mark>note</mark> the updated meeting time.</p>
    <p>The event is scheduled for <time datetime="2025-07-28T18:00">July 28th at 6 PM</time>.</p>
    <p>The <abbr title="HyperText Markup Language">HTML</abbr> course is fantastic!</p>
</body>
</html>
```

### Exercise: Create a Short Blog Post

1.  Create an HTML file `blog_post.html`.
2.  Add a main title (`<h1>`) for your blog post.
3.  Include an author's name (`<p>`) and publication date using the `<time>` tag.
4.  Write a few paragraphs about a topic you like.
5.  Use `<strong>` for important keywords and `<em>` for emphasis.
6.  Include a `<blockquote>` with a famous quote, citing the author.
7.  Add a horizontal rule (`<hr>`) to separate sections.
8.  Use `<mark>` to highlight a key phrase.

### Helpful Links:

*   [MDN Web Docs: HTML text fundamentals](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals)
*   [HTML Semantic Elements (W3Schools)](https://www.w3schools.com/html/html5_semantic_elements.asp)
