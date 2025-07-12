<iframe width="560" height="315" src="https://www.youtube.com/embed/jB-jei95OaE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Objective:** To define the shape of objects using type aliases and interfaces.

**Topics:**

*   Typing object literals.
*   Optional properties (`?`) and `readonly` properties.
*   Type Aliases with the `type` keyword.
*   Interfaces with the `interface` keyword.
*   `type` vs. `interface`: Key differences and when to use each.
*   Extending interfaces and types.

**Example (Using an Interface):**

```typescript
interface User {
  readonly id: number;
  username: string;
  email: string;
  isAdmin?: boolean; // Optional property
}

const user: User = {
  id: 1,
  username: 'dave',
  email: 'dave@example.com'
};
```

**Practice Problem:**
Create a type alias named `Product` that defines the shape of a product object. It should have a `name` (string), `price` (number), and an optional `description` (string).
