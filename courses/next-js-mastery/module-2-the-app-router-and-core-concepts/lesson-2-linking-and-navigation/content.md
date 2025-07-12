# Lesson 2: Linking and Navigation

<iframe width="560" height="315" src="https://www.youtube.com/embed/vS1_N_2za6U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Objective:** To implement client-side navigation between pages without a full-page refresh.

**Topics:**

*   The `<Link>` component for declarative navigation.
*   The `useRouter` hook for programmatic navigation.
*   Understanding the loading state with `loading.js`.
*   Handling errors with `error.js`.

**Example (Using the Link component):**

```javascript
import Link from 'next/link';

function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about">Go to About Page</Link>
    </div>
  );
}
```

**Practice Problem:**
On your homepage, add two links: one to `/dashboard` and another to `/profile`. Then, on the `/profile` page, add a button that, when clicked, programmatically navigates the user back to the homepage.
