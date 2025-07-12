# Lesson 1: Hover and Tap Gestures

In this lesson, we'll explore how to make our animations interactive by responding to user gestures like hover and tap.

## Hover Gestures

Framer Motion makes it easy to add hover animations. You can use the `whileHover` prop to define animations that trigger when the user hovers over an element.

Update `src/App.js` with the following code:

```javascript
import React from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  return (
    <div className="App">
      <motion.div
        className="box"
        initial={{ opacity: 0.6 }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.9 }}
      />
    </div>
  );
}

export default App;
```

Now, when you hover over the box, it will scale up to 1.2 times its original size.

## Tap Gestures

Similarly, you can use the `whileTap` prop to add animations that trigger when the user clicks or taps on an element.

In the example above, we've also added a `whileTap` prop. When you click on the box, it will scale down to 0.9 times its original size, creating a satisfying press effect.

## Combining Gestures

You can combine gestures with other animations to create rich, interactive experiences.

```javascript
<motion.button
  className="button"
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
>
  Click Me
</motion.button>
```

And add the following styles to `src/App.css`:

```css
.button {
  background-color: #8a2be2;
  color: white;
  padding: 15px 30px;
  border: none;
  border-radius: 10px;
  font-size: 1.2rem;
  cursor: pointer;
}
```

This creates a button that scales up on hover and scales down on tap, providing clear visual feedback to the user.

In the next lesson, we'll explore drag gestures and how to create draggable elements.
