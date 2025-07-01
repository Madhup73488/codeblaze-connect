### The `<iframe>` Element

Used to embed another HTML document within the current HTML document. It creates an inline frame.

**Use cases:** Embedding YouTube videos, Google Maps, advertisements, or other external content.

**Security Concerns:** Be cautious when embedding content from untrusted sources, as iframes can pose security risks (e.g., clickjacking). Use the `sandbox` attribute for added security.

**Attributes:**
*   `src`: The URL of the document to embed.
*   `width`, `height`: Dimensions of the iframe.
*   `frameborder`: (Deprecated) Use CSS for borders.
*   `allowfullscreen`: Allows the iframe content to go full screen (e.g., YouTube videos).
*   `loading="lazy"`: (HTML5) Defers loading of the iframe until it reaches a calculated distance from the viewport.
*   `sandbox`: Enables a set of extra restrictions on the content in the iframe (e.g., `allow-scripts`, `allow-same-origin`, `allow-popups`).

**Detailed Example: Embedding a YouTube Video**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Embedding Videos with Iframe</title>
    <style>
        iframe {
            width: 100%;
            max-width: 800px;
            height: 450px; /* Common aspect ratio for videos (16:9) */
            border: 1px solid #ccc;
            border-radius: 8px;
            display: block;
            margin: 20px auto;
        }
    </style>
</head>
<body>
    <h1>Embedded YouTube Video</h1>
    <iframe
        src="https://www.youtube.com/embed/dQw4w9WgXcQ" <!-- Replace with a real YouTube embed URL -->
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen>
    </iframe>

    <h2>Embedded Google Map</h2>
    <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.005186358155!2d77.58784827599025!3d12.971598714652254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba0583b28b7e211%3A0xa1b8a53b544b6f1!2sVidhana%20Soudha!5e0!3m2!1sen!2sin!4v1719581977931!5m2!1sen!2sin"
        width="600"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
    </iframe>
</body>
</html>
```
**Explanation:** YouTube and Google Maps provide specific embed codes with pre-configured `src` and other attributes. The `sandbox` attribute is recommended for untrusted content.

### The `<embed>` Element (Generic Embedding)

A generic container for embedding external content, often used for vector graphics (.svg), PDFs, or other media types that browsers can render.

**Attributes:** `src`, `type`, `width`, `height`.

**Detailed Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Embed Element</title>
    <style>
        embed {
            display: block;
            margin: 20px auto;
            border: 1px solid #ccc;
            border-radius: 8px;
        }
    </style>
</head>
<body>
    <h1>Embedded PDF Document</h1>
    <embed src="sample.pdf" type="application/pdf" width="600" height="400">
    <p>Your browser may display an embedded PDF viewer if it supports PDF embedding.</p>
</body>
</html>
```

### The `<object>` Element (Generic Embedding with Fallback)

Similar to `<embed>`, but offers better fallback content for browsers that don't support the embedded content type.

**Attributes:** `data` (URL of content), `type`, `width`, `height`.

**Detailed Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Object Element</title>
    <style>
        object {
            display: block;
            margin: 20px auto;
            border: 1px solid #ccc;
            border-radius: 8px;
        }
    </style>
</head>
<body>
    <h1>Embedded SVG Image with Fallback</h1>
    <object data="image/logo.svg" type="image/svg+xml" width="200" height="200">
        <img src="https://placehold.co/200x200?text=SVG+Fallback" alt="Fallback image for SVG">
    </object>
    <p>If your browser supports SVG, you will see the vector graphic. Otherwise, a fallback image.</p>
</body>
</html>
```

### Exercise: Create a Dashboard with Embedded Content

1.  Create an HTML file `dashboard.html`.
2.  Embed a YouTube video related to web development using an `<iframe>`.
3.  Embed a Google Map showing a famous landmark using an `<iframe>`.
4.  (Optional) If you have a sample PDF, try embedding it using `<embed>` or `<object>`.
5.  (Optional) Try embedding an SVG file using `<object>` with an `<img>` fallback.

### Helpful Links:

*   [MDN Web Docs: The Iframe element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)
*   [YouTube Embed Developer Guide](https://developers.google.com/youtube/player_parameters)
*   [Google Maps Embed API](https://developers.google.com/maps/documentation/embed/get-started)
