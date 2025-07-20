

In this lesson, you'll learn how to manage component state with the `useState` hook and handle user events.

## The `useState` Hook

The `useState` hook is a function that lets you add React state to function components.

```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

## Event Handling

React elements can handle events with a syntax similar to HTML.

```javascript
<button onClick={handleClick}>
  Click me
</button>
