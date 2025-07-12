# Lesson 2: Animation Controls

In this lesson, we'll learn how to use animation controls to create more complex, imperative animations. Animation controls allow you to start, stop, and sequence animations in response to user input or other events.

## The `useAnimation` Hook

The `useAnimation` hook provides a set of controls that you can use to manually start and stop animations.

```javascript
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import './App.css';

function App() {
  const controls = useAnimation();

  return (
    <div className="App">
      <button onClick={() => controls.start({ rotate: 360 })}>
        Animate
      </button>
      <motion.div
        className="box"
        animate={controls}
      />
    </div>
  );
}

export default App;
```

In this example, we create a set of animation controls using the `useAnimation` hook. When the button is clicked, we call `controls.start()` to begin the animation.

## Sequencing Animations

You can use `async` and `await` to sequence animations.

```javascript
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import './App.css';

function App() {
  const controls = useAnimation();

  const sequence = async () => {
    await controls.start({ x: 200, transition: { duration: 1 } });
    await controls.start({ y: 200, transition: { duration: 1 } });
    await controls.start({ x: 0, transition: { duration: 1 } });
    await controls.start({ y: 0, transition: { duration: 1 } });
  };

  return (
    <div className="App">
      <button onClick={sequence}>
        Start Sequence
      </button>
      <motion.div
        className="box"
        animate={controls}
      />
    </div>
  );
}

export default App;
```

This will create a sequence of animations that move the box in a square.

In the next lesson, we'll learn about layout animations and how to animate elements when their layout changes.
