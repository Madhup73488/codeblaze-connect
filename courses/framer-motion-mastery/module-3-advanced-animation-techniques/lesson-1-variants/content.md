# Lesson 1: Variants

Variants are a powerful way to create complex, reusable animations with Framer Motion. They allow you to define a set of animation states and transition between them.

## Creating Variants

A variant is an object that defines a set of animation properties. You can create variants for different states, such as `visible` and `hidden`.

```javascript
const list = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
}

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
}
```

## Using Variants

You can use variants with the `variants` and `initial` / `animate` props.

```javascript
import React from 'react';
import { motion } from 'framer-motion';
import './App.css';

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
}

const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
}

function App() {
  return (
    <motion.ul
      className="list"
      initial="hidden"
      animate="visible"
      variants={list}
    >
      <motion.li variants={item} />
      <motion.li variants={item} />
      <motion.li variants={item} />
    </motion.ul>
  );
}

export default App;
```

And add the following styles to `src/App.css`:

```css
.list {
  list-style: none;
  padding: 0;
}

.list li {
  padding: 20px;
  margin: 10px;
  background-color: #6a0dad;
  border-radius: 10px;
}
```

In this example, the `ul` element and its `li` children are animated using variants. The `staggerChildren` property creates a staggered animation effect, where each `li` element animates in one after the other.

In the next lesson, we'll learn about animation controls and how to create more complex, imperative animations.
