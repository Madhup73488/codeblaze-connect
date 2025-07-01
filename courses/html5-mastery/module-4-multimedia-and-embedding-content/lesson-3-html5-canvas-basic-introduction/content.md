### Introduction to `<canvas>`

The `<canvas>` element provides an API for drawing 2D graphics and animations on a web page using JavaScript.

It's literally a blank "canvas" where you can draw shapes, text, images, and create interactive animations.

HTML provides the canvas element; JavaScript provides the drawing functionality.

### Basic Canvas Structure

The `<canvas>` element itself is a simple HTML tag with `id`, `width`, and `height` attributes.

The content inside the `<canvas>` tags is fallback content for browsers that don't support canvas.

**Detailed Example: Simple Canvas Setup**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>HTML5 Canvas Basics</title>
    <style>
        canvas {
            border: 1px solid #000;
            background-color: #f8f8f8;
            display: block;
            margin: 20px auto;
            border-radius: 8px;
        }
    </style>
</head>
<body>
    <h1>Drawing on Canvas</h1>
    <canvas id="myCanvas" width="400" height="200">
        Your browser does not support the HTML5 Canvas element.
    </canvas>

    <script>
        // Get the canvas element
        const canvas = document.getElementById('myCanvas');

        // Get the 2D rendering context
        const ctx = canvas.getContext('2d');

        // Check if context is available
        if (ctx) {
            // Draw a red rectangle
            ctx.fillStyle = 'red';        // Set fill color to red
            ctx.fillRect(50, 50, 100, 75); // Draw a rectangle: (x, y, width, height)

            // Draw a blue circle
            ctx.beginPath();              // Start a new path
            ctx.arc(250, 100, 40, 0, 2 * Math.PI); // Draw an arc (circle): (x, y, radius, startAngle, endAngle)
            ctx.fillStyle = 'blue';       // Set fill color to blue
            ctx.fill();                   // Fill the circle

            // Draw some text
            ctx.font = '30px Arial';
            ctx.fillStyle = 'green';
            ctx.fillText('Hello Canvas!', 10, 180); // Draw text: (text, x, y)
        } else {
            console.error("Canvas not supported by this browser.");
        }
    </script>
</body>
</html>
```
**Explanation:** The JavaScript `getContext('2d')` method provides the drawing tools. `fillRect`, `arc`, and `fillText` are examples of drawing commands. This lesson focuses on the HTML part, with a minimal JS example to show capability.

### When to Use Canvas

*   Interactive games.
*   Data visualizations (charts, graphs).
*   Photo editors.
*   Animations.
*   Anything requiring pixel-level control.

### Canvas vs. SVG (Brief Distinction)

*   **Canvas:** Pixel-based, resolution-dependent, better for complex, dynamic graphics and animations (e.g., games).
*   **SVG (Scalable Vector Graphics):** Vector-based, resolution-independent, better for static, scalable graphics (e.g., logos, icons, diagrams).

### Exercise: Draw Your Initials on Canvas

1.  Create an HTML file `my_initials.html`.
2.  Add a `<canvas>` element with an `id` and appropriate `width` and `height`.
3.  In the JavaScript section:
    *   Get the 2D rendering context.
    *   Use `ctx.fillRect()` or `ctx.strokeRect()` to draw rectangles for your initials.
    *   Experiment with `ctx.fillStyle` and `ctx.strokeStyle` for colors.
    *   (Optional) Try `ctx.arc()` for curves or `ctx.lineTo()` for custom paths.

### Helpful Links:

*   [MDN Web Docs: HTML Canvas API](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API)
*   [W3Schools HTML Canvas](https://www.w3schools.com/html/html5_canvas.asp)
*   [HTML5 Canvas Cheat Sheet](https://simon.html5.org/dump/html5-canvas-cheat-sheet.html)
