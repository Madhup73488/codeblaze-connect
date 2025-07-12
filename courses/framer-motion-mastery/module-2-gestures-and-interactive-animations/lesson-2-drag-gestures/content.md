# Lesson 2: Drag Gestures

In this lesson, we'll learn how to create draggable elements with Framer Motion. This is a powerful feature for creating interactive interfaces.

## Making an Element Draggable

To make an element draggable, simply add the `drag` prop to a `motion` component.

```javascript
import React from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  return (
    <div className="App">
      <motion.div
        className="box"
        drag
      />
    </div>
  );
}

export default App;
```

With this simple change, the box is now draggable. You can click and drag it around the screen.

## Drag Constraints

You can constrain the drag area using the `dragConstraints` prop. This is useful for keeping draggable elements within a specific area.

```javascript
<motion.div
  className="box"
  drag
  dragConstraints={{
    top: -50,
    left: -50,
    right: 50,
    bottom: 50,
  }}
/>
```

This will constrain the box to a 100x100 area around its starting position.

You can also pass a `ref` to another element to constrain the drag area to that element's bounding box.

```javascript
import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  const constraintsRef = useRef(null);

  return (
    <motion.div className="App" ref={constraintsRef}>
      <motion.div
        className="box"
        drag
        dragConstraints={constraintsRef}
      />
    </motion.div>
  );
}

export default App;
```

## Drag Elasticity

The `dragElastic` prop controls how much the element can be dragged outside of its constraints.

```javascript
<motion.div
  className="box"
  drag
  dragConstraints={{ left: 0, right: 300 }}
  dragElastic={0.2}
/>
```

A value of `0` means the element is completely constrained, while a value of `1` means it can be dragged freely.

In the next lesson, we'll cover more advanced topics like animation controls and variants.
