<iframe width="560" height="315" src="https://www.youtube.com/embed/pfaSUYaSgPo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Objective:** To control the layout, dimensions, and spacing of elements using Tailwind's core utilities.

**Topics:**

*   The Box Model: Margin (`m-`), Padding (`p-`), and Space Between (`space-x-`, `space-y-`).
*   Sizing: Width (`w-`) and Height (`h-`) (fixed, percentage, and viewport units).
*   Layout: `display` (block, inline-block, flex, grid), `position`, `top/right/bottom/left`, and `z-index`.

**Example (A simple card layout):**

```html
<!-- A card with padding, a fixed width, and margin for centering -->
<div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg">
  <h2 class="text-2xl font-bold">Card Title</h2>
  <p class="mt-2 text-gray-500">This card has padding, a max-width, and is centered.</p>
</div>
```

**Practice Problem:**
Create a container div that is centered on the page and has a maximum width. Inside it, place two boxes side-by-side with a small gap between them.
