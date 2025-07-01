### The Essential HTML5 Boilerplate (Recap and Deep Dive)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge"> <!-- For older IE compatibility -->
    <title>My Awesome Website</title>
    <meta name="description" content="A brief description of my website for search engines.">
    <meta name="keywords" content="html5, css3, javascript, web development">
    <meta name="author" content="Your Name">

    <!-- Open Graph / Social Media Meta Tags -->
    <meta property="og:title" content="My Awesome Website">
    <meta property="og:description" content="A brief description of my website for social sharing.">
    <meta property="og:image" content="https://example.com/share-image.jpg">
    <meta property="og:url" content="https://example.com">
    <meta property="og:type" content="website">

    <!-- Favicon -->
    <link rel="icon" type="image/png" href="/favicon.png">

    <!-- Link to your CSS file -->
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <!-- Your main content goes here -->
    <header>
        <h1>Welcome!</h1>
    </header>
    <main>
        <p>This is the content of the page.</p>
    </main>
    <footer>
        <p>&copy; 2025 Your Name</p>
    </footer>

    <!-- Link to your JavaScript file, 'defer' is often best practice -->
    <script src="js/script.js" defer></script>
</body>
</html>
```
**Explanation:** This includes more advanced meta tags for SEO (description, keywords, author), social media sharing (og: tags for Open Graph), and a favicon.

### Other Important Meta Tags (SEO and Social Media)

*   `meta name="description"`: A short, accurate summary of the page's content for search engine results.
*   `meta name="keywords"`: (Less important now for SEO, but still used sometimes) keywords relevant to the page.
*   `meta name="author"`: The author of the document.
*   **Open Graph (`og:`) Tags:** Used by social media platforms (Facebook, Twitter, LinkedIn) to display rich previews when your page is shared.
    *   `og:title`, `og:description`, `og:image`, `og:url`, `og:type`.
*   **Favicon:** The small icon displayed in the browser tab.
    *   `<link rel="icon" type="image/png" href="/favicon.png">`

### Exercise: Create a Standard HTML Template

1.  Create a new file `template.html`.
2.  Include the full modern HTML5 boilerplate, including all meta tags discussed.
3.  Fill in placeholder values for `title`, `description`, `author`, and Open Graph tags.
4.  Keep this file as a starting point for all your future HTML projects.

### Helpful Links:

*   [MDN Web Docs: The Head of an HTML document](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)
*   [Open Graph Protocol](https://ogp.me/)
*   [Favicon Generator](https://realfavicongenerator.net/)
