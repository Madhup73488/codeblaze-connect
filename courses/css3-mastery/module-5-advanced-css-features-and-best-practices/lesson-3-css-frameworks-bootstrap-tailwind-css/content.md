### What are Frameworks?
Libraries of pre-written, reusable CSS. They provide a standardized grid system and components to accelerate development.

### Bootstrap (Component-based)
**Concept:** Provides a library of ready-to-use components like navbars, buttons, cards, and carousels, which you assemble using specific classes.

**Example:**
```html
<button class="btn btn-primary">Primary Button</button>

<div class="row">
  <div class="col-md-6 col-lg-4">...</div>
  <div class="col-md-6 col-lg-4">...</div>
</div>
```
*   **Pros:** Quick prototyping, consistent design, large community.
*   **Cons:** "Bootstrap-y" look, can be bloated with unused CSS.

### Tailwind CSS (Utility-first)
**Concept:** Provides a massive set of low-level utility classes (e.g., `flex`, `pt-4`, `text-center`) that you compose directly in your HTML to build custom designs.

**Example:**
```html
<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
  Utility Button
</button>

<div class="flex flex-col md:flex-row space-x-4">
  <div class="w-1/2">...</div>
  <div class="w-1/2">...</div>
</div>
```
*   **Pros:** Highly customizable, small final file size (when optimized), no bloated components.
*   **Cons:** Can lead to very long class lists in HTML, requires a build tool.

### Choosing a Framework
*   **Bootstrap:** Choose if you need to build a prototype quickly, want a pre-designed component library, or are working with a legacy project.
*   **Tailwind:** Choose if you need a highly custom design, want to build from scratch, and are comfortable with a build process.

### Exercise: Recreate Your Profile Card with a Framework
1.  Choose either Bootstrap or Tailwind CSS.
2.  Set up the framework (via CDN for simplicity).
3.  Recreate your styled profile card from Lesson 2.2 using only the framework's utility or component classes. Observe how much less CSS you need to write yourself.

### Helpful Links:
*   [Bootstrap Official Documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
*   [Tailwind CSS Official Documentation](https://tailwindcss.com/docs)
*   [Comparing Utility-First and Component Frameworks](https://www.youtube.com/watch?v=k-h2Qd6a6-Y)
