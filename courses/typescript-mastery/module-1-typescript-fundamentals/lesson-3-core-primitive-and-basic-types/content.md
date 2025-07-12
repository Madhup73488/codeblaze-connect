<iframe width="560" height="315" src="https://www.youtube.com/embed/H91_K_v4-UI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Objective:** To learn and use TypeScript's fundamental types to annotate variables.

**Topics:**

*   Primitives: `string`, `number`, `boolean`.
*   Arrays: `number[]` or `Array<number>`.
*   `any`: The escape hatch (use sparingly).
*   `unknown`: A safer alternative to `any`.
*   Tuples: Arrays with a fixed number of elements and known types.
*   Enums: A way of giving more friendly names to sets of numeric values.

**Example (Type Annotations):**

```typescript
let framework: string = 'Next.js';
let version: number = 14;
let isAwesome: boolean = true;
let features: string[] = ['Server Components', 'App Router'];
let userProfile: [string, number] = ['JohnDoe', 30]; // A tuple for username and age
```

**Practice Problem:**
Declare variables for the following: a product name (string), its price (number), whether it's in stock (boolean), and a list of available sizes (an array of strings).
