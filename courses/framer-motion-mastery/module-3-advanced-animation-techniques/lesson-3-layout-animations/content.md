# Lesson 3: Layout Animations

Layout animations allow you to animate elements when their layout changes. This is useful for creating smooth transitions when elements are added, removed, or reordered.

## The `layout` Prop

To enable layout animations, add the `layout` prop to a `motion` component.

```javascript
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      layout
      className="card"
      onClick={() => setIsOpen(!isOpen)}
    >
      <motion.h2 layout>Framer Motion</motion.h2>
      {isOpen && (
        <motion.div layout>
          <p>
            Framer Motion is a powerful animation library for React.
          </p>
          <p>
            It makes it easy to create beautiful, interactive animations.
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}

export default App;
```

And add the following styles to `src/App.css`:

```css
.card {
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
  cursor: pointer;
}
```

In this example, when you click on the card, it expands to reveal more content. The `layout` prop ensures that the changes in layout are animated smoothly.

## AnimatePresence

The `AnimatePresence` component allows you to animate components as they are added to or removed from the React tree.

```javascript
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="App">
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'}
      </button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="box"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
```

This concludes our course on Mastering Framer Motion. You now have the skills to create beautiful, interactive animations in your React applications.
