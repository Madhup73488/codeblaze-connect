<iframe width="560" height="315" src="https://www.youtube.com/embed/S5e64c9Vw_A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Objective:** To combine existing types to create new, more flexible types.

**Topics:**

*   Union Types (`|`): Allowing a variable to be one of several types.
*   Working with union types (narrowing).
*   Intersection Types (`&`): Combining multiple types into one.

**Example (Union and Intersection):**

```typescript
// Union Type
function printId(id: number | string) {
  // We need to narrow the type before using methods specific to string or number
  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

// Intersection Type
type Draggable = { drag: () => void; };
type Resizable = { resize: () => void; };
type UIWidget = Draggable & Resizable; // Must have both drag and resize methods

let widget: UIWidget = {
  drag: () => console.log('Dragging...'),
  resize: () => console.log('Resizing...')
};
```

**Practice Problem:**
Create a function `logStatus` that accepts a `status` parameter. The status can be one of the following literal strings: "pending", "processing", or "complete". Use a union type for the parameter.
