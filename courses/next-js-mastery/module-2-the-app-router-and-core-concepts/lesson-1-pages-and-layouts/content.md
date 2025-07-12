# Lesson 1: Pages and Layouts

<iframe width="560" height="315" src="https://www.youtube.com/embed/AK_f3wb21e4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Objective:** Understand how to create routes and shared UI using the App Router's file-based system.

**Topics:**

*   The role of the `app` directory.
*   Creating routes with folders.
*   Defining page UI with `page.js`.
*   Creating shared UI with `layout.js`.
*   Nested layouts and route groups.

**Example (app/dashboard/layout.js):**

```javascript
export default function DashboardLayout({ children }) {
  return (
    <section>
      {/* Include a shared sidebar or header */}
      <nav>Dashboard Navigation</nav>
      {children}
    </section>
  );
}
```

**Practice Problem:**
Create a new route `/blog` in your application. This route should have its own layout that includes a header with the text "My Awesome Blog".
