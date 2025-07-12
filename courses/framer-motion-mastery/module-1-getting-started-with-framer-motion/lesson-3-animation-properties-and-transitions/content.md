# Lesson 3: Animation Properties and Transitions

In this lesson, we'll dive deeper into Framer Motion's animation capabilities. We'll explore various animation properties and learn how to customize transitions to create more sophisticated animations.

## Exploring Animation Properties

Framer Motion provides a wide range of animatable properties. Let's expand on our previous example to include more properties.

Update your `src/App.js` file with the following code:

```javascript
import React from 'react';
import { motion } from 'framer-motion';
import './App.css';

function App() {
  return (
    <div className="App">
      <motion.div
        className="box"
        initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
        animate={{ opacity: 1, scale: 1, rotate: 360 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
}

export default App;
```

In this example, we've added the `rotate` property to our animation. The box will now rotate 360 degrees as it scales and fades in.

## Customizing Transitions

The `transition` property allows you to customize the timing and easing of your animations. Let's explore some of the options.

### Easing

Easing functions specify the rate of change of a parameter over time. Framer Motion provides several built-in easing functions.

```javascript
<motion.div
  className="box"
  initial={{ x: -500 }}
  animate={{ x: 0 }}
  transition={{ ease: "easeOut", duration: 1 }}
/>
```

In this example, the box will slide in from the left with an "easeOut" easing function, which causes the animation to slow down as it reaches its end.

### Spring Animations

For more natural-looking animations, you can use a `spring` transition.

```javascript
<motion.div
  className="box"
  initial={{ scale: 0 }}
  animate={{ scale: 1 }}
  transition={{ type: "spring", stiffness: 260, damping: 20 }}
/>
```

This will create a bouncy, spring-like animation. You can adjust the `stiffness` and `damping` to control the behavior of the spring.

### Keyframes

You can also define a sequence of values to animate through using keyframes.

```javascript
<motion.div
  className="box"
  animate={{
    scale: [1, 2, 2, 1, 1],
    rotate: [0, 0, 270, 270, 0],
    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
  }}
  transition={{
    duration: 2,
    ease: "easeInOut",
    times: [0, 0.2, 0.5, 0.8, 1],
    loop: Infinity,
    repeatDelay: 1
  }}
/>
```

This will create a complex, looping animation where the box changes its scale, rotation, and border-radius over time.

In the next lesson, we'll learn about gestures and how to create interactive animations.
