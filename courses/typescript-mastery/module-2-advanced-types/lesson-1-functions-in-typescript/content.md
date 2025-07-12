<iframe width="560" height="315" src="https://www.youtube.com/embed/g1G4N0s4-bM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Objective:** To properly type function parameters, return values, and function expressions.

**Topics:**

*   Typing function parameters.
*   Specifying return types.
*   Type inference for return values.
*   Optional and default parameters.
*   Typing function expressions and arrow functions.
*   The `void` and `never` return types.

**Example (Typing a Function):**

```typescript
// This function takes a string and number, and returns a string.
function createProductLabel(name: string, price: number): string {
  return `${name} - $${price.toFixed(2)}`;
}

// Arrow function syntax
const greet = (name: string): void => {
  console.log(`Hello, ${name}`);
};
```

**Practice Problem:**
Write a function named `calculateTotalPrice` that takes two arguments: `price` (a number) and `quantity` (a number). It should return the total price. Make sure to type the parameters and the return value.
