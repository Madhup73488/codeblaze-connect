<iframe width="560" height="315" src="https://www.youtube.com/embed/3Y_S_4p_b2I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Objective:** To master building complex, responsive layouts using Tailwind's Flexbox and Grid utilities.

**Topics:**

*   Flexbox: `flex`, `flex-row`, `flex-col`, `items-center`, `justify-between`, `flex-wrap`, `flex-grow`, `flex-shrink`.
*   Grid: `grid`, `grid-cols-*`, `grid-rows-*`, `gap-*`, `col-span-*`, `row-span-*`.
*   Choosing between Flexbox and Grid.

**Example (A 3-column grid):**

```html
<div class="grid grid-cols-3 gap-4">
  <div class="bg-sky-200 p-4">Item 1</div>
  <div class="bg-sky-200 p-4">Item 2</div>
  <div class="bg-sky-200 p-4">Item 3</div>
  <div class="col-span-2 bg-sky-400 p-4">Item 4 (spans 2 columns)</div>
  <div class="bg-sky-200 p-4">Item 5</div>
</div>
```

**Practice Problem:**
Using Flexbox, create a header component with a logo on the far left and a navigation menu on the far right. The header should be vertically centered.
