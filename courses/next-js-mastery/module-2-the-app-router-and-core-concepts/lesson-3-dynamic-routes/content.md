# Lesson 3: Dynamic Routes

<iframe width="560" height="315" src="https://www.youtube.com/embed/F4tAAlj4i7U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Objective:** To create pages that render content based on dynamic parameters in the URL.

**Topics:**

*   Creating dynamic route segments with brackets (e.g., `[slug]`).
*   Accessing route parameters in your page component.
*   Generating static paths with `generateStaticParams`.
*   Catch-all and optional catch-all routes.

**Example (app/posts/[slug]/page.js):**

```javascript
// This component will render for URLs like /posts/hello-world
export default function PostPage({ params }) {
  return <div>My Post: {params.slug}</div>;
}
```

**Practice Problem:**
Create a dynamic route for user profiles at `/users/[username]`. The page should display the username from the URL, for example: "Viewing profile for: janesmith".
