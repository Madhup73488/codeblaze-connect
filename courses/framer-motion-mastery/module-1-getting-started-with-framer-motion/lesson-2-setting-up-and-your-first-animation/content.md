# Lesson 2: Setting Up and Your First Animation

Welcome to the second lesson of our Framer Motion series. In this lesson, we'll set up a new React project and create our very first animation using Framer Motion.

## Setting Up a React Project

First, let's create a new React project using Create React App. If you don't have it installed, you can run the following command:

```bash
npx create-react-app framer-motion-tutorial
cd framer-motion-tutorial
```

## Installing Framer Motion

Next, we need to install Framer Motion. You can do this by running the following command in your project's root directory:

```bash
npm install framer-motion
```

## Creating Your First Animation

Now that we have our project set up and Framer Motion installed, let's create a simple animation.

1.  **Open `src/App.js`**: Replace the existing code with the following:

    ```javascript
    import React from 'react';
    import { motion } from 'framer-motion';
    import './App.css';

    function App() {
      return (
        <div className="App">
          <motion.div
            className="box"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      );
    }

    export default App;
    ```

2.  **Create `src/App.css`**: Create a new file `src/App.css` and add the following styles:

    ```css
    .App {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }

    .box {
      width: 150px;
      height: 150px;
      background-color: #6a0dad;
      border-radius: 20px;
    }
    ```

3.  **Run the App**: Start your React application by running:

    ```bash
    npm start
    ```

You should now see a purple box that animates in when the page loads. Congratulations, you've created your first animation with Framer Motion!

In the next lesson, we'll explore more animation properties and learn how to create more complex animations.
