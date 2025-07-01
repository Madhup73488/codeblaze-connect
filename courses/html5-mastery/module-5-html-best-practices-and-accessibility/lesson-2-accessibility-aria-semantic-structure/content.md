### What is Web Accessibility (A11y)?

Web accessibility means designing and developing websites so that people with disabilities can perceive, understand, navigate, and interact with the Web. This includes people with visual, auditory, physical, speech, cognitive, and neurological disabilities.

HTML plays a crucial role in A11y by providing the semantic structure that assistive technologies (like screen readers) rely on.

### Semantic HTML and A11y (Recap)

Using appropriate semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<aside>`, `<footer>`, etc.) is the first and most important step towards accessibility. They convey meaning that `<div>`s cannot.

**Example:** A screen reader can jump directly to the `<main>` content or the `<nav>`igation, rather than having to parse many generic `<div>`s.

### Image Alt Text (`alt` attribute)

As discussed in Lesson 1.3, the `alt` attribute on `<img>` tags is vital. It provides a text alternative for images, which is read by screen readers.

**Good vs. Bad Alt Text:**
*   **Bad:** `<img src="dog.jpg" alt="picture">`
*   **Good:** `<img src="golden-retriever.jpg" alt="A golden retriever playing fetch in a park.">`

For decorative images, `alt=""` is appropriate to hide them from screen readers.

### Form Labels (`<label>`)

As discussed in Lesson 3.1, associating labels with inputs using `for` and `id` attributes is critical for accessibility.

**Example:** Clicking the label text should focus the input.

### ARIA (Accessible Rich Internet Applications) Roles and Attributes

ARIA attributes provide extra semantic meaning to elements that HTML might not inherently support, especially for dynamic or custom UI components (like custom tabs, accordions, or sliders built with divs and JavaScript).

*   **`role` attribute:** Defines what an element is or does.
    *   `role="button"`, `role="navigation"`, `role="alert"`.
*   **`aria-label`:** Provides a label for an element when no visible text is available.
*   **`aria-describedby`:** Points to the ID of an element that describes the current element.
*   **`aria-labelledby`:** Points to the ID of an element that labels the current element.
*   **`aria-haspopup`:** Indicates that an element has a popup context menu or sub-level menu.
*   **`aria-expanded`:** Indicates whether a collapsible region is expanded or collapsed.

**Rule of Thumb:** "First rule of ARIA is to not use ARIA." Use native HTML elements whenever possible, as they have built-in accessibility. Only use ARIA when native HTML doesn't provide the necessary semantics.

**Detailed Example (Custom Button with ARIA):**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>ARIA Example</title>
</head>
<body>
    <h1>Accessible Button</h1>
    <!-- Bad: A div acting as a button -->
    <div onclick="alert('Clicked!');" style="padding: 10px; border: 1px solid black; cursor: pointer;">Click Me</div>

    <hr>

    <!-- Good: A div acting as a button, with ARIA -->
    <div role="button" tabindex="0" aria-label="Dismiss notification"
         onclick="alert('Accessible Clicked!');"
         onkeypress="if(event.key === 'Enter' || event.key === ' '){ this.click(); }"
         style="padding: 10px; border: 1px solid blue; cursor: pointer;">
        Dismiss (Accessible)
    </div>
    <p>The second button is made accessible with `role="button"`, `tabindex="0"` (to make it focusable), `aria-label`, and keyboard event handling.</p>
</body>
</html>
```
**Explanation:** The `role="button"` tells screen readers it's a button. `tabindex="0"` makes it keyboard focusable. `aria-label` provides a label. The `onkeypress` makes it trigger on Enter/Space.

### Keyboard Navigation (`tabindex`)

*   `tabindex="0"`: Makes an element focusable in the natural tab order.
*   `tabindex="-1"`: Makes an element focusable programmatically (e.g., via JavaScript `element.focus()`) but not via keyboard tabbing.
*   `tabindex="positive number"`: (Avoid) Changes the natural tab order, making maintenance difficult.

Always ensure all interactive elements (`button`, `a`, `input`, `select`) are keyboard focusable and have clear focus indicators (CSS `:focus` style).

### Exercise: Make an Image Carousel Accessible (Conceptual)

Imagine you have a custom image carousel built entirely with `divs` (no `<button>` or `<a>` for navigation).

For the "next" and "previous" arrows (which are currently `divs`):
1.  Add `role="button"` to each.
2.  Add `tabindex="0"` to each.
3.  Add `aria-label="Next Image"` and `aria-label="Previous Image"`.
4.  (Mental exercise for JS part) Consider how you would add `onkeypress` handlers to trigger the click on Enter/Space.

For the dots indicating the current slide:
1.  Add `role="radio"` to each.
2.  Add `aria-checked="true"` for the active dot and `aria-checked="false"` for others.
3.  Add `aria-label` for each dot (e.g., "Go to slide 1").

### Helpful Links:

*   [WebAIM: Introduction to Web Accessibility](https://webaim.org/intro/)
*   [MDN Web Docs: ARIA Basics](https://developer.mozilla.org/en-US/docs/Learn/Accessibility/ARIA)
*   [A11y Project](https://www.a11yproject.com/)
