# Lesson 3: Scroll-Triggered Animations

In this lesson, we'll learn how to create animations that are triggered by scrolling. This is a common effect on modern websites, and Framer Motion makes it easy to implement.

## The `whileInView` Prop

The `whileInView` prop allows you to trigger an animation when an element enters the viewport.

```javascript
import React from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  return (
    <>
      <div style={{ height: '150vh' }} />
      <motion.div
        className="box"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      />
      <div style={{ height: '150vh' }} />
    </>
  );
}

export default App;
```

In this example, the box will be hidden and slightly below its final position. When you scroll down and the box enters the viewport, it will fade in and slide up into place.

## Viewport Options

You can customize the `whileInView` behavior with the `viewport` prop.

```javascript
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, amount: 0.8 }}
/>
```

-   `once: true`: The animation will only trigger once. If you scroll past the element and then back to it, the animation will not repeat.
-   `amount: 0.8`: The animation will trigger when 80% of the element is in the viewport.

## useScroll Hook

For more complex scroll-based animations, you can use the `useScroll` hook. This hook returns the scroll progress of the page or a specific element.

```javascript
import { motion, useScroll } from 'framer-motion';

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div style={{ scaleX: scrollYProgress }} className="progress-bar" />
  );
}
```

And add the following styles to `src/App.css`:

```css
.progress-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 10px;
  background: #6a0dad;
  transform-origin: 0%;
}
```

This will create a progress bar at the top of the page that fills up as you scroll down.

This concludes our module on gestures and interactive animations. In the next module, we'll explore advanced animation techniques.
